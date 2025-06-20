import { Influencer, getHighestEngagementInfluencer } from "@/data/influencers";

interface InfluencerResultsProps {
  influencers: Influencer[];
  category: string;
  showDieHardFans?: boolean;
}

export default function InfluencerResults({
  influencers,
  category,
  showDieHardFans = true,
}: InfluencerResultsProps) {
  const highestEngagementId = getHighestEngagementInfluencer(influencers);
  if (influencers.length === 0) {
    return (
      <div className="mt-8 text-center">
        <p className="text-gray-900">
          No influencers found for the "{category}" category.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Suggested Influencers
        </h2>
        <span className="text-gray-700">
          Showing {influencers.length} results
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {influencers.map((influencer) => (
          <div
            key={influencer.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden relative">
                <img
                  src={`https://avatar.iran.liara.run/public/${influencer.id}`}
                  alt={influencer.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = "flex";
                    }
                  }}
                />
                <span className="absolute inset-0 text-xl font-bold text-gray-700 bg-gray-100 rounded-full items-center justify-center hidden">
                  {influencer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {influencer.name}
                  </h3>
                  <span className="text-gray-600">{influencer.handle}</span>
                </div>

                <div className="flex gap-4 mb-3 text-sm text-gray-800">
                  <div className="flex gap-1">
                    <span className="font-medium text-gray-900">
                      {influencer.followers}
                    </span>
                    <span className="text-gray-700">
                      {influencer.platform === "youtube"
                        ? "Subscribers"
                        : "Followers"}
                    </span>
                  </div>

                  {influencer.avgViews && (
                    <div className="flex gap-1">
                      <span className="font-medium text-gray-900">
                        {influencer.avgViews}
                      </span>
                      <span className="text-gray-700">Avg. Views</span>
                    </div>
                  )}

                  <div className="flex gap-1">
                    <span className="font-medium text-gray-900">
                      {influencer.engagementRate}
                    </span>
                    <span className="text-gray-700">Eng. Rate</span>
                  </div>
                </div>

                {showDieHardFans && influencer.id === highestEngagementId && (
                  <div className="mb-3">
                    <div className="inline-flex items-center gap-1 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      DIE HARD FANS
                    </div>
                  </div>
                )}

                <p className="text-gray-700 text-sm mb-3">
                  {influencer.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {influencer.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded capitalize font-medium">
                    {influencer.platform}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
