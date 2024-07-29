//TASK-1 : Description: Given an array of transactions, identify transactions that are above $5000, occurred in 2023, and belong to the 'Business' category. Transform this filtered
// array into an array of strings formatted as "Transaction [id]: $[amount] on [date]".

const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
console.log(
  transactions
    .filter(
      (transaction) =>
        transaction.amount >= 5000 &&
        ((transaction) => (transaction.date.includes = "2023")) &&
        ((transaction) => transaction.category == "Business")
    )
    .map(
      (transaction) =>
        `Transaction ${transaction.id}: ${transaction.amount} on ${transaction.date}`
    )
);

//Task-2 :Description: Calculate the total salary expenditure for each department from an array of departments, each with an array of employees.

const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];

const totalSalaryDep = departments.map((department) => {
  const totalSlary = department.employees.reduce(
    (acc, curr) => acc + curr.salary,
    0
  );
  return { [department.name]: totalSlary };
});

console.log(totalSalaryDep);

// Expected Output:
// [{ "Engineering": 170000 }, { "Marketing": 125000 }]

// Task 3: Weather Data Sorting and Structuring
// Description: Sort an array of weather data objects in descending order of temperature and restructure the data into an object with dates as keys and temperatures as
// values.
// Data:
const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];

const weather = weatherData
  .sort((a, b) => b.date - a.date)
  .reduce((acc, curr) => {
    acc[curr.date] = curr.temperature;
    return acc;
  }, {});

console.log(weather);

// Expected Output:
// { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

// Task 4: Analyzing Electronics Products
// Description: From an array of products, find products in the 'Electronics' category with more than 50 reviews and a rating of at least 4.0. Calculate the average price of
// these products.
// Data:
const products = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  // more products...
];

const finalProducts = products.filter(
  (product) =>
    product.reviews > 50 &&
    product.rating >= 4.0 &&
    product.category == "Electronics"
);

const totalSum = finalProducts.reduce((acc, curr) => acc + curr.price, 0);

const totalAvg = totalSum / finalProducts.length;

console.log(totalAvg);

// Expected Output:
// 199.99 // Assuming only one product meets the criteria

// Task 5: Merging User and Order Data
// Description: Merge two arrays of objects based on a common key ( userId ) to create a new array of objects that includes each user's name and their corresponding
// order details.
// Data:

const users = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];

const resData = users.map((user) => {
  const userOrder = orders.filter((order) => order.userId === user.userId)[0];

  return {
    name: user.name,
    orderDetails: userOrder ? userOrder.orderDetails : null,
  };
});

console.log(resData);

// Expected Output:
// [
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]
