import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const VISITORS_FILE = path.join(process.cwd(), 'data', 'visitors.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(VISITORS_FILE);
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true });
  }
}

// Read visitor count from file
async function getVisitorCount(): Promise<number> {
  try {
    await ensureDataDir();
    if (existsSync(VISITORS_FILE)) {
      const data = await readFile(VISITORS_FILE, 'utf-8');
      const json = JSON.parse(data);
      return json.count || 0;
    }
    return 0;
  } catch (error) {
    console.error('Error reading visitor count:', error);
    return 0;
  }
}

// Write visitor count to file
async function setVisitorCount(count: number): Promise<boolean> {
  try {
    await ensureDataDir();
    await writeFile(VISITORS_FILE, JSON.stringify({ count, lastUpdated: new Date().toISOString() }), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing visitor count:', error);
    return false;
  }
}

export async function GET() {
  try {
    const count = await getVisitorCount();
    return NextResponse.json({ count }, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error getting visitor count:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { isNewVisitor } = body;

    // Only increment if it's a new visitor
    if (isNewVisitor) {
      const currentCount = await getVisitorCount();
      const newCount = currentCount + 1;
      const writeSuccess = await setVisitorCount(newCount);
      
      // Return the new count even if write failed (for display purposes)
      return NextResponse.json({ 
        count: newCount,
        message: writeSuccess ? 'Visitor count updated' : 'Visitor count updated (write may have failed)'
      }, { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // If not a new visitor, just return current count
    const count = await getVisitorCount();
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    const count = await getVisitorCount();
    return NextResponse.json({ count }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

