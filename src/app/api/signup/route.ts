import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering to prevent static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: Request) {
  try {
    console.log('POST request received');
    const { email, interests } = await request.json();
    console.log('Parsed data:', { email, interests });
    
    if (!email || !interests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Attempting to create signup...');
    const signup = await prisma.signup.create({
      data: {
        email,
        interests,
      },
    });
    console.log('Signup created:', signup);

    return NextResponse.json(signup, { status: 201 });
  } catch (error: unknown) {
    console.error('Signup API error:', error);
    
    // Prisma errors have a code property
    if (typeof error === 'object' && error !== null && 'code' in error && (error as { code: string }).code === 'P2002') {
      return NextResponse.json({ error: 'Email already exists.' }, { status: 409 });
    }

    const errorMessage = typeof error === 'object' && error !== null && 'message' in error
      ? (error as { message?: string }).message
      : String(error);

    return NextResponse.json({ error: 'Failed to create signup', details: errorMessage }, { status: 500 });
  }
}