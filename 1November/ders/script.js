// // Array.prototype.samir="Salam proq";

// // const Arr=[1,2,3,4,5]

// // console.log(Arr.samir);

// // class Animal{
// //     constructor(type,name,weight,habitat){
// //         this.type=type,
// //         this.name=name,
// //         this.weight=weight,
// //         this.habitat=habitat
// //            }
// //            getInfo2(){
// //             return  this.type+" "+this.name+" "+this.weight+" "+this.habitat

// //         }
// // }

// // const fish=new Animal("fish","nemo",0.3,"water").getInfo2()
// // console.log(fish);

// // class CustomMatch{
// //     constructor(number){
// //         this.number=number
// //     }
// //     plus(plus){
// //         return +plus
// //     }
// //     minus(minus){
// //         this.minus=minus
// //     }
// //     mult(mult){
// //         this.mult=mult
// //     }
// //     plus(dv){
// //         this.dv=dv
// //     }

// // }
// // const result=new CustomMatch(20).plus(5).minus(10).mult(2).dv(5)
// // console.log(result);

// class Kitablar {
//   constructor(number, name1, author, year) {
//     this.value = number;
//     this.name1 = name1;
//     this.author = author;
//     this.year = year;
//   }

//   percent(number) {
//     this.value =
//       number +
//       " faiz endirimle: " +
//       (this.value - (this.value * number) / 100 + " manat");
//     return this;
//   }
// }

// let result = new Kitablar(50, "Samirin heyati", "Samir", "2023").percent(500);
// console.log(result);

const arr = [1, 2, 3, 4, 5];
const arr2 = []; 
const arr3 = [];

function arrayBroker(arr,cb, cb1) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
    cb1(i);
  }
  return [arr2, arr3];
}
function cb(element) {
  arr2.push(element * 5);
}
function cb1(element) {
  arr3.push(element - 2); 
}
console.log(arrayBroker(arr,cb, cb1));
