export type Platform = 'instagram' | 'youtube' | 'tiktok' | 'bloggers'
export type InfluencerTier = 'nano' | 'micro' | 'macro'

export interface Influencer {
	id: string
	name: string
	handle: string
	platform: Platform
	tier: InfluencerTier
	followers: string
	engagementRate: string
	avgViews?: string
	category: string
	avatar: string
	description: string
	tags: string[]
}

export const influencersDatabase: Influencer[] = [
	// Fitness Influencers
	{
		id: '1',
		name: 'Anna Smith',
		handle: '@stylabvanna',
		platform: 'instagram',
		tier: 'micro',
		followers: '82.4k',
		engagementRate: '4.2%',
		category: 'fitness',
		avatar: '/avatars/anna.jpg',
		description: 'Similar audience demographics to your past successful campaigns.',
		tags: ['Lookalike Match', 'Fashion']
	},
	{
		id: '2',
		name: 'Mike Johnson',
		handle: '@mikefitness',
		platform: 'youtube',
		tier: 'macro',
		followers: '500k',
		engagementRate: '3.8%',
		avgViews: '50k',
		category: 'fitness',
		avatar: '/avatars/mike.jpg',
		description: 'Fitness expert with engaged male audience.',
		tags: ['Workout', 'Nutrition']
	},
	{
		id: '3',
		name: 'Sarah Williams',
		handle: '@sarahfitlife',
		platform: 'tiktok',
		tier: 'nano',
		followers: '8.5k',
		engagementRate: '6.1%',
		category: 'fitness',
		avatar: '/avatars/sarah.jpg',
		description: 'Rising fitness creator with high engagement rates.',
		tags: ['High Engagement', 'Yoga']
	},
	{
		id: '4',
		name: 'James Rodriguez',
		handle: '@jamesfit',
		platform: 'instagram',
		tier: 'macro',
		followers: '850k',
		engagementRate: '3.5%',
		category: 'fitness',
		avatar: '/avatars/james.jpg',
		description: 'CrossFit athlete with strong male demographic.',
		tags: ['CrossFit', 'Strength Training']
	},
	{
		id: '5',
		name: 'Lisa Chen',
		handle: '@lisayoga',
		platform: 'youtube',
		tier: 'micro',
		followers: '120k',
		engagementRate: '5.2%',
		avgViews: '15k',
		category: 'fitness',
		avatar: '/avatars/lisa.jpg',
		description: 'Yoga instructor with highly engaged female audience.',
		tags: ['Yoga', 'Mindfulness']
	},

	// Tech Influencers
	{
		id: '6',
		name: 'Liam Chen',
		handle: '@liamtechreviews',
		platform: 'youtube',
		tier: 'micro',
		followers: '250k',
		engagementRate: '5.1%',
		avgViews: '45k',
		category: 'tech',
		avatar: '/avatars/liam.jpg',
		description: 'Frequently reviews tech gadgets, aligning with your new product category.',
		tags: ['Content Match', 'Tech']
	},
	{
		id: '7',
		name: 'Alex Rodriguez',
		handle: '@techwithalex',
		platform: 'instagram',
		tier: 'micro',
		followers: '95k',
		engagementRate: '4.7%',
		category: 'tech',
		avatar: '/avatars/alex.jpg',
		description: 'Tech enthusiast focusing on mobile and consumer electronics.',
		tags: ['Mobile Tech', 'Reviews']
	},
	{
		id: '8',
		name: 'Sophie Kim',
		handle: '@sophietech',
		platform: 'tiktok',
		tier: 'nano',
		followers: '15k',
		engagementRate: '8.3%',
		category: 'tech',
		avatar: '/avatars/sophie.jpg',
		description: 'Rising tech creator focusing on gadgets for women.',
		tags: ['Women in Tech', 'Gadgets']
	},

	// Fashion/Beauty Influencers
	{
		id: '9',
		name: 'Emma Thompson',
		handle: '@emmastyle',
		platform: 'instagram',
		tier: 'macro',
		followers: '750k',
		engagementRate: '3.2%',
		category: 'fashion',
		avatar: '/avatars/emma.jpg',
		description: 'Fashion influencer with strong female demographic.',
		tags: ['Style', 'Trends']
	},
	{
		id: '10',
		name: 'Zoe Martinez',
		handle: '@zoebeauty',
		platform: 'tiktok',
		tier: 'micro',
		followers: '125k',
		engagementRate: '7.3%',
		category: 'beauty',
		avatar: '/avatars/zoe.jpg',
		description: 'Beauty creator known for makeup tutorials and product reviews.',
		tags: ['Makeup', 'Tutorials']
	},
	{
		id: '11',
		name: 'Maya Patel',
		handle: '@mayabeauty',
		platform: 'youtube',
		tier: 'micro',
		followers: '180k',
		engagementRate: '4.8%',
		avgViews: '22k',
		category: 'beauty',
		avatar: '/avatars/maya.jpg',
		description: 'Beauty guru specializing in skincare and natural looks.',
		tags: ['Skincare', 'Natural Beauty']
	},

	// Food/Cooking Influencers
	{
		id: '12',
		name: 'Chef Maria',
		handle: '@chefmaria',
		platform: 'youtube',
		tier: 'micro',
		followers: '180k',
		engagementRate: '4.9%',
		avgViews: '25k',
		category: 'cooking',
		avatar: '/avatars/maria.jpg',
		description: 'Professional chef sharing easy home cooking recipes.',
		tags: ['Recipes', 'Home Cooking']
	},
	{
		id: '13',
		name: 'David Park',
		handle: '@davidfoodie',
		platform: 'bloggers',
		tier: 'nano',
		followers: '12k',
		engagementRate: '8.1%',
		category: 'food',
		avatar: '/avatars/david.jpg',
		description: 'Food blogger with loyal local following.',
		tags: ['Food Reviews', 'Local']
	},
	{
		id: '14',
		name: 'Isabella Garcia',
		handle: '@isabellacooks',
		platform: 'instagram',
		tier: 'micro',
		followers: '65k',
		engagementRate: '5.4%',
		category: 'cooking',
		avatar: '/avatars/isabella.jpg',
		description: 'Home cook sharing quick and healthy meal ideas.',
		tags: ['Quick Meals', 'Healthy Eating']
	},

	// Lifestyle Influencers
	{
		id: '15',
		name: 'Rachel Adams',
		handle: '@rachellifestyle',
		platform: 'instagram',
		tier: 'macro',
		followers: '620k',
		engagementRate: '3.6%',
		category: 'lifestyle',
		avatar: '/avatars/rachel.jpg',
		description: 'Lifestyle blogger covering fashion, travel, and wellness.',
		tags: ['Lifestyle', 'Travel']
	},
	{
		id: '16',
		name: 'Tom Wilson',
		handle: '@tomtravels',
		platform: 'youtube',
		tier: 'micro',
		followers: '95k',
		engagementRate: '4.2%',
		avgViews: '12k',
		category: 'travel',
		avatar: '/avatars/tom.jpg',
		description: 'Adventure traveler documenting unique destinations.',
		tags: ['Adventure Travel', 'Photography']
	}
]

export function getInfluencersByCategory(category: string): Influencer[] {
	return influencersDatabase.filter(influencer =>
		influencer.category.toLowerCase() === category.toLowerCase()
	)
}
