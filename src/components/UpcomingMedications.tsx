import React from 'react';
import { Clock, Plus, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export function UpcomingMedications() {
  const medications = [
    {
      id: 1,
      name: 'Metformin',
      dosage: '500mg',
      time: '8:00 AM',
      status: 'pending',
      priority: 'high',
      type: 'Doctor Prescribed',
      notes: 'Take with breakfast'
    },
    {
      id: 2,
      name: 'Vitamin D3',
      dosage: '1000 IU',
      time: '8:00 AM',
      status: 'pending',
      priority: 'low',
      type: 'Supplement',
      notes: 'Regular'
    },
    {
      id: 3,
      name: 'Lisinopril',
      dosage: '10mg',
      time: '12:00 PM',
      status: 'taken',
      priority: 'high',
      type: 'Doctor Prescribed',
      notes: 'Taken'
    },
    {
      id: 4,
      name: 'Omega-3',
      dosage: '1000mg',
      time: '6:00 PM',
      status: 'pending',
      priority: 'medium',
      type: 'Supplement',
      notes: 'Pending'
    },
    {
      id: 5,
      name: 'Atorvastatin',
      dosage: '20mg',
      time: '9:00 PM',
      status: 'missed',
      priority: 'high',
      type: 'Doctor Prescribed',
      notes: 'Missed'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'taken': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'missed': return <XCircle className="w-5 h-5 text-red-600" />;
      default: return <Clock className="w-5 h-5 text-blue-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'taken': return 'bg-green-50 border-green-200';
      case 'missed': return 'bg-red-50 border-red-200';
      default: return 'bg-blue-50 border-blue-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-green-100 text-green-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Clock className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Medications</h3>
            <p className="text-sm text-gray-600">5 pending • 1 missed</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Med</span>
        </button>
      </div>

      <div className="space-y-4">
        {medications.map((med) => (
          <div
            key={med.id}
            className={`p-4 rounded-xl border-2 ${getStatusColor(med.status)} transition-all duration-200 hover:shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {getStatusIcon(med.status)}
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">{med.name}</h4>
                    <span className="text-sm text-gray-600">{med.dosage}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(med.priority)}`}>
                      {med.priority} Priority
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-600">{med.type}</span>
                    <span className="text-sm text-gray-500">{med.notes}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">{med.time}</p>
                <p className="text-sm text-gray-500 capitalize">{med.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">1</p>
          <p className="text-sm text-gray-600">Taken</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600">1</p>
          <p className="text-sm text-gray-600">Missed</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">3</p>
          <p className="text-sm text-gray-600">Pending</p>
        </div>
      </div>
    </div>
  );
}