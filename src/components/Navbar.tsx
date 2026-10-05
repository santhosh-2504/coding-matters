'use client';
import { useState } from 'react';
import siteConfig from '@/data/siteConfig.json';
import { Terminal, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-sm group-hover:bg-indigo-700 transition-colors">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 block">
                {siteConfig.brandName}
              </span>
              <span className="block text-[11px] font-semibold text-indigo-600 tracking-wider uppercase">
                JS • PYTHON • JAVA
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="text-xs uppercase tracking-wider font-bold bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 shadow-sm transition-all flex items-center gap-2"
            >
              FREE KIDS TRIAL <Sparkles className="w-4 h-4" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 py-2 border-b border-slate-100 hover:text-indigo-600 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center text-sm font-bold bg-indigo-600 text-white py-3 rounded-xl shadow-sm mt-4"
          >
            FREE KIDS TRIAL
          </a>
        </div>
      )}
    </header>
  );
};