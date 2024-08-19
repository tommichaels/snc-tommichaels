import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LogContextType {
  enableLogs: boolean;
  toggleLogs: () => void;
}

const LogContext = createContext<LogContextType | undefined>(undefined);

export const LogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [enableLogs, setEnableLogs] = useState<boolean>(false);

  const toggleLogs = () => {
    setEnableLogs(prevState => !prevState);
  };

  return (
    <LogContext.Provider value={{ enableLogs, toggleLogs }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLogContext = (): LogContextType => {
  const context = useContext(LogContext);
  if (!context) {
    throw new Error('useLogContext must be used within a LogProvider');
  }
  return context;
};
