"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LogIn, LogOut } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Greeting + Punch info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2 bg-white shadow-sm border">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Good to see you, Jedu 👋
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              You came 15 minutes early today.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border">
          <CardContent className="flex justify-between items-center p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-green-600">
                <LogIn className="h-5 w-5" />
                <span className="text-sm font-medium">7:14 AM In</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <LogOut className="h-5 w-5" />
                <span className="text-sm font-medium">1:00 PM Out</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            label: "Total leave allowance",
            value: "34",
            sub: "Paid 11 | Unpaid 4",
          },
          {
            label: "Total leave taken",
            value: "20",
            sub: "Paid 12 | Unpaid 8",
          },
          {
            label: "Total leave available",
            value: "87",
            sub: "Paid 36 | Unpaid 51",
          },
          {
            label: "Leave request pending",
            value: "122",
            sub: "Paid 71 | Unpaid 51",
          },
        ].map((stat, i) => (
          <Card key={i} className="bg-white shadow-sm border">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">
                {stat.value}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Time Log */}
      <Card className="bg-white shadow-sm border">
        <CardContent className="p-6 space-y-6">
          <h3 className="font-semibold text-gray-700">Time Log</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Today */}
            <div>
              <h4 className="text-sm font-medium mb-2">Today</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { time: "08:00", label: "Session In" },
                  { time: "12:00", label: "Break" },
                  { time: "05:00", label: "Session Out" },
                ].map((log, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 transition"
                  >
                    <p className="text-xs text-gray-500">{log.time}</p>
                    <p className="font-semibold text-gray-700">{log.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* This Month */}
            <div>
              <h4 className="text-sm font-medium mb-2">This month</h4>
              <div className="space-y-4">
                {[
                  { label: "Shortage time", value: 30, hours: "232 hour" },
                  { label: "Worked time", value: 75, hours: "180 hour" },
                  { label: "Overtime", value: 50, hours: "58 hour" },
                ].map((p, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-500">{p.label}</p>
                    <Progress value={p.value} />
                    <p className="text-xs text-gray-600 mt-1">{p.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Announcements */}
      <Card className="bg-white shadow-sm border">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Announcements</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-50 text-gray-600 text-left">
                <tr>
                  {["Title", "Start date", "End date", "Description"].map(
                    (head) => (
                      <th key={head} className="p-2 font-medium">
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y text-gray-700">
                {[
                  [
                    "Scrum Master",
                    "Dec 4, 2018 21:42",
                    "Dec 5, 2018 22:36",
                    "Connected team alignment",
                  ],
                  [
                    "Software Tester",
                    "Feb 2, 2019 17:03",
                    "Feb 3, 2019 18:34",
                    "Distributed analytic setup",
                  ],
                  [
                    "Software Developer",
                    "Dec 30, 2019 07:52",
                    "Dec 30, 2019 09:42",
                    "High-level reporting option",
                  ],
                  [
                    "UI/UX Designer",
                    "Dec 23, 2018 23:46",
                    "Dec 24, 2018 10:20",
                    "Enhancement UX for quantity updates",
                  ],
                  [
                    "Ethical Hacker",
                    "Mar 20, 2019 03:32",
                    "Mar 20, 2019 07:31",
                    "Cart history fixes",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition">
                    {row.map((cell, j) => (
                      <td key={j} className="p-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
