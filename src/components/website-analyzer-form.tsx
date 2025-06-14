"use client";

import { useActionState, useState } from "react";
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
    "bloggers",
  ]);
  const [selectedTiers, setSelectedTiers] = useState<InfluencerTier[]>([
    "nano",
    "micro",
    "macro",
  ]);

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

  const handleClearAllFilters = () => {
    setSelectedPlatforms(["instagram", "youtube", "tiktok", "bloggers"]);
    setSelectedTiers(["nano", "micro", "macro"]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              AI Influencer Discovery
            </h1>
            <p className="text-gray-600">
              Paste a URL to analyze and find the perfect influencers for your
              brand.
            </p>
          </div>

          <form action={formAction} className="space-y-4">
            <div className="flex gap-4">
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
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
              >
                {isPending && (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                )}
                {isPending ? "Analyzing..." : "Analyze & Find Influencers"}
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Filters
                selectedPlatforms={selectedPlatforms}
                selectedTiers={selectedTiers}
                onPlatformChangeAction={setSelectedPlatforms}
                onTierChangeAction={setSelectedTiers}
                onClearAllAction={handleClearAllFilters}
              />
            </div>

            <div className="lg:col-span-3">
              <InfluencerResults
                influencers={filteredInfluencers}
                category={state.keyword}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
