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
	// FITNESS
	{ id: '1', name: 'Anna Smith', handle: '@annafitness', platform: 'instagram', tier: 'nano', followers: '8.5k', engagementRate: '6.1%', category: 'fitness', avatar: '/avatars/anna.jpg', description: 'Rising fitness creator with high engagement rates.', tags: ['High Engagement', 'Yoga'] },
	{ id: '2', name: 'Mike Johnson', handle: '@mikefitness', platform: 'youtube', tier: 'micro', followers: '85k', engagementRate: '4.2%', avgViews: '12k', category: 'fitness', avatar: '/avatars/mike.jpg', description: 'Fitness expert with engaged male audience.', tags: ['Workout', 'Nutrition'] },
	{ id: '3', name: 'Sarah Williams', handle: '@sarahstrong', platform: 'instagram', tier: 'macro', followers: '750k', engagementRate: '3.1%', category: 'fitness', avatar: '/avatars/sarah.jpg', description: 'Professional trainer with massive following.', tags: ['Strength Training', 'Motivation'] },

	// HEALTH
	{ id: '4', name: 'Dr. Lisa Chen', handle: '@drlisahealth', platform: 'tiktok', tier: 'nano', followers: '9.2k', engagementRate: '7.8%', category: 'health', avatar: '/avatars/lisa.jpg', description: 'Medical professional sharing health tips.', tags: ['Medical Advice', 'Wellness'] },
	{ id: '5', name: 'James Rodriguez', handle: '@jameshealthy', platform: 'youtube', tier: 'micro', followers: '120k', engagementRate: '4.8%', avgViews: '18k', category: 'health', avatar: '/avatars/james.jpg', description: 'Health advocate focusing on preventive care.', tags: ['Preventive Health', 'Lifestyle'] },
	{ id: '6', name: 'Maria Gonzalez', handle: '@mariahealth', platform: 'instagram', tier: 'macro', followers: '850k', engagementRate: '2.9%', category: 'health', avatar: '/avatars/maria.jpg', description: 'Health influencer with focus on mental wellness.', tags: ['Mental Health', 'Wellness'] },

	// WELLNESS
	{ id: '7', name: 'Zen Maya', handle: '@zenmaya', platform: 'instagram', tier: 'nano', followers: '7.8k', engagementRate: '8.2%', category: 'wellness', avatar: '/avatars/maya.jpg', description: 'Mindfulness coach with highly engaged audience.', tags: ['Mindfulness', 'Meditation'] },
	{ id: '8', name: 'Alex Turner', handle: '@alexwellness', platform: 'youtube', tier: 'micro', followers: '95k', engagementRate: '5.1%', avgViews: '14k', category: 'wellness', avatar: '/avatars/alex.jpg', description: 'Holistic wellness expert sharing daily practices.', tags: ['Holistic Health', 'Self-care'] },
	{ id: '9', name: 'Sophie Green', handle: '@sophiegreenwellness', platform: 'instagram', tier: 'macro', followers: '680k', engagementRate: '3.4%', category: 'wellness', avatar: '/avatars/sophie.jpg', description: 'Wellness guru with focus on sustainable living.', tags: ['Sustainable Living', 'Wellness'] },

	// NUTRITION
	{ id: '10', name: 'Nutritionist Emma', handle: '@nutritionistemma', platform: 'tiktok', tier: 'nano', followers: '6.5k', engagementRate: '9.1%', category: 'nutrition', avatar: '/avatars/emma.jpg', description: 'Registered dietitian sharing nutrition science.', tags: ['Evidence-based', 'Nutrition Science'] },
	{ id: '11', name: 'Carlos Nutrition', handle: '@carlosnutrition', platform: 'youtube', tier: 'micro', followers: '110k', engagementRate: '4.6%', avgViews: '16k', category: 'nutrition', avatar: '/avatars/carlos.jpg', description: 'Sports nutritionist for athletes and fitness enthusiasts.', tags: ['Sports Nutrition', 'Performance'] },
	{ id: '12', name: 'Rachel Macro', handle: '@rachelmacro', platform: 'instagram', tier: 'macro', followers: '920k', engagementRate: '2.8%', category: 'nutrition', avatar: '/avatars/rachel.jpg', description: 'Macro coaching expert with massive following.', tags: ['Macro Coaching', 'Weight Loss'] },

	// SPORTS
	{ id: '13', name: 'Tommy Sports', handle: '@tommysports', platform: 'tiktok', tier: 'nano', followers: '8.9k', engagementRate: '7.3%', category: 'sports', avatar: '/avatars/tommy.jpg', description: 'Rising sports content creator.', tags: ['Basketball', 'Training Tips'] },
	{ id: '14', name: 'Athletic Amy', handle: '@athleticamy', platform: 'youtube', tier: 'micro', followers: '75k', engagementRate: '5.2%', avgViews: '11k', category: 'sports', avatar: '/avatars/amy.jpg', description: 'Former college athlete sharing training content.', tags: ['Athletic Training', 'Performance'] },
	{ id: '15', name: 'Pro Athlete Jake', handle: '@proathletejake', platform: 'instagram', tier: 'macro', followers: '1.2M', engagementRate: '2.1%', category: 'sports', avatar: '/avatars/jake.jpg', description: 'Professional athlete with huge following.', tags: ['Professional Sports', 'Inspiration'] },

	// FASHION
	{ id: '16', name: 'Style Sophia', handle: '@stylesophia', platform: 'instagram', tier: 'nano', followers: '9.8k', engagementRate: '6.7%', category: 'fashion', avatar: '/avatars/sophia.jpg', description: 'Emerging fashion creator with unique style.', tags: ['Street Style', 'Affordable Fashion'] },
	{ id: '17', name: 'Fashion Felix', handle: '@fashionfelix', platform: 'youtube', tier: 'micro', followers: '65k', engagementRate: '4.9%', avgViews: '9k', category: 'fashion', avatar: '/avatars/felix.jpg', description: 'Male fashion influencer breaking stereotypes.', tags: ['Men\'s Fashion', 'Style Tips'] },
	{ id: '18', name: 'Haute Couture Hannah', handle: '@hautecouturehan', platform: 'instagram', tier: 'macro', followers: '780k', engagementRate: '3.2%', category: 'fashion', avatar: '/avatars/hannah.jpg', description: 'High fashion influencer with luxury focus.', tags: ['Luxury Fashion', 'Designer Brands'] },

	// BEAUTY
	{ id: '19', name: 'Beauty Bella', handle: '@beautybella', platform: 'tiktok', tier: 'nano', followers: '7.2k', engagementRate: '8.9%', category: 'beauty', avatar: '/avatars/bella.jpg', description: 'Makeup artist creating viral beauty content.', tags: ['Makeup Tutorials', 'Creative Looks'] },
	{ id: '20', name: 'Glam Grace', handle: '@glamgrace', platform: 'youtube', tier: 'micro', followers: '88k', engagementRate: '5.3%', avgViews: '13k', category: 'beauty', avatar: '/avatars/grace.jpg', description: 'Beauty guru with focus on everyday looks.', tags: ['Everyday Beauty', 'Product Reviews'] },
	{ id: '21', name: 'Beauty Queen Zara', handle: '@beautyqueenzara', platform: 'instagram', tier: 'macro', followers: '950k', engagementRate: '2.7%', category: 'beauty', avatar: '/avatars/zara.jpg', description: 'Top beauty influencer with brand partnerships.', tags: ['Brand Partnerships', 'Luxury Beauty'] },

	// TECH
	{ id: '22', name: 'Tech Tim', handle: '@techtechtim', platform: 'tiktok', tier: 'nano', followers: '6.8k', engagementRate: '9.4%', category: 'tech', avatar: '/avatars/tim.jpg', description: 'Young tech enthusiast reviewing latest gadgets.', tags: ['Gadget Reviews', 'Tech Tips'] },
	{ id: '23', name: 'Techie Tara', handle: '@techietara', platform: 'youtube', tier: 'micro', followers: '125k', engagementRate: '4.4%', avgViews: '19k', category: 'tech', avatar: '/avatars/tara.jpg', description: 'Female tech reviewer breaking barriers.', tags: ['Women in Tech', 'Smartphone Reviews'] },
	{ id: '24', name: 'Gadget Guru Gary', handle: '@gadgetgurugary', platform: 'youtube', tier: 'macro', followers: '1.1M', engagementRate: '2.3%', avgViews: '85k', category: 'tech', avatar: '/avatars/gary.jpg', description: 'Top tech reviewer with massive reach.', tags: ['Tech Reviews', 'Industry Insider'] },

	// GAMING
	{ id: '25', name: 'Gamer Girl Gigi', handle: '@gamergigirl', platform: 'tiktok', tier: 'nano', followers: '8.1k', engagementRate: '7.6%', category: 'gaming', avatar: '/avatars/gigi.jpg', description: 'Rising female gamer creating engaging content.', tags: ['Female Gamer', 'Mobile Gaming'] },
	{ id: '26', name: 'Pro Gamer Pete', handle: '@progamerpete', platform: 'youtube', tier: 'micro', followers: '92k', engagementRate: '5.8%', avgViews: '15k', category: 'gaming', avatar: '/avatars/pete.jpg', description: 'Competitive gamer with tutorial focus.', tags: ['Competitive Gaming', 'Tutorials'] },
	{ id: '27', name: 'Streaming Sam', handle: '@streamingsam', platform: 'youtube', tier: 'macro', followers: '820k', engagementRate: '3.1%', avgViews: '67k', category: 'gaming', avatar: '/avatars/sam.jpg', description: 'Top gaming streamer with loyal fanbase.', tags: ['Live Streaming', 'Gaming Community'] },

	// FOOD
	{ id: '28', name: 'Foodie Fiona', handle: '@foodiefiona', platform: 'instagram', tier: 'nano', followers: '9.5k', engagementRate: '6.8%', category: 'food', avatar: '/avatars/fiona.jpg', description: 'Local food blogger with authentic reviews.', tags: ['Local Food', 'Restaurant Reviews'] },
	{ id: '29', name: 'Chef Charlie', handle: '@chefcharlie', platform: 'youtube', tier: 'micro', followers: '78k', engagementRate: '4.7%', avgViews: '12k', category: 'food', avatar: '/avatars/charlie.jpg', description: 'Professional chef sharing cooking secrets.', tags: ['Professional Cooking', 'Recipe Development'] },
	{ id: '30', name: 'Food Network Frank', handle: '@foodnetworkfrank', platform: 'instagram', tier: 'macro', followers: '1.3M', engagementRate: '2.2%', category: 'food', avatar: '/avatars/frank.jpg', description: 'Celebrity chef with TV show background.', tags: ['Celebrity Chef', 'TV Personality'] },

	// COOKING
	{ id: '31', name: 'Home Cook Hannah', handle: '@homecookhan', platform: 'tiktok', tier: 'nano', followers: '7.9k', engagementRate: '8.3%', category: 'cooking', avatar: '/avatars/hannahc.jpg', description: 'Home cook sharing easy family recipes.', tags: ['Family Recipes', 'Easy Cooking'] },
	{ id: '32', name: 'Kitchen King Kevin', handle: '@kitchenkingkev', platform: 'youtube', tier: 'micro', followers: '105k', engagementRate: '4.9%', avgViews: '17k', category: 'cooking', avatar: '/avatars/kevin.jpg', description: 'Cooking instructor with step-by-step tutorials.', tags: ['Cooking Tutorials', 'Beginner Friendly'] },
	{ id: '33', name: 'Master Chef Maria', handle: '@masterchefmaria', platform: 'instagram', tier: 'macro', followers: '890k', engagementRate: '2.9%', category: 'cooking', avatar: '/avatars/mariac.jpg', description: 'Award-winning chef with international cuisine focus.', tags: ['International Cuisine', 'Award Winner'] },

	// LIFESTYLE
	{ id: '34', name: 'Lifestyle Lucy', handle: '@lifestylelucy', platform: 'instagram', tier: 'nano', followers: '8.7k', engagementRate: '7.1%', category: 'lifestyle', avatar: '/avatars/lucy.jpg', description: 'Millennial sharing authentic lifestyle content.', tags: ['Authentic Living', 'Millennial Life'] },
	{ id: '35', name: 'Life Coach Leo', handle: '@lifecoachleo', platform: 'youtube', tier: 'micro', followers: '67k', engagementRate: '5.4%', avgViews: '10k', category: 'lifestyle', avatar: '/avatars/leo.jpg', description: 'Life coach helping people achieve their goals.', tags: ['Life Coaching', 'Personal Development'] },
	{ id: '36', name: 'Lifestyle Luxury Lila', handle: '@lifestyleluxurylila', platform: 'instagram', tier: 'macro', followers: '720k', engagementRate: '3.3%', category: 'lifestyle', avatar: '/avatars/lila.jpg', description: 'Luxury lifestyle influencer with aspirational content.', tags: ['Luxury Lifestyle', 'Aspirational'] },

	// TRAVEL
	{ id: '37', name: 'Travel Tom', handle: '@traveltom', platform: 'tiktok', tier: 'nano', followers: '6.9k', engagementRate: '9.2%', category: 'travel', avatar: '/avatars/tomt.jpg', description: 'Budget traveler sharing money-saving tips.', tags: ['Budget Travel', 'Travel Hacks'] },
	{ id: '38', name: 'Adventure Anna', handle: '@adventureanna', platform: 'youtube', tier: 'micro', followers: '89k', engagementRate: '5.1%', avgViews: '14k', category: 'travel', avatar: '/avatars/annat.jpg', description: 'Adventure traveler documenting extreme destinations.', tags: ['Adventure Travel', 'Extreme Destinations'] },
	{ id: '39', name: 'Luxury Travel Lisa', handle: '@luxurytravellisa', platform: 'instagram', tier: 'macro', followers: '980k', engagementRate: '2.6%', category: 'travel', avatar: '/avatars/lisat.jpg', description: 'Luxury travel influencer visiting exclusive destinations.', tags: ['Luxury Travel', 'Exclusive Destinations'] },

	// Continue with more categories...
	// MAKEUP
	{ id: '40', name: 'Makeup Maven Mia', handle: '@makeupmavenmia', platform: 'tiktok', tier: 'nano', followers: '8.4k', engagementRate: '8.7%', category: 'makeup', avatar: '/avatars/mia.jpg', description: 'Creative makeup artist with artistic flair.', tags: ['Creative Makeup', 'Artistic'] },
	{ id: '41', name: 'Makeup Master Mike', handle: '@makeupmastermike', platform: 'youtube', tier: 'micro', followers: '72k', engagementRate: '5.6%', avgViews: '11k', category: 'makeup', avatar: '/avatars/mikem.jpg', description: 'Male makeup artist breaking gender norms.', tags: ['Male MUA', 'Gender Inclusive'] },
	{ id: '42', name: 'Glam Goddess Gloria', handle: '@glamgoddessgloria', platform: 'instagram', tier: 'macro', followers: '1.1M', engagementRate: '2.4%', category: 'makeup', avatar: '/avatars/gloria.jpg', description: 'Professional makeup artist to the stars.', tags: ['Celebrity MUA', 'Professional'] },

	// HOME
	{ id: '43', name: 'Home Helper Holly', handle: '@homehelperhol', platform: 'tiktok', tier: 'nano', followers: '7.6k', engagementRate: '8.8%', category: 'home', avatar: '/avatars/holly.jpg', description: 'DIY home improvement enthusiast.', tags: ['DIY', 'Home Improvement'] },
	{ id: '44', name: 'Interior Ian', handle: '@interiourian', platform: 'youtube', tier: 'micro', followers: '96k', engagementRate: '4.3%', avgViews: '15k', category: 'home', avatar: '/avatars/ian.jpg', description: 'Interior designer sharing design tips.', tags: ['Interior Design', 'Design Tips'] },
	{ id: '45', name: 'Home Design Hero', handle: '@homedesignhero', platform: 'instagram', tier: 'macro', followers: '650k', engagementRate: '3.5%', category: 'home', avatar: '/avatars/hero.jpg', description: 'Top home design influencer with magazine features.', tags: ['Home Design', 'Magazine Featured'] },

	// Add more categories following the same pattern...
	// BUSINESS
	{ id: '46', name: 'Business Bob', handle: '@businessbob', platform: 'tiktok', tier: 'nano', followers: '9.1k', engagementRate: '7.9%', category: 'business', avatar: '/avatars/bob.jpg', description: 'Young entrepreneur sharing startup journey.', tags: ['Entrepreneurship', 'Startup'] },
	{ id: '47', name: 'CEO Sarah', handle: '@ceosarah', platform: 'youtube', tier: 'micro', followers: '115k', engagementRate: '4.2%', avgViews: '18k', category: 'business', avatar: '/avatars/sarahb.jpg', description: 'Successful CEO sharing business insights.', tags: ['Leadership', 'Business Strategy'] },
	{ id: '48', name: 'Business Mogul Max', handle: '@businessmogulmax', platform: 'instagram', tier: 'macro', followers: '1.5M', engagementRate: '2.1%', category: 'business', avatar: '/avatars/max.jpg', description: 'Multi-millionaire entrepreneur and motivational speaker.', tags: ['Success Story', 'Motivation'] }
]

export function getInfluencersByCategory(category: string): Influencer[] {
	return influencersDatabase.filter(influencer =>
		influencer.category.toLowerCase() === category.toLowerCase()
	)
}
