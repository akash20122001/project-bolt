import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Pill, 
  BookOpen, 
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Plus,
  Activity,
  Calendar,
  Shield,
  Star,
  Clock
} from 'lucide-react';

export function FamilyOverview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const familyMembers = [
    {
      id: 1,
      name: 'John Doe',
      age: 45,
      role: 'Owner',
      avatar: 'JD',
      moodScore: 4,
      activeMeds: 3,
      lastJournal: '2 hours ago',
      healthStatus: 'stable',
      statusColor: 'green',
      aiInsight: 'Great adherence this week!',
      todayProgress: 85,
      weeklyStreak: 7,
      nextAppointment: 'Jul 25'
    },
    {
      id: 2,
      name: 'Sarah Doe',
      age: 42,
      role: 'Editor',
      avatar: 'SD',
      moodScore: 3,
      activeMeds: 2,
      lastJournal: '1 day ago',
      healthStatus: 'mild',
      statusColor: 'yellow',
      aiInsight: 'Missed vitamin D yesterday',
      todayProgress: 60,
      weeklyStreak: 5,
      nextAppointment: 'Aug 2'
    },
    {
      id: 3,
      name: 'Dad (Robert)',
      age: 68,
      role: 'Viewer',
      avatar: 'RD',
      moodScore: 2,
      activeMeds: 5,
      lastJournal: '3 days ago',
      healthStatus: 'attention',
      statusColor: 'red',
      aiInsight: "Haven't logged sleep for 3 days — remind him?",
      todayProgress: 40,
      weeklyStreak: 2,
      nextAppointment: 'Jul 20'
    },
    {
      id: 4,
      name: 'Emma Doe',
      age: 16,
      role: 'Viewer',
      avatar: 'ED',
      moodScore: 4,
      activeMeds: 1,
      lastJournal: '5 hours ago',
      healthStatus: 'stable',
      statusColor: 'green',
      aiInsight: 'Consistent mood tracking',
      todayProgress: 90,
      weeklyStreak: 6,
      nextAppointment: 'Aug 15'
    }
  ];

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-100 text-green-700 border-green-200';
      case 'yellow': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'red': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getMoodEmoji = (score: number) => {
    const emojis = ['😢', '😕', '😐', '🙂', '😊'];
    return emojis[score - 1] || '😐';
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-xl">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Family Health Hub</h3>
            <p className="text-xs sm:text-sm text-gray-600">{familyMembers.length} family members • 3 need attention</p>
          </div>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-lg"
        >
          <span className="text-xs sm:text-sm font-medium">{isExpanded ? 'Collapse' : 'View Details'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Family Stats Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 sm:p-4 border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-4 h-4 text-green-600" />
            <span className="text-xs sm:text-sm font-medium text-green-900">Active Today</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-green-700">3/4</p>
          <p className="text-xs text-green-600">Members logged in</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 sm:p-4 border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Pill className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-900">Medications</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-blue-700">11</p>
          <p className="text-xs text-blue-600">Total active</p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-3 sm:p-4 border border-pink-200">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="w-4 h-4 text-pink-600" />
            <span className="text-xs sm:text-sm font-medium text-pink-900">Avg Mood</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-pink-700">3.3</p>
          <p className="text-xs text-pink-600">This week</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-3 sm:p-4 border border-orange-200">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="w-4 h-4 text-orange-600" />
            <span className="text-xs sm:text-sm font-medium text-orange-900">Upcoming</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-orange-700">2</p>
          <p className="text-xs text-orange-600">Appointments</p>
        </div>
      </div>

      {/* Compact View */}
      {!isExpanded && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {familyMembers.map((member) => (
            <div key={member.id} className="relative group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 border border-gray-200 hover:shadow-md transition-all cursor-pointer">
                <div className="text-center">
                  <div className="relative mb-2 sm:mb-3 mx-auto">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base mx-auto relative">
                      {member.avatar}
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white ${
                        member.statusColor === 'green' ? 'bg-green-500' :
                        member.statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    </div>
                  </div>
                  <p className="font-medium text-gray-900 text-xs sm:text-sm truncate mb-1">{member.name.split(' ')[0]}</p>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <span className="text-lg">{getMoodEmoji(member.moodScore)}</span>
                    <span className="text-xs text-gray-500">{member.activeMeds} meds</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                    <div 
                      className={`h-1.5 rounded-full transition-all ${getProgressColor(member.todayProgress)}`}
                      style={{ width: `${member.todayProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">{member.todayProgress}% today</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expanded View */}
      {isExpanded && (
        <div className="space-y-4">
          {familyMembers.map((member) => (
            <div key={member.id} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {member.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white ${
                      member.statusColor === 'green' ? 'bg-green-500' :
                      member.statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{member.name}</h4>
                      <span className="text-sm text-gray-500">({member.age})</span>
                      <span className={`px-2 py-1 rounded-full text-xs border font-medium ${getStatusColor(member.statusColor)}`}>
                        {member.role}
                      </span>
                    </div>
                    
                    {/* Health Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-3">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <Heart className="w-4 h-4 text-pink-500" />
                          <span className="text-xs font-medium text-gray-700">Mood</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-lg">{getMoodEmoji(member.moodScore)}</span>
                          <span className="text-sm font-semibold text-gray-900">{member.moodScore}/5</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <Pill className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-medium text-gray-700">Medications</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{member.activeMeds} active</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs font-medium text-gray-700">Streak</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{member.weeklyStreak} days</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="w-4 h-4 text-green-500" />
                          <span className="text-xs font-medium text-gray-700">Next Visit</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{member.nextAppointment}</p>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Today's Progress</span>
                        <span className="text-sm font-semibold text-gray-900">{member.todayProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${getProgressColor(member.todayProgress)}`}
                          style={{ width: `${member.todayProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Insight */}
              <div className="mt-4 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <div className="flex items-start space-x-2">
                  {member.statusColor === 'red' ? (
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-medium text-purple-900">AI Health Insight</p>
                    <p className="text-xs sm:text-sm text-purple-700 mt-1">{member.aiInsight}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
                        View Details
                      </button>
                      {member.statusColor === 'red' && (
                        <button className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full hover:bg-orange-700 transition-colors">
                          Send Reminder
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add Family Member */}
          <button className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 text-gray-500 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all group">
            <div className="flex items-center justify-center space-x-3">
              <div className="p-2 bg-gray-200 group-hover:bg-purple-200 rounded-full transition-colors">
                <Plus className="w-5 h-5" />
              </div>
              <div className="text-center">
                <span className="font-medium text-sm sm:text-base">Add Family Member</span>
                <p className="text-xs text-gray-400 group-hover:text-purple-500 mt-1">Invite someone to join your health journey</p>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}