import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Exercícios NextJS',
  description: 'Exercícios de NextJS Origamid',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
