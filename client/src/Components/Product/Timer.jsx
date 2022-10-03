import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("localhost:8080");

function Timer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    socket.on("timer", (data) => {
      setTimeLeft(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="w-full">
      <span className="font-semibold">Time Remainder</span>
      {timeLeft && (
        <div
          className="flex bg-gray-100 gap-2 w-full h-[100px] justify-center items-center p-4 my-3"
          style={{ fontStyles: "sans-serif" }}
        >
          <div className="w-[20%] flex flex-col justify-center items-center">
            <span className="font-semibold">{timeLeft.days + " :"}</span>
            <span className="font-light text-sm text-black">days</span>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-center">
            <span className="font-semibold">{timeLeft.hours + " :"}</span>
            <span className="font-light text-sm text-black">hrs</span>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-center">
            <span className="font-semibold">{timeLeft.minutes + " :"}</span>
            <span className="font-light text-sm text-black">min</span>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-center">
            <span className="font-semibold">{timeLeft.seconds}</span>
            <span className="font-light text-sm text-black">sec</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer;
