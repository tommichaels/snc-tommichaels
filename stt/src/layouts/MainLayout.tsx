"use client";
import { FunctionComponent, PropsWithChildren, useState, useEffect } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<PropsWithChildren<MainLayoutProps>> = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const formatTime = (date: Date): string => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;
    };

    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(formatTime(now));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center"
      )}
    >
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
          <Button key={person}>{person}</Button>
        ))}
      </div>
      <div className={classNames("mt-4", "text-lg")}>
        Current Time: {currentTime}
      </div>
    </main>
  );
};
