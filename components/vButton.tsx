import React, { useMemo } from "react";

export const VButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  ...overrideProps
}) => {
  const props = useMemo(() => {
    const defaults: any = {
      className:
        "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    };
    return {
      ...defaults,
      ...overrideProps,
    };
  }, [overrideProps]);

  return <button {...props}>{children}</button>;
};

export default VButton;
