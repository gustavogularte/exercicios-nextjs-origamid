'use server';

import { cookies } from 'next/headers';

export async function getCookies(key: string) {
  const cookie = cookies().get(key);
  if (cookie) return cookie.value;
  return 'Token não encontrado';
}
