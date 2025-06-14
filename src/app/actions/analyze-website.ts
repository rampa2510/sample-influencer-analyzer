'use server'

import { headers } from 'next/headers'
import { checkRateLimit } from '@/lib/rate-limiter'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'

const KEYWORDS = [
	"fitness",
	"health",
	"wellness",
	"nutrition",
	"sports",
	"fashion",
	"beauty",
	"makeup",
	"skincare",
	"jewelry",
	"luxury",
	"food",
	"cooking",
	"lifestyle",
	"travel",
	"home",
	"decor",
	"tech",
	"gaming",
	"business",
	"finance",
	"entertainment",
	"music",
	"art",
	"photography",
	"diy",
	"crafts",
	"parenting",
	"education",
	"pets",
	"books",
	"automotive",
	"outdoor",
	"sustainability"
]

type ActionState = {
	error: string
	success?: undefined
	keyword?: undefined
} | {
	success: boolean
	keyword: any
	error?: undefined
} | null

function extractKeyword(text: string): string {
	const lowerText = text.toLowerCase()

	// Find the keyword that appears in the response
	for (const keyword of KEYWORDS) {
		if (lowerText.includes(keyword.toLowerCase())) {
			return keyword
		}
	}

	// Fallback: return the original text if no keyword found
	return text.trim()
}

function isValidUrl(string: string): boolean {
	try {
		new URL(string)
		return true
	} catch (_) {
		return false
	}
}

export async function analyzeWebsite(_: ActionState, formData: FormData) {
	try {
		// Get client IP for rate limiting
		const headersList = await headers()
		const forwardedFor = headersList.get('x-forwarded-for')
		const realIp = headersList.get('x-real-ip')
		const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown'

		// Check rate limit (5 requests per minute per IP)
		const rateLimit = checkRateLimit(clientIp, 5, 60000)

		if (!rateLimit.isAllowed) {
			return {
				error: `Too many requests. Please wait ${Math.ceil((rateLimit.resetTime - Date.now()) / 1000)} seconds before trying again.`
			}
		}

		const websiteUrl = formData.get('websiteUrl') as string

		if (!websiteUrl) {
			return { error: 'Please enter a website URL' }
		}

		if (!isValidUrl(websiteUrl)) {
			return { error: 'Please enter a valid URL (e.g., https://example.com)' }
		}

		if (!GEMINI_API_KEY) {
			return { error: 'Service temporarily unavailable. Please try again later.' }
		}

		const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				contents: [
					{
						parts: [
							{
								text: `Analyze this website: ${websiteUrl}

From this exact list, choose ONLY ONE keyword that best describes the website: [${KEYWORDS.join(',')}]

Return ONLY the single keyword, nothing else. No explanation, no additional text.`
							}
						]
					}
				]
			})
		})

		if (!response.ok) {
			if (response.status === 429) {
				return { error: 'Service is busy. Please try again in a moment.' }
			}
			if (response.status >= 500) {
				return { error: 'Service temporarily unavailable. Please try again later.' }
			}
			return { error: 'Unable to analyze website. Please check the URL and try again.' }
		}

		const data = await response.json()

		if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
			return { error: 'Unable to analyze this website. Please try a different URL.' }
		}

		const rawText = data.candidates[0].content.parts[0]?.text?.trim()

		if (!rawText) {
			return { error: 'Unable to categorize this website. Please try a different URL.' }
		}

		const keyword = extractKeyword(rawText)

		return { success: true, keyword }
	} catch (error) {
		console.error('Analysis error:', error)
		return { error: 'Network error. Please check your connection and try again.' }
	}
}
