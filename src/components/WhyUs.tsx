'use client';
import whyUsData from '@/data/whyUs.json';
import { UserCheck, Code2, Terminal, Clock, ShieldCheck, Zap } from 'lucide-react';

const iconMap: Record<string, any> = {
  UserCheck,
  Code2,
  Terminal,
  Clock,
  ShieldCheck,
  Zap
};

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-50 text-slate-900 py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-600 mb-2">
            WHY KIDS & PARENTS LOVE US
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            SIMPLE, FUN & UNBLOCKED CODING FOR KIDS
          </h2>
          <p className="text-slate-600 max-w-2xl mt-2 text-sm sm:text-base">
            No boring adult lectures or bloated documentation. Just pure coding, fun JS, Python & Java, and hands-on ODC Projects!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsData.map((item) => {
            const IconComponent = iconMap[item.iconName] || Terminal;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};