import React, { useState } from 'react';
import { 
  Brain, 
  Send, 
  Pill, 
  AlertTriangle, 
  Info, 
  X,
  MessageCircle,
  Minimize2,
  Maximize2
} from 'lucide-react';

export function MedicationAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI medication assistant. Ask me about your prescriptions, side effects, interactions, or dosages.",
      timestamp: new Date()
    }
  ]);

  const quickQuestions = [
    "What are the side effects of Metformin?",
    "Can I take Paracetamol with Ibuprofen?",
    "When should I stop this antibiotic?",
    "Is this safe for diabetics?"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    // Simulate AI response
    const aiResponse = {
      id: messages.length + 2,
      type: 'ai',
      content: getAIResponse(message),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setMessage('');
  };

  const getAIResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('metformin')) {
      return "Metformin is commonly used for Type 2 diabetes. Common side effects include nausea, diarrhea, and stomach upset. Take with food to reduce stomach irritation. Always consult your doctor before making changes.";
    } else if (lowerQuestion.includes('paracetamol') || lowerQuestion.includes('ibuprofen')) {
      return "Generally, Paracetamol and Ibuprofen can be taken together as they work differently. However, always check with your pharmacist or doctor, especially if you have kidney, liver, or heart conditions.";
    } else if (lowerQuestion.includes('antibiotic')) {
      return "Complete the full course of antibiotics even if you feel better. Stopping early can lead to antibiotic resistance. If you experience severe side effects, contact your doctor immediately.";
    } else if (lowerQuestion.includes('diabetic')) {
      return "Many medications are safe for diabetics, but some can affect blood sugar levels. Always inform your healthcare provider about your diabetes when prescribed new medications.";
    } else {
      return "I'd be happy to help with medication questions! For specific medical advice, please consult your healthcare provider. I can provide general information about common medications and their interactions.";
    }
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
    handleSendMessage();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 w-14 h-14 bg-gradient-to-r from-mint-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white z-40 animate-pulse"
      >
        <Brain className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 sm:w-96 h-96 sm:h-[500px]'
    }`}>
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-gradient-to-r from-mint-200 to-blue-200 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-mint-500 to-blue-500 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">AI Medication Assistant</h3>
              <p className="text-xs text-white/80">Ask about your medications</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4 text-white" />
              ) : (
                <Minimize2 className="w-4 h-4 text-white" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about medications..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mt-2 flex items-center space-x-1 text-xs text-gray-500">
                <Info className="w-3 h-3" />
                <span>For medical advice, consult your healthcare provider</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}