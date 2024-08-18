import { useEffect } from "react";

// Custom hook
export const useLogPersonDetails = (
  personDetails: any,
  currentTime: string,
  enableLogs: boolean
) => {
  useEffect(() => {
    if (enableLogs && personDetails) {
      console.log("Person Details:", personDetails);
      console.log("Current Time:", currentTime);
    }
  }, [personDetails, currentTime, enableLogs]);
};
