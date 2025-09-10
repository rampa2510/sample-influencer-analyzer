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
	{ id: '1', name: 'Anna Smith', handle: '@annafitness', platform: 'instagram', tier: 'nano', followers: '8.5k', engagementRate: '6.1%', category: 'fitness', avatar: 'https://ui-avatars.com/api/?name=Anna+Smith&background=6366f1&color=fff&size=64', description: 'Rising fitness creator with high engagement rates.', tags: ['High Engagement', 'Yoga'] },
	{ id: '2', name: 'Mike Johnson', handle: '@mikefitness', platform: 'youtube', tier: 'micro', followers: '85k', engagementRate: '4.2%', avgViews: '12k', category: 'fitness', avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=ef4444&color=fff&size=64', description: 'Fitness expert with engaged male audience.', tags: ['Workout', 'Nutrition'] },
	{ id: '3', name: 'Sarah Williams', handle: '@sarahstrong', platform: 'instagram', tier: 'macro', followers: '750k', engagementRate: '3.1%', category: 'fitness', avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=10b981&color=fff&size=64', description: 'Professional trainer with massive following.', tags: ['Strength Training', 'Motivation'] },

	// HEALTH
	{ id: '4', name: 'Dr. Lisa Chen', handle: '@drlisahealth', platform: 'tiktok', tier: 'nano', followers: '9.2k', engagementRate: '7.8%', category: 'health', avatar: 'https://ui-avatars.com/api/?name=Lisa+Chen&background=8b5cf6&color=fff&size=64', description: 'Medical professional sharing health tips.', tags: ['Medical Advice', 'Wellness'] },
	{ id: '5', name: 'James Rodriguez', handle: '@jameshealthy', platform: 'youtube', tier: 'micro', followers: '120k', engagementRate: '4.8%', avgViews: '18k', category: 'health', avatar: 'https://ui-avatars.com/api/?name=James+Rodriguez&background=f59e0b&color=fff&size=64', description: 'Health advocate focusing on preventive care.', tags: ['Preventive Health', 'Lifestyle'] },
	{ id: '6', name: 'Maria Gonzalez', handle: '@mariahealth', platform: 'instagram', tier: 'macro', followers: '850k', engagementRate: '2.9%', category: 'health', avatar: 'https://ui-avatars.com/api/?name=Maria+Gonzalez&background=ec4899&color=fff&size=64', description: 'Health influencer with focus on mental wellness.', tags: ['Mental Health', 'Wellness'] },

	// WELLNESS
	{ id: '7', name: 'Zen Maya', handle: '@zenmaya', platform: 'instagram', tier: 'nano', followers: '7.8k', engagementRate: '8.2%', category: 'wellness', avatar: 'https://ui-avatars.com/api/?name=Zen+Maya&background=06b6d4&color=fff&size=64', description: 'Mindfulness coach with highly engaged audience.', tags: ['Mindfulness', 'Meditation'] },
	{ id: '8', name: 'Alex Turner', handle: '@alexwellness', platform: 'youtube', tier: 'micro', followers: '95k', engagementRate: '5.1%', avgViews: '14k', category: 'wellness', avatar: 'https://ui-avatars.com/api/?name=Alex+Turner&background=84cc16&color=fff&size=64', description: 'Holistic wellness expert sharing daily practices.', tags: ['Holistic Health', 'Self-care'] },
	{ id: '9', name: 'Sophie Green', handle: '@sophiegreenwellness', platform: 'instagram', tier: 'macro', followers: '680k', engagementRate: '3.4%', category: 'wellness', avatar: 'https://ui-avatars.com/api/?name=Sophie+Green&background=14b8a6&color=fff&size=64', description: 'Wellness guru with focus on sustainable living.', tags: ['Sustainable Living', 'Wellness'] },

	// NUTRITION
	{ id: '10', name: 'Nutritionist Emma', handle: '@nutritionistemma', platform: 'tiktok', tier: 'nano', followers: '6.5k', engagementRate: '9.1%', category: 'nutrition', avatar: 'https://ui-avatars.com/api/?name=Emma+Nutrition&background=f97316&color=fff&size=64', description: 'Registered dietitian sharing nutrition science.', tags: ['Evidence-based', 'Nutrition Science'] },
	{ id: '11', name: 'Carlos Nutrition', handle: '@carlosnutrition', platform: 'youtube', tier: 'micro', followers: '110k', engagementRate: '4.6%', avgViews: '16k', category: 'nutrition', avatar: 'https://ui-avatars.com/api/?name=Carlos+Nutrition&background=dc2626&color=fff&size=64', description: 'Sports nutritionist for athletes and fitness enthusiasts.', tags: ['Sports Nutrition', 'Performance'] },
	{ id: '12', name: 'Rachel Macro', handle: '@rachelmacro', platform: 'instagram', tier: 'macro', followers: '920k', engagementRate: '2.8%', category: 'nutrition', avatar: 'https://ui-avatars.com/api/?name=Rachel+Macro&background=7c3aed&color=fff&size=64', description: 'Macro coaching expert with massive following.', tags: ['Macro Coaching', 'Weight Loss'] },

	// SPORTS
	{ id: '13', name: 'Tommy Sports', handle: '@tommysports', platform: 'tiktok', tier: 'nano', followers: '8.9k', engagementRate: '7.3%', category: 'sports', avatar: 'https://ui-avatars.com/api/?name=Tommy+Sports&background=2563eb&color=fff&size=64', description: 'Rising sports content creator.', tags: ['Basketball', 'Training Tips'] },
	{ id: '14', name: 'Athletic Amy', handle: '@athleticamy', platform: 'youtube', tier: 'micro', followers: '75k', engagementRate: '5.2%', avgViews: '11k', category: 'sports', avatar: 'https://ui-avatars.com/api/?name=Athletic+Amy&background=be185d&color=fff&size=64', description: 'Former college athlete sharing training content.', tags: ['Athletic Training', 'Performance'] },
	{ id: '15', name: 'Pro Athlete Jake', handle: '@proathletejake', platform: 'instagram', tier: 'macro', followers: '1.2M', engagementRate: '2.1%', category: 'sports', avatar: 'https://ui-avatars.com/api/?name=Jake+Sports&background=059669&color=fff&size=64', description: 'Professional athlete with huge following.', tags: ['Professional Sports', 'Inspiration'] },

	// FASHION
	{ id: '16', name: 'Style Sophia', handle: '@stylesophia', platform: 'instagram', tier: 'nano', followers: '9.8k', engagementRate: '6.7%', category: 'fashion', avatar: 'https://ui-avatars.com/api/?name=Style+Sophia&background=db2777&color=fff&size=64', description: 'Emerging fashion creator with unique style.', tags: ['Street Style', 'Affordable Fashion'] },
	{ id: '17', name: 'Fashion Felix', handle: '@fashionfelix', platform: 'youtube', tier: 'micro', followers: '65k', engagementRate: '4.9%', avgViews: '9k', category: 'fashion', avatar: 'https://ui-avatars.com/api/?name=Fashion+Felix&background=7c2d12&color=fff&size=64', description: 'Male fashion influencer breaking stereotypes.', tags: ['Men\'s Fashion', 'Style Tips'] },
	{ id: '18', name: 'Haute Couture Hannah', handle: '@hautecouturehan', platform: 'instagram', tier: 'macro', followers: '780k', engagementRate: '3.2%', category: 'fashion', avatar: 'https://ui-avatars.com/api/?name=Hannah+Couture&background=1f2937&color=fff&size=64', description: 'High fashion influencer with luxury focus.', tags: ['Luxury Fashion', 'Designer Brands'] },

	// BEAUTY
	{ id: '19', name: 'Beauty Bella', handle: '@beautybella', platform: 'tiktok', tier: 'nano', followers: '7.2k', engagementRate: '8.9%', category: 'beauty', avatar: 'https://ui-avatars.com/api/?name=Beauty+Bella&background=e11d48&color=fff&size=64', description: 'Makeup artist creating viral beauty content.', tags: ['Makeup Tutorials', 'Creative Looks'] },
	{ id: '20', name: 'Glam Grace', handle: '@glamgrace', platform: 'youtube', tier: 'micro', followers: '88k', engagementRate: '5.3%', avgViews: '13k', category: 'beauty', avatar: 'https://ui-avatars.com/api/?name=Glam+Grace&background=9333ea&color=fff&size=64', description: 'Beauty guru with focus on everyday looks.', tags: ['Everyday Beauty', 'Product Reviews'] },
	{ id: '21', name: 'Beauty Queen Zara', handle: '@beautyqueenzara', platform: 'instagram', tier: 'macro', followers: '950k', engagementRate: '2.7%', category: 'beauty', avatar: 'https://ui-avatars.com/api/?name=Zara+Beauty&background=dc2626&color=fff&size=64', description: 'Top beauty influencer with brand partnerships.', tags: ['Brand Partnerships', 'Luxury Beauty'] },

	// TECH
	{ id: '22', name: 'Tech Tim', handle: '@techtechtim', platform: 'tiktok', tier: 'nano', followers: '6.8k', engagementRate: '9.4%', category: 'tech', avatar: 'https://ui-avatars.com/api/?name=Tech+Tim&background=1d4ed8&color=fff&size=64', description: 'Young tech enthusiast reviewing latest gadgets.', tags: ['Gadget Reviews', 'Tech Tips'] },
	{ id: '23', name: 'Techie Tara', handle: '@techietara', platform: 'youtube', tier: 'micro', followers: '125k', engagementRate: '4.4%', avgViews: '19k', category: 'tech', avatar: 'https://ui-avatars.com/api/?name=Techie+Tara&background=0891b2&color=fff&size=64', description: 'Female tech reviewer breaking barriers.', tags: ['Women in Tech', 'Smartphone Reviews'] },
	{ id: '24', name: 'Gadget Guru Gary', handle: '@gadgetgurugary', platform: 'youtube', tier: 'macro', followers: '1.1M', engagementRate: '2.3%', avgViews: '85k', category: 'tech', avatar: 'https://ui-avatars.com/api/?name=Gary+Gadget&background=374151&color=fff&size=64', description: 'Top tech reviewer with massive reach.', tags: ['Tech Reviews', 'Industry Insider'] },

	// FOOD
	{ id: '25', name: 'Foodie Fiona', handle: '@foodiefiona', platform: 'instagram', tier: 'nano', followers: '9.5k', engagementRate: '6.8%', category: 'food', avatar: 'https://ui-avatars.com/api/?name=Foodie+Fiona&background=ea580c&color=fff&size=64', description: 'Local food blogger with authentic reviews.', tags: ['Local Food', 'Restaurant Reviews'] },
	{ id: '26', name: 'Chef Charlie', handle: '@chefcharlie', platform: 'youtube', tier: 'micro', followers: '78k', engagementRate: '4.7%', avgViews: '12k', category: 'food', avatar: 'https://ui-avatars.com/api/?name=Chef+Charlie&background=16a34a&color=fff&size=64', description: 'Professional chef sharing cooking secrets.', tags: ['Professional Cooking', 'Recipe Development'] },
	{ id: '27', name: 'Food Network Frank', handle: '@foodnetworkfrank', platform: 'instagram', tier: 'macro', followers: '1.3M', engagementRate: '2.2%', category: 'food', avatar: 'https://ui-avatars.com/api/?name=Frank+Food&background=b91c1c&color=fff&size=64', description: 'Celebrity chef with TV show background.', tags: ['Celebrity Chef', 'TV Personality'] },

	// TRAVEL
	{ id: '28', name: 'Travel Tina', handle: '@traveltina', platform: 'tiktok', tier: 'nano', followers: '8.7k', engagementRate: '7.5%', category: 'travel', avatar: 'https://ui-avatars.com/api/?name=Travel+Tina&background=0d9488&color=fff&size=64', description: 'Budget travel expert sharing hidden gems.', tags: ['Budget Travel', 'Hidden Gems'] },
	{ id: '29', name: 'Adventure Alex', handle: '@adventurealex', platform: 'youtube', tier: 'micro', followers: '92k', engagementRate: '4.9%', avgViews: '15k', category: 'travel', avatar: 'https://ui-avatars.com/api/?name=Adventure+Alex&background=dc2626&color=fff&size=64', description: 'Extreme travel content with stunning visuals.', tags: ['Adventure Travel', 'Photography'] },
	{ id: '30', name: 'Luxury Luke', handle: '@luxuryluke', platform: 'instagram', tier: 'macro', followers: '890k', engagementRate: '3.0%', category: 'travel', avatar: 'https://ui-avatars.com/api/?name=Luxury+Luke&background=fbbf24&color=fff&size=64', description: 'High-end travel influencer showcasing luxury destinations.', tags: ['Luxury Travel', 'Five Star Hotels'] },

	// GAMING
	{ id: '31', name: 'Gamer Gabby', handle: '@gamergabby', platform: 'tiktok', tier: 'nano', followers: '7.1k', engagementRate: '8.8%', category: 'gaming', avatar: 'https://ui-avatars.com/api/?name=Gamer+Gabby&background=7c3aed&color=fff&size=64', description: 'Rising gaming creator with focus on mobile games.', tags: ['Mobile Gaming', 'Game Reviews'] },
	{ id: '32', name: 'Pro Player Pete', handle: '@proplayerpete', platform: 'youtube', tier: 'micro', followers: '105k', engagementRate: '4.5%', avgViews: '17k', category: 'gaming', avatar: 'https://ui-avatars.com/api/?name=Pro+Pete&background=991b1b&color=fff&size=64', description: 'Professional esports player sharing strategies.', tags: ['Esports', 'Game Strategy'] },
	{ id: '33', name: 'Streaming Sam', handle: '@streamingsam', platform: 'youtube', tier: 'macro', followers: '1.4M', engagementRate: '2.4%', avgViews: '120k', category: 'gaming', avatar: 'https://ui-avatars.com/api/?name=Streaming+Sam&background=1e40af&color=fff&size=64', description: 'Top gaming streamer with massive community.', tags: ['Live Streaming', 'Gaming Community'] },

	// LIFESTYLE
	{ id: '34', name: 'Minimalist Mia', handle: '@minimalistmia', platform: 'instagram', tier: 'nano', followers: '8.3k', engagementRate: '6.9%', category: 'lifestyle', avatar: 'https://ui-avatars.com/api/?name=Minimalist+Mia&background=64748b&color=fff&size=64', description: 'Promoting simple living and sustainability.', tags: ['Minimalism', 'Sustainability'] },
	{ id: '35', name: 'Lifestyle Leo', handle: '@lifestyleleo', platform: 'youtube', tier: 'micro', followers: '87k', engagementRate: '4.3%', avgViews: '13k', category: 'lifestyle', avatar: 'https://ui-avatars.com/api/?name=Lifestyle+Leo&background=059669&color=fff&size=64', description: 'Sharing life hacks and productivity tips.', tags: ['Productivity', 'Life Hacks'] },
	{ id: '36', name: 'Luxe Life Lila', handle: '@luxelifelila', platform: 'instagram', tier: 'macro', followers: '720k', engagementRate: '3.3%', category: 'lifestyle', avatar: 'https://ui-avatars.com/api/?name=Luxe+Lila&background=be185d&color=fff&size=64', description: 'Luxury lifestyle influencer with high-end content.', tags: ['Luxury Lifestyle', 'High-end Living'] },

	// PARENTING
	{ id: '37', name: 'Mama Maya', handle: '@mamamaya', platform: 'tiktok', tier: 'nano', followers: '9.1k', engagementRate: '7.7%', category: 'parenting', avatar: 'https://ui-avatars.com/api/?name=Mama+Maya&background=f472b6&color=fff&size=64', description: 'New mom sharing parenting journey with honesty.', tags: ['New Mom', 'Parenting Tips'] },
	{ id: '38', name: 'Dad David', handle: '@daddavid', platform: 'youtube', tier: 'micro', followers: '96k', engagementRate: '4.8%', avgViews: '14k', category: 'parenting', avatar: 'https://ui-avatars.com/api/?name=Dad+David&background=1d4ed8&color=fff&size=64', description: 'Dad blogger sharing family life and parenting advice.', tags: ['Dad Life', 'Family Activities'] },
	{ id: '39', name: 'Super Mom Sarah', handle: '@supermomsarah', platform: 'instagram', tier: 'macro', followers: '810k', engagementRate: '2.9%', category: 'parenting', avatar: 'https://ui-avatars.com/api/?name=Super+Sarah&background=dc2626&color=fff&size=64', description: 'Experienced mom with practical parenting advice.', tags: ['Parenting Advice', 'Mom Life'] },

	// EDUCATION
	{ id: '40', name: 'Teacher Tara', handle: '@teachertara', platform: 'tiktok', tier: 'nano', followers: '7.5k', engagementRate: '8.1%', category: 'education', avatar: 'https://ui-avatars.com/api/?name=Teacher+Tara&background=0891b2&color=fff&size=64', description: 'Elementary teacher making learning fun and engaging.', tags: ['Elementary Education', 'Learning Fun'] },
	{ id: '41', name: 'Professor Paul', handle: '@professorpaul', platform: 'youtube', tier: 'micro', followers: '118k', engagementRate: '4.7%', avgViews: '18k', category: 'education', avatar: 'https://ui-avatars.com/api/?name=Professor+Paul&background=7c2d12&color=fff&size=64', description: 'University professor making complex topics accessible.', tags: ['Higher Education', 'Science Communication'] },
	{ id: '42', name: 'Learning Legend Lucy', handle: '@learninglegendlucy', platform: 'instagram', tier: 'macro', followers: '650k', engagementRate: '3.1%', category: 'education', avatar: 'https://ui-avatars.com/api/?name=Learning+Lucy&background=059669&color=fff&size=64', description: 'Educational influencer creating engaging learning content.', tags: ['Educational Content', 'Study Tips'] },

	// FINANCE
	{ id: '43', name: 'Finance Finn', handle: '@financefinn', platform: 'tiktok', tier: 'nano', followers: '6.9k', engagementRate: '9.2%', category: 'finance', avatar: 'https://ui-avatars.com/api/?name=Finance+Finn&background=16a34a&color=fff&size=64', description: 'Young finance enthusiast sharing investment basics.', tags: ['Investment Basics', 'Financial Literacy'] },
	{ id: '44', name: 'Money Mentor Mike', handle: '@moneymentormike', platform: 'youtube', tier: 'micro', followers: '134k', engagementRate: '4.2%', avgViews: '21k', category: 'finance', avatar: 'https://ui-avatars.com/api/?name=Money+Mike&background=dc2626&color=fff&size=64', description: 'Financial advisor sharing practical money management tips.', tags: ['Money Management', 'Financial Planning'] },
	{ id: '45', name: 'Wealth Wizard Will', handle: '@wealthwizardwill', platform: 'instagram', tier: 'macro', followers: '970k', engagementRate: '2.6%', category: 'finance', avatar: 'https://ui-avatars.com/api/?name=Wealth+Will&background=1f2937&color=fff&size=64', description: 'Top financial influencer with investment expertise.', tags: ['Investment Strategy', 'Wealth Building'] },

	// BUSINESS
	{ id: '46', name: 'Startup Steve', handle: '@startupsteve', platform: 'tiktok', tier: 'nano', followers: '8.2k', engagementRate: '7.6%', category: 'business', avatar: 'https://ui-avatars.com/api/?name=Startup+Steve&background=7c3aed&color=fff&size=64', description: 'Young entrepreneur sharing startup journey.', tags: ['Startup Life', 'Entrepreneurship'] },
	{ id: '47', name: 'Business Bella', handle: '@businessbella', platform: 'youtube', tier: 'micro', followers: '89k', engagementRate: '4.6%', avgViews: '14k', category: 'business', avatar: 'https://ui-avatars.com/api/?name=Business+Bella&background=be185d&color=fff&size=64', description: 'Female entrepreneur empowering women in business.', tags: ['Women in Business', 'Leadership'] },
	{ id: '48', name: 'CEO Carlos', handle: '@ceocarlos', platform: 'instagram', tier: 'macro', followers: '840k', engagementRate: '3.0%', category: 'business', avatar: 'https://ui-avatars.com/api/?name=CEO+Carlos&background=0891b2&color=fff&size=64', description: 'Successful CEO sharing business strategies and insights.', tags: ['Business Strategy', 'Leadership'] },

	// AUTOMOTIVE
	{ id: '49', name: 'Car Enthusiast Chloe', handle: '@carenchloe', platform: 'tiktok', tier: 'nano', followers: '7.8k', engagementRate: '8.3%', category: 'automotive', avatar: 'https://ui-avatars.com/api/?name=Car+Chloe&background=ef4444&color=fff&size=64', description: 'Female car enthusiast breaking stereotypes.', tags: ['Car Reviews', 'Female Car Enthusiast'] },
	{ id: '50', name: 'Mechanic Mark', handle: '@mechanicmark', platform: 'youtube', tier: 'micro', followers: '76k', engagementRate: '5.0%', avgViews: '11k', category: 'automotive', avatar: 'https://ui-avatars.com/api/?name=Mechanic+Mark&background=1f2937&color=fff&size=64', description: 'Professional mechanic sharing car maintenance tips.', tags: ['Car Maintenance', 'DIY Repairs'] },
	{ id: '51', name: 'Supercar Sam', handle: '@supercarsam', platform: 'instagram', tier: 'macro', followers: '1.1M', engagementRate: '2.5%', category: 'automotive', avatar: 'https://ui-avatars.com/api/?name=Supercar+Sam&background=fbbf24&color=fff&size=64', description: 'Luxury car influencer showcasing exotic vehicles.', tags: ['Luxury Cars', 'Exotic Vehicles'] },

	// PHOTOGRAPHY
	{ id: '52', name: 'Photo Phiona', handle: '@photophiona', platform: 'instagram', tier: 'nano', followers: '9.3k', engagementRate: '6.5%', category: 'photography', avatar: 'https://ui-avatars.com/api/?name=Photo+Phiona&background=6366f1&color=fff&size=64', description: 'Portrait photographer sharing technique tips.', tags: ['Portrait Photography', 'Photography Tips'] },
	{ id: '53', name: 'Landscape Larry', handle: '@landscapelarry', platform: 'youtube', tier: 'micro', followers: '93k', engagementRate: '4.4%', avgViews: '15k', category: 'photography', avatar: 'https://ui-avatars.com/api/?name=Landscape+Larry&background=059669&color=fff&size=64', description: 'Nature photographer capturing stunning landscapes.', tags: ['Landscape Photography', 'Nature Photography'] },
	{ id: '54', name: 'Pro Photographer Pat', handle: '@prophotopat', platform: 'instagram', tier: 'macro', followers: '760k', engagementRate: '3.2%', category: 'photography', avatar: 'https://ui-avatars.com/api/?name=Pro+Pat&background=dc2626&color=fff&size=64', description: 'Professional photographer with commercial experience.', tags: ['Commercial Photography', 'Professional Tips'] },

	// MUSIC
	{ id: '55', name: 'Musician Mia', handle: '@musicianmia', platform: 'tiktok', tier: 'nano', followers: '8.6k', engagementRate: '7.9%', category: 'music', avatar: 'https://ui-avatars.com/api/?name=Musician+Mia&background=ec4899&color=fff&size=64', description: 'Independent artist sharing music creation process.', tags: ['Independent Music', 'Music Creation'] },
	{ id: '56', name: 'Producer Pete', handle: '@producerpete', platform: 'youtube', tier: 'micro', followers: '101k', engagementRate: '4.3%', avgViews: '16k', category: 'music', avatar: 'https://ui-avatars.com/api/?name=Producer+Pete&background=7c3aed&color=fff&size=64', description: 'Music producer teaching production techniques.', tags: ['Music Production', 'Beat Making'] },
	{ id: '57', name: 'Rockstar Rachel', handle: '@rockstarrachel', platform: 'instagram', tier: 'macro', followers: '920k', engagementRate: '2.8%', category: 'music', avatar: 'https://ui-avatars.com/api/?name=Rockstar+Rachel&background=991b1b&color=fff&size=64', description: 'Established musician with major label backing.', tags: ['Professional Music', 'Live Performances'] },

	// ART
	{ id: '58', name: 'Artist Anna', handle: '@artistanna', platform: 'instagram', tier: 'nano', followers: '7.9k', engagementRate: '8.4%', category: 'art', avatar: 'https://ui-avatars.com/api/?name=Artist+Anna&background=14b8a6&color=fff&size=64', description: 'Digital artist creating stunning visual content.', tags: ['Digital Art', 'Visual Content'] },
	{ id: '59', name: 'Creative Chris', handle: '@creativechris', platform: 'youtube', tier: 'micro', followers: '82k', engagementRate: '4.9%', avgViews: '13k', category: 'art', avatar: 'https://ui-avatars.com/api/?name=Creative+Chris&background=f59e0b&color=fff&size=64', description: 'Multi-medium artist sharing techniques and tutorials.', tags: ['Art Tutorials', 'Mixed Media'] },
	{ id: '60', name: 'Gallery Grace', handle: '@gallerygrace', platform: 'instagram', tier: 'macro', followers: '690k', engagementRate: '3.4%', category: 'art', avatar: 'https://ui-avatars.com/api/?name=Gallery+Grace&background=8b5cf6&color=fff&size=64', description: 'Established artist with gallery representation.', tags: ['Gallery Artist', 'Fine Art'] },

	// SKINCARE
	{ id: '61', name: 'Skincare Sophie', handle: '@skincaresophie', platform: 'tiktok', tier: 'nano', followers: '8.1k', engagementRate: '7.8%', category: 'skincare', avatar: 'https://ui-avatars.com/api/?name=Skincare+Sophie&background=f472b6&color=fff&size=64', description: 'Skincare enthusiast sharing routine tips and product reviews.', tags: ['Skincare Routine', 'Product Reviews'] },
	{ id: '62', name: 'Dermatologist Dana', handle: '@dermatologistdana', platform: 'youtube', tier: 'micro', followers: '97k', engagementRate: '4.5%', avgViews: '15k', category: 'skincare', avatar: 'https://ui-avatars.com/api/?name=Dermatologist+Dana&background=ec4899&color=fff&size=64', description: 'Licensed dermatologist providing professional skincare advice.', tags: ['Medical Skincare', 'Expert Advice'] },
	{ id: '63', name: 'Glow Goddess Gina', handle: '@glowgoddessgina', platform: 'instagram', tier: 'macro', followers: '820k', engagementRate: '3.1%', category: 'skincare', avatar: 'https://ui-avatars.com/api/?name=Glow+Gina&background=f97316&color=fff&size=64', description: 'Skincare influencer with massive following and brand partnerships.', tags: ['Skincare Brand Partnerships', 'Glowing Skin'] },

	// MAKEUP
	{ id: '64', name: 'Makeup Mia', handle: '@makeupmia', platform: 'tiktok', tier: 'nano', followers: '9.2k', engagementRate: '8.6%', category: 'makeup', avatar: 'https://ui-avatars.com/api/?name=Makeup+Mia&background=db2777&color=fff&size=64', description: 'Creative makeup artist sharing bold looks and tutorials.', tags: ['Creative Makeup', 'Bold Looks'] },
	{ id: '65', name: 'Pro MUA Marcus', handle: '@promuamarcus', platform: 'youtube', tier: 'micro', followers: '103k', engagementRate: '4.7%', avgViews: '16k', category: 'makeup', avatar: 'https://ui-avatars.com/api/?name=Pro+Marcus&background=7c3aed&color=fff&size=64', description: 'Professional makeup artist working with celebrities.', tags: ['Professional Makeup', 'Celebrity MUA'] },
	{ id: '66', name: 'Contour Queen Carly', handle: '@contourqueencarly', platform: 'instagram', tier: 'macro', followers: '1.2M', engagementRate: '2.4%', category: 'makeup', avatar: 'https://ui-avatars.com/api/?name=Contour+Carly&background=be185d&color=fff&size=64', description: 'Makeup influencer known for flawless contouring techniques.', tags: ['Contouring', 'Makeup Techniques'] },

	// JEWELRY
	{ id: '67', name: 'Jewelry Jules', handle: '@jewelryjules', platform: 'instagram', tier: 'nano', followers: '7.6k', engagementRate: '7.2%', category: 'jewelry', avatar: 'https://ui-avatars.com/api/?name=Jewelry+Jules&background=fbbf24&color=fff&size=64', description: 'Handmade jewelry designer sharing her craft.', tags: ['Handmade Jewelry', 'Jewelry Design'] },
	{ id: '68', name: 'Bling Barry', handle: '@blingbarry', platform: 'youtube', tier: 'micro', followers: '86k', engagementRate: '4.8%', avgViews: '13k', category: 'jewelry', avatar: 'https://ui-avatars.com/api/?name=Bling+Barry&background=dc2626&color=fff&size=64', description: 'Jewelry expert reviewing luxury pieces and trends.', tags: ['Luxury Jewelry', 'Jewelry Reviews'] },
	{ id: '69', name: 'Diamond Diva Diana', handle: '@diamonddivadiana', platform: 'instagram', tier: 'macro', followers: '750k', engagementRate: '3.0%', category: 'jewelry', avatar: 'https://ui-avatars.com/api/?name=Diamond+Diana&background=1f2937&color=fff&size=64', description: 'High-end jewelry influencer showcasing exclusive pieces.', tags: ['Diamond Jewelry', 'Luxury Accessories'] },

	// LUXURY
	{ id: '70', name: 'Luxury Lifestyle Liam', handle: '@luxurylifestyleliam', platform: 'instagram', tier: 'nano', followers: '8.4k', engagementRate: '6.9%', category: 'luxury', avatar: 'https://ui-avatars.com/api/?name=Luxury+Liam&background=1e40af&color=fff&size=64', description: 'Aspiring luxury lifestyle content creator.', tags: ['Luxury Lifestyle', 'Aspirational Content'] },
	{ id: '71', name: 'Elite Emma', handle: '@eliteemma', platform: 'youtube', tier: 'micro', followers: '94k', engagementRate: '4.3%', avgViews: '14k', category: 'luxury', avatar: 'https://ui-avatars.com/api/?name=Elite+Emma&background=059669&color=fff&size=64', description: 'Luxury brand reviewer and lifestyle curator.', tags: ['Luxury Brands', 'Elite Lifestyle'] },
	{ id: '72', name: 'Millionaire Max', handle: '@millionairemax', platform: 'instagram', tier: 'macro', followers: '1.4M', engagementRate: '2.1%', category: 'luxury', avatar: 'https://ui-avatars.com/api/?name=Millionaire+Max&background=991b1b&color=fff&size=64', description: 'Ultra-wealthy influencer showcasing exclusive luxury experiences.', tags: ['Ultra Luxury', 'Exclusive Experiences'] },

	// COOKING
	{ id: '73', name: 'Cooking Claire', handle: '@cookingclaire', platform: 'tiktok', tier: 'nano', followers: '9.7k', engagementRate: '8.1%', category: 'cooking', avatar: 'https://ui-avatars.com/api/?name=Cooking+Claire&background=16a34a&color=fff&size=64', description: 'Home cook sharing quick and easy recipes.', tags: ['Quick Recipes', 'Home Cooking'] },
	{ id: '74', name: 'Chef Connor', handle: '@chefconnor', platform: 'youtube', tier: 'micro', followers: '112k', engagementRate: '4.6%', avgViews: '17k', category: 'cooking', avatar: 'https://ui-avatars.com/api/?name=Chef+Connor&background=ea580c&color=fff&size=64', description: 'Culinary school graduate teaching cooking techniques.', tags: ['Cooking Techniques', 'Culinary Education'] },
	{ id: '75', name: 'Master Chef Maya', handle: '@masterchefmaya', platform: 'instagram', tier: 'macro', followers: '980k', engagementRate: '2.7%', category: 'cooking', avatar: 'https://ui-avatars.com/api/?name=Master+Maya&background=b91c1c&color=fff&size=64', description: 'Award-winning chef with Michelin star experience.', tags: ['Michelin Star', 'Gourmet Cooking'] },

	// HOME
	{ id: '76', name: 'Home Helper Hannah', handle: '@homehelperhannah', platform: 'tiktok', tier: 'nano', followers: '8.8k', engagementRate: '7.5%', category: 'home', avatar: 'https://ui-avatars.com/api/?name=Home+Hannah&background=84cc16&color=fff&size=64', description: 'Sharing home organization and cleaning tips.', tags: ['Home Organization', 'Cleaning Tips'] },
	{ id: '77', name: 'Homeowner Henry', handle: '@homeownerhenry', platform: 'youtube', tier: 'micro', followers: '89k', engagementRate: '4.4%', avgViews: '14k', category: 'home', avatar: 'https://ui-avatars.com/api/?name=Homeowner+Henry&background=0891b2&color=fff&size=64', description: 'First-time homeowner sharing renovation journey.', tags: ['Home Renovation', 'DIY Home Projects'] },
	{ id: '78', name: 'Luxury Home Lisa', handle: '@luxuryhome lisa', platform: 'instagram', tier: 'macro', followers: '870k', engagementRate: '2.9%', category: 'home', avatar: 'https://ui-avatars.com/api/?name=Luxury+Lisa&background=6366f1&color=fff&size=64', description: 'Interior designer showcasing high-end home designs.', tags: ['Luxury Homes', 'Interior Design'] },

	// DECOR
	{ id: '79', name: 'Decor Daria', handle: '@decordaria', platform: 'instagram', tier: 'nano', followers: '7.3k', engagementRate: '8.2%', category: 'decor', avatar: 'https://ui-avatars.com/api/?name=Decor+Daria&background=ec4899&color=fff&size=64', description: 'Budget-friendly home decor and styling tips.', tags: ['Budget Decor', 'Home Styling'] },
	{ id: '80', name: 'Designer Dave', handle: '@designerdave', platform: 'youtube', tier: 'micro', followers: '91k', engagementRate: '4.7%', avgViews: '15k', category: 'decor', avatar: 'https://ui-avatars.com/api/?name=Designer+Dave&background=14b8a6&color=fff&size=64', description: 'Interior designer sharing decor trends and tips.', tags: ['Interior Design', 'Decor Trends'] },
	{ id: '81', name: 'Decoration Diva Donna', handle: '@decorationdivadonna', platform: 'instagram', tier: 'macro', followers: '710k', engagementRate: '3.2%', category: 'decor', avatar: 'https://ui-avatars.com/api/?name=Decoration+Donna&background=f59e0b&color=fff&size=64', description: 'High-end decorator with celebrity clientele.', tags: ['Celebrity Decorator', 'Luxury Decor'] },

	// DIY
	{ id: '82', name: 'DIY Danny', handle: '@diydanny', platform: 'tiktok', tier: 'nano', followers: '9.4k', engagementRate: '8.7%', category: 'diy', avatar: 'https://ui-avatars.com/api/?name=DIY+Danny&background=059669&color=fff&size=64', description: 'Creative DIY projects and life hacks.', tags: ['DIY Projects', 'Life Hacks'] },
	{ id: '83', name: 'Craft Master Carl', handle: '@craftmastercarl', platform: 'youtube', tier: 'micro', followers: '107k', engagementRate: '4.8%', avgViews: '16k', category: 'diy', avatar: 'https://ui-avatars.com/api/?name=Craft+Carl&background=dc2626&color=fff&size=64', description: 'Experienced crafter teaching DIY techniques.', tags: ['DIY Tutorials', 'Crafting Techniques'] },
	{ id: '84', name: 'DIY Queen Quincy', handle: '@diyqueenquincy', platform: 'instagram', tier: 'macro', followers: '890k', engagementRate: '2.8%', category: 'diy', avatar: 'https://ui-avatars.com/api/?name=DIY+Quincy&background=7c3aed&color=fff&size=64', description: 'DIY expert with massive following and brand partnerships.', tags: ['DIY Expert', 'Brand Partnerships'] },

	// CRAFTS
	{ id: '85', name: 'Crafty Chloe', handle: '@craftychloe', platform: 'instagram', tier: 'nano', followers: '8.9k', engagementRate: '7.6%', category: 'crafts', avatar: 'https://ui-avatars.com/api/?name=Crafty+Chloe&background=be185d&color=fff&size=64', description: 'Handmade crafts and creative projects.', tags: ['Handmade Crafts', 'Creative Projects'] },
	{ id: '86', name: 'Artisan Alex', handle: '@artisanalex', platform: 'youtube', tier: 'micro', followers: '98k', engagementRate: '4.5%', avgViews: '15k', category: 'crafts', avatar: 'https://ui-avatars.com/api/?name=Artisan+Alex&background=f472b6&color=fff&size=64', description: 'Traditional crafts and artisan techniques.', tags: ['Traditional Crafts', 'Artisan Techniques'] },
	{ id: '87', name: 'Craft Guru Grace', handle: '@craftgurugrace', platform: 'instagram', tier: 'macro', followers: '650k', engagementRate: '3.3%', category: 'crafts', avatar: 'https://ui-avatars.com/api/?name=Craft+Grace&background=1d4ed8&color=fff&size=64', description: 'Crafting influencer with massive community following.', tags: ['Crafting Community', 'Craft Inspiration'] },

	// ENTERTAINMENT
	{ id: '88', name: 'Entertainment Eddie', handle: '@entertainmenteddie', platform: 'tiktok', tier: 'nano', followers: '9.1k', engagementRate: '8.3%', category: 'entertainment', avatar: 'https://ui-avatars.com/api/?name=Entertainment+Eddie&background=991b1b&color=fff&size=64', description: 'Comedy content creator and entertainer.', tags: ['Comedy Content', 'Entertainment'] },
	{ id: '89', name: 'Show Biz Sarah', handle: '@showbizsarah', platform: 'youtube', tier: 'micro', followers: '115k', engagementRate: '4.2%', avgViews: '18k', category: 'entertainment', avatar: 'https://ui-avatars.com/api/?name=Show+Sarah&background=8b5cf6&color=fff&size=64', description: 'Entertainment industry insider sharing behind-the-scenes content.', tags: ['Behind The Scenes', 'Entertainment Industry'] },
	{ id: '90', name: 'Celebrity Insider Chris', handle: '@celebrityinsiderchris', platform: 'instagram', tier: 'macro', followers: '1.1M', engagementRate: '2.3%', category: 'entertainment', avatar: 'https://ui-avatars.com/api/?name=Celebrity+Chris&background=dc2626&color=fff&size=64', description: 'Celebrity news and entertainment content.', tags: ['Celebrity News', 'Entertainment Content'] },

	// PETS
	{ id: '91', name: 'Pet Parent Penny', handle: '@petparentpenny', platform: 'tiktok', tier: 'nano', followers: '8.2k', engagementRate: '8.9%', category: 'pets', avatar: 'https://ui-avatars.com/api/?name=Pet+Penny&background=14b8a6&color=fff&size=64', description: 'Dog mom sharing pet care tips and cute moments.', tags: ['Pet Care', 'Dog Mom'] },
	{ id: '92', name: 'Veterinarian Victor', handle: '@veterinarianvictor', platform: 'youtube', tier: 'micro', followers: '102k', engagementRate: '4.6%', avgViews: '16k', category: 'pets', avatar: 'https://ui-avatars.com/api/?name=Vet+Victor&background=16a34a&color=fff&size=64', description: 'Licensed veterinarian providing professional pet advice.', tags: ['Veterinary Advice', 'Pet Health'] },
	{ id: '93', name: 'Pet Influencer Piper', handle: '@petinfluencerpiper', platform: 'instagram', tier: 'macro', followers: '920k', engagementRate: '2.6%', category: 'pets', avatar: 'https://ui-avatars.com/api/?name=Pet+Piper&background=f97316&color=fff&size=64', description: 'Famous pet influencer with multiple animal companions.', tags: ['Pet Influencer', 'Animal Companions'] },

	// BOOKS
	{ id: '94', name: 'Bookworm Bella', handle: '@bookwormbella', platform: 'tiktok', tier: 'nano', followers: '7.7k', engagementRate: '8.5%', category: 'books', avatar: 'https://ui-avatars.com/api/?name=Bookworm+Bella&background=6366f1&color=fff&size=64', description: 'Avid reader sharing book recommendations and reviews.', tags: ['Book Reviews', 'Reading Recommendations'] },
	{ id: '95', name: 'Literary Luke', handle: '@literaryluke', platform: 'youtube', tier: 'micro', followers: '88k', engagementRate: '4.9%', avgViews: '14k', category: 'books', avatar: 'https://ui-avatars.com/api/?name=Literary+Luke&background=7c2d12&color=fff&size=64', description: 'Literature enthusiast discussing classic and modern books.', tags: ['Literature Discussion', 'Book Analysis'] },
	{ id: '96', name: 'Bestseller Beth', handle: '@bestsellerbeth', platform: 'instagram', tier: 'macro', followers: '740k', engagementRate: '3.1%', category: 'books', avatar: 'https://ui-avatars.com/api/?name=Bestseller+Beth&background=059669&color=fff&size=64', description: 'Published author and book influencer with massive following.', tags: ['Published Author', 'Book Influencer'] },

	// OUTDOOR
	{ id: '97', name: 'Outdoor Ollie', handle: '@outdoorollie', platform: 'tiktok', tier: 'nano', followers: '9.6k', engagementRate: '7.4%', category: 'outdoor', avatar: 'https://ui-avatars.com/api/?name=Outdoor+Ollie&background=84cc16&color=fff&size=64', description: 'Outdoor enthusiast sharing hiking and camping adventures.', tags: ['Hiking', 'Camping Adventures'] },
	{ id: '98', name: 'Adventure Andy', handle: '@adventureandy', platform: 'youtube', tier: 'micro', followers: '96k', engagementRate: '4.7%', avgViews: '15k', category: 'outdoor', avatar: 'https://ui-avatars.com/api/?name=Adventure+Andy&background=dc2626&color=fff&size=64', description: 'Extreme outdoor sports and adventure travel content.', tags: ['Extreme Sports', 'Adventure Travel'] },
	{ id: '99', name: 'Nature Navigator Nina', handle: '@naturenavigator nina', platform: 'instagram', tier: 'macro', followers: '810k', engagementRate: '2.9%', category: 'outdoor', avatar: 'https://ui-avatars.com/api/?name=Nature+Nina&background=0891b2&color=fff&size=64', description: 'Professional outdoor guide and nature photographer.', tags: ['Outdoor Guide', 'Nature Photography'] },

	// SUSTAINABILITY
	{ id: '100', name: 'Sustainable Sam', handle: '@sustainablesam', platform: 'tiktok', tier: 'nano', followers: '8.5k', engagementRate: '8.1%', category: 'sustainability', avatar: 'https://ui-avatars.com/api/?name=Sustainable+Sam&background=059669&color=fff&size=64', description: 'Eco-friendly lifestyle advocate sharing sustainable tips.', tags: ['Eco-Friendly', 'Sustainable Living'] },
	{ id: '101', name: 'Green Guru Gary', handle: '@greengurugary', platform: 'youtube', tier: 'micro', followers: '104k', engagementRate: '4.4%', avgViews: '16k', category: 'sustainability', avatar: 'https://ui-avatars.com/api/?name=Green+Gary&background=16a34a&color=fff&size=64', description: 'Environmental scientist promoting sustainable practices.', tags: ['Environmental Science', 'Sustainable Practices'] },
	{ id: '102', name: 'Earth Advocate Emma', handle: '@earthadvocateemma', platform: 'instagram', tier: 'macro', followers: '690k', engagementRate: '3.2%', category: 'sustainability', avatar: 'https://ui-avatars.com/api/?name=Earth+Emma&background=14b8a6&color=fff&size=64', description: 'Climate change activist and sustainability influencer.', tags: ['Climate Activism', 'Sustainability Influence'] },

	// BLOGGER INFLUENCERS (across categories)
	{ id: '103', name: 'Fitness Blog Fiona', handle: 'fitnessblogfiona.com', platform: 'bloggers', tier: 'nano', followers: '8.2k', engagementRate: '7.8%', category: 'fitness', avatar: 'https://ui-avatars.com/api/?name=Fitness+Fiona&background=ef4444&color=fff&size=64', description: 'Fitness blogger sharing workout routines and nutrition tips.', tags: ['Fitness Blogging', 'Workout Routines'] },
	{ id: '104', name: 'Tech Review Terry', handle: 'techreviewterry.blog', platform: 'bloggers', tier: 'micro', followers: '45k', engagementRate: '5.2%', category: 'tech', avatar: 'https://ui-avatars.com/api/?name=Tech+Terry&background=1d4ed8&color=fff&size=64', description: 'Technology blogger with in-depth product reviews.', tags: ['Tech Reviews', 'Product Analysis'] },
	{ id: '105', name: 'Fashion Forward Flora', handle: 'fashionforwardflora.com', platform: 'bloggers', tier: 'macro', followers: '120k', engagementRate: '4.1%', category: 'fashion', avatar: 'https://ui-avatars.com/api/?name=Fashion+Flora&background=db2777&color=fff&size=64', description: 'Fashion blogger covering trends and designer collaborations.', tags: ['Fashion Trends', 'Designer Collaborations'] },
	{ id: '106', name: 'Beauty Blog Bianca', handle: 'beautybianca.blog', platform: 'bloggers', tier: 'nano', followers: '9.1k', engagementRate: '8.3%', category: 'beauty', avatar: 'https://ui-avatars.com/api/?name=Beauty+Bianca&background=e11d48&color=fff&size=64', description: 'Beauty blogger focusing on sustainable and cruelty-free products.', tags: ['Sustainable Beauty', 'Cruelty-Free'] },
	{ id: '107', name: 'Travel Tales Tom', handle: 'traveltailstom.com', platform: 'bloggers', tier: 'micro', followers: '67k', engagementRate: '4.7%', category: 'travel', avatar: 'https://ui-avatars.com/api/?name=Travel+Tom&background=0d9488&color=fff&size=64', description: 'Travel blogger documenting off-the-beaten-path adventures.', tags: ['Adventure Travel', 'Travel Photography'] },
	{ id: '108', name: 'Foodie Blog Felix', handle: 'foodieblogfelix.net', platform: 'bloggers', tier: 'macro', followers: '89k', engagementRate: '3.9%', category: 'food', avatar: 'https://ui-avatars.com/api/?name=Foodie+Felix&background=ea580c&color=fff&size=64', description: 'Food blogger reviewing restaurants and sharing recipes.', tags: ['Restaurant Reviews', 'Recipe Development'] },
	{ id: '109', name: 'Lifestyle Laura', handle: 'lifestylelaura.blog', platform: 'bloggers', tier: 'nano', followers: '7.8k', engagementRate: '6.9%', category: 'lifestyle', avatar: 'https://ui-avatars.com/api/?name=Lifestyle+Laura&background=64748b&color=fff&size=64', description: 'Lifestyle blogger sharing minimalist living tips.', tags: ['Minimalist Living', 'Life Organization'] },
	{ id: '110', name: 'Parenting Pro Patricia', handle: 'parentingpropa tricia.com', platform: 'bloggers', tier: 'micro', followers: '52k', engagementRate: '5.1%', category: 'parenting', avatar: 'https://ui-avatars.com/api/?name=Parenting+Patricia&background=f472b6&color=fff&size=64', description: 'Parenting blogger with practical advice for modern families.', tags: ['Parenting Tips', 'Modern Families'] },
	{ id: '111', name: 'Finance Focus Fred', handle: 'financefocusfred.blog', platform: 'bloggers', tier: 'macro', followers: '98k', engagementRate: '3.8%', category: 'finance', avatar: 'https://ui-avatars.com/api/?name=Finance+Fred&background=16a34a&color=fff&size=64', description: 'Personal finance blogger helping people achieve financial independence.', tags: ['Financial Independence', 'Investment Strategy'] },
	{ id: '112', name: 'Home Design Hannah', handle: 'homedesignhannah.net', platform: 'bloggers', tier: 'nano', followers: '8.9k', engagementRate: '7.2%', category: 'home', avatar: 'https://ui-avatars.com/api/?name=Home+Hannah&background=84cc16&color=fff&size=64', description: 'Home design blogger sharing DIY projects and decor ideas.', tags: ['Home Design', 'DIY Projects'] }
]

export function getInfluencersByCategory(category: string): Influencer[] {
	return influencersDatabase.filter(influencer =>
		influencer.category.toLowerCase() === category.toLowerCase()
	)
}

export function getHighestEngagementInfluencer(influencers: Influencer[]): string | null {
	if (influencers.length === 0) return null;
	
	const highestEngagement = influencers.reduce((prev, current) => {
		const prevRate = parseFloat(prev.engagementRate.replace('%', ''));
		const currentRate = parseFloat(current.engagementRate.replace('%', ''));
		return currentRate > prevRate ? current : prev;
	});
	
	return highestEngagement.id;
}
