'use client';
import { useState } from 'react';
import coursesData from '@/data/courses.json';
import { ArrowUpRight, Clock } from 'lucide-react';
import CourseModal from './CourseModal';

export default function Courses() {
  const [activeCourseModal, setActiveCourseModal] = useState<any>(null);

  return (
    <section id="courses" className="bg-white text-slate-900 py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-indigo-600 mb-2">
              KIDS CODING COURSES (JS • PYTHON • JAVA)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              CODING COURSES & ODC PROJECTS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-slate-50/80 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" /> {course.duration}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="text-xs text-slate-600 mb-6 bg-white p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-900 font-bold uppercase">Audience:</span> {course.targetAudience}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setActiveCourseModal(course)}
                  className="text-xs uppercase font-bold bg-white text-slate-800 px-3 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition-all text-center shadow-sm"
                >
                  SYLLABUS
                </button>
                <a
                  href="#contact"
                  className="text-xs uppercase font-bold bg-indigo-600 text-white px-3 py-3 rounded-xl hover:bg-indigo-700 transition-all text-center flex items-center justify-center gap-1 shadow-sm"
                >
                  ENROLL <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeCourseModal && (
        <CourseModal
          course={activeCourseModal}
          onClose={() => setActiveCourseModal(null)}
        />
      )}
    </section>
  );
};