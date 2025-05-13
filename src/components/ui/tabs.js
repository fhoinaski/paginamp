"use client";

import * as React from "react";

const TabsContext = React.createContext(null);

export function Tabs({ defaultValue, value, onValueChange, children, ...props }) {
  const [tabValue, setTabValue] = React.useState(value || defaultValue || "");

  React.useEffect(() => {
    if (value !== undefined) {
      setTabValue(value);
    }
  }, [value]);

  const handleValueChange = React.useCallback(
    (newValue) => {
      setTabValue(newValue);
      onValueChange?.(newValue);
    },
    [onValueChange]
  );

  return (
    <TabsContext.Provider value={{ value: tabValue, onValueChange: handleValueChange }}>
      <div {...props} className={`tabs ${props.className || ""}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, ...props }) {
  return (
    <div
      role="tablist"
      {...props}
      className={`flex space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800 ${props.className || ""}`}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, ...props }) {
  const { value: selectedValue, onValueChange } = React.useContext(TabsContext);
  const isSelected = selectedValue === value;

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      data-state={isSelected ? "active" : "inactive"}
      {...props}
      className={`px-3 py-1.5 text-sm font-medium transition-all rounded-md focus:outline-none 
        ${isSelected 
          ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100" 
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        } ${props.className || ""}`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, ...props }) {
  const { value: selectedValue } = React.useContext(TabsContext);
  const isSelected = selectedValue === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      data-state={isSelected ? "active" : "inactive"}
      {...props}
      className={`mt-2 ring-offset-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:ring-offset-gray-900 ${props.className || ""}`}
    >
      {children}
    </div>
  );
} 