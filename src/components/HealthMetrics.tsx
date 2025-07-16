import React from 'react';
import { Droplets, Moon, Activity, Heart, Smile } from 'lucide-react';

export function HealthMetrics() {
  const metrics = [
    {
      icon: Droplets,
      label: 'Water Intake',
      value: '6',
      unit: 'glasses',
      progress: 75,
      color: 'blue',
      subtitle: '6 / 8 glasses',
      change: '+2 from yesterday'
    },
    {
      icon: Moon,
      label: 'Sleep Duration',
      value: '7.5',
      unit: 'hours',
      progress: 85,
      color: 'purple',
      subtitle: 'Good',
      change: 'Quality improved'
    },
    {
      icon: Activity,
      label: 'Steps',
      value: '8,542',
      unit: 'steps',
      progress: 85,
      color: 'green',
      subtitle: '8,542 / 10,000 steps',
      change: '+1,200 from avg'
    },
    {
      icon: Heart,
      label: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      progress: 90,
      color: 'red',
      subtitle: 'Normal',
      change: 'Weekly avg: 74'
    },
    {
      icon: Smile,
      label: 'Mood',
      value: 'Happy',
      unit: '',
      progress: 95,
      color: 'yellow',
      subtitle: 'Great',
      change: 'Improving trend'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-600',
      purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600',
      green: 'from-green-500 to-green-600 bg-green-50 text-green-600',
      red: 'from-red-500 to-red-600 bg-red-50 text-red-600',
      yellow: 'from-yellow-500 to-yellow-600 bg-yellow-50 text-yellow-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mb-6 sm:mb-8">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const colorClasses = getColorClasses(metric.color);
        
        return (
          <div key={metric.label} className="bg-white rounded-2xl p-3 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl ${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} flex items-center justify-center`}>
                <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="text-right">
                <p className="text-lg sm:text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-xs sm:text-sm text-gray-500">{metric.unit}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs sm:text-sm font-medium text-gray-700">{metric.label}</p>
                <p className="text-xs text-gray-500 hidden sm:block">{metric.subtitle}</p>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}
                  style={{ width: `${metric.progress}%` }}
                ></div>
              </div>
              
              <p className="text-xs text-gray-500 hidden sm:block">{metric.change}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}