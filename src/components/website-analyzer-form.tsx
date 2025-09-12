"use client";

import React, { useActionState, useState } from "react";
import { analyzeWebsite } from "@/app/actions/analyze-website";
import {
  getInfluencersByCategory,
  Platform,
  InfluencerTier,
  Influencer,
} from "@/data/influencers";
import InfluencerResults from "./influencer-results";
import Filters from "./filters";

export default function WebsiteAnalyzerForm() {
  const [state, formAction, isPending] = useActionState(analyzeWebsite, null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([
    "instagram",
    "youtube",
    "tiktok",
  ]);
  const [selectedTiers, setSelectedTiers] = useState<InfluencerTier[]>([
    "nano",
    "micro",
    "macro",
  ]);
  const [showDieHardFans, setShowDieHardFans] = useState<boolean>(true);

  const filteredInfluencers =
    state?.success && state?.keyword
      ? getInfluencersByCategory(state.keyword).filter(
          (influencer: Influencer) => {
            const isPlatformMatch =
              selectedPlatforms.length === 0 ||
              selectedPlatforms.includes(influencer.platform);
            const isTierMatch =
              selectedTiers.length === 0 ||
              selectedTiers.includes(influencer.tier);
            return isPlatformMatch && isTierMatch;
          },
        )
      : [];

  // Check if there are any blogger influencers in the current category
  const allInfluencersInCategory =
    state?.success && state?.keyword
      ? getInfluencersByCategory(state.keyword)
      : [];
  const hasBloggerInfluencers = allInfluencersInCategory.some(
    (influencer) => influencer.platform === "bloggers",
  );

  // Effect to automatically uncheck bloggers if no blogger influencers exist
  React.useEffect(() => {
    if (
      state?.success &&
      !hasBloggerInfluencers &&
      selectedPlatforms.includes("bloggers")
    ) {
      setSelectedPlatforms((prev) => prev.filter((p) => p !== "bloggers"));
    }
  }, [state?.success, hasBloggerInfluencers, selectedPlatforms]);

  const handleClearAllFilters = () => {
    const defaultPlatforms = ["instagram", "youtube", "tiktok"];
    if (hasBloggerInfluencers) {
      defaultPlatforms.push("bloggers");
    }
    setSelectedPlatforms(defaultPlatforms);
    setSelectedTiers(["nano", "micro", "macro"]);
    setShowDieHardFans(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
          <div className="text-center mb-6 lg:mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
              AI-Powered Influencer Matching
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-2 font-medium">
              Find perfect influencer in seconds
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Crafted to meet your needs using AI
            </p>
          </div>

          <form action={formAction} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                name="websiteUrl"
                placeholder="Paste your website, product, or social media URL here..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                required
                disabled={isPending}
              />
              <button
                type="submit"
                disabled={isPending}
                className="relative px-4 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white rounded-2xl hover:from-black hover:via-purple-800 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed font-black text-sm sm:text-xl flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 min-w-0 animate-pulse hover:animate-none border-4 border-cyan-400 hover:border-cyan-300"
                style={{
                  background: !isPending ? 'linear-gradient(45deg, #0a0a0a, #1a1a2e, #16213e, #0f3460, #533483, #2d1b69, #0e4b99, #2a5298)' : undefined,
                  backgroundSize: '800% 800%',
                  animation: !isPending ? 'gradient 4s ease infinite, pulse 2s infinite' : undefined
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                {isPending && (
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-6 sm:w-6 border-3 border-white border-t-transparent flex-shrink-0 z-10"></div>
                )}
                <span className="relative z-10 font-black tracking-wider text-center drop-shadow-lg">
                  <span className="hidden sm:inline">
                    {isPending
                      ? "🔍 ANALYZING..."
                      : "🚀 FIND YOUR INFLUENCERS INSTANTLY"}
                  </span>
                  <span className="sm:hidden">
                    {isPending ? "🔍 ANALYZING..." : "🚀 FIND YOUR INFLUENCERS"}
                  </span>
                </span>
              </button>
            </div>
          </form>

          {/* Loading State */}
          {isPending && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent"></div>
                <p className="text-blue-700">
                  Analyzing your website with AI to find the perfect influencer
                  category...
                </p>
              </div>
            </div>
          )}

          {state?.error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-red-600 font-medium">Analysis Failed</p>
                  <p className="text-red-600 text-sm">{state.error}</p>
                </div>
              </div>
            </div>
          )}

          {state?.success && state?.keyword && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-green-600">
                  Detected category:{" "}
                  <span className="font-semibold">{state.keyword}</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {state?.success && state?.keyword && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Filters
                selectedPlatforms={selectedPlatforms}
                selectedTiers={selectedTiers}
                onPlatformChangeAction={setSelectedPlatforms}
                onTierChangeAction={setSelectedTiers}
                onClearAllAction={handleClearAllFilters}
                showDieHardFans={showDieHardFans}
                onDieHardFansChange={setShowDieHardFans}
                hasInfluencers={hasBloggerInfluencers}
              />
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <InfluencerResults
                influencers={filteredInfluencers}
                category={state.keyword}
                showDieHardFans={showDieHardFans}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
