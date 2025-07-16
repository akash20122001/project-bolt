import React from 'react';
import { TrendingUp, Activity, Heart, BarChart3 } from 'lucide-react';

export function HealthTrends() {
  const trendData = [
    { day: 'Mon', heartRate: 68, steps: 7200, sleep: 7.2 },
    { day: 'Tue', heartRate: 72, steps: 8100, sleep: 7.5 },
    { day: 'Wed', heartRate: 70, steps: 8542, sleep: 7.8 },
    { day: 'Thu', heartRate: 74, steps: 9200, sleep: 6.9 },
    { day: 'Fri', heartRate: 69, steps: 8800, sleep: 7.1 },
    { day: 'Sat', heartRate: 71, steps: 10200, sleep: 8.2 },
    { day: 'Sun', heartRate: 67, steps: 6800, sleep: 8.5 }
  ];

  const maxSteps = Math.max(...trendData.map(d => d.steps));
  const maxHeartRate = Math.max(...trendData.map(d => d.heartRate));
  const maxSleep = Math.max(...trendData.map(d => d.sleep));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-6 h-6 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Health Trends</h3>
            <p className="text-sm text-gray-600">Last 7 days</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">↗️</p>
            <p className="text-sm text-gray-500">Improving</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-48 mb-6">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="0"
              y1={40 * i}
              x2="400"
              y2={40 * i}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}
          
          {/* Steps line */}
          <polyline
            points={trendData.map((d, i) => `${i * 57 + 30},${160 - (d.steps / maxSteps) * 120}`).join(' ')}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Heart rate line */}
          <polyline
            points={trendData.map((d, i) => `${i * 57 + 30},${160 - (d.heartRate / maxHeartRate) * 120}`).join(' ')}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Sleep line */}
          <polyline
            points={trendData.map((d, i) => `${i * 57 + 30},${160 - (d.sleep / maxSleep) * 120}`).join(' ')}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Data points */}
          {trendData.map((d, i) => (
            <g key={i}>
              <circle
                cx={i * 57 + 30}
                cy={160 - (d.steps / maxSteps) * 120}
                r="4"
                fill="#10b981"
              />
              <circle
                cx={i * 57 + 30}
                cy={160 - (d.heartRate / maxHeartRate) * 120}
                r="4"
                fill="#ef4444"
              />
              <circle
                cx={i * 57 + 30}
                cy={160 - (d.sleep / maxSleep) * 120}
                r="4"
                fill="#8b5cf6"
              />
            </g>
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
          {trendData.map((d, i) => (
            <span key={i}>{d.day}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Steps</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Heart Rate</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600">Sleep</span>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
        <div className="flex items-start space-x-3">
          <Activity className="w-5 h-5 text-green-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-green-900">Sleep-Mood Connection</p>
            <p className="text-sm text-green-700 mt-1">
              8+ hours sleep correlates with better mood scores. Try maintaining consistent bedtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}