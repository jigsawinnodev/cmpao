import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./hook/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      {/* <span>Expired!!!</span> */}
      <p className="my-auto">หมดเวลา</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter my-3">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"วัน"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"ชั่วโมง"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"นาที"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"วินาที"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
