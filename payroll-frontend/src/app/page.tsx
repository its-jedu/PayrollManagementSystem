'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect when we're sure about the auth state
    if (!isLoading) {
      if (isAuthenticated) {
        console.log('User is authenticated, redirecting to dashboard');
        router.push('/dashboard');
      } else {
        console.log('User is not authenticated, redirecting to login');
        router.push('/login');
      }
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading spinner while checking auth
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Checking authentication...</p>
      </div>
    </div>
  );
}