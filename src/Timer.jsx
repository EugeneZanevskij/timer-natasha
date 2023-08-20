import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [eventDate, setEventDate] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const storedDayX = JSON.parse(localStorage.getItem("dayx")) || "";

  if (!storedDayX) {
    localStorage.setItem("dayx", new Date(2023, 7, 19, 22).getTime());
    setEventDate(new Date(2023, 7, 19, 22));
  } else {
    setEventDate(storedDayX);
  }

    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const calculateRemainingTime = () => {
    const eventDateTime = new Date(eventDate);
    const passedTime = currentDateTime - eventDateTime;

    const days = Math.floor(passedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (passedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (passedTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((passedTime % (1000 * 60)) / 1000);

    return { days, hours, minutes , seconds };
  };

  const { days, hours, minutes, seconds } = calculateRemainingTime();

  return (
    <>
    <div className="timer-bg"/>
    <div className="timer-container">
      <p className="time-text">
        {days} дней, {hours} часов, {minutes} минут и {seconds} секунд))
      </p>
    </div>
    </>
  );
};

export default Timer;
