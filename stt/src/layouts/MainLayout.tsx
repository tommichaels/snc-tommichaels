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
import ProfileCard from "@/components/ProfileCard";
import ProfileCardSkeleton from "@/components/support/ProfileCardSkeleton";
import ProfileCardError from "@/components/support/ProfileCardError";


const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {

  const [personData, setPersonData] = useState<any | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const { enableLogs } = useLogContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [activePerson, setActivePerson] = useState<Person | null>(null);


  const handleButtonClick = (person: Person) => {
    setActivePerson(person); // Set active button
  };

  
  const handleFetchSuccess = (data: any) => {
    setPersonData(data); // Update state with fetched data
    setHasError(false); // Reset error state on successful fetch
    setLoading(false); // Reset loading state
  };

  const handleFetchError = (data: any) => {
    setPersonData(data);
    setHasError(true); 
    setLoading(false); 
  };

  useLogPersonDetails(personData, currentTime, enableLogs);


  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center gap-y-3 items-center",
      )}
    >
      <Timer onTimeChange={setCurrentTime} /> 
      
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
           <Button 
            key={person} 
            person={person} 
            onFetchSuccess={handleFetchSuccess} 
            onFetchError={handleFetchError}
            setLoading={setLoading} 
            isActive={activePerson === person} 
            onClick={() => handleButtonClick(person)} 
          >
            {person}
          </Button>
        ))}
        <button />
      </div>

      <LoggingToggle />

      <div
        className={classNames(
          "mt-4",
          "transition-all duration-500 ease-in-out",
          loading || personData ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        {loading ? (
          <ProfileCardSkeleton />
        ) : hasError ? (
          <ProfileCardError />
        ) : personData ? (
          <ProfileCard
            name={personData.name}
            profileBanner={personData.backgroundImageUrl}
            profilePicture={personData.profilePictureUrl}
            jobTitle={personData.title}
            followers={personData.followers}
            following={personData.following}
          />
        ) : null}
      </div>

    </main>
  );
};
