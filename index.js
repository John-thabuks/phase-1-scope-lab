// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName() {
    if (typeof window.customerName === 'string') {
        window.customerName = window.customerName.toUpperCase();
    }
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "bob";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "John";
}