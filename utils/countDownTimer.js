// import dayjs from "dayjs";

// const getRemainingDays = (nowDayjs, timestampDayjs) => {
//   const days = timestampDayjs.diff(nowDayjs, "days");
//   return days.toString();
// };

// const addZeros = (time, minLength) => {
//   const timeString = time.toString();
//   if (timeString.length >= minLength) return timeString;
//   return "0".repeat(minLength - timeString.length) + timeString;
// };

// const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
//   const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
//   return addZeros(seconds, 2);
// };
// const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
//   const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
//   return addZeros(minutes, 2);
// };
// const getRemainingHours = (nowDayjs, timestampDayjs) => {
//   const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
//   return addZeros(hours, 2);
// };

// export default function getRemainingTime(timestamp) {
//   const timestampDayjs = dayjs(timestamp);
//   const nowDayjs = dayjs();
//   if (timestampDayjs.isBefore(nowDayjs)) {
//     return {
//       seconds: "60",
//       minutes: "60",
//       hours: "12",
//       days: "03",
//     };
//   }
//   return {
//     seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
//     minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
//     hours: getRemainingHours(nowDayjs, timestampDayjs),
//     days: getRemainingDays(nowDayjs, timestampDayjs),
//   };
// }
// countDownTimer.js
// countDownTimer.js
import dayjs from "dayjs";

const getRemainingDays = (nowDayjs, timestampDayjs) => {
  const days = timestampDayjs.diff(nowDayjs, "days");
  return days.toString();
};

const addZeros = (time, minLength) => {
  const timeString = time.toString();
  if (timeString.length >= minLength) return timeString;
  return "0".repeat(minLength - timeString.length) + timeString;
};

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
  const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
  return addZeros(seconds, 2);
};
const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
  const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
  return addZeros(minutes, 2);
};
const getRemainingHours = (nowDayjs, timestampDayjs) => {
  const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
  return addZeros(hours, 2);
};

export default function getRemainingTime(timestamp) {
  const timestampDayjs = dayjs(timestamp);
  const nowDayjs = dayjs();

  const duration = timestampDayjs.diff(nowDayjs, 'millisecond');

  if (duration <= 0) {

    const defaultTime = nowDayjs.add(1, 'day'); 
      return {
          days: addZeros(defaultTime.date(), 2),
          hours: addZeros(defaultTime.hour(), 2),
          minutes: addZeros(defaultTime.minute(), 2),
          seconds: addZeros(defaultTime.second(), 2),
      };
  }

  // Format the remaining time
  return {
      days: addZeros(Math.floor(duration / (1000 * 60 * 60 * 24)), 2),
      hours: addZeros(Math.floor((duration / (1000 * 60 * 60)) % 24), 2),
      minutes: addZeros(Math.floor((duration / (1000 * 60)) % 60), 2),
      seconds: addZeros(Math.floor((duration / 1000) % 60), 2),
  };
}






