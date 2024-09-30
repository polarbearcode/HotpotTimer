'use client'
import React, { useEffect, useState } from "react";

export default function Timer({ cookTime }  : {cookTime: number}) {
  const [time, setTime] = useState(cookTime * 60);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);

    return () => clearInterval(time); // have to return a function so use () =>.
  }, []);

  return (
    <div>
      <p>
        Time left: {`${Math.floor(time / 60)}`.padStart(2, '0')}:
        {`${time % 60}`.padStart(2, '0')}
      </p>
    </div>
  );
}