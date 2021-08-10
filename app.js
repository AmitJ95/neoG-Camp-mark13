function reverseStr(str) {
    
    let listOfChars = str.split("");
    let reverseListOfChars = listOfChars.reverse();
    let reverseStr = reverseListOfChars.join("");
    
    return reverseStr;

}


function isPalindrome(date) {
    let reverseDate = reverseStr(date)
    if (date === reverseDate) {
        return true;
    }
    return false;
}




function dateToStr(date) {
    let dateStr = {day:"",month:"",year:""}

    if (date.day < 10) {
        dateStr.day = '0'+date.day
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = '0'+date.month
    } else {
        dateStr.month = date.month.toString();
    }

    
    dateStr.year = date.year.toString();
    
    return dateStr;
}


function getAllDateFormats(date) {

    let stringDate = dateToStr(date);

    let ddmmyyyy = stringDate.day + stringDate.month + stringDate.year;
    let mmddyyyy = stringDate.month + stringDate.day + stringDate.year;
    let yyyymmdd = stringDate.year + stringDate.month + stringDate.day;
    let ddmmyy   = stringDate.day + stringDate.month + stringDate.year.slice(-2);
    let mmddyy   = stringDate.month + stringDate.day + stringDate.year.slice(-2);
    let yymmdd   = stringDate.year.slice(-2) + stringDate.month + stringDate.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

let date = {
    day: 10,
    month: 2,
    year: 2001
}

function checkPalindromeforAllDateFormats(date) {

    let listofPalindromes = getAllDateFormats(date);

    let flag = false;

    for(let i=0 ; i<listofPalindromes.length; i++){

        if (isPalindrome(listofPalindromes[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}


function isLeapYear(year) {
    
    if (year % 400 === 0) {
        
        return true;
    }

    if (year % 100 === 0) {
        return false;
    }

    if (year % 4 === 0) {
        return true;
    }

    return false;
}

function getNextDate(date) {
    let day = date.day + 1;
    let month = date.month;
    let year = date.year;

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month == 2) {
        if (isLeapYear(year)) {
            if(day > 29){
                day = 1;
                month = 3;
            }
        }else{
            if(day > 28) {
                day = 1;
                month = 3;
            }
        }
    }else{
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }


    if (month > 12) {
        month = 1;
        year++;
    }

    return{
        day: day,
        month: month,
        year: year
    }

}






console.log(checkPalindromeforAllDateFormats(date));
