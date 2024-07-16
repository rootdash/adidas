import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    console.log('middleware running')
    if(request.nextUrl.pathname.startsWith('/login')) {
        let cookies = request.cookies.get('Authorization')
        if(cookies) {
            return NextResponse.redirect(new URL('/products', request.url))
        }
        return NextResponse.next()
    }
}
 
export const config = {
  matcher: '/login/:path*',
}