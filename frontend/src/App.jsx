import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MyReservations from './pages/MyReservations';

// Simple Error Boundary Fallback
const ErrorFallback = ({ error }) => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
    <p className="text-gray-600 mt-2">{error.message}</p>
    <button 
      onClick={() => window.location.reload()}
      className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
    >
      Retry
    </button>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            <Route path="*" element={
              <div className="text-center py-12">
                <h2 className="text-3xl font-bold text-gray-900">404 - Page Not Found</h2>
                <p className="mt-4 text-gray-600">The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </MainLayout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
