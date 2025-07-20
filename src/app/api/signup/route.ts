import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
// Use a singleton Prisma client for Next.js
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(request: Request) {
  try {
    const { email, interests } = await request.json();
    if (!email || !interests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const signup = await prisma.signup.create({
      data: {
        email,
        interests,
      },
    });
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
