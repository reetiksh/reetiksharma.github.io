import React from 'react';

export const FloatingCodeSnippets = () => {
  const codeSnippets = [
    'const developer = "Reetik";',
    'function buildAmazingApps() {',
    'return expertise.join("innovation");',
    'if (challenge.isComplex()) {',
    '@Override public void solve() {',
    'SELECT * FROM possibilities;',
    'npm install --save future',
    '{ "status": "success" }',
    'Spring.getBean("solutions")',
    'git commit -m "another feature"'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className={`absolute text-xs font-mono opacity-20 text-primary animate-float hover-glow`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
  );
};

export const ParticleField = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export const MatrixRain = () => {
  const columns = Array.from({ length: 15 }, (_, i) => i);
  const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {columns.map((col) => (
        <div
          key={col}
          className="absolute text-green-400 font-mono text-sm animate-matrix"
          style={{
            left: `${col * 6.67}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          {Array.from({ length: 20 }, () => 
            chars[Math.floor(Math.random() * chars.length)]
          ).join('')}
        </div>
      ))}
    </div>
  );
};

export const CircuitLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        
        {/* Circuit paths */}
        <path
          d="M0,100 L200,100 L200,200 L400,200 L400,300 L600,300"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-circuit"
        />
        <path
          d="M800,150 L600,150 L600,250 L400,250 L400,350 L200,350"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-circuit"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M0,400 L150,400 L150,500 L350,500 L350,450 L500,450"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-circuit"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Circuit nodes */}
        <circle cx="200" cy="100" r="4" fill="hsl(var(--primary))" className="animate-pulse-slow" />
        <circle cx="400" cy="200" r="4" fill="hsl(var(--accent))" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <circle cx="600" cy="300" r="4" fill="hsl(var(--primary))" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  );
};

export const DataStream = () => {
  const streams = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map((stream) => (
        <div
          key={stream}
          className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow"
          style={{
            top: `${20 + stream * 15}%`,
            animationDelay: `${stream * 0.8}s`,
            animationDuration: '4s',
          }}
        />
      ))}
    </div>
  );
};