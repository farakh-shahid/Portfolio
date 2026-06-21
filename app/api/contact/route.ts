import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.formData()
  const name = String(data.get('name') ?? '')
  const email = String(data.get('email') ?? '')
  const challenge = String(data.get('challenge') ?? '')

  if (!name || !email || !challenge) {
    return NextResponse.json({ ok: false, message: 'Missing required fields.' }, { status: 400 })
  }

  return NextResponse.json({ ok: true })
}
