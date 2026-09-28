'use client';
import { useState } from 'react';
import siteConfig from '@/data/siteConfig.json';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: 'Middle School (Ages 11-13)',
    course: 'JavaScript Web & Game Creator',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white text-slate-900 py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-slate-200">
          <div className="text-xs uppercase font-bold tracking-wider text-indigo-600 mb-2">
            ENROLL & FREE TRIAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            BOOK A FREE KIDS TRIAL CLASS
          </h2>
          <p className="text-slate-600 max-w-2xl mt-2 text-sm">
            Ready to learn JavaScript, Python, or Java with fun 1-Day ODC Projects? Fill out the quick form below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 bg-slate-50/80 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-block p-4 bg-indigo-600 text-white rounded-2xl mb-2 shadow-md">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  TRIAL REQUEST RECEIVED!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Awesome, <strong>{formData.name}</strong>! We've received your request for <strong>{formData.course}</strong>. Our lead kids tutor will email you at <strong>{formData.email}</strong> within 24 hours to schedule your free trial session.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all mt-6 inline-block shadow-sm"
                >
                  SUBMIT ANOTHER REQUEST
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-slate-700 mb-2 font-bold">
                      PARENT / KID NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex & Mom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm px-4 py-3 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-slate-700 mb-2 font-bold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm px-4 py-3 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-slate-700 mb-2 font-bold">
                      KID'S AGE / GRADE
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm px-4 py-3 focus:outline-none transition-all"
                    >
                      <option value="Elementary (Ages 6-10)">Elementary (Ages 6-10)</option>
                      <option value="Middle School (Ages 11-13)">Middle School (Ages 11-13)</option>
                      <option value="High School (Ages 14-16)">High School (Ages 14-16)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-slate-700 mb-2 font-bold">
                      INTERESTED COURSE
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm px-4 py-3 focus:outline-none transition-all"
                    >
                      <option value="JavaScript Web & Game Creator">JavaScript Web & Game Creator</option>
                      <option value="Python Arcade & Turtle Logic">Python Arcade & Turtle Logic</option>
                      <option value="Java Apps & Minecraft Logic">Java Apps & Minecraft Logic</option>
                      <option value="1-Day ODC Project Workshop">1-Day ODC Project Workshop</option>
                      <option value="Custom 1-on-1 Kids Tutoring">Custom 1-on-1 Kids Tutoring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-700 mb-2 font-bold">
                    MESSAGE / GOALS (OPTIONAL)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what your kid likes (e.g. games, animations, Minecraft) or any prior coding experience..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm px-4 py-3 focus:outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full font-bold uppercase bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" /> SUBMIT FREE TRIAL REQUEST
                </button>
              </form>
            )}
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
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase text-slate-500 font-bold">CLASS FORMAT</div>
                    <div className="text-base text-slate-900 font-bold mt-1">
                      {siteConfig.contact.location}
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

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center">
              <div className="text-xs uppercase font-bold tracking-wider text-indigo-700 mb-1 flex items-center justify-center gap-1">
                <Sparkles className="w-4 h-4 text-indigo-600" /> 100% FREE TRIAL SESSION
              </div>
              <p className="text-xs text-indigo-900 leading-relaxed">
                The first class is 100% free with no commitment! Try an ODC project with your child and see how fun coding can be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};