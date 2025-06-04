import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-3xl font-bold text-white">G</span>
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl border-2 border-violet-400/30 animate-ping"></div>
            <div className="absolute w-28 h-28 rounded-2xl border border-purple-400/20 animate-ping animation-delay-150"></div>
            <div className="absolute w-36 h-36 rounded-2xl border border-violet-300/10 animate-ping animation-delay-300"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in-up">
          Gregoire is loading...
        </h2>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-75"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce animation-delay-150"></div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
