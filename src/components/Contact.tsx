'use client';
import siteConfig from '@/data/siteConfig.json';
import { Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white text-slate-900 py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-600 mb-2">
            ENROLL & FREE TRIAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            BOOK A FREE TRIAL CLASS
          </h2>
          <p className="text-slate-600 max-w-2xl mt-2 text-sm">
            Ready to learn JavaScript, Python, or Java with fun projects? Fill out the quick form below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-1 sm:p-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd3HyWLbySPbFVg3ERM4JiG1U4_MuqmZ_PXQKXm0NKQd6xp8Q/viewform?embedded=true"
              className="w-full min-h-[750px] sm:min-h-[850px] md:min-h-[950px] border-0 rounded-xl"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>

          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase text-slate-500 font-bold">DIRECT EMAIL</div>
                    <div className="text-base text-slate-900 font-bold mt-1">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase text-slate-500 font-bold">PHONE / WHATSAPP</div>
                    <div className="text-base text-slate-900 font-bold mt-1">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase text-slate-500 font-bold">WORKING HOURS</div>
                    <div className="text-base text-slate-900 font-bold mt-1">
                      {siteConfig.contact.workingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}