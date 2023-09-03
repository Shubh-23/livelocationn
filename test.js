const axios = require('axios');

axios.get('http://34.198.81.140/attendance.json').then(resp => {

  var total_salary_male = 0
  var total_salary_Female = 0
  resp.data.forEach(element => {
    if (element.date.split(' ')[0] == 'Feb') {
      if((element.weekday == 2 || element.weekday == 4 || element.weekday == 6) && element.designation == 'Worker'){
          // console.log(element);
  if(element.total_hours <  10.25 && element.gender == 'Male'){
    total_salary_male = total_salary_male + (element.per_day_salary*2) 
  }else if(element.total_hours == 9.25 && element.gender == 'Male' ){
    total_salary_male = total_salary_male + element.per_day_salary
  }else if(element.total_hours > 9.25 && element.gender == 'Male'){
    total_salary_male = total_salary_male + (element.per_day_salary/2)
  }else if(element.total_hours <  10.25 && element.gender == 'Female'){
    total_salary_Female = total_salary_Female + (element.per_day_salary*2) 
  }else if(element.total_hours == 9.25 && element.gender == 'Female' ){
    total_salary_Female = total_salary_Female + element.per_day_salary
  }else if(element.total_hours > 9.25 && element.gender == 'Female'){
    total_salary_Female = total_salary_Female + (element.per_day_salary/2)
  }
        }else if((element.weekday == 3 || element.weekday == 5 || element.weekday == 7 || element.weekday == 1) && element.gender == 'Female'){
          total_salary_Female = total_salary_Female + (element.per_day_salary*2)
        }
    }
});
if (total_salary_male < total_salary_Female ) {
  console.log("data");
  total_salary_male = total_salary_male + (total_salary_Female * 2/100)
}else{
  total_salary_Female = total_salary_Female + (total_salary_male * 2/100)

}
console.log(total_salary_male,total_salary_Female);
});

