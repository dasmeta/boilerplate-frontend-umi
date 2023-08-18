import React, { createContext, useState } from "react";

interface ExampleContextType {
  data: string;
  updateData: (newData: string) => void;
}

interface ExampleContextProviderProps {
  children: React.ReactNode; // This declares that the component expects a "children" prop
}

export const ExampleContext = createContext<ExampleContextType | undefined>(
  undefined
);

export const ExampleContextProvider: React.FC<ExampleContextProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<string>("Initial data");

  const updateData = (newData: string) => {
    setData(newData);
  };

  const contextValue: ExampleContextType = {
    data,
    updateData,
  };

  return (
    <ExampleContext.Provider value={contextValue}>
      {children}
    </ExampleContext.Provider>
  );
};
