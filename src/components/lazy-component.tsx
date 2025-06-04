import React, { lazy, Suspense } from 'react';

// Lazy load components for better performance
const ParticlesBackground = lazy(() => import('./particles-background'));

interface LazyComponentProps {
  component: 'particles' | 'project-card' | 'tech-icons';
  fallback?: React.ReactNode;
  [key: string]: any;
}

const defaultFallback = (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-500"></div>
  </div>
);

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = defaultFallback, 
  ...props 
}) => {
  const getComponent = () => {
    switch (component) {
      case 'particles':
        return <ParticlesBackground {...props} />;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={fallback}>
      {getComponent()}
    </Suspense>
  );
};

export default LazyComponent;
