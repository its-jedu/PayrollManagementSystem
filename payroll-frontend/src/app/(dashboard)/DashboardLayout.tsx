import React from "react";
import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar active="Dashboard" />
      <main className="flex-1 p-6 bg-neutral-10 min-h-screen">{children}</main>
    </div>
  );
}
