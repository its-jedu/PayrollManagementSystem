'use client';

import { Button } from './button';
import {
  LayoutDashboard as DashboardIcon,
  Briefcase,
  Users,
  Calendar,
  Clock,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function Sidebar({ active }: { active: string }) {
  const { logout } = useAuth();
  const router = useRouter();

  const menuItems = [
    { name: 'Dashboard', icon: <DashboardIcon size={18} /> },
    { name: 'Job Desk', icon: <Briefcase size={18} /> },
    { name: 'Employee', icon: <Users size={18} /> },
    { name: 'Leave', icon: <Calendar size={18} /> },
    { name: 'Attendance', icon: <Clock size={18} /> },
    { name: 'Administration', icon: <Settings size={18} /> },
    { name: "Setting", icon: <Settings size={18} /> },
  ];

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <aside className="w-64 bg-sidebar h-full flex flex-col justify-between">
      <div>
        <div className="p-6 border-b border-sidebar-border">
          <h2 className="text-xl font-bold text-white">Payroll System</h2>
        </div>

        <nav className="p-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                active === item.name
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold'
                  : 'text-white hover:bg-sidebar-accent'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Button>
          ))}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 text-red-500"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </aside>
  );
}
