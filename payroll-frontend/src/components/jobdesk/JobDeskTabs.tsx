// components/jobdesk/JobDeskTabs.tsx
"use client";

import Link from "next/link";
import React from "react";

const TABS = [
  "Allowance",
  "Attendance",
  "Leave",
  "Folder",
  "Assets",
  "History",
  "Salary",
  "Pay Run",
  "Slip",
  "Address",
  "Contact",
  "Social",
];

type Props = {
  active?: string; // active tab name, e.g. "Allowance"
  basePath?: string; // default "/jobdesk"
};

export default function JobDeskTabs({ active = "Allowance", basePath = "/jobdesk" }: Props) {
  return (
    <nav className="overflow-x-auto">
      <ul className="flex gap-2 whitespace-nowrap px-1">
        {TABS.map((tab) => {
          const isActive = tab === active;
          const href = `${basePath}/${tab.toLowerCase().replace(/\s+/g, "")}`;
          return (
            <li key={tab}>
              <Link
                href={href}
                className={`inline-flex items-center px-4 py-2 rounded-2xl text-sm font-medium transition
                  ${isActive
                    ? "bg-amber-100 text-amber-800 ring-1 ring-amber-200"
                    : "bg-white/60 text-slate-600 hover:bg-slate-50"}
                  `}
              >
                {tab}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
