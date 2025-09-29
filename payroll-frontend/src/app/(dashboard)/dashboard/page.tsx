'use client';

import StatCard from '@/components/dashboard/StatCard';
import AnnouncementItem from '@/components/dashboard/AnnouncementItem';
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white animate-fade-in-up">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-2">Good to see you, {user?.user_metadata?.name || 'User'}!</h1>
            <p className="text-blue-100">You came 15 minutes early today.</p>
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white border-0">
            Today
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Test leave allowance" value="34" subtitle="Pick 11" extra="Upload: 4" />
        <StatCard title="Total leave taken" value="20" subtitle="Pick 62" extra="Upload: 28" />
        <StatCard title="Total leave available" value="87" subtitle="Pick 50" extra="Upload: 51" />
        <StatCard title="Leave request pending" value="122" subtitle="Pick 60" extra="Upload: 53" />
      </div>

      {/* Announcement Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Time Leg</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Today</span>
                <span className="text-2xl font-bold text-blue-600">08:00</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Schools Bill</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Announcements</CardTitle>
            <Button variant="ghost" size="sm">
              MoreHorizontal
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <AnnouncementItem
                title="Senna Master"
                startDate="Dec. 2, 2019 24:42"
                endDate="Dec. 2, 2019 23:26"
                description="Corrected time alignment"
              />
              <AnnouncementItem
                title="Software Tester"
                startDate="Dec. 30, 2019 05:18"
                endDate="Feb. 2, 2019 19:35"
                description="Embedded analytic scripts"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
