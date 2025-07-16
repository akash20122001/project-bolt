import React, { useState } from 'react';
import { 
  BookOpen, 
  Plus, 
  Filter, 
  Smile,
  Frown,
  Meh,
  TrendingUp,
  Calendar,
  Tag,
  Brain,
  Heart,
  Activity
} from 'lucide-react';

export function JournalPage() {
  const [selectedMood, setSelectedMood] = useState(4);
  const [showNewEntry, setShowNewEntry] = useState(false);

  const moodEmojis = ['😢', '😕', '😐', '🙂', '😊'];
  const moodLabels = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];

  const journalEntries = [
    {
      id: 1,
      date: '2024-07-16',
      mood: 4,
      title: 'Feeling Great Today!',
      content: 'Had a wonderful morning walk and took all my medications on time. Energy levels are high and I feel optimistic about my health journey.',
      tags: ['exercise', 'medication', 'positive'],
      linkedMeds: ['Metformin', 'Vitamin D3'],
      symptoms: []
    },
    {
      id: 2,
      date: '2024-07-15',
      mood: 2,
      title: 'Headache and Fatigue',
      content: 'Woke up with a headache and feeling tired. Might be related to not sleeping well last night. Need to track sleep patterns better.',
      tags: ['headache', 'fatigue', 'sleep'],
      linkedMeds: [],
      symptoms: ['headache', 'fatigue']
    },
    {
      id: 3,
      date: '2024-07-14',
      mood: 3,
      title: 'Regular Day',
      content: 'Nothing special today. Took medications as scheduled. Had a normal day at work.',
      tags: ['routine', 'work'],
      linkedMeds: ['Metformin', 'Lisinopril'],
      symptoms: []
    }
  ];

  const moodData = [
    { day: 'Mon', mood: 3 },
    { day: 'Tue', mood: 4 },
    { day: 'Wed', mood: 4 },
    { day: 'Thu', mood: 2 },
    { day: 'Fri', mood: 3 },
    { day: 'Sat', mood: 4 },
    { day: 'Sun', mood: 5 }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Health Journal</h1>
            <p className="text-gray-600">Track your symptoms, emotions, and daily reflections</p>
          </div>
          <button 
            onClick={() => setShowNewEntry(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Entry</span>
          </button>
        </div>

        {/* Mood Tracker */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-6 h-6 text-pink-600" />
            <h3 className="text-lg font-semibold text-gray-900">Mood Tracker</h3>
          </div>

          {/* Mood Chart */}
          <div className="relative h-32 mb-6">
            <svg className="w-full h-full" viewBox="0 0 400 120">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map(i => (
                <line
                  key={i}
                  x1="0"
                  y1={24 * i}
                  x2="400"
                  y2={24 * i}
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />
              ))}
              
              {/* Mood line */}
              <polyline
                points={moodData.map((d, i) => `${i * 57 + 30},${96 - (d.mood * 20)}`).join(' ')}
                fill="none"
                stroke="#ec4899"
                strokeWidth="3"
                strokeLinecap="round"
              />
              
              {/* Data points */}
              {moodData.map((d, i) => (
                <circle
                  key={i}
                  cx={i * 57 + 30}
                  cy={96 - (d.mood * 20)}
                  r="4"
                  fill="#ec4899"
                />
              ))}
            </svg>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
              {moodData.map((d, i) => (
                <span key={i}>{d.day}</span>
              ))}
            </div>
          </div>

          {/* AI Mood Insights */}
          <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
            <div className="flex items-start space-x-3">
              <Brain className="w-5 h-5 text-pink-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-pink-900">Pattern Analysis</p>
                <p className="text-sm text-pink-700 mt-1">
                  Stress peaks after 5 hrs sleep. Your mood improves with 8+ hours of rest.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Journal Entries */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Recent Entries</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>All Entries</option>
                    <option>This Week</option>
                    <option>Symptoms</option>
                    <option>Positive</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {journalEntries.map((entry) => (
                  <div key={entry.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{moodEmojis[entry.mood - 1]}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{entry.title}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(entry.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{moodLabels[entry.mood - 1]}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{entry.content}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {entry.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Linked Data */}
                    {(entry.linkedMeds.length > 0 || entry.symptoms.length > 0) && (
                      <div className="pt-4 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {entry.linkedMeds.length > 0 && (
                            <div>
                              <p className="text-sm font-medium text-gray-700 mb-2">Linked Medications:</p>
                              <div className="flex flex-wrap gap-1">
                                {entry.linkedMeds.map((med, index) => (
                                  <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                    {med}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {entry.symptoms.length > 0 && (
                            <div>
                              <p className="text-sm font-medium text-gray-700 mb-2">Symptoms:</p>
                              <div className="flex flex-wrap gap-1">
                                {entry.symptoms.map((symptom, index) => (
                                  <span key={index} className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                                    {symptom}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Assistant & Quick Entry */}
          <div className="space-y-6">
            {/* Quick Mood Entry */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How are you feeling today?</h3>
              
              <div className="flex justify-between mb-4">
                {moodEmojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMood(index + 1)}
                    className={`text-2xl p-2 rounded-full transition-all ${
                      selectedMood === index + 1 
                        ? 'bg-blue-100 scale-110' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              
              <p className="text-center text-sm text-gray-600 mb-4">
                {moodLabels[selectedMood - 1]}
              </p>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors">
                Log Mood
              </button>
            </div>

            {/* AI Reflection Assistant */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-900">AI Reflection Assistant</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-xl border border-purple-200">
                  <p className="text-sm font-medium text-purple-900 mb-2">Reflection Prompt</p>
                  <p className="text-sm text-purple-700 mb-3">
                    You logged 'tired' frequently — did you sleep less that week?
                  </p>
                  <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
                    Reflect on This
                  </button>
                </div>

                <div className="p-4 bg-white/60 rounded-xl border border-purple-200">
                  <p className="text-sm font-medium text-purple-900 mb-2">Suggested Question</p>
                  <p className="text-sm text-purple-700 mb-3">
                    How did you feel after starting your new medication?
                  </p>
                  <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
                    Write Entry
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Entries</span>
                  <span className="text-sm font-semibold text-gray-900">7</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Avg Mood</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-semibold text-gray-900">3.6</span>
                    <span className="text-lg">🙂</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Symptoms Tracked</span>
                  <span className="text-sm font-semibold text-gray-900">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}