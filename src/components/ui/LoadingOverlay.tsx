import { useNavigation } from '@/contexts/NavigationContext';

const LoadingOverlay = () => {
  const { isNavigating } = useNavigation();

  if (!isNavigating) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="text-center">
        <div className="code-block w-80">
          <div className="code-header">
            <span className="code-dot red"></span>
            <span className="code-dot yellow"></span>
            <span className="code-dot green"></span>
            <span className="ml-auto text-muted text-sm">loading.sh</span>
          </div>
          <div className="terminal-content p-6">
            <div className="font-mono text-left space-y-2">
              <p className="text-primary">
                <span className="text-accent">$</span> cd /next-page
              </p>
              <p className="text-muted animate-pulse">
                Loading
                <span className="loading-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-1 flex-1 bg-secondary rounded overflow-hidden">
                  <div className="h-full bg-primary animate-loading-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-primary glitch-text text-lg font-bold">hoWo@Security</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
