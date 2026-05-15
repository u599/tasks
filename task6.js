// 1. Student Attendance System

constpresentStudents = ["Rahul", "Sneha", "Arjun"];
constabsentStudents = ["Kiran", "Meena"];

constallStudents = [...presentStudents, ...absentStudents];

allStudents.push("Vikram");

console.log("Final Students List:", allStudents); 

// 2. E-Commerce Cart

constmobile = {
  brand: "Samsung",
  model: "Galaxy S24",
  price: 75000
};

constcharger = {
  chargerType: "Fast Charger",
  watt: 45
};

constorderDetails = {
  ...mobile,
  ...charger,
  deliveryDate: "20-May-2026"
};

console.log(orderDetails); 

// 3. Food Delivery App

functionorderFood(...items) {
  console.log("Total items ordered:", items.length);
  console.log("First item:", items[0]);
  console.log("Last item:", items[items.length - 1]);
}

orderFood("Pizza", "Burger", "Pasta", "Cool Drink");  

// 4. Employee Salary Filter

constemployees = [
  { name: "Ravi", salary: 45000 },
  { name: "Priya", salary: 60000 },
  { name: "Karthik", salary: 75000 },
  { name: "Anu", salary: 40000 }
];

consthighSalaryEmployees = employees.filter(emp => emp.salary > 50000);

console.log(highSalaryEmployees);   

 // 5. Online Game Score Board

constscores = [100, 200, 150, 300, 250];

consttotalScore = scores.reduce((total, score) => total + score, 0);

console.log("Total Score:", totalScore);