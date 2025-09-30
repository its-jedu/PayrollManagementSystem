'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Calendar, Clock, Settings, Home } from 'lucide-react';
import { Badge } from '@/components/ui';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: <Home size={18} /> },
    { name: 'Employees', href: '/dashboard/employees', icon: <Users size={18} /> },
    { name: 'Attendance', href: '/dashboard/attendance', icon: <Calendar size={18} /> },
    { name: 'Payroll', href: '/dashboard/payroll', icon: <Clock size={18} /> },
    { name: 'Settings', href: '/dashboard/settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <div className="mb-8 text-2xl font-bold">PayrollSystem</div>
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto text-sm text-gray-500">
          © {new Date().getFullYear()} PayrollSystem
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">Admin</Badge>
            {/* Placeholder for profile pic */}
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        {/* Page Content */}
        <div>{children}</div>
      </main>
    </div>
  );
}
