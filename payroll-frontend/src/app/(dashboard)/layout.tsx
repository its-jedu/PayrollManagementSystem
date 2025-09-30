'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Users, Calendar, Clock, Settings, Briefcase, Home } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const sidebarItems = [
  { name: 'Dashboard', href: '/dashboard', icon: <Home size={18} /> },
  { name: 'Job Desk', href: '/dashboard/jobdesk', icon: <Briefcase size={18} /> },
  { 
    name: 'Employee', icon: <Users size={18} />, dropdown: [
      { name: 'List', href: '/dashboard/employees/list' },
      { name: 'Add Employee', href: '/dashboard/employees/add' }
    ]
  },
  { 
    name: 'Leave', icon: <Clock size={18} />, dropdown: [
      { name: 'Requests', href: '/dashboard/leave/requests' },
      { name: 'Balance', href: '/dashboard/leave/balance' }
    ]
  },
  { 
    name: 'Attendance', icon: <Calendar size={18} />, dropdown: [
      { name: 'Records', href: '/dashboard/attendance/records' },
      { name: 'Reports', href: '/dashboard/attendance/reports' }
    ]
  },
  { 
    name: 'Administration', icon: <Settings size={18} />, dropdown: [
      { name: 'Roles', href: '/dashboard/admin/roles' },
      { name: 'Permissions', href: '/dashboard/admin/permissions' }
    ]
  },
  { 
    name: 'Settings', icon: <Settings size={18} />, dropdown: [
      { name: 'Profile', href: '/dashboard/settings/profile' },
      { name: 'Preferences', href: '/dashboard/settings/preferences' }
    ] 
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <div className="mb-8 text-2xl font-bold">PayrollSystem</div>
        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => (
            <div key={item.name}>
              <button
                className="flex items-center justify-between w-full gap-2 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => item.dropdown ? setOpenDropdown(openDropdown === item.name ? null : item.name) : undefined}
              >
                <div className="flex items-center gap-2">{item.icon}{item.name}</div>
                {item.dropdown && <ChevronDown size={16} className={openDropdown === item.name ? 'rotate-180' : ''} />}
              </button>
              {item.dropdown && openDropdown === item.name && (
                <div className="pl-8 mt-1 flex flex-col space-y-1">
                  {item.dropdown.map((drop) => (
                    <Link key={drop.name} href={drop.href} className="p-2 rounded hover:bg-blue-100">
                      {drop.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        {/* Page Content */}
        <div>{children}</div>
      </main>
    </div>
  );
}
