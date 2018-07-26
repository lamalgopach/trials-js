// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([['home', '510-867-5309'], ['mobile', '415-555-1212'], ['business', '415-123-4567']]);

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printUserInfo(name, number, businessName) {
	console.log(`Account Holder Name: ${name}`);
	console.log(`Account Holder number: ${number}`);
	console.log(`Business Name: ${businessName}`);
}


// Add function to print all addresses, including a header
function showAddresses(addresses){
	console.log('Addresses:');
	for (let i=0; i < addresses.length; i += 1){
		console.log(addresses[i]);
	}
}

// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers){
	console.log('Phone Numbers:')
	for (let keyValue of phoneNumbers){
		console.log(
			`${keyValue[0]}: ${keyValue[1]}`
			);
		}
	}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let transactions = new Map([])


// Add function to add transactions
function addTransaction(date, amount){
	transactions.set(date, amount);
	console.log(transactions);
}


// Use the function to add transactions


// Add function to show balance status
function showBalanceStatus(balance){
	console.log(`Balance: ${balance}`);
	if (balance < 0){
		console.log('YOU ARE OVERDRAWN');
	}
	else if (balance > 0 && balance < 20){
		console.log('Warning: You are close to zero balance');
	}
	else{
		console.log('thank you for your business');
	}
}


// Add function to show transactions
function showTransactions(transactions, beginningBalance){
	console.log(beginningBalance);
	



}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




