"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-6 text-xl font-bold text-blue-700">BIPAY</div>
        <nav className="flex flex-col space-y-2 px-4 text-gray-700">
          <a className="p-2 rounded bg-blue-50 text-blue-600 font-medium">
            Dashboard
          </a>
          <a className="p-2 rounded hover:bg-gray-100">Job Desk</a>
          <a className="p-2 rounded hover:bg-gray-100">Employee</a>
          <a className="p-2 rounded hover:bg-gray-100">Leaves</a>
          <a className="p-2 rounded hover:bg-gray-100">Attendance</a>
          <a className="p-2 rounded hover:bg-gray-100">Administration</a>
          <a className="p-2 rounded hover:bg-gray-100">Setting</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              + Buddy Punching
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
              Manager POV
            </Button>
          </div>
        </header>

        {/* Children injected here */}
        <div className="p-6 space-y-6">{children}</div>
      </main>
    </div>
  );
}
