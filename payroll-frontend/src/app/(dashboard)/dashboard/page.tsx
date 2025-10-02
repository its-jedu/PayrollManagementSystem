"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  LogIn,
  LogOut,
} from "lucide-react";

export default function DashboardPage() {
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

        {/* Content area */}
        <div className="p-6 space-y-6">
          {/* Greeting + Punch in/out */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-2">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">
                  Good to see you, Kimi 👋
                </h2>
                <p className="text-gray-500 text-sm">
                  You came 15 minutes early today.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex justify-between items-center p-6">
                <div className="flex items-center gap-2 text-green-600">
                  <LogIn className="h-5 w-5" />
                  <span>7:14 AM Punch in</span>
                </div>
                <div className="flex items-center gap-2 text-red-500">
                  <LogOut className="h-5 w-5" />
                  <span>1:00 PM Punch out</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">Total leave allowance</p>
                <h3 className="text-2xl font-bold">34</h3>
                <p className="text-xs text-gray-500">
                  Paid 11 | Unpaid 4
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">Total leave taken</p>
                <h3 className="text-2xl font-bold">20</h3>
                <p className="text-xs text-gray-500">
                  Paid 12 | Unpaid 8
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">Total leave available</p>
                <h3 className="text-2xl font-bold">87</h3>
                <p className="text-xs text-gray-500">
                  Paid 36 | Unpaid 51
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">Leave request pending</p>
                <h3 className="text-2xl font-bold">122</h3>
                <p className="text-xs text-gray-500">
                  Paid 71 | Unpaid 51
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Time Log */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <h3 className="font-semibold text-gray-700">Time Log</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Today */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Today</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <p className="text-xs text-gray-500">08:00</p>
                      <p className="font-semibold">Session In</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <p className="text-xs text-gray-500">12:00</p>
                      <p className="font-semibold">Break</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-center">
                      <p className="text-xs text-gray-500">05:00</p>
                      <p className="font-semibold">Session Out</p>
                    </div>
                  </div>
                </div>
                {/* This month */}
                <div>
                  <h4 className="text-sm font-medium mb-2">This month</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">Shortage time</p>
                      <Progress value={30} />
                      <p className="text-xs">232 hour</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Worked time</p>
                      <Progress value={75} />
                      <p className="text-xs">180 hour</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Overtime</p>
                      <Progress value={50} />
                      <p className="text-xs">58 hour</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-700 mb-4">Announcements</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-600 text-left">
                    <tr>
                      <th className="p-2">Title</th>
                      <th className="p-2">Start date</th>
                      <th className="p-2">End date</th>
                      <th className="p-2">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-gray-700">
                    <tr>
                      <td className="p-2">Scrum Master</td>
                      <td className="p-2">Dec 4, 2018 21:42</td>
                      <td className="p-2">Dec 5, 2018 22:36</td>
                      <td className="p-2">Connected team alignment</td>
                    </tr>
                    <tr>
                      <td className="p-2">Software Tester</td>
                      <td className="p-2">Feb 2, 2019 17:03</td>
                      <td className="p-2">Feb 3, 2019 18:34</td>
                      <td className="p-2">Distributed analytic setup</td>
                    </tr>
                    <tr>
                      <td className="p-2">Software Developer</td>
                      <td className="p-2">Dec 30, 2019 07:52</td>
                      <td className="p-2">Dec 30, 2019 09:42</td>
                      <td className="p-2">High-level reporting option</td>
                    </tr>
                    <tr>
                      <td className="p-2">UI/UX Designer</td>
                      <td className="p-2">Dec 23, 2018 23:46</td>
                      <td className="p-2">Dec 24, 2018 10:20</td>
                      <td className="p-2">Enhancement UX for quantity updates</td>
                    </tr>
                    <tr>
                      <td className="p-2">Ethical Hacker</td>
                      <td className="p-2">Mar 20, 2019 03:32</td>
                      <td className="p-2">Mar 20, 2019 07:31</td>
                      <td className="p-2">Cart history fixes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
