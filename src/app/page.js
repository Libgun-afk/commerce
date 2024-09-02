// "use client";
// import { useEffect, useState } from "react";

// export const page = () => {
//   const [timer, setTimer] = useState({
//     time: 0,
//     minute: 0,
//     secund: 0,
//     millisecund: 0,
//   });

//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     let inter;
//     if (start) {
//       inter = setInterval(() => {
//         setTimer((prev) => {
//           let secund = prev.secund;
//           let minute = prev.minute;
//           let time = prev.time;
//           let millisecund = prev.millisecund;

//           if (millisecund === 100) {
//             secund++;
//             millisecund = 0;
//           }
//           if (secund === 60) {
//             minute++;
//             secund = 0;
//           }
//           if (minute === 60) {
//             time++;
//             minute = 0;
//           }
//           return {
//             secund: secund,
//             time: time,
//             millisecund: millisecund,
//             time: time,
//           };
//         });
//       }, 10);
//     }

//     return () => {
//       clearInterval(inter);
//     };
//   });
//   return
//   <div>
//     <div>

//     </div>
//   </div>
// };

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
