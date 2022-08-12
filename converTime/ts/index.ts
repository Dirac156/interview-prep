'use strict';

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    let period: string = s.slice(8, 10);
    let hour: string = s.slice(0, 2);
    let minute: string = s.slice(3, 5);
    let sec: string = s.slice(6, 8);
    switch(period){
        case "AM":
            if (hour === "12") hour = "00";
            return `${hour}:${minute}:${sec}`
        case "PM":
            let hourNumb: number = +hour;
            if (hour !== "12") hourNumb += 12;
            return `${hourNumb}:${minute}:${sec}`
        default:
            return s;   
    }

}