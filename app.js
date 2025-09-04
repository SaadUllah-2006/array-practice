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
var colors= ["red", "green", "blue", "yellow", "black"]
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
var   index = +prompt("Enter index to delete")
var color = +prompt("Enter how many color to delete")
colors.splice(index,color)
console.log(colors)