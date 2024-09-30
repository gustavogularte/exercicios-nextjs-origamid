import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    return Response.json({ ok: false, erro: response.status });
  }

  const { token } = await response.json();
  cookies().set('token', token, {
    secure: true,
    httpOnly: true
  });

  return Response.json(token);
}
