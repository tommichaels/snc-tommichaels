"use client";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import classNames from "classnames";
import { Person } from "@/utils/common/person";
import { useLogContext } from "@/utils/context/LogContext";
import ResponseSnackbar from "@/utils/hooks/ResponseSnackbar";

type ButtonProps = {
  person: Person;
  onFetchError: (hasError: boolean) => void;
  onFetchSuccess: (data: any) => void; // Callback to pass data to MainLayout
  setLoading: (isLoading: boolean) => void;
  isActive: boolean;
  onClick: () => void; 
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  person,
  onFetchSuccess,
  onFetchError,
  setLoading,
  isActive,
  onClick,
}) => {
  const { enableLogs } = useLogContext();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleButtonClick = async () => {
    onClick();
    setLoading(true);
    if (enableLogs) {
      console.log(`Fetching details for ${person}`);
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
      const response = await fetch(`${baseUrl}/person?person=${person}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch details for ${person}`);
      }
      const data = await response.json();
      
      onFetchSuccess(data); // Send data to MainLayout
    } catch (error) {
      console.error("Error fetching person details:", error);
      onFetchError(true); // Trigger error state
      setSnackbarOpen(true);
    }  finally {
      setLoading(false); // Set loading to false when the request finishes
    }
  };

  return (
    <>
    <ResponseSnackbar
      message={`Error fetching details for ${person}`}
      isOpen={snackbarOpen}
      onClose={() => setSnackbarOpen(false)}
    />
    <button
      type="button"
      className={classNames(
        "px-2 py-1 border",
        { "border-black": !isActive },
        { "border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white p-[2px]": isActive }
      )}
      onClick={handleButtonClick}
    >
      <span className="bg-transparent px-2 py-1">{children}</span>
    </button>
  </>
  );
};
