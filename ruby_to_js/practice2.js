// // 1. Write a function that takes in an array of numbers and returns its sum.
// //loop through array of numbers adding up each index with the previous index

// // numbers = [1, 2, 3, 4, 5]
// // sum = 0
// // i = 0
// // while i < numbers.length
// //   sum = sum + number[i]
// // i += 1
// // end
// // p sum


// function sum(numbers) {
//   return numbers;
// }
// console.log(sum[1, 2]);



// 2. Write a function that takes in an array of strings and returns the smallest string.
// itterate through array of strings. compare length of each string in array with previous index. print the smallest .length 

// strings = ["helpp", "me", "my", "brain", "is", "broken"]
// smallest_string = ""
// count = 0
// def small_strings(strings)
// strings.each do | string |
//     if string.length < count
//     smallest_string = string
// end
// // return smallest_string
// end
// end
// p small_strings(["help", "me", "my", "brain", "is", "broken"])


// function smallString(strings) {
//   var count = 0;
//   strings.forEach(function (string) {
//     if (string.length < count)
//       return strings;
//   }
//   )
// }
// console.log(small_string[["help", "me", "my", "brain", "is", "broken"]);

// var numbers = [22, 55, 67, 55, 87];
// // function ArrayCount(numbers) {
// //   var count = 0;
//   numbers.forEach(function (number) {
//     if (number === 55) {
//       count++
//     }
//   });
//   return count;
// }
// console.log(ArrayCount(numbers));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// numbers = [1, 2, 3, 4, 5]
// def reversed(numbers)
// return numbers.reversed
// end
// p numbers(1, 2, 3, 4, 5)

// var numbers = [1, 2, 3, 4, 5];
// var i = 0;
// while (i < numbers.length) {
//   numbers = (numbers.reverse());
//   i++;
// }
// console.log(numbers)
// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter "a".

// words = ["apples", "bananas", "peaches", "asparagus"]
// words.each do | word |
//   if word[0] == "a"
//   p word
// end
// end

// var words = ["apples", "bananas", "peaches", "asparagus"]
// words.forEach(function (word) {
//   if (word[0] === "a")
//     console.log(word);
// });

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
// var words = ["apples", "bananas", "peaches", "asparagus"];
// var stringWord = "";
// words.forEach(function (word) {
//   stringWord = (word + "," + stringWord);
// // });
// // console.log(stringWord);

// // 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 

// // numbers = [1, 2, 3, 4, 5]
// // product = numbers[0]
// // numbers.each do | number |
// //   product = product + 1
// // end


// // var numbers = [1, 2, 3, 4, 5];
// // var product = numbers[0];
// // numbers.forEach(function (number) {
// //   product = (product * number);
// // })
// // // console.log(product);

// // // 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
// // iterate through Array
// // arrange smallest to biggest
// // return numbers[0] & [1]

// // numbers = [2, 4, 90, 1, 3]
// // smallest_number = numbers[0]
// // i = 0
// // while i < numbers.length
// //   if numbers[i] < smallest_number
// //   smallest_number << numbers[i]
// // end
// // i +=
// //   end

// var numbers = [2, 4, 90, 1, 3];
// var smallestNumber = numbers[0];
// var i = 0;
// while (i < numbers.length) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber.push(numbers[0][1]);
//   }
//   i++;
// }
// console.log(smallestNumber);

// var i = 0;
// var text = "";
// while (i < 10) {
//     text = text + " The number is " + i;
//     i++;
// }
// console.log(text);
// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

var numbers = [1, 2, 3, 4, 5];
var count = 0;
var i = 0;
while (i < numbers.length) {
  if (numbers[i] === 0)
    count = count + 1;
}
{
  i++
};
console.log(count);

// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.