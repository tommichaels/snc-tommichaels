"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";
import { useLogContext } from "@/utils/context/LogContext";

type ButtonProps = {};



export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
}) => {
  const { enableLogs, toggleLogs } = useLogContext();

  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border border-black")}
      onClick={toggleLogs}
    >
      {children}
    </button>
  );
};
