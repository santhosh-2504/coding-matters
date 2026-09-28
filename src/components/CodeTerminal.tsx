'use client';
import { useState } from 'react';
import { Play, Terminal as TermIcon, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

const codeSnippets = {
  python: `# Python ODC Mini-Game Project
print("WELCOME TO PYTHON GAME STUDIO!")

hero_name = "Kid Coder"
score = 100
level = 1

print(f"Hero: {hero_name} | Level: {level} | Score: {score}")
print("Collected 3 magic stars!")
print("Python Code Executed Successfully!")`,

  javascript: `// JavaScript Web Arcade Project
const player = { name: "Web Explorer", energy: 100 };

function startMission() {
  return \`JS Mission Started! \${player.name} has \${player.energy}% energy!\`;
}

console.log(startMission());
console.log("Interactive JavaScript ODC Project Ready!");`,

  java: `// Java App & Game Logic Project
public class KidGame {
  public static void main(String[] args) {
    String gameName = "Minecraft Mod Script";
    int score = 250;
    System.out.println("Launching Java Project: " + gameName);
    System.out.println("System Ready for 1-on-1 Class!");
  }
}`
};

const sampleOutputs = {
  python: `> Running python3 game_demo.py ...
WELCOME TO PYTHON GAME STUDIO!
Hero: Kid Coder | Level: 1 | Score: 100
Collected 3 magic stars!
Python Code Executed Successfully!
[Process finished cleanly in 0.2s]`,

  javascript: `> Running node arcade.js ...
JS Mission Started! Web Explorer has 100% energy!
Interactive JavaScript ODC Project Ready!
[Process finished cleanly in 0.1s]`,

  java: `> Running java KidGame ...
Launching Java Project: Minecraft Mod Script
System Ready for 1-on-1 Class!
[Process finished cleanly in 0.3s]`
};

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState<'python' | 'javascript' | 'java'>('python');
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setHasRun(false);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 500);
  };

  return (
    <div className="border border-slate-200 bg-slate-900 rounded-2xl shadow-xl overflow-hidden w-full relative">
      {/* Speech Banner */}
      <div className="bg-indigo-50 text-indigo-950 px-4 py-3 border-b border-indigo-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
          <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>Select a language below & click RUN CODE to test real code!</span>
        </div>
      </div>

      {/* Editor Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="font-mono text-xs text-slate-400 ml-2 hidden sm:inline">
            kid_studio.{activeTab === 'python' ? 'py' : activeTab === 'javascript' ? 'js' : 'java'}
          </span>
        </div>

        {/* Language Tabs */}
        <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => { setActiveTab('python'); setHasRun(false); }}
            className={`font-mono text-xs px-3 py-1 rounded-md transition-colors ${
              activeTab === 'python' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            PYTHON
          </button>
          <button
            onClick={() => { setActiveTab('javascript'); setHasRun(false); }}
            className={`font-mono text-xs px-3 py-1 rounded-md transition-colors ${
              activeTab === 'javascript' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            JAVASCRIPT
          </button>
          <button
            onClick={() => { setActiveTab('java'); setHasRun(false); }}
            className={`font-mono text-xs px-3 py-1 rounded-md transition-colors ${
              activeTab === 'java' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            JAVA
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 bg-slate-950 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto min-h-[180px]">
        <pre className="whitespace-pre-wrap leading-relaxed text-slate-300 font-mono">
          {codeSnippets[activeTab]}
        </pre>
      </div>

      {/* Terminal Footer Bar */}
      <div className="bg-slate-900 border-t border-slate-800 p-3 flex items-center justify-between gap-3">
        <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
          <TermIcon className="w-4 h-4 text-indigo-400" />
          <span>Status: {isRunning ? 'Executing...' : hasRun ? 'Executed Successfully' : 'Ready'}</span>
        </div>
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="font-mono text-xs uppercase font-bold bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shrink-0 shadow-sm"
        >
          {isRunning ? (
            <span>RUNNING...</span>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-white" /> RUN CODE NOW
            </>
          )}
        </button>
      </div>

      {/* Output Console with Conversational CTAs */}
      {(hasRun || isRunning) && (
        <div className="bg-slate-950 border-t border-slate-800 p-4 font-mono text-xs text-slate-100 space-y-4">
          <div className="text-slate-400 border-b border-slate-800 pb-1 flex items-center justify-between">
            <span>TERMINAL OUTPUT:</span>
            <span className="text-emerald-400 font-bold">[{activeTab.toUpperCase()} SUCCESS]</span>
          </div>

          {isRunning ? (
            <div className="animate-pulse text-slate-400 py-2">&gt; Compiling script...</div>
          ) : (
            <>
              <pre className="whitespace-pre-wrap text-emerald-400 font-mono text-xs sm:text-sm">
                {sampleOutputs[activeTab]}
              </pre>

              {/* Conversational CTA Box */}
              <div className="pt-3 border-t border-slate-800 space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800 font-sans">
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase font-mono">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>YOU JUST EXECUTED REAL {activeTab.toUpperCase()} CODE!</span>
                </div>
                <p className="text-slate-300 text-xs leading-snug">
                  Want to build your own mini-game or 1-day ODC project with a patient 1-on-1 tutor? Let's get started!
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <a
                    href="#contact"
                    className="text-xs font-bold bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-all text-center flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> BOOK A FREE KIDS TRIAL
                  </a>
                  <a
                    href="#courses"
                    className="text-xs font-bold bg-slate-800 text-white px-4 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-700 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5" /> SEE ODC PROJECTS
                  </a>
                  <a
                    href="#contact"
                    className="text-xs font-bold bg-slate-800 text-slate-200 px-3 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-700 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> ASK A TUTOR
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};