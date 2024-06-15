import { NextResponse } from 'next/server';

export function middleware(request) {
    return NextResponse.next();
}

// you can filter your requests here
export const config = {
    matcher: '/news',
};
