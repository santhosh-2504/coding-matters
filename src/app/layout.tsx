import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coding Matters for Kids | Fun 1-on-1 JS, Python & Java Tutoring',
  description: 'Clean, minimal 1-on-1 & small group coding tutor strictly for kids (Ages 6-16). Master JavaScript, Python, and Java with hands-on 1-Day ODC Projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-indigo-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}