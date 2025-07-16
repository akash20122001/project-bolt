import React from 'react';
import { 
  Activity, 
  Heart, 
  Droplets, 
  Moon, 
  TrendingUp, 
  Calendar,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { HealthMetrics } from './HealthMetrics';
import { MedicationAdherence } from './MedicationAdherence';
import { UpcomingMedications } from './UpcomingMedications';
import { HealthTrends } from './HealthTrends';
import { FamilyOverview } from './FamilyOverview';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold mb-2">Hi John, here's your personalized health update</h2>
              <p className="text-blue-100 flex items-center text-sm sm:text-base">
                <TrendingUp className="w-4 h-4 mr-2" />
                You've taken all your meds 5 days in a row — Great job! 🎉
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-sm text-blue-100">Today</p>
              <p className="text-base sm:text-lg font-semibold">Wednesday, Jul 16</p>
            </div>
          </div>
        </div>

        {/* Health Metrics */}
        <HealthMetrics />

        {/* Family Overview Widget */}
        <FamilyOverview />

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <MedicationAdherence />
          <HealthTrends />
        </div>

        {/* Upcoming Medications */}
        <UpcomingMedications />
      </main>
    </div>
  );
}