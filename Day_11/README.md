# Day 11
 
 ### Array Length
The length property sets or returns the number of elements in an array.

**Syntax**
Return the length of an array:
```
array.length
```
Set the length of an array:
```
array.length = number
```
### Adding Array Elements
* Add a new element to an array simply by specifying a new index and assigning a value:
```
var array = ['one', 'two', 'three'];
array[3] = 'four'; // add new element to ar
```

* ```push``` method allows you to add one or more elements to the end of an array.
```
var array = ['one', 'two', 'three'];
array.push('four'); // ["one", "two", "three", "four"]

### Deleting Array Elements
Removing JavaScript Array items is important to managing your data. There is not a single 'remove' method available, but there are different methods and techniques you can use to clean unwanted array items.

* Elements in array can be deleted by using the operator ```delete```:
```
var fruits = ["Banana", "Orange", "Apple"];
delete fruits[0]; 
```
* Clear or reset array:
```
var array = [1, 2, 3];
array = []; //a new, empty array!
```
* Clear an array is to set its ```length``` property to 0.
```
var array = [1, 2, 3];
array.length = 0;
```
### Iterating Arrays
JavaScript for loops iterate over each item in an array. JavaScript arrays are zero based, which means the first item is referenced with an index of 0.

Referencing items in arrays is done with a numeric index, starting at zero and ending with the array length minus 1. The syntax to access an array member

```
for (initialization; condition; final expression) {
// code to be executed
}
```
```for``` loop statement uses three expressions: the initialization, the condition, and the final expression. The final expression is executed at the end of each loop execution. It is commonly used to increment the index.

### Multidimensional Array
in JavaScript can create a multidimensional array by defining an array of elements, where each element is also another array. Multidimensional array is an array of arrays.
