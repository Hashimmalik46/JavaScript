'use strict mode';

//Problem:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day ,calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmp=function(temps){
//   //finding min and max values
//   let max = temps[0];
//   let min =temps[0];
//   for(let i=0;i<temps.length;i++){
//     const currTemp= temps[i];
//     if(typeof currTemp!=='number') continue;
//     if (currTemp>max){
//       max=currTemp;
//     }
//     if (currTemp<min){
//       min=currTemp;
//     }
//   }
//   console.log(max,min);
//   return max-min;
// };

// const amp=calcTempAmp(temperatures1);
// console.log(amp);

//Problem 2: it should take 2 arrays

const calcTempAmp = function (t1, t2) {
  //merging arrays
  const temps=t1.concat(t2);
  //finding min and max values
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amp = calcTempAmp([3,5,1],[9,0,5]);
console.log(amp);
