'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !authLoading) {
        router.push('/dashboard');
    }
    }, [isAuthenticated, authLoading, router]);

    // Show loading while checking authentication or if already authenticated
    if (authLoading || isAuthenticated) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
    );
    }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await login(email, password);

    if (result.success) {
      router.push('/dashboard');
    } else {
      setError(result.error || 'Login failed');
    }
    
    setIsLoading(false);
  };

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white relative z-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Payroll System
            </h1>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <Card className="border-0 shadow-xl relative overflow-hidden">
            {/* Animated background effect on card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-60"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full -translate-x-16 -translate-y-16 opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full translate-x-20 translate-y-20 opacity-30 animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Welcome back
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 animate-shake">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all duration-200"
                      />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-base shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                      Contact administrator
                    </span>
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      {/* Right side - Animated Background */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 animate-gradient-x"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-lg animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-300/30 rounded-full blur-md animate-float-fast"></div>
        
        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-3xl"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center p-12 w-full">
          <div className="max-w-md text-white text-center backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div className="w-32 h-32 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20 animate-pulse-slow">
              <svg className="w-16 h-16 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Streamline Your Payroll
            </h2>
            <p className="text-blue-100/90 text-lg leading-relaxed backdrop-blur-sm">
              Manage employee data, track attendance, process leaves, and handle payroll 
              efficiently with our comprehensive management system.
            </p>
            
            {/* Animated Features List */}
            <div className="mt-8 space-y-3">
              {['Real-time Analytics', 'Secure Data', 'Automated Reports', 'Easy Integration'].map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center justify-center space-x-2 text-blue-100/80 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}