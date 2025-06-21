'use client';
import dynamic from 'next/dynamic';

export default dynamic(() => import('@/components/MdxContent'), {
  loading: () => (
    <div className="relative w-full max-w-3xl mx-auto p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-pink-100 via-blue-50 to-white opacity-70 animate-gradient-move" />
      </div>
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-2/3 bg-gray-200 rounded-lg animate-typewriter overflow-hidden relative">
            <div className="absolute right-0 top-0 h-full w-1 bg-pink-400 animate-blink" />
          </div>
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-typewriter delay-100" />
          <div className="h-4 w-4/6 bg-gray-200 rounded animate-typewriter delay-200" />
          <div className="h-4 w-3/6 bg-gray-200 rounded animate-typewriter delay-300" />
        </div>
        <div className="h-64 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl shadow-inner animate-pulse mb-4" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-typewriter delay-400" />
          <div className="h-4 w-11/12 bg-gray-200 rounded animate-typewriter delay-500" />
          <div className="h-4 w-10/12 bg-gray-200 rounded animate-typewriter delay-600" />
          <div className="h-4 w-9/12 bg-gray-200 rounded animate-typewriter delay-700" />
        </div>
        <div className="flex items-center space-x-4 mt-8">
          <div className="h-12 w-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full animate-pulse shadow" />
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-typewriter delay-800" />
            <div className="h-4 w-1/3 bg-gray-200 rounded animate-typewriter delay-900" />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-typewriter {
          animation: typewriter 1.2s steps(30, end) forwards;
        }
        .animate-typewriter.delay-100 { animation-delay: 0.1s; }
        .animate-typewriter.delay-200 { animation-delay: 0.2s; }
        .animate-typewriter.delay-300 { animation-delay: 0.3s; }
        .animate-typewriter.delay-400 { animation-delay: 0.4s; }
        .animate-typewriter.delay-500 { animation-delay: 0.5s; }
        .animate-typewriter.delay-600 { animation-delay: 0.6s; }
        .animate-typewriter.delay-700 { animation-delay: 0.7s; }
        .animate-typewriter.delay-800 { animation-delay: 0.8s; }
        .animate-typewriter.delay-900 { animation-delay: 0.9s; }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(1, end) infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 4s linear infinite alternate;
        }
      `}</style>
    </div>
  ),
  ssr: false
});