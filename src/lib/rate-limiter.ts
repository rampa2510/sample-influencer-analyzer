interface RateLimitEntry {
	count: number
	resetTime: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

export function checkRateLimit(
	identifier: string,
	maxRequests: number = 5,
	windowMs: number = 60000 // 1 minute
): { isAllowed: boolean; remaining: number; resetTime: number } {
	const now = Date.now()
	const entry = rateLimitStore.get(identifier)

	// Clean up expired entries
	if (entry && now > entry.resetTime) {
		rateLimitStore.delete(identifier)
	}

	const currentEntry = rateLimitStore.get(identifier)

	if (!currentEntry) {
		// First request
		rateLimitStore.set(identifier, {
			count: 1,
			resetTime: now + windowMs
		})
		return {
			isAllowed: true,
			remaining: maxRequests - 1,
			resetTime: now + windowMs
		}
	}

	if (currentEntry.count >= maxRequests) {
		return {
			isAllowed: false,
			remaining: 0,
			resetTime: currentEntry.resetTime
		}
	}

	// Increment count
	currentEntry.count++
	rateLimitStore.set(identifier, currentEntry)

	return {
		isAllowed: true,
		remaining: maxRequests - currentEntry.count,
		resetTime: currentEntry.resetTime
	}
}
