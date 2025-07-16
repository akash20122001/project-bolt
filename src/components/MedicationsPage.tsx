import React, { useState } from 'react';
import { MedicationAIAssistant } from './MedicationAIAssistant';
import { 
  Plus, 
  Filter, 
  Calendar as CalendarIcon, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Brain,
  Pill
} from 'lucide-react';

export function MedicationsPage() {
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [selectedDate, setSelectedDate] = useState('2024-07-16');
  const [showAddModal, setShowAddModal] = useState(false);

  const medications = [
    {
      id: 1,
      name: 'Metformin',
      dosage: '500mg',
      time: '08:00',
      status: 'taken',
      priority: 'high',
      type: 'Doctor Prescribed',
      diagnosis: 'Type 2 Diabetes',
      recurring: true,
      color: 'red'
    },
    {
      id: 2,
      name: 'Vitamin D3',
      dosage: '1000 IU',
      time: '08:00',
      status: 'pending',
      priority: 'low',
      type: 'Supplement',
      diagnosis: 'Vitamin Deficiency',
      recurring: true,
      color: 'yellow'
    },
    {
      id: 3,
      name: 'Lisinopril',
      dosage: '10mg',
      time: '12:00',
      status: 'taken',
      priority: 'high',
      type: 'Doctor Prescribed',
      diagnosis: 'Hypertension',
      recurring: true,
      color: 'red'
    },
    {
      id: 4,
      name: 'Omega-3',
      dosage: '1000mg',
      time: '18:00',
      status: 'pending',
      priority: 'medium',
      type: 'Supplement',
      diagnosis: 'Heart Health',
      recurring: true,
      color: 'blue'
    }
  ];

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'taken': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'missed': return <XCircle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-blue-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Medications</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage your medication schedule and track adherence</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Medication</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>

        {/* Weekly Adherence Chart */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Weekly Adherence</h3>
            </div>
            <div className="text-right">
              <p className="text-xl sm:text-2xl font-bold text-green-600">88%</p>
              <p className="text-xs sm:text-sm text-gray-500">This week</p>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              const adherence = [100, 100, 75, 100, 50, 100, 100][index];
              return (
                <div key={day} className="text-center">
                  <div className="text-xs sm:text-sm font-medium text-gray-600 mb-2">{day}</div>
                  <div className="h-16 sm:h-20 bg-gray-200 rounded-lg relative overflow-hidden">
                    <div 
                      className={`absolute bottom-0 left-0 right-0 rounded-lg transition-all ${
                        adherence === 100 ? 'bg-green-500' : 
                        adherence >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ height: `${adherence}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{adherence}%</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar Schedule */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Medication Schedule</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('month')}
                    className={`px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      viewMode === 'month' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Month
                  </button>
                  <button
                    onClick={() => setViewMode('week')}
                    className={`px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      viewMode === 'week' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Week
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {calendarDays.map(day => (
                  <div
                    key={day}
                    className={`aspect-square rounded-lg border-2 p-1 sm:p-2 cursor-pointer transition-all hover:shadow-md ${
                      day === 16 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-medium text-gray-900 mb-1">{day}</div>
                    <div className="flex flex-wrap gap-0.5 sm:gap-1">
                      {day === 16 && (
                        <>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Medication Table */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Daily Schedule - Wednesday, July 16</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select className="border border-gray-300 rounded-lg px-2 py-1 text-xs sm:text-sm">
                    <option>All Medications</option>
                    <option>Morning</option>
                    <option>Evening</option>
                    <option>High Priority</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Status</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Time</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Medication</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Dosage</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Priority</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Type</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medications.map((med) => (
                      <tr key={med.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 sm:py-4 px-2 sm:px-4">
                          {getStatusIcon(med.status)}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 font-medium text-gray-900 text-sm sm:text-base">{med.time}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4">
                          <div>
                            <p className="font-medium text-gray-900 text-sm sm:text-base">{med.name}</p>
                            <p className="text-xs sm:text-sm text-gray-500">{med.diagnosis}</p>
                          </div>
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-sm sm:text-base">{med.dosage}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(med.priority)}`}>
                            {med.priority}
                          </span>
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs sm:text-sm text-gray-600">{med.type}</span>
                            {med.recurring && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                                Recurring
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-500 hover:text-blue-600 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-500 hover:text-red-600 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* AI Suggestions Sidebar */}
          <div className="space-y-6">
            {/* Refill Soon Indicator */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-4 sm:p-6 border border-orange-200">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                <h3 className="text-base sm:text-lg font-semibold text-orange-900">Refill Soon</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-white/60 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-900">Metformin</p>
                      <p className="text-xs text-orange-700">3 days remaining</p>
                    </div>
                    <button className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full hover:bg-orange-700 transition-colors">
                      Refill
                    </button>
                  </div>
                </div>
                
                <div className="p-3 bg-white/60 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-900">Lisinopril</p>
                      <p className="text-xs text-orange-700">1 week remaining</p>
                    </div>
                    <button className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full hover:bg-orange-700 transition-colors">
                      Refill
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Health Insights */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                <h3 className="text-base sm:text-lg font-semibold text-purple-900">AI Health Insights</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-xl border border-purple-200">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-purple-900">Schedule Optimization</p>
                      <p className="text-xs sm:text-sm text-purple-700 mt-1">
                        You often miss evening meds — suggest moving to earlier slot?
                      </p>
                      <button className="mt-2 text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/60 rounded-xl border border-purple-200">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-purple-900">Course Completion</p>
                      <p className="text-xs sm:text-sm text-purple-700 mt-1">
                        You've completed a 7-day antibiotic — consider marking as completed?
                      </p>
                      <button className="mt-2 text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors">
                        Mark Complete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medication History */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent History</h3>
              </div>
              
              <div className="space-y-3 max-h-48 sm:max-h-64 overflow-y-auto">
                {[
                  { med: 'Metformin 500mg', time: '08:00', status: 'taken', date: 'Today' },
                  { med: 'Vitamin D3 1000 IU', time: '08:00', status: 'taken', date: 'Today' },
                  { med: 'Lisinopril 10mg', time: '12:00', status: 'taken', date: 'Today' },
                  { med: 'Omega-3 1000mg', time: '18:00', status: 'missed', date: 'Yesterday' },
                  { med: 'Metformin 500mg', time: '08:00', status: 'taken', date: 'Yesterday' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{item.med}</p>
                        <p className="text-xs text-gray-500">{item.date} at {item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Assistant */}
      <MedicationAIAssistant />
    </div>
  );
}