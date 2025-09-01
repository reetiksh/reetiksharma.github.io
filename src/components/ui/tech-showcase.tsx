import React, { useState, useEffect } from 'react';
import { Badge } from './badge';

export const AnimatedTechStack = () => {
  const [visibleTechs, setVisibleTechs] = useState(0);
  
  const techStack = [
    { name: 'Java', color: 'from-orange-500 to-red-600', icon: '☕' },
    { name: 'Spring Boot', color: 'from-green-500 to-green-600', icon: '🍃' },
    { name: 'React', color: 'from-blue-400 to-blue-600', icon: '⚛️' },
    { name: 'Angular', color: 'from-red-500 to-red-700', icon: '🅰️' },
    { name: 'MySQL', color: 'from-blue-600 to-blue-800', icon: '🗄️' },
    { name: 'PostgreSQL', color: 'from-blue-700 to-indigo-600', icon: '🐘' },
    { name: 'Docker', color: 'from-blue-500 to-cyan-500', icon: '🐳' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600', icon: '☁️' },
    { name: 'Git', color: 'from-gray-700 to-gray-900', icon: '📱' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: '🚀' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleTechs(prev => (prev + 1) % (techStack.length + 1));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {techStack.map((tech, index) => (
        <div
          key={tech.name}
          className={`relative overflow-hidden rounded-lg p-4 bg-gradient-to-br ${tech.color} 
            transition-all duration-500 transform hover-scale hover-glow
            ${index < visibleTechs ? 'animate-bounce-in opacity-100' : 'opacity-30'}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-center text-white">
            <div className="text-2xl mb-2 animate-float">{tech.icon}</div>
            <div className="text-sm font-semibold">{tech.name}</div>
          </div>
          <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white font-bold animate-pulse">Expert</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CodeTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  
  const commands = [
    '$ git clone https://github.com/reetik/portfolio.git',
    '$ cd portfolio && npm install',
    '$ npm run build',
    '✅ Build successful! Ready to deploy...',
    '$ docker build -t portfolio:latest .',
    '$ kubectl apply -f deployment.yaml',
    '🚀 Application deployed to production!',
    '$ echo "Ready to code the future!"'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % commands.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-green-400 text-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-2">reetik@developer:~</span>
      </div>
      
      <div className="space-y-2">
        {commands.slice(0, currentLine + 1).map((command, index) => (
          <div
            key={index}
            className={`${index === currentLine ? 'animate-code-type overflow-hidden whitespace-nowrap' : ''}`}
          >
            {command}
            {index === currentLine && (
              <span className="animate-terminal bg-green-400 text-black">█</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const APIEndpoints = () => {
  const [activeEndpoint, setActiveEndpoint] = useState(0);
  
  const endpoints = [
    { method: 'GET', path: '/api/users', status: '200 OK', response: '{ "users": [...] }' },
    { method: 'POST', path: '/api/auth/login', status: '201 Created', response: '{ "token": "jwt..." }' },
    { method: 'PUT', path: '/api/users/:id', status: '200 OK', response: '{ "updated": true }' },
    { method: 'DELETE', path: '/api/sessions', status: '204 No Content', response: 'null' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEndpoint(prev => (prev + 1) % endpoints.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-3">
      {endpoints.map((endpoint, index) => {
        const isActive = index === activeEndpoint;
        const methodColors = {
          GET: 'bg-green-500',
          POST: 'bg-blue-500', 
          PUT: 'bg-yellow-500',
          DELETE: 'bg-red-500'
        };

        return (
          <div
            key={index}
            className={`flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 hover-lift
              ${isActive ? 'bg-primary/10 border-primary animate-glow' : 'bg-card border-border'}`}
          >
            <Badge className={`${methodColors[endpoint.method]} text-white font-mono text-xs`}>
              {endpoint.method}
            </Badge>
            <code className="flex-1 font-mono text-sm">{endpoint.path}</code>
            <span className={`text-xs font-semibold ${isActive ? 'text-green-400 animate-pulse' : 'text-muted-foreground'}`}>
              {endpoint.status}
            </span>
            {isActive && (
              <div className="animate-slide-in-right">
                <code className="text-xs text-muted-foreground">{endpoint.response}</code>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const DatabaseSchema = () => {
  const [highlightedTable, setHighlightedTable] = useState(0);
  
  const tables = ['users', 'projects', 'skills', 'experience'];

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightedTable(prev => (prev + 1) % tables.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <svg viewBox="0 0 400 300" className="w-full h-48 border rounded-lg bg-card/50">
        {/* Database tables */}
        {tables.map((table, index) => {
          const x = (index % 2) * 180 + 20;
          const y = Math.floor(index / 2) * 120 + 40;
          const isHighlighted = index === highlightedTable;
          
          return (
            <g key={table}>
              <rect
                x={x}
                y={y}
                width={160}
                height={80}
                fill={isHighlighted ? 'hsl(var(--primary))' : 'hsl(var(--card))'}
                stroke={isHighlighted ? 'hsl(var(--primary))' : 'hsl(var(--border))'}
                strokeWidth="2"
                rx="8"
                className={isHighlighted ? 'animate-glow' : ''}
              />
              <text
                x={x + 80}
                y={y + 25}
                textAnchor="middle"
                fill={isHighlighted ? 'white' : 'hsl(var(--foreground))'}
                className="text-sm font-semibold"
              >
                {table}
              </text>
              <text
                x={x + 10}
                y={y + 45}
                fill={isHighlighted ? 'white' : 'hsl(var(--muted-foreground))'}
                className="text-xs"
              >
                id: bigint
              </text>
              <text
                x={x + 10}
                y={y + 60}
                fill={isHighlighted ? 'white' : 'hsl(var(--muted-foreground))'}
                className="text-xs"
              >
                created_at: timestamp
              </text>
            </g>
          );
        })}
        
        {/* Connecting lines */}
        <line x1="100" y1="120" x2="200" y2="160" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse-slow" />
        <line x1="280" y1="120" x2="220" y2="160" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse-slow" />
      </svg>
    </div>
  );
};