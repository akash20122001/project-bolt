import React, { useState } from 'react';
import { 
  Plus, 
  Pill, 
  Calendar, 
  BookOpen, 
  Upload,
  X,
  Clock,
  FileText
} from 'lucide-react';

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      id: 'add-medication',
      label: 'Add Medication',
      icon: Pill,
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Quick med entry'
    },
    {
      id: 'log-symptom',
      label: 'Log Symptom',
      icon: BookOpen,
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Track how you feel'
    },
    {
      id: 'schedule-appointment',
      label: 'Book Appointment',
      icon: Calendar,
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'Schedule visit'
    },
    {
      id: 'upload-document',
      label: 'Upload Document',
      icon: Upload,
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Add medical file'
    },
    {
      id: 'set-reminder',
      label: 'Set Reminder',
      icon: Clock,
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Custom alert'
    },
    {
      id: 'quick-note',
      label: 'Quick Note',
      icon: FileText,
      color: 'bg-indigo-500 hover:bg-indigo-600',
      description: 'Jot something down'
    }
  ];

  const handleActionClick = (actionId: string) => {
    console.log(`Action clicked: ${actionId}`);
    setIsOpen(false);
    // Here you would typically trigger the appropriate modal or action
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Action Items */}
      <div className={`absolute bottom-20 right-0 space-y-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <div
              key={action.id}
              className="flex items-center space-x-3 group"
              style={{ 
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                transform: isOpen ? 'translateX(0)' : 'translateX(20px)'
              }}
            >
              {/* Label */}
              <div className="bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                <p className="text-sm font-semibold text-gray-900">{action.label}</p>
                <p className="text-xs text-gray-500">{action.description}</p>
              </div>
              
              {/* Action Button */}
              <button
                onClick={() => handleActionClick(action.id)}
                className={`w-14 h-14 rounded-2xl ${action.color} text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center group-hover:rotate-12`}
              >
                <Icon className="w-6 h-6" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Plus className="w-7 h-7" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 animate-ping opacity-20"></div>
      )}
    </div>
  );
}