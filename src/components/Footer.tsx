'use client';
import siteConfig from '@/data/siteConfig.json';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandName}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}