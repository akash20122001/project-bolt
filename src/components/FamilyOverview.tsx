import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Pill, 
  BookOpen, 
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Plus
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
      aiInsight: 'Great adherence this week!'
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
      aiInsight: 'Missed vitamin D yesterday'
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
      aiInsight: "Haven't logged sleep for 3 days — remind him?"
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
      aiInsight: 'Consistent mood tracking'
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

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center space-x-3">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Family Overview</h3>
            <p className="text-xs sm:text-sm text-gray-600">{familyMembers.length} family members</p>
          </div>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
        >
          <span className="text-xs sm:text-sm font-medium">{isExpanded ? 'Collapse' : 'View All'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Compact View */}
      {!isExpanded && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {familyMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative mb-2 sm:mb-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base mx-auto">
                  {member.avatar}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white ${
                  member.statusColor === 'green' ? 'bg-green-500' :
                  member.statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
              </div>
              <p className="font-medium text-gray-900 text-xs sm:text-sm truncate">{member.name.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{member.activeMeds} meds</p>
            </div>
          ))}
        </div>
      )}

      {/* Expanded View */}
      {isExpanded && (
        <div className="space-y-4">
          {familyMembers.map((member) => (
            <div key={member.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {member.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white ${
                      member.statusColor === 'green' ? 'bg-green-500' :
                      member.statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{member.name}</h4>
                      <span className="text-xs sm:text-sm text-gray-500">({member.age})</span>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(member.statusColor)}`}>
                        {member.role}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-2 sm:mt-3">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-pink-500" />
                        <div>
                          <p className="text-xs text-gray-500">Mood</p>
                          <p className="text-sm font-medium">{getMoodEmoji(member.moodScore)} {member.moodScore}/5</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Pill className="w-4 h-4 text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Active Meds</p>
                          <p className="text-sm font-medium">{member.activeMeds}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-green-500" />
                        <div>
                          <p className="text-xs text-gray-500">Last Journal</p>
                          <p className="text-sm font-medium">{member.lastJournal}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Insight */}
              <div className="mt-3 sm:mt-4 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <div className="flex items-start space-x-2">
                  {member.statusColor === 'red' ? (
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5" />
                  ) : (
                    <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5" />
                  )}
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-purple-900">AI Insight</p>
                    <p className="text-xs sm:text-sm text-purple-700 mt-1">{member.aiInsight}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add Family Member */}
          <button className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 text-gray-500 hover:border-purple-400 hover:text-purple-600 transition-colors">
            <div className="flex items-center justify-center space-x-2">
              <Plus className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">Add Family Member</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}