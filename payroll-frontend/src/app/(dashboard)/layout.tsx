"use client";

import { ReactNode } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  Clock,
  Settings,
  Shield,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const sidebarItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Job Desk", icon: Briefcase, href: "/jobdesk" },
    { name: "Employee", icon: Users, href: "/dashboard/employee" },
    { name: "Leaves", icon: Calendar, href: "/dashboard/leaves" },
    { name: "Attendance", icon: Clock, href: "/dashboard/attendance" },
    { name: "Administration", icon: Shield, href: "/dashboard/administration" },
    { name: "Setting", icon: Settings, href: "/dashboard/setting" },
  ];

  async function handleLogout() {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });
      localStorage.clear();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col justify-between">
        <div>
          <div className="p-6 text-xl font-bold text-blue-700 tracking-wide">
            BIPAY
          </div>
          <nav className="flex flex-col space-y-1 px-4 text-gray-700">
            {sidebarItems.map(({ name, icon: Icon, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors font-medium text-sm ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-blue-600" : "text-gray-500"
                    }`}
                  />
                  <span>{name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ✅ Logout button (no alert, real action) */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-2 w-full text-red-600 hover:bg-red-50 rounded-lg font-medium text-sm transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              + Buddy Punching
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="sm"
            >
              Manager POV
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 space-y-6">{children}</div>
      </main>
    </div>
  );
}
