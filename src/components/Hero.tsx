'use client';
import siteConfig from '@/data/siteConfig.json';
import CodeTerminal from './CodeTerminal';
import { ArrowRight, CheckCircle2, Sparkles, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 border border-indigo-200 px-3.5 py-1.5 bg-indigo-50/90 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                1-ON-1 & SMALL GROUP CODING FOR KIDS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
              FUN CODING FOR KIDS.<br />
              <span className="text-indigo-600 bg-indigo-50 px-3 py-1 rounded-2xl inline-block mt-2">
                LEARN JS, PYTHON & JAVA.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {siteConfig.heroSubheadline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Strictly JS, Python & Java</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Hands-on ODC Projects Every Class</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="text-sm uppercase tracking-wider font-bold bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all text-center flex items-center justify-center gap-2"
              >
                BOOK FREE KIDS TRIAL <Sparkles className="w-4 h-4" />
              </a>
              <a
                href="#courses"
                className="text-sm uppercase tracking-wider font-bold bg-white text-slate-800 px-8 py-4 rounded-xl border border-slate-300 hover:bg-slate-100 shadow-sm transition-all text-center flex items-center justify-center gap-2"
              >
                EXPLORE ODC PROJECTS <Gamepad2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <CodeTerminal />
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};