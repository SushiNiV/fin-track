import React from 'react';
import { useAuth } from '../../context/auth/auth';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.email}!</p> : <p>You are not logged in.</p>}
    </div>
  );
}

export default Dashboard;
