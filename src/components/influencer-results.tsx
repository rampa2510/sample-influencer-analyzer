import { Influencer } from "@/data/influencers";

interface InfluencerResultsProps {
  influencers: Influencer[];
  category: string;
}

export default function InfluencerResults({
  influencers,
  category,
}: InfluencerResultsProps) {
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
