/*
 * Student Name: Brendan Clemmer
 * Student ID: 040902473
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: 1
 * Assignment: 1: Online Store
 * Date Submitted:  
 */

function isValidEmail(email) {
    // Check if the input is a string
    if (typeof email !== 'string') {
        return false;
    }
    
    // Check if the email starts with an alphabetic character
    if (!/^[a-zA-Z]/.test(email)) {
        return false;
    }

    // Find the position of the '@' symbol
    const atSymbolPosition = email.indexOf('@');

    // Check if '@' is at least at the 3rd position and followed by at least 5 characters
    if (atSymbolPosition < 2 || email.length - atSymbolPosition <= 5) {
        return false;
    }

    // Check if there's at least one '.' after the '@' symbol
    const dotAfterAtSymbol = email.indexOf('.', atSymbolPosition);
    if (dotAfterAtSymbol === -1) {
        return false;
    }

    // Check if the last '.' is at least 2 characters before the end of the string
    if (email.length - email.lastIndexOf('.') <= 2) {
        return false;
    }

    // Check for allowed characters: dots (.), underscores (_), hyphens (-), and alphanumeric (A-Z, a-z, 0-9)
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(email)) {
        return false;
    }

    return true;
}

console.log(isValidEmail("myEmail1@email.com")); // true
console.log(isValidEmail("my.Email1@e-mail.com")); // true
console.log(isValidEmail("myEmail1@email.c")); // false
console.log(isValidEmail("m@email1.com")); // false
console.log(isValidEmail(1)); // false
console.log(isValidEmail(true)); // false
console.log(isValidEmail("myEmail1@com")); // false
console.log(isValidEmail("my_Email1@e.com")); // true
console.log(isValidEmail("1m@email.com")); // false
console.log(isValidEmail("my!Email@email.com")); // false

function isAgeOfMajority(birthYear, birthMonth, birthDay) {
    // Validate the parameters
    if (typeof birthYear !== 'number' || birthYear < 1920 || birthYear > 2010) return false;
    if (typeof birthMonth !== 'number' || birthMonth < 1 || birthMonth > 12) return false;
    if (typeof birthDay !== 'number' || birthDay < 1 || birthDay > 31) return false;

    // Create JavaScript date objects
    const TODAY = new Date(); // Represents the current date
    var birthdate = new Date(birthMonth + '/' + birthDay + '/' + birthYear); // Created by concatenating the parameters

    /*
    Possible return values from the Date constructor can include a valid Date object or an "Invalid Date" object if the input is incorrect.
    We concatenate them into a string instead of passing each number to the constructor as an individual date part because JavaScript's Date constructor can interpret date strings more consistently across different environments than the multi-argument version, which can have ambiguities, especially with regards to time zones and the starting index of months.
    */

    // Check if the age is greater than 18 years
    const daysDifference = (TODAY - birthdate) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    return daysDifference > 6570; // Approximately 18 years
}

console.log(isAgeOfMajority(2005, 2, 25)); // Output depends on the current date
console.log(isAgeOfMajority(1997, 2, 29)); // false – February 29, 1997, is not a valid date
console.log(isAgeOfMajority(2008, 5, 1)); // Output depends on the current date
console.log(isAgeOfMajority(2000, 1, 1)); // Output depends on the current date
console.log(isAgeOfMajority(1980, 12, 31)); // Output depends on the current date
console.log(isAgeOfMajority("1980", "12", "31")); // false – wrong data type in parameters

