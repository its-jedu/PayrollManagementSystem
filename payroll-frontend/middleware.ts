import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log('Middleware - Path:', req.nextUrl.pathname, 'Session:', !!session)

  // Redirect to login if no session and trying to access protected routes
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    console.log('Redirecting to login from middleware')
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Redirect to dashboard if session exists and trying to access login
  if (session && req.nextUrl.pathname === '/login') {
    console.log('Redirecting to dashboard from middleware')
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
}