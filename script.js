/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printUsingMap);
  function printUsingMap(arrayItems) {
    if (arrayItems.profession === "developer") {
      console.log(arrayItems);
    }
  }  
}

function PrintDeveloperbyForEach() {
  //Write your code here
   arr.forEach(printUsingForEach);
    function printUsingForEach(arrayItems){
      if (arrayItems.profession === "developer") {
        console.log(arrayItems);
     }
   }   
}

function addData() {
  //Write your code here  
  let obj={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let filter_arr =arr.filter(function(data)
  { if(data.profession!=="admin")
     {
      return data;
     }
    });
    console.log(filter_arr);
  }





function concatenateArray() {
  //Write your code here
  let new_arr=[{ id:10,name:"soumya",age:"20",profession:"student"},
  { id:30,name:"Divyansh",age:"22",profession:"engineer"},
  { id:45,name:"suman",age:"23",profession:"instructor"}
];
  let concatArray=arr.concat(new_arr);
  console.log(concatArray);
}

