
let initiatedTime = '';

function diff_Time(dt2,dt1,limit){
    const dtsec  = dt2.getTime() - dt1.getTime();
    console.log(dtsec)
    var hh = Math.trunc((dtsec / 1000 / 60 / 60));
    var mm = Math.trunc((dtsec / 1000 / 60))
    var ss = (dtsec / 1000)
    const timerObj =  {
       milliseconds:dtsec,
       time:`hh ${hh} mm ${mm - hh*60} ss ${(ss - mm*60).toFixed(limit)}`,
       hh,mm,ss
      } 
   console.log(timerObj);
   return timerObj
}

export const startTimer = () => {
   if(initiatedTime !== ''){
      console.log('Please stop the timer');
      return 'Please stop the timer'
   }
   initiatedTime = new Date()
}

export const endTimer = (limit = 2) => {
   if(typeof limit !== Number){
      console.log('Please Enter the Number')
      return "Please Enter the Number"
   }  
   if(initiatedTime==''){
      console.log('Please Start Timer');
      return 'Please Start Timer'
   }
  const diff =  diff_Time(new Date(),initiatedTime,limit)
  initiatedTime = ''
  return diff
}


