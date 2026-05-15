//task.1 student Registration form
letstudentName = prompt("Enter Student Name:");
constdepartment = prompt("Enter Department:");
letage = prompt("Enter Age:");


console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);

//output:
//Welcome vaishnavi
// mca
//25

//task.2 ATM Withdrawal System

letbalance = 10000;
constminWithdrawal = 100;


letwithdrawAmount = Number(prompt("Enter withdrawal amount:"));


if (withdrawAmount >= minWithdrawal && withdrawAmount <= balance) {
    balance = balance - withdrawAmount;
    console.log("Transaction Successful");
    console.log(`Withdrawn: ${withdrawAmount}`);
    console.log(`Remaining Balance: ${balance}`);
} 
else if (withdrawAmount < minWithdrawal) {
    console.log("Minimum withdrawal amount is 100");
} 
else {
    console.log("Insufficient Balance");
    console.log(`Your Balance: ${balance}`);
}
//output:
//transaction successful
//withdrawn:100
//remaining balance:9900

//task.3 swiggy discount checker
letorderAmount = Number(prompt("Enter your order amount:"));
letdeliveryStatus = orderAmount > 499 
    ? "Free Delivery Available" 
    : "Delivery Charges Applied";

console.log(deliveryStatus);


console.log(orderAmount > 499 ? "Free Delivery Available" : "Delivery Charges Applied");
//output: free delivery available

//task:4 instagram login system

constcorrectUsername = "admin";
constcorrectPassword = "1234";


letusername = prompt("Enter username:");


if (username === correctUsername) {

    letpassword = prompt("Enter Password:");
    
    
    if (password === correctPassword) {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }
    
} else {
    console.log("Invalid Username");
}
//output:login success

  //task.5 traffic signal system

letsignal = prompt("Enter signal color: red / yellow / green").toLowerCase();


switch (signal) {
    case "red":
        console.log("STOP");
        break;
        
    case "yellow":
        console.log("READY");
        break;
        
    case "green":
        console.log("GO");
        break;
        
    default:
        console.log("Invalid Signal Color");
}
//output:stop

//task 6:Employee Salary calculator

functionsalaryCalculation(basicSalary, bonus) {
    lettotalSalary = basicSalary + bonus;
    return totalSalary; 
}


letresult = salaryCalculation(25000, 5000);
console.log(result); 
//output
// 30000

//task.7 E-commerce cart total

letprices = [100, 200, 300, 400];
lettotal = 0;


for (leti = 0; i < prices.length; i++) {
    total = total + prices[i]; 
}


letaverage = total / prices.length;


console.log(`Total Price: ${total}`);
console.log(`Average Price: ${average}`);
//output:
//total price:1000
//average price:250

//task.8 whatsapp contact book
letcontacts = [
    {
        name: "Rahul",
        phone: "9876543210",
        status: "At work"
    },
    
];


console.log("--- WhatsApp Contacts ---");
for (leti = 0; i < contacts.length; i++) {
    console.log(`\nContact ${i + 1}:`);
    for (letkey in contacts[i]) {
        console.log(`${key}: ${contacts[i][key]}`);
    }
}
//output:
//--- WhatsApp Contacts ---

//Contact 1:
//name: Rahul
//phone: 9876543210
//status: At work

//Task:9 movie ticket booking:

functionpayment(movieName, amount) {
    console.log("--- Payment Processing ---");
    console.log(`Movie: ${movieName}`);
    console.log(`Amount: ₹${amount}`);
    console.log("Payment Successful ");
    console.log("Enjoy your movie! ");
}


functionbookTicket(movieName, seats, callback) {
    console.log("--- Booking Ticket ---");
    console.log(`Movie: ${movieName}`);
    console.log(`Seats: ${seats}`);
    console.log("Ticket Booked Successfully \n");
    
    
    letticketPrice = seats * 150; // 1 seat = ₹150
    callback(movieName, ticketPrice); // payment function call aaguthu
}


bookTicket("Leo", 2, payment);
//output:--- Booking Ticket ---
//Movie: Leo
//Seats: 2
//Ticket Booked Successfully 

//--- Payment Processing ---
//Movie: Leo
//Amount: ₹300
//Payment Successful 
//Enjoy your movie! 

//task:10 food deliver time tracker

functiondeliveryTracker() {
    yield "Order Confirmed ";
    yield "Preparing Food ";
    yield "Out for Delivery ";
    yield "Delivered ";
}


letorder = deliveryTracker();


console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
//output:
//Order Confirmed 
//Preparing Food 
//Out for Delivery 
//Delivered