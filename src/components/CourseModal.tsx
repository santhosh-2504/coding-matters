'use client';
import { X, BookOpen, ArrowUpRight, Sparkles } from 'lucide-react';

interface CourseModalProps {
  course: {
    id: string;
    title: string;
    badge: string;
    level: string;
    duration: string;
    schedule: string;
    price: string;
    period: string;
    description: string;
    topics: string[];
    targetAudience: string;
  };
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 space-y-6 text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[11px] uppercase tracking-wider bg-indigo-100 text-indigo-900 px-3 py-1 font-bold rounded-full border border-indigo-200">
            {course.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
            {course.title}
          </h2>
          <div className="flex flex-wrap gap-4 mt-2 text-xs font-semibold text-slate-500">
            <span>LEVEL: {course.level}</span>
            <span>•</span>
            <span>DURATION: {course.duration}</span>
            <span>•</span>
            <span>SCHEDULE: {course.schedule}</span>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed border-t border-b border-slate-200 py-4">
          {course.description}
        </p>

        <div className="space-y-3">
          <div className="text-xs uppercase font-bold text-slate-900 tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600" /> COURSE MODULES & ODC PROJECTS:
          </div>
          <div className="space-y-2">
            {course.topics.map((topic, i) => (
              <div
                key={i}
                className={`bg-slate-50 border p-3.5 rounded-xl flex items-start gap-3 text-xs ${
                  topic.includes('ODC') ? 'border-indigo-300 bg-indigo-50/50 text-indigo-950 font-bold' : 'border-slate-200 text-slate-700'
                }`}
              >
                <span className="text-indigo-600 font-bold shrink-0">MODULE 0{i + 1}:</span>
                <span>{topic}</span>
                {topic.includes('ODC') && (
                  <span className="ml-auto bg-indigo-600 text-white px-2 py-0.5 text-[10px] uppercase shrink-0 font-bold rounded-md">
                    ODC PROJECT
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-500 font-medium">TUITION:</div>
            <div className="text-2xl font-extrabold text-slate-900">{course.price} <span className="text-xs text-slate-500 font-normal">/{course.period}</span></div>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto text-xs uppercase font-bold bg-indigo-600 text-white px-6 py-3.5 rounded-xl hover:bg-indigo-700 transition-all text-center flex items-center justify-center gap-2 shadow-sm"
          >
            BOOK FREE TRIAL CLASS <Sparkles className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};