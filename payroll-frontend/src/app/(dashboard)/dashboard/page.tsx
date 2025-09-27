'use client';

import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Bell, Calendar, Download, Filter, MoreHorizontal } from 'lucide-react';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Payroll System</h2>
        </div>
        
        <nav className="p-4 space-y-2">
          {['Dashboard', 'Job Desk', 'Employee', 'Leave', 'Attendance', 'Administration', 'Setting'].map((item) => (
            <button
              key={item}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                item === 'Dashboard' 
                  ? 'bg-blue-50 text-blue-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-64 bg-gray-50 border-0"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {(user?.user_metadata?.name || user?.email || 'U').charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{user?.user_metadata?.name || user?.email}</p>
                  <p className="text-xs text-gray-500">{user?.user_metadata?.role || 'User'}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
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
            <StatCard 
              title="Test leave allowance" 
              value="34"
              subtitle="Pick 11"
              extra="Upload: 4"
            />
            <StatCard 
              title="Total leave taken" 
              value="20"
              subtitle="Pick 62"
              extra="Upload: 28"
            />
            <StatCard 
              title="Total leave available" 
              value="87"
              subtitle="Pick 50"
              extra="Upload: 51"
            />
            <StatCard 
              title="Leave request pending" 
              value="122"
              subtitle="Pick 60"
              extra="Upload: 53"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Time Leg Section */}
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

            {/* Announcements Section */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">Announcements</CardTitle>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
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
                  <AnnouncementItem
                    title="Software Developer"
                    startDate="Dec. 30, 2019 09:02"
                    endDate="Dec. 4, 2019 24:42"
                    description="High-resolution imagery option"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Datablog Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Datablog</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {['Dashboard', 'Strategy', 'Prototype', 'Status', 'W1 x Leo', 'N1 SD', 'Jiao Qt', 'Empty', 'Copy constant'].map((item) => (
                  <Button key={item} variant="outline" className="justify-start h-12">
                    {item}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Appearance Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Appearance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['Activity', 'Quantity', 'Utilities', 'Contact articles'].map((item) => (
                    <Button key={item} variant="ghost" className="w-full justify-start">
                      {item}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fill Section */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Fill</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Neutral/10</span>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Stroke</span>
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Effects</span>
                    <div className="w-6 h-6 bg-gray-500 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Selection colors</span>
                    <div className="grid grid-cols-2 gap-2">
                      {['Pricusyp/takin', 'Neutral/10', 'Layout guide', 'Export'].map((item) => (
                        <Button key={item} variant="outline" size="sm" className="justify-start">
                          {item}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ title, value, subtitle, extra }: { title: string; value: string; subtitle: string; extra: string }) {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
          <span>{subtitle}</span>
          <span>{extra}</span>
        </div>
      </CardContent>
    </Card>
  );
}

// Announcement Item Component
function AnnouncementItem({ title, startDate, endDate, description }: { title: string; startDate: string; endDate: string; description: string }) {
  return (
    <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-900">{title}</h4>
          <div className="text-xs text-gray-500 text-right">
            <div>{startDate}</div>
            <div>{endDate}</div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}