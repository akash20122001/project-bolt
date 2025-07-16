import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Users, 
  Lock, 
  Settings as SettingsIcon,
  Download,
  Camera,
  Phone,
  Mail,
  MapPin,
  Heart,
  AlertTriangle,
  Smartphone,
  Monitor,
  Globe,
  Eye,
  EyeOff,
  Plus,
  Edit,
  Trash2,
  Crown,
  UserCheck,
  UserX
} from 'lucide-react';

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile');
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
    aiSuggestions: true,
    medicationReminders: true,
    appointmentReminders: true,
    familyUpdates: false
  });
  
  const [security, setSecurity] = useState({
    twoFactor: false,
    biometric: true,
    sessionTimeout: '30'
  });

  const [selectedFamily, setSelectedFamily] = useState('john');

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User, color: 'blue' },
    { id: 'notifications', label: 'Notifications', icon: Bell, color: 'yellow' },
    { id: 'family', label: 'Family', icon: Users, color: 'purple' },
    { id: 'privacy', label: 'Privacy', icon: Shield, color: 'green' },
    { id: 'security', label: 'Security', icon: Lock, color: 'red' }
  ];

  const familyMembers = [
    {
      id: 'john',
      name: 'John Doe',
      role: 'Owner',
      avatar: 'JD',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      permissions: ['read', 'write', 'admin']
    },
    {
      id: 'sarah',
      name: 'Sarah Doe',
      role: 'Editor',
      avatar: 'SD',
      email: 'sarah@example.com',
      phone: '+1 (555) 123-4568',
      permissions: ['read', 'write']
    },
    {
      id: 'robert',
      name: 'Dad (Robert)',
      role: 'Viewer',
      avatar: 'RD',
      email: 'robert@example.com',
      phone: '+1 (555) 123-4569',
      permissions: ['read']
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Owner': return <Crown className="w-4 h-4 text-yellow-500" />;
      case 'Editor': return <UserCheck className="w-4 h-4 text-blue-500" />;
      case 'Viewer': return <Eye className="w-4 h-4 text-gray-500" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      {/* Profile Picture */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Picture</h3>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              JD
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">John Doe</h4>
            <p className="text-sm text-gray-600">Patient ID: #12345</p>
            <button className="mt-2 text-sm text-blue-600 hover:text-blue-700">Change Photo</button>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              defaultValue="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input 
              type="number" 
              defaultValue="45"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              defaultValue="john@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input 
              type="tel" 
              defaultValue="+1 (555) 123-4567"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
            <input 
              type="number" 
              defaultValue="175"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
            <input 
              type="number" 
              defaultValue="70"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
          <textarea 
            rows={3}
            defaultValue="Penicillin, Shellfish"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="List any known allergies..."
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Chronic Conditions</label>
          <textarea 
            rows={3}
            defaultValue="Type 2 Diabetes, Hypertension"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="List any chronic conditions..."
          />
        </div>

        <button className="mt-4 flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          <span>Download Health Summary PDF</span>
        </button>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      {/* Notification Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { key: 'push', label: 'Push Notifications', desc: 'Receive notifications on your device' },
            { key: 'email', label: 'Email Notifications', desc: 'Get updates via email' },
            { key: 'sms', label: 'SMS Notifications', desc: 'Receive text message alerts' },
            { key: 'aiSuggestions', label: 'AI Suggestions', desc: 'Get smart health recommendations' },
            { key: 'medicationReminders', label: 'Medication Reminders', desc: 'Never miss your medications' },
            { key: 'appointmentReminders', label: 'Appointment Reminders', desc: 'Get notified about upcoming appointments' },
            { key: 'familyUpdates', label: 'Family Updates', desc: 'Notifications about family member activities' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications[item.key as keyof typeof notifications] ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications[item.key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Reminder Timing */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Reminder Timing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Medication Reminders</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>15 minutes before</option>
              <option>30 minutes before</option>
              <option>1 hour before</option>
              <option>At scheduled time</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Reminders</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>1 day before</option>
              <option>2 hours before</option>
              <option>1 hour before</option>
              <option>30 minutes before</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFamilySection = () => (
    <div className="space-y-6">
      {/* Family Members */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Family Members</h3>
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {familyMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {member.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900">{member.name}</h4>
                    {getRoleIcon(member.role)}
                    <span className="text-sm text-gray-600">({member.role})</span>
                  </div>
                  <p className="text-sm text-gray-600">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                {member.role !== 'Owner' && (
                  <button className="p-2 text-gray-500 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Switching */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Profile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {familyMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setSelectedFamily(member.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedFamily === member.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                  {member.avatar}
                </div>
                <p className="font-medium text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="space-y-6">
      {/* Authentication */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Add an extra layer of security</p>
            </div>
            <button
              onClick={() => setSecurity(prev => ({ ...prev, twoFactor: !prev.twoFactor }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                security.twoFactor ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  security.twoFactor ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Biometric Login</h4>
              <p className="text-sm text-gray-600">Use fingerprint or face recognition</p>
            </div>
            <button
              onClick={() => setSecurity(prev => ({ ...prev, biometric: !prev.biometric }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                security.biometric ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  security.biometric ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Session Management */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Management</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Auto-logout after</label>
          <select 
            value={security.sessionTimeout}
            onChange={(e) => setSecurity(prev => ({ ...prev, sessionTimeout: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="120">2 hours</option>
            <option value="never">Never</option>
          </select>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { device: 'iPhone 13', location: 'New York, NY', time: '2 hours ago', icon: Smartphone },
            { device: 'MacBook Pro', location: 'New York, NY', time: '1 day ago', icon: Monitor },
            { device: 'Chrome Browser', location: 'New York, NY', time: '3 days ago', icon: Globe }
          ].map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">{activity.device}</p>
                    <p className="text-sm text-gray-600">{activity.location}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'profile': return renderProfileSection();
      case 'notifications': return renderNotificationsSection();
      case 'family': return renderFamilySection();
      case 'security': return renderSecuritySection();
      default: return renderProfileSection();
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm sm:text-base text-gray-600">Manage your account preferences and family profiles</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 sticky top-6">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? `bg-${item.color}-100 text-${item.color}-700 border border-${item.color}-200`
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-sm sm:text-base">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
}