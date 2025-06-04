import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface Command {
  id: string;
  label: string;
  description: string;
  action: () => void;
  shortcut?: string;
}

const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const commands: Command[] = [
    {
      id: 'nav-home',
      label: 'Go to Home',
      description: 'Navigate to the homepage',
      action: () => navigate('/'),
      shortcut: 'Ctrl+H'
    },
    {
      id: 'nav-about',
      label: 'Go to About',
      description: 'Navigate to the about page',
      action: () => navigate('/about'),
      shortcut: 'Ctrl+A'
    },
    {
      id: 'nav-contact',
      label: 'Go to Contact',
      description: 'Navigate to the contact page',
      action: () => navigate('/contact'),
      shortcut: 'Ctrl+C'
    },
    {
      id: 'scroll-top',
      label: 'Scroll to Top',
      description: 'Scroll to the top of the page',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      shortcut: 'Ctrl+T'
    },
    {
      id: 'toggle-theme',
      label: 'Toggle Theme',
      description: 'Switch between light and dark theme',
      action: () => document.documentElement.classList.toggle('dark'),
      shortcut: 'Ctrl+D'
    }
  ];

  const filteredCommands = commands.filter(command =>
    command.label.toLowerCase().includes(query.toLowerCase()) ||
    command.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Open/close with Ctrl+K
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      setIsOpen(prev => !prev);
      return;
    }

    // Close with Escape
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }

    // Execute shortcuts
    if (e.ctrlKey) {
      const command = commands.find(cmd => cmd.shortcut === `Ctrl+${e.key.toUpperCase()}`);
      if (command) {
        e.preventDefault();
        command.action();
        setIsOpen(false);
      }
    }
  }, [commands]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <div className="text-xs text-gray-500 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
          Press <kbd className="bg-white/10 px-1 py-0.5 rounded text-xs">Ctrl+K</kbd> for commands
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md mx-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="p-4 border-b border-white/10">
            <input
              type="text"
              placeholder="Type a command or search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
              autoFocus
            />
          </div>

          {/* Commands List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="p-4 text-center text-gray-400">
                No commands found
              </div>
            ) : (
              filteredCommands.map((command) => (
                <button
                  key={command.id}
                  onClick={() => {
                    command.action();
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="w-full p-4 text-left hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium group-hover:text-violet-300 transition-colors">
                        {command.label}
                      </div>
                      <div className="text-sm text-gray-400">
                        {command.description}
                      </div>
                    </div>
                    {command.shortcut && (
                      <kbd className="bg-white/10 px-2 py-1 rounded text-xs text-gray-300">
                        {command.shortcut}
                      </kbd>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-white/10 text-xs text-gray-400 flex justify-between">
            <span>↵ to select</span>
            <span>esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
