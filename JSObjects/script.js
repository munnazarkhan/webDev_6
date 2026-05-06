// let fd = [
//     ["Heaven","18-11-2006",8871412826,"Bhopal","TEacher"],
//     ["Atif","18-11-2006",8871412826,"Bhopal","TEacher"],
//     ["Karan","18-11-2006",8871412826,"Bhopal","TEacher"],
//     ["Nandini","18-11-2006",8871412826,"Bhopal","TEacher"],
//     ["Rehaan","18-11-2006",8871412826,"Bhopal","TEacher"],
// ];

// fd.forEach(element => {
//     console.log(element)
// });
// // The above was a old format to store element

let FData =
[
  {
    "name": "Heaven",
    "dob": "16-09-2003",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  },
  {
    "name": "Atif",
    "dob": "18-06-2005",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  },
  {
    "name": "Karan",
    "dob": "22-01-2005",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  },
  {
    "name": "Nandini",
    "dob": "05-03-2005",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  },
  {
    "name": "rehaan",
    "dob": "18-11-2006",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  }
]
FData.forEach((item) =>
{
    console.log(item["name"]);
})

FData. map((element,idx) =>
{
    console.log(idx);
    console.log(element,"phone");
    
})

// let heaven = {
//     name: "nandini",
//     dob: " 05-03-2005",
//     phone: 8319399836,
//     city: "Delhi",
//     profession: "Engineer",
// };

// console.log(Object.keys(heaven));
// console.log(Object.values(heaven));
// console.log(Object.entries(heaven));


let ar = [22, 43, 6, 74, 8, 91, 5, 23, 32, 6, 9, 4, 7, 92, 45 ];

ar.sort((a, b) => a - b);

console.log(ar);

console.log(ar.find((val) => val ===6));
console.log(ar.findIndex((val) => val ===6));
console.log(ar.findLastIndex ((val) => val ===6));


let ar2 = [42, 6, 74, 8, 91, 5, 100, 23, 6, 32, 6, 9, 4, 7, 92, 6, 45];

console.log(ar2.filter((val) => val >20));
console.log(ar2.find((val) => val >20));

console.log(ar2.slice(0,7));



let ab = "This is Web Development Class"

console.log(ab);
console.log(ab.split(" "));
console.log(ab.split("-"));


