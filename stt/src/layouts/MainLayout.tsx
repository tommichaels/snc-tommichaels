"use client";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import { LoggingToggle } from "@/components/LoggingToggle";
import { Timer } from "@/components/Timer";
import { useLogPersonDetails } from "@/utils/hooks/useLogPersonDetails";
import { useLogContext } from "@/utils/context/LogContext";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {

  const [personData, setPersonData] = useState<any | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const { enableLogs } = useLogContext();


  const handleFetchSuccess = (data: any) => {
    setPersonData(data); // Update state with fetched data
  };

  useLogPersonDetails(personData, currentTime, enableLogs);


  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
           <Button key={person} person={person} onFetchSuccess={handleFetchSuccess}>{person}</Button>
        ))}
        <button />
      </div>
      <Timer onTimeChange={setCurrentTime} /> 

      <LoggingToggle />

      <div className="mt-4">
        {personData && (
          <div>
            <h3>Details</h3>
            <p>Name: {personData.name}</p>
            <p>Title: {personData.title}</p>
            <p>Followers: {personData.followers}</p>
            <p>Following: {personData.following}</p>
          </div>
        )}
      </div>
    </main>
  );
};
