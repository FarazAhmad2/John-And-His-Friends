/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(row => {
    if (row['profession'] == "developer") {
      console.log(row);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(row => {
    if (row['profession'] == "developer") {
      console.log(row);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(row => row['profession'] != "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  // add a new array with the different values (not similar to above array)
  let newArray = [
    { id: 5, name: "emma", age: "22", profession: "manager" },
    { id: 6, name: "peter", age: "25", profession: "developer" },
    { id: 7, name: "lisa", age: "23", profession: "designer" }
  ];

  arr = arr.concat(newArray);
  console.log(arr);
}