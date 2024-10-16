import { NextResponse } from 'next/server';
import leptolat from '../../../../public/leptolat.json';

export async function GET() {
	return NextResponse.json(leptolat, { status: 200 });
}
