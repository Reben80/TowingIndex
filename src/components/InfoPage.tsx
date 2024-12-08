import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface InfoPageProps {
  onClose: () => void;
}

export function InfoPage({ onClose }: InfoPageProps) {
  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-6 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Rankings
        </button>

        <div className="max-w-3xl mx-auto">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Company Scoring Overview</h1>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This analysis evaluates companies based on four key categories:
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">1. Distance</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Measures average towing distance compared to the overall average. Companies with shorter distances score higher.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">2. Community Equity Index (CEI)</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Assesses how proportionate a company's service areas are to equitable demographics.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">3. Median Household Income (MHI)</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Based on Montgomery County's median income ($125,371 in 2023), this score reflects how well a company serves communities across different income levels.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">4. Speak Only English</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Evaluates alignment with the average population that speaks only English in service areas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}