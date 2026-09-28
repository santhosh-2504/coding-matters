'use client';
import testimonialsData from '@/data/testimonials.json';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white text-slate-900 py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-600 mb-2">
            PROVEN OUTCOMES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            KIDS & PARENT REVIEWS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between relative hover:shadow-md transition-all"
            >
              <Quote className="w-10 h-10 text-slate-200 absolute top-4 right-4" />
              
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <div className="text-sm font-bold text-slate-900">
                  {item.name}
                </div>
                <div className="text-xs text-slate-500">
                  {item.role}
                </div>
                <div className="mt-2 inline-block bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border border-indigo-100">
                  {item.achievement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};