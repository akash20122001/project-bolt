import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Filter, 
  Clock, 
  MapPin,
  User,
  FileText,
  Pill,
  Brain,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 16)); // July 16, 2024
  const [showAddModal, setShowAddModal] = useState(false);

  const appointments = [
    {
      id: 1,
      type: 'appointment',
      title: 'Dr. Smith - Cardiology',
      date: '2024-07-18',
      time: '10:00 AM',
      location: 'Heart Center',
      status: 'upcoming',
      notes: 'Follow-up for blood pressure'
    },
    {
      id: 2,
      type: 'medication',
      title: 'Metformin Refill Due',
      date: '2024-07-20',
      time: '09:00 AM',
      location: 'CVS Pharmacy',
      status: 'reminder',
      notes: 'Pick up prescription'
    },
    {
      id: 3,
      type: 'test',
      title: 'Blood Work - Lab Results',
      date: '2024-07-22',
      time: '08:00 AM',
      location: 'LabCorp',
      status: 'scheduled',
      notes: 'Fasting required'
    },
    {
      id: 4,
      type: 'appointment',
      title: 'Dr. Johnson - Endocrinology',
      date: '2024-07-25',
      time: '02:30 PM',
      location: 'Diabetes Center',
      status: 'upcoming',
      notes: 'Quarterly diabetes check'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'appointment': return <User className="w-4 h-4" />;
      case 'medication': return <Pill className="w-4 h-4" />;
      case 'test': return <FileText className="w-4 h-4" />;
      default: return <CalendarIcon className="w-4 h-4" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'appointment': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'medication': return 'bg-green-100 text-green-700 border-green-200';
      case 'test': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Calendar & Appointments</h1>
            <p className="text-sm sm:text-base text-gray-600">Smart health planner with AI suggestions</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Appointment</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>

         {/* Upcoming Appointments - Full Width */}
       
        {/* Smart Calendar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Smart Calendar</h3>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 min-w-[150px] sm:min-w-[200px] text-center">
                {monthName}
              </h4>
              <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-500 py-2 sm:py-3">
                {day}
              </div>
            ))}
            {calendarDays.map(day => {
              const hasEvents = [18, 20, 22, 25].includes(day);
              const isToday = day === 16;
              
              return (
                <div
                  key={day}
                  className={`aspect-square rounded-lg border-2 p-1 sm:p-2 cursor-pointer transition-all hover:shadow-md ${
                    isToday 
                      ? 'border-blue-500 bg-blue-50' 
                      : hasEvents 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`text-xs sm:text-sm font-medium mb-1 ${isToday ? 'text-blue-700' : 'text-gray-900'}`}>
                    {day}
                  </div>
                  {hasEvents && (
                    <div className="flex flex-wrap gap-0.5 sm:gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                      {day === 20 && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>}
                      {day === 22 && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* This Week at a Glance */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">This Week at a Glance</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">8</div>
              <div className="text-xs sm:text-sm text-blue-700">Meds Due</div>
            </div>
            <div className="text-center p-3 bg-pink-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-pink-600">5</div>
              <div className="text-xs sm:text-sm text-pink-700">Moods Logged</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-green-600">3</div>
              <div className="text-xs sm:text-sm text-green-700">Journal Entries</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-purple-600">2</div>
              <div className="text-xs sm:text-sm text-purple-700">Appointments</div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-orange-900">AI Insight</p>
                <p className="text-xs sm:text-sm text-orange-700 mt-1">
                  Tuesday looks heavy — want to shift some meds or journaling?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Appointments Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">All Appointments</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select className="border border-gray-300 rounded-lg px-2 py-1 text-xs sm:text-sm">
                    <option>All Events</option>
                    <option>Appointments</option>
                    <option>Medications</option>
                    <option>Tests</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-xl p-3 sm:p-4 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg border ${getEventColor(appointment.type)}`}>
                          {getEventIcon(appointment.type)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{appointment.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-gray-600 mb-2 space-y-1 sm:space-y-0">
                            <div className="flex items-center space-x-1">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{new Date(appointment.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{appointment.location}</span>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500">{appointment.notes}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
                        <button className="text-xs sm:text-sm bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                          Reschedule
                        </button>
                        <button className="text-xs sm:text-sm bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full hover:bg-green-200 transition-colors">
                          Mark Done
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Suggestions & Smart Reminders */}
          <div className="space-y-6">
            {/* AI Suggestions */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-900">AI Suggestions</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-xl border border-purple-200">
                  <p className="text-sm font-medium text-purple-900 mb-2">Health Check Reminder</p>
                  <p className="text-sm text-purple-700 mb-3">
                    You haven't visited a doctor in 6 months — consider booking?
                  </p>
                  <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
                    Book Appointment
                  </button>
                </div>

                <div className="p-4 bg-white/60 rounded-xl border border-purple-200">
                  <p className="text-sm font-medium text-purple-900 mb-2">Schedule Optimization</p>
                  <p className="text-sm text-purple-700 mb-3">
                    Check if your next visit conflicts with your medication routine
                  </p>
                  <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
                    Auto-suggest Slots
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This Month</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Appointments</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">4</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Medication Refills</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">2</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Lab Tests</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">1</span>
                </div>
              </div>
            </div>
        
       
          </div>
        </div>
      </div>
    </div>
  );
}