import React, { useState } from 'react';
import { 
  Plus, 
  Pill, 
  Calendar, 
  BookOpen, 
  Upload,
  X,
  Clock,
  FileText,
  Activity,
  Heart,
  Stethoscope,
  ClipboardList,
  Camera,
  Phone
} from 'lucide-react';

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      id: 'add-journal',
      label: 'Add Journal Entry',
      icon: BookOpen,
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Log your mood & symptoms'
    },
    {
      id: 'add-medication',
      label: 'Add Medication',
      icon: Pill,
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Quick med entry'
    },
    {
      id: 'add-prescription',
      label: 'Add Prescription',
      icon: FileText,
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Upload prescription'
    },
    {
      id: 'schedule-appointment',
      label: 'Book Appointment',
      icon: Calendar,
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'Schedule visit'
    },
    {
      id: 'log-vitals',
      label: 'Log Vitals',
      icon: Activity,
      color: 'bg-red-500 hover:bg-red-600',
      description: 'Blood pressure, weight'
    },
    {
      id: 'create-report',
      label: 'Generate Report',
      icon: ClipboardList,
      color: 'bg-indigo-500 hover:bg-indigo-600',
      description: 'Health summary'
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
      color: 'bg-yellow-500 hover:bg-yellow-600',
      description: 'Custom alert'
    },
    {
      id: 'emergency-contact',
      label: 'Emergency Contact',
      icon: Phone,
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Quick emergency call'
    }
  ];

  const handleActionClick = (actionId: string) => {
    console.log(`Action clicked: ${actionId}`);
    setIsOpen(false);
    
    // Handle specific actions
    switch (actionId) {
      case 'add-journal':
        // Navigate to journal page or open modal
        break;
      case 'add-medication':
        // Open medication form
        break;
      case 'add-prescription':
        // Open prescription upload
        break;
      case 'schedule-appointment':
        // Open appointment scheduler
        break;
      case 'log-vitals':
        // Open vitals logging form
        break;
      case 'create-report':
        // Generate health report
        break;
      case 'upload-document':
        // Open file upload
        break;
      case 'set-reminder':
        // Open reminder form
        break;
      case 'emergency-contact':
        // Trigger emergency contact
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Action Items */}
      <div className={`absolute bottom-20 right-0 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
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
                <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap min-w-[180px]">
                  <p className="text-sm font-semibold text-gray-900">{action.label}</p>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
                
                {/* Action Button */}
                <button
                  onClick={() => handleActionClick(action.id)}
                  className={`w-14 h-14 rounded-2xl ${action.color} text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center group-hover:rotate-12 relative`}
                >
                  <Icon className="w-6 h-6" />
                  
                  {/* Pulse animation for emergency contact */}
                  {action.id === 'emergency-contact' && (
                    <div className="absolute inset-0 rounded-2xl bg-red-600 animate-ping opacity-20"></div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center relative ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Plus className="w-7 h-7" />
        )}
        
        {/* Notification badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-white">3</span>
        </div>
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

      {/* Helper Text */}
      {!isOpen && (
        <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Quick Actions
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}