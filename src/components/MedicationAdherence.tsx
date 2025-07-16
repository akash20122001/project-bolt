import React from 'react';
import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

export function MedicationAdherence() {
  const adherenceData = [
    { day: 'Mon', date: 17, status: 'taken' },
    { day: 'Tue', date: 18, status: 'taken' },
    { day: 'Wed', date: 19, status: 'taken' },
    { day: 'Thu', date: 20, status: 'taken' },
    { day: 'Fri', date: 21, status: 'taken' },
    { day: 'Sat', date: 22, status: 'taken' },
    { day: 'Sun', date: 23, status: 'taken' },
    { day: 'Mon', date: 24, status: 'taken' },
    { day: 'Tue', date: 25, status: 'taken' },
    { day: 'Wed', date: 26, status: 'taken' },
    { day: 'Thu', date: 27, status: 'taken' },
    { day: 'Fri', date: 28, status: 'missed' },
    { day: 'Sat', date: 29, status: 'taken' },
    { day: 'Sun', date: 30, status: 'taken' },
    { day: 'Mon', date: 1, status: 'taken' },
    { day: 'Tue', date: 2, status: 'taken' },
    { day: 'Wed', date: 3, status: 'taken' },
    { day: 'Thu', date: 4, status: 'taken' },
    { day: 'Fri', date: 5, status: 'taken' },
    { day: 'Sat', date: 6, status: 'taken' },
    { day: 'Sun', date: 7, status: 'taken' },
    { day: 'Mon', date: 8, status: 'missed' },
    { day: 'Tue', date: 9, status: 'taken' },
    { day: 'Wed', date: 10, status: 'taken' },
    { day: 'Thu', date: 11, status: 'taken' },
    { day: 'Fri', date: 12, status: 'taken' },
    { day: 'Sat', date: 13, status: 'taken' },
    { day: 'Sun', date: 14, status: 'taken' },
    { day: 'Mon', date: 15, status: 'taken' },
    { day: 'Tue', date: 16, status: 'current' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'taken': return 'bg-green-500 hover:bg-green-600';
      case 'missed': return 'bg-red-500 hover:bg-red-600';
      case 'current': return 'bg-blue-500 hover:bg-blue-600 ring-2 ring-blue-300';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Medication Adherence</h3>
            <p className="text-sm text-gray-600">Last 30 days</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">93.3%</p>
            <p className="text-sm text-gray-500">Adherence</p>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        {adherenceData.map((item, index) => (
          <div
            key={index}
            className={`aspect-square rounded-lg ${getStatusColor(item.status)} flex items-center justify-center text-white text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105`}
          >
            {item.date}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Taken</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Missed</span>
          </div>
        </div>
        <p className="text-gray-500">28/30 days</p>
      </div>

      {/* AI Insights */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
        <div className="flex items-start space-x-3">
          <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-900">AI Pattern Analysis</p>
            <p className="text-sm text-blue-700 mt-1">
              You missed 2 doses on weekends — try rescheduling to earlier times?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}