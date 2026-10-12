// <--- Number 1 --->
const greeting1 = "Good";
const greeting2 = "morning";
const bothGreeting = greeting1 + " " + greeting2;
console.log(bothGreeting); // Output: Good morning


// <--- Number 2 --->
const visitorName = "Chidi";
const welcomeMessage = "Welcome " + visitorName;
console.log(welcomeMessage); // Output: Welcome Chidi


// <--- Number 3 --->
const customerName = "Zainab";
const ticketCount = 3;
const eventName = "Music Night";

const bookingMessage = customerName + " booked " + ticketCount + " tickets for " + eventName + ".";
const secondMessage = customerName.concat(" booked ", ticketCount, " tickets for ", eventName, ".");


console.log(bookingMessage); // Output: Zainab booked 3 tickets for Music Night.
console.log(secondMessage); // Output: Zainab booked 3 tickets for Music Night.



// Practice Task: String Concatenation
// 1. Create two variables containing "Good" and "morning". Join them with a space using + and display the result.
// 2. Create a variable named visitorName containing "Chidi". Join the word "Welcome" with this variable to display:
//    Welcome Chidi
// 3. Use these variables:
//    const customerName = "Zainab";
//    const ticketCount = 3;
//    const eventName = "Music Night";
//    - Use + to create Zainab booked 3 tickets for Music Night. Store it in bookingMessage.
//    - Create the same message using .concat(). Store it in secondMessage.
//    - Display both using console.log().
// Remember: Include spaces and punctuation when joining strings.