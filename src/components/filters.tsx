"use client";

import { Platform, InfluencerTier } from "@/data/influencers";

interface FiltersProps {
  selectedPlatforms: Platform[];
  selectedTiers: InfluencerTier[];
  onPlatformChangeAction: (platforms: Platform[]) => void;
  onTierChangeAction: (tiers: InfluencerTier[]) => void;
  onClearAllAction: () => void;
  showDieHardFans: boolean;
  onDieHardFansChange: (show: boolean) => void;
  hasInfluencers: boolean;
}

export default function Filters({
  selectedPlatforms,
  selectedTiers,
  onPlatformChangeAction,
  onTierChangeAction,
  onClearAllAction,
  showDieHardFans,
  onDieHardFansChange,
  hasInfluencers,
}: FiltersProps) {
  const platforms: { value: Platform; label: string }[] = [
    { value: "instagram", label: "Instagram" },
    { value: "youtube", label: "YouTube" },
    { value: "tiktok", label: "TikTok" },
    { value: "bloggers", label: "Bloggers" },
  ];

  const tiers: { value: InfluencerTier; label: string; description: string }[] =
    [
      { value: "nano", label: "Nano (1k-10k)", description: "" },
      { value: "micro", label: "Micro (10k-100k)", description: "" },
      { value: "macro", label: "Macro (500k-1M)", description: "" },
    ];

  const handlePlatformToggle = (platform: Platform) => {
    const isSelected = selectedPlatforms.includes(platform);
    if (isSelected) {
      onPlatformChangeAction(selectedPlatforms.filter((p) => p !== platform));
    } else {
      onPlatformChangeAction([...selectedPlatforms, platform]);
    }
  };

  const handleTierToggle = (tier: InfluencerTier) => {
    const isSelected = selectedTiers.includes(tier);
    if (isSelected) {
      onTierChangeAction(selectedTiers.filter((t) => t !== tier));
    } else {
      onTierChangeAction([...selectedTiers, tier]);
    }
  };

  // Use hasInfluencers to determine if bloggers should be disabled (this represents whether there are blogger influencers available)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={onClearAllAction}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3 text-gray-900">Platform</h4>
          <div className="space-y-2">
            {platforms.map((platform) => {
              const isBlogger = platform.value === "bloggers";
              const shouldDisable = isBlogger && !hasInfluencers;
              
              return (
                <label
                  key={platform.value}
                  className={`flex items-center ${shouldDisable ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedPlatforms.includes(platform.value)}
                    onChange={() => !shouldDisable && handlePlatformToggle(platform.value)}
                    disabled={shouldDisable}
                    className="mr-3 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-800 font-medium">
                    {platform.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-gray-900">Influencer Tier</h4>
          <div className="space-y-2">
            {tiers.map((tier) => (
              <label
                key={tier.value}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedTiers.includes(tier.value)}
                  onChange={() => handleTierToggle(tier.value)}
                  className="mr-3 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-800 font-medium">
                  {tier.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-gray-900">Additional Filters</h4>
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showDieHardFans}
                onChange={(e) => onDieHardFansChange(e.target.checked)}
                className="mr-3 rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-800 font-medium">
                Die Hard Fans
              </span>
            </label>
            
            <label className="flex items-center cursor-not-allowed opacity-50">
              <input
                type="checkbox"
                checked={false}
                disabled={true}
                className="mr-3 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50"
              />
              <span className="text-sm text-gray-800 font-medium">
                Intelligent Lookalike Finder
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
