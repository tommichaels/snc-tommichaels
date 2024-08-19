import { useEffect, useRef } from 'react';

export const useLogPersonDetails = (
  personData: any,
  currentTime: string,
  enableLogs: boolean
) => {
  const loggedPersonRef = useRef<any | null>(null);

  useEffect(() => {
    if (enableLogs && personData) {
      // Check if the person has already been logged
      if (loggedPersonRef.current !== personData) {
        console.log(`Person Details:`, personData);
        console.log(`Current Time: ${currentTime}`);
        loggedPersonRef.current = personData;
      }
    }
  }, [personData, currentTime, enableLogs]);
};
