'use client';

import React, { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, Briefcase, Users, Calendar, Settings, ChevronDown 
} from "lucide-react";

interface SidebarItem {
  name: string;
  icon: JSX.Element;
  href?: string;
  children?: { name: string; href: string }[];
}

export default function Sidebar({ active }: { active: string }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems: SidebarItem[] = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, href: '/dashboard' },
    { name: 'Job Desk', icon: <Briefcase size={18} />, href: '/job-desk' },
    {
      name: 'Employee',
      icon: <Users size={18} />,
      children: [
        { name: 'All Employees', href: '/employee/all' },
        { name: 'Add Employee', href: '/employee/add' },
      ]
    },
    {
      name: 'Leave',
      icon: <Calendar size={18} />,
      children: [
        { name: 'Leave Requests', href: '/leave/requests' },
        { name: 'Leave Policies', href: '/leave/policies' },
      ]
    },
    {
      name: 'Attendance',
      icon: <Calendar size={18} />,
      children: [
        { name: 'Daily Attendance', href: '/attendance/daily' },
        { name: 'Monthly Report', href: '/attendance/monthly' },
      ]
    },
    {
      name: 'Administration',
      icon: <Briefcase size={18} />,
      children: [
        { name: 'Roles & Permissions', href: '/admin/roles' },
        { name: 'Settings', href: '/admin/settings' },
      ]
    },
    { name: 'Settings', icon: <Settings size={18} />, href: '/settings' },
  ];

  return (
    <aside className="w-64 bg-neutral-10 h-screen p-4 shadow-md flex flex-col gap-2">
      {menuItems.map((item) => (
        <div key={item.name} className="flex flex-col">
          {item.children ? (
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                className={`w-full flex justify-between items-center px-3 py-2 rounded hover:bg-neutral-20 transition ${
                  active === item.name ? 'bg-neutral-20 font-semibold' : ''
                }`}
              >
                <div className="flex items-center gap-2">{item.icon}{item.name}</div>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {openDropdown === item.name && (
                <div className="flex flex-col pl-8 mt-1 gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={`px-2 py-1 rounded hover:bg-neutral-20 transition ${
                        active === child.name ? 'bg-neutral-40 font-medium' : ''
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={item.href!}
              className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-neutral-20 transition ${
                active === item.name ? 'bg-neutral-20 font-semibold' : ''
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </aside>
  );
}
