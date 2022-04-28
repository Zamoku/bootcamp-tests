function isWeekday(checkWeek){
    if (checkWeek === 'Saturday' || checkWeek === 'Sunday'){
      return false
    }
    else if(checkWeek === 'Monday' || checkWeek === 'Tuesday' ||checkWeek === 'Wednesday'|| checkWeek === 'Thursday'|| checkWeek === 'Friday'){
    return true
   }
     return "Please double check and make sure you enter the correct day of the week"
  }