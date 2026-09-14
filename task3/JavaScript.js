// TASK 3 - JAVASCRIPT FUNCTIONS & ASYNC/AWAIT

// 1. FUNCTION DECLARATION

function addNumbers(number1, number2) {
    return number1 + number2;
}

const sum = addNumbers(10, 20);

console.log("Sum =", sum);


// 2. FUNCTION WITH PARAMETERS & RETURN VALUE

function calculateArea(length, width) {
    return length * width;
}

const length = 10;
const width = 5;
const area = calculateArea(length, width);

console.log("Length =", length);
console.log("Width =", width);
console.log("Area =", area);


// 3. FUNCTION EXPRESSION

const greetUser = function (name) {
    return "Welcome " + name + "!";
};

console.log(greetUser("John"));


// 4. ARROW FUNCTION - BASIC

const multiplyNumbers = (number1, number2) => {
    return number1 * number2;
};

const result = multiplyNumbers(4, 5);

console.log("Result =", result);


// 5. ARROW FUNCTION - MULTIPLE PARAMETERS

const getUserInfo = (name, age) => {
    return name + " is " + age + " years old";
};

console.log(getUserInfo("John", 25));


// 6. ARROW FUNCTION WITH ARRAY

const numbers = [10, 20, 30, 40, 50];

const calculateTotal = (numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};

const total = calculateTotal(numbers);

console.log("Total =", total);


// 7. map() WITH ARROW FUNCTION

const users = [
    { name: "John", age: 25 },
    { name: "David", age: 30 },
    { name: "Sam", age: 20 }
];

const userNames = users.map((user) => user.name);

console.log(userNames);


// 8. filter() WITH ARROW FUNCTION

const usersAbove25 = users.filter((user) => user.age > 25);

console.log(usersAbove25);


// 9. find() WITH ARROW FUNCTION

const david = users.find((user) => user.name === "David");

console.log(david);


// 10. forEach() WITH ARROW FUNCTION

users.forEach((user) => {
    console.log(user.name + " - " + user.age);
});


// 11. CALLBACK FUNCTION


const processUser = (name, callback) => {
    callback(name);
};

processUser("John", (name) => {
    console.log("Processing user:", name);
});


// 12. PROMISE

const userDataPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("User data received successfully");
    }, 2000);

});


// 13. ASYNC/AWAIT

const getUser = async () => {

    try {

        console.log("Fetching user data...");

        const result = await userDataPromise;

        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    }

};

getUser();