import React, { useState, useEffect } from 'react';
import TimeBlock from './TimeBlock';

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
    <TimeBlock value={"19.08.23 22:00"} label="Букет)" />
      <TimeBlock value={days} label="Дней" />
      <TimeBlock value={hours} label="Часов" />
      <TimeBlock value={minutes} label="Минут" />
      <TimeBlock value={seconds} label="Секунд" />
    </div>
    </>
  );
};

export default Timer;
