'use client';
import siteConfig from '@/data/siteConfig.json';
import { Terminal, Globe, Share2, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-sm">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" aria-label="Website" className="p-2.5 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Source Code" className="p-2.5 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 hover:text-white transition-colors">
                <Code className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share" className="p-2.5 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold text-white tracking-wider border-b border-slate-800 pb-2">
              NAVIGATION
            </div>
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-xs uppercase text-slate-400 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase font-bold text-white tracking-wider border-b border-slate-800 pb-2">
              KIDS CODING UPDATES
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get weekly fun 1-day ODC project ideas and kids coding tips delivered straight to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-stretch">
              <input
                type="email"
                placeholder="parent@email.com"
                className="bg-slate-950 border border-slate-800 border-r-0 rounded-l-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="text-xs font-bold uppercase bg-indigo-600 text-white px-4 py-2.5 rounded-r-xl hover:bg-indigo-700 transition-colors shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandName}. ALL RIGHTS RESERVED.
          </div>
          <div>
            FUN CODING FOR KIDS • JS, PYTHON & JAVA ONLY.
          </div>
        </div>
      </div>
    </footer>
  );
}