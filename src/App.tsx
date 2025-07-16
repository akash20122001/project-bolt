import React from 'react';
import { useState, useEffect } from 'react';
import { AuthWrapper } from './components/AuthWrapper';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { FloatingActionButton } from './components/FloatingActionButton';
import { Dashboard } from './components/Dashboard';
import { MedicationsPage } from './components/MedicationsPage';
import { CalendarPage } from './components/CalendarPage';
import { JournalPage } from './components/JournalPage';
import { DocumentsPage } from './components/DocumentsPage';
import { SettingsPage } from './components/SettingsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Check if user is already authenticated (you can implement proper auth logic here)
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  // Show auth pages if not authenticated
  if (!isAuthenticated) {
    return <AuthWrapper onAuthenticated={handleAuthentication} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'medications':
        return <MedicationsPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'journal':
        return <JournalPage />;
      case 'documents':
        return <DocumentsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
        <FloatingActionButton />
      </div>
    </div>
  );
}

export default App;