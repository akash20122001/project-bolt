import React from 'react';
import { 
  Pill, 
  Calendar, 
  FileText, 
  BarChart3, 
  BookOpen,
  Home,
  Settings,
  Activity
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'blue' },
    { id: 'medications', label: 'Medications', icon: Pill, color: 'green' },
    { id: 'calendar', label: 'Calendar', icon: Calendar, color: 'purple' },
    { id: 'journal', label: 'Journal', icon: BookOpen, color: 'pink' },
    { id: 'documents', label: 'Documents', icon: FileText, color: 'orange' },
    { id: 'reports', label: 'Reports', icon: BarChart3, color: 'indigo' },
    { id: 'settings', label: 'Settings', icon: Settings, color: 'gray' }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive 
        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
        : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700',
      green: isActive 
        ? 'bg-green-500 text-white shadow-lg shadow-green-500/25' 
        : 'text-green-600 hover:bg-green-50 hover:text-green-700',
      purple: isActive 
        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' 
        : 'text-purple-600 hover:bg-purple-50 hover:text-purple-700',
      pink: isActive 
        ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25' 
        : 'text-pink-600 hover:bg-pink-50 hover:text-pink-700',
      orange: isActive 
        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' 
        : 'text-orange-600 hover:bg-orange-50 hover:text-orange-700',
      indigo: isActive 
        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' 
        : 'text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700',
      gray: isActive 
        ? 'bg-gray-500 text-white shadow-lg shadow-gray-500/25' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="w-72 bg-white/95 backdrop-blur-sm border-r border-gray-200/50 h-screen sticky top-0 shadow-xl">
      {/* Header */}
      <div className="p-8 border-b border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              MediLog
            </h1>
            <p className="text-sm text-gray-500 font-medium">Healthcare Dashboard</p>
          </div>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-sm">John Doe</p>
            <p className="text-xs text-gray-500">Patient ID: #12345</p>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${getColorClasses(item.color, isActive)}`}
              >
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-gray-100 group-hover:bg-white group-hover:shadow-md'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <span className="font-semibold text-sm">{item.label}</span>
                  {isActive && (
                    <div className="w-full h-0.5 bg-white/30 rounded-full mt-1"></div>
                  )}
                </div>
                {isActive && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-green-900">Health Score</p>
              <p className="text-xs text-green-700">85% - Good</p>
            </div>
          </div>
          <div className="mt-3 w-full bg-green-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}