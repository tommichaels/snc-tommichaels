import { useState, useEffect } from "react";

type TimerProps = {
  onTimeChange: (time: string) => void; // Callback to send time to parent
};

export const Timer = ({ onTimeChange }: TimerProps) => {
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
      const formattedTime = formatTime(now);
      setCurrentTime(formattedTime);
      onTimeChange(formattedTime); // Send time to parent component
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onTimeChange]);

  return <div className="mt-4 text-lg font-semibold text-gray-700">Current Time: {currentTime}</div>;
};
