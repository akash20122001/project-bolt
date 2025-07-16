import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  Eye,
  Download,
  Trash2,
  Tag,
  Brain,
  Image,
  File,
  Calendar,
  User
} from 'lucide-react';

export function DocumentsPage() {
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const folders = [
    { name: 'All Documents', count: 24, active: true },
    { name: 'Prescriptions', count: 8, active: false },
    { name: 'Lab Tests', count: 6, active: false },
    { name: 'Doctor Notes', count: 5, active: false },
    { name: 'Imaging', count: 3, active: false },
    { name: 'Reports', count: 2, active: false }
  ];

  const documents = [
    {
      id: 1,
      name: 'Blood Test Results - January 2024',
      type: 'pdf',
      size: '2.3 MB',
      date: '2024-01-15',
      tags: ['Blood Test', 'Lab Results', 'Cholesterol', 'Glucose'],
      category: 'Lab Tests',
      aiDetected: ['Cholesterol: 180 mg/dL', 'Glucose: 95 mg/dL', 'Normal ranges'],
      thumbnail: '/api/placeholder/150/200'
    },
    {
      id: 2,
      name: 'Prescription - Metformin',
      type: 'pdf',
      size: '1.8 MB',
      date: '2024-01-10',
      tags: ['Prescription', 'Diabetes', 'Metformin'],
      category: 'Prescriptions',
      aiDetected: ['Metformin 500mg', 'Twice daily', 'Dr. Smith'],
      thumbnail: '/api/placeholder/150/200'
    },
    {
      id: 3,
      name: 'Cardiology Report',
      type: 'pdf',
      size: '3.1 MB',
      date: '2024-01-08',
      tags: ['Cardiology', 'Heart Health', 'ECG'],
      category: 'Reports',
      aiDetected: ['Normal ECG', 'Blood pressure: 120/80', 'Heart rate: 72 bpm'],
      thumbnail: '/api/placeholder/150/200'
    },
    {
      id: 4,
      name: 'X-Ray Chest',
      type: 'image',
      size: '4.2 MB',
      date: '2024-01-05',
      tags: ['X-Ray', 'Imaging', 'Chest', 'Pulmonary'],
      category: 'Imaging',
      aiDetected: ['Clear lungs', 'Normal heart size', 'No abnormalities'],
      thumbnail: '/api/placeholder/150/200'
    },
    {
      id: 5,
      name: 'Doctor Notes - Checkup',
      type: 'doc',
      size: '1.1 MB',
      date: '2024-01-03',
      tags: ['Doctor Notes', 'Checkup', 'Vital Signs'],
      category: 'Doctor Notes',
      aiDetected: ['Annual checkup', 'Vital signs normal', 'Continue current medications'],
      thumbnail: '/api/placeholder/150/200'
    },
    {
      id: 6,
      name: 'Vitamin D Test',
      type: 'pdf',
      size: '1.5 MB',
      date: '2023-12-28',
      tags: ['Lab Test', 'Vitamin D', '25-OH'],
      category: 'Lab Tests',
      aiDetected: ['Vitamin D: 25 ng/mL', 'Deficient', 'Supplement recommended'],
      thumbnail: '/api/placeholder/150/200'
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
      case 'image': return <Image className="w-5 h-5 text-blue-500" />;
      case 'doc': return <File className="w-5 h-5 text-blue-600" />;
      default: return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Documents & Reports</h1>
            <p className="text-gray-600">Organize and manage your medical documents</p>
          </div>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
            <Upload className="w-4 h-4" />
            <span>Upload Document</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Folders */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Folders</h3>
              <div className="space-y-2">
                {folders.map((folder, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      folder.active 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{folder.name}</span>
                    <span className="text-sm">{folder.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Suggested */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-900">AI Suggested</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-white/60 rounded-lg border border-purple-200">
                  <p className="text-sm font-medium text-purple-900">Cardiology</p>
                  <p className="text-xs text-purple-700">Based on recent uploads</p>
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full mt-1 inline-block">4</span>
                </div>
                
                <div className="p-3 bg-white/60 rounded-lg border border-purple-200">
                  <p className="text-sm font-medium text-purple-900">Diabetes Management</p>
                  <p className="text-xs text-purple-700">Auto-detected keywords</p>
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full mt-1 inline-block">7</span>
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Filters</h3>
              <div className="space-y-2">
                {[
                  { name: 'Recently Uploaded', count: 5 },
                  { name: 'Needs Review', count: 2 },
                  { name: 'Tagged', count: 15 },
                  { name: 'Untagged', count: 9 }
                ].map((filter, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="text-sm">{filter.name}</span>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {filteredDocuments.length} documents found
                </h3>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>Sort by Date</option>
                    <option>Sort by Name</option>
                    <option>Sort by Size</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer"
                    onClick={() => setSelectedDocument(doc)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {getFileIcon(doc.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{doc.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{new Date(doc.date).toLocaleDateString()}</span>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {doc.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                          {doc.tags.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              +{doc.tags.length - 2}
                            </span>
                          )}
                        </div>

                        {/* AI Detected Keywords */}
                        <div className="mt-2 p-2 bg-purple-50 rounded-lg border border-purple-200">
                          <p className="text-xs font-medium text-purple-900 mb-1">AI Detected:</p>
                          <p className="text-xs text-purple-700">
                            {doc.aiDetected.slice(0, 2).join(', ')}
                            {doc.aiDetected.length > 2 && '...'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {doc.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-500 hover:text-blue-600 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Document Preview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            {selectedDocument ? (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Document Preview</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      {getFileIcon(selectedDocument.type)}
                      <p className="text-sm text-gray-500 mt-2">Preview not available</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{selectedDocument.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(selectedDocument.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{selectedDocument.size}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Tags:</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedDocument.tags.map((tag: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">AI Analysis:</p>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      {selectedDocument.aiDetected.map((item: string, index: number) => (
                        <p key={index} className="text-xs text-purple-700">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Document</h3>
                <p className="text-gray-500">Choose a document to view details and preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}