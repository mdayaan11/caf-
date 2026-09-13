import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/health',
    timestamp: new Date().toISOString(),
  });
}
