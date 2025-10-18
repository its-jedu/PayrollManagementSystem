import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Payroll Management System</h1>
        <div className="user-info">
          <span>Welcome, {user?.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <nav className="dashboard-nav">
        <Link to="/employees" className="nav-card">
          <h3>Employee Management</h3>
          <p>Add, view, and manage employees</p>
        </Link>
        
        <Link to="/payroll" className="nav-card">
          <h3>Payroll Processing</h3>
          <p>Process monthly payroll and generate slips</p>
        </Link>

        <div className="nav-card">
          <h3>Reports</h3>
          <p>View payroll reports and analytics</p>
        </div>
      </nav>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h4>Total Employees</h4>
          <p className="stat-number">25</p>
        </div>
        <div className="stat-card">
          <h4>Pending Payroll</h4>
          <p className="stat-number">1</p>
        </div>
        <div className="stat-card">
          <h4>Completed This Month</h4>
          <p className="stat-number">24</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;