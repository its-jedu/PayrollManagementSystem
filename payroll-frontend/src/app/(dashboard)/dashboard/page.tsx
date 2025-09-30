'use client';

import StatCard from "@/components/dashboard/StatCard";
import { TodayLogCard, MonthLogCard } from "@/components/dashboard/TimeLogCard";
import { Card, CardContent, CardHeader, CardTitle, Progress } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="p-6 bg-neutral-10 min-h-screen">
      {/* Top Section: Dashboard title + buttons */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-100">Dashboard</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-info-main text-neutral-10 rounded hover:bg-info-hover transition">
            + Buddy Punching
          </button>
          <button className="px-4 py-2 bg-neutral-40 text-neutral-100 rounded hover:bg-neutral-60 transition">
            Manage POV
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Leave Allowance" value="34" paid="11" unpaid="4" />
        <StatCard title="Total Leave Taken" value="20" paid="62" unpaid="76" />
        <StatCard title="Total Leave Available" value="87" paid="50" unpaid="51" />
        <StatCard title="Leave Request Pending" value="122" paid="60" unpaid="53" />
      </div>

      {/* Time Log + Announcements Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Today Log */}
        <div className="bg-neutral-20 p-6 rounded-2xl shadow">
          <TodayLogCard scheduled="08:00" balance="02:00" worked="06:00" />
        </div>

        {/* Right Column: Month Log + Announcements */}
        <div className="lg:col-span-2 space-y-6">
          {/* Month Log Card */}
          <div className="bg-neutral-20 p-6 rounded-2xl shadow">
            <MonthLogCard total={160} worked={120} shortage={40} overtime={10} />
          </div>

          {/* Announcements Card */}
          <Card className="bg-neutral-20 p-6 rounded-2xl shadow">
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-left border-collapse text-neutral-100">
                <thead>
                  <tr>
                    <th className="border-b px-4 py-2">Title</th>
                    <th className="border-b px-4 py-2">Start Date</th>
                    <th className="border-b px-4 py-2">End Date</th>
                    <th className="border-b px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-neutral-40 transition">
                    <td className="border-b px-4 py-2">Senna Master</td>
                    <td className="border-b px-4 py-2">Dec. 2, 2019</td>
                    <td className="border-b px-4 py-2">Dec. 2, 2019</td>
                    <td className="border-b px-4 py-2">Corrected time alignment</td>
                  </tr>
                  <tr className="hover:bg-neutral-40 transition">
                    <td className="border-b px-4 py-2">Software Tester</td>
                    <td className="border-b px-4 py-2">Dec. 30, 2019</td>
                    <td className="border-b px-4 py-2">Feb. 2, 2019</td>
                    <td className="border-b px-4 py-2">Embedded analytic scripts</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
