import React from 'react';
import { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState('dashboard');

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