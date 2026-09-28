'use client';
import { useState } from 'react';
import faqData from '@/data/faq.json';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 text-slate-900 py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200 text-center">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-600 mb-2">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 bg-white rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-indigo-600 font-bold">[0{idx + 1}]</span> {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 shrink-0 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 shrink-0 text-slate-500" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};