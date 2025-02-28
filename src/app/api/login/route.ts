import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (!response.ok) {
    return Response.json({
      authorization: false,
      message: 'Dados inválidoss',
    });
  }
  const data = await response.json();
  (await cookies()).set('token', data.token);
  return Response.json({
    authorization: true,
  });
}
