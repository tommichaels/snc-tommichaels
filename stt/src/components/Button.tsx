"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";
import { Person } from "@/utils/common/person";
import { useLogContext } from "@/utils/context/LogContext";

type ButtonProps = {
  person: Person;
  onFetchSuccess: (data: any) => void; // Callback to pass data to MainLayout
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  person,
  onFetchSuccess,
}) => {
  const { enableLogs, toggleLogs } = useLogContext();

  const handleButtonClick = async () => {
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
      
      onFetchSuccess(data);
    } catch (error) {
      console.error("Error fetching person details:", error);
    }
  };

  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border border-black")}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};
