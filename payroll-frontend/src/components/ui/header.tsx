'use client';

import { useAuth } from '@/hooks/useAuth';
import { Input } from './input';
import { Search, Bell, MoreHorizontal } from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search..."
            className="pl-10 w-64 bg-gray-50 border border-gray-200 rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">
            3
          </Badge>
        </Button>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {(user?.user_metadata?.name || user?.email || 'U').charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-medium">{user?.user_metadata?.name || user?.email}</p>
            <p className="text-xs text-gray-500">{user?.user_metadata?.role || 'User'}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
