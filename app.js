// Q1

// var arr = ["saad",23,true,null,undefined]
// console.log(arr);


// Q2

// var network = ["jazz","zong","ufone","telenor","warid"]
// console.log(network)


// Q3
// var edu = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
// console.log(edu)

// Q4
// var cartoon= ["Age of Ultron","Incredibles 2","Toy Story 4","Inside Out","Coco"]
// var leng = cartoon.length
// console.log("Length of array is "+ leng)

// Q5

// var car = ["Toyota","Honda","BMW","Mercedes","Audi"]
// console.log("first index of array is" + "0")
// console.log("car at first index is " + car[0])
// console.log("last index of array is " + (car.length -1))
// console.log("car at last index is " + car[car.length -1])


// Q6
// var names = ["Saad","Ali","Ahmed"]
// var marks = [320,230,480]
// var totalMarks = 500
//
// console.log("Score of " + names[0] + " is " + marks[0] + ". Percentage: " + (marks[0]/totalMarks*100) + "%")
// console.log("Score of " + names[1] + " is " + marks[1] + ". Percentage: " + (marks[1]/totalMarks*100) + "%")
// console.log("Score of " + names[2] + " is " + marks[2] + ". Percentage: " + (marks[2]/totalMarks*100) + "%")


// Q7
// var colors= ["red", "green", "blue", "yellow", "black"]
// a
// var add = prompt("Enter color to add to the beginning")
// colors.unshift(add)
// console.log(colors)
// b
// var add = prompt("Enter color to add to the beginning")
// colors.push(add)
// console.log(colors)
// c
// var add1 = prompt("Enter color to add to the beginning")
// var add2 = prompt("Enter color to add to the beginning")
// colors.unshift(add1,add2)
// console.log(colors)
// d
// colors.shift()
// console.log(colors)
// e
// colors.pop()
// console.log(colors)

// f
// var index = prompt("Enter index to add color")
// var color = prompt("Enter color to add")
// colors.splice(index,0,color)
// console.log(colors)

// g
// var   index = +prompt("Enter index to delete")
// var color = +prompt("Enter how many color to delete")
// colors.splice(index,color)
// console.log(colors)

// Q8

// var student = [320,180,120,400,800]
// var sorted_students = student.sort()
// console.log(sorted_students)


// Q9

// var fruits = ["Strawberry","Orange","Mango","Banana","Peach"]
// var sorted_fruits = fruits.sort()
// console.log(sorted_fruits)


// Q10

// var cities = ["Islamabad","Karachi","Quetta","Peshawar","lahore"]
// var selected_cities = cities.slice(1,4)
// console.log(selected_cities)

// Q11
// var arr = ["This","is","my","cat"]
// var join_arr = arr.join(" ")
// console.log(join_arr)


// Q12
// var list = []
//
// list.push("Keyboard")
// list.push("Mouse")
// list.push("Printer")
// list.push("Speaker")
// console.log(list)
//
// list.shift()
// list.shift()
// list.shift()
// console.log(list)


// Q13
// var list = []
//
//
// list.push("Mouse")
// list.push("Monitor")
// list.push("Speaker")
// list.push("Keybroad")
// console.log(list)
// list.pop()
// console.log(list)
// list.pop()
// list.pop()
// console.log(list)


// Q14

// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// console.log(matrix)


// Q15
// var names = ["john", "smith", "andrew", "ahmed"];
// console.log("First element of the array is " + names[0])
// console.log("Last element of the array is " + names[names.length-1])


// Q16
// var names = ["john", "smith", "andrew", "ahmed"];
// names.length = 0
// console.log(names.length)
// console.log(names)

// Q17
// var names = ["john", "smith", "andrew", "ahmed"]
//
// var user = prompt("Enter User Name: ")
// if (names.includes(user)){
//     console.log("Yes " + user + " in Array")
// }else{
//     console.log("No " + user + " not in Array")
// }


// Q18

// var animal = ["lion","Cheetah","Girafe","Dog","Ant"]
// var ani1= prompt("Enter Animal 1: ")
// var ani2= prompt("Enter Animal 2: ")
//
// animal.splice(3,0,ani1,ani2)
//
// console.log(animal)


// Q19
// var word = prompt("Enter Your Word: ")
//
// var reversed = word.slice().split("").reverse().join("")
//
// if (word == reversed){
//     console.log("Yes " + word + " is palindrome")
// }else {
//
//     console.log("No " + word + " is not  palindrome")
// }

// Q20

// var element = ["lion","Cheetah","Girafe","Dog","Ant"]
//
// var last  = element.length-1
//
// console.log(last)


// Q22

var x = [
    ['Jack', 24],
    ['Sara', 23],
    ['Peter', 24]
];

console.log(x[2][1])
