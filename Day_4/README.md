# Day 4(a)
In Day 4(a) we learn about Conditional Statements (```else if```)in JavaScript.

## Conditional Statements
- ```else if ``` the else if statement is an extension to the if statement that allows you to create as many checks (conditional statements) as you want in one big block of if statement code. <br>

#### Syntax:
```
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```
# Day 4(b)
In Day 4(b) we learn about Conditional Statements (```switch```)in JavaScript.

## Switch Statement
- ```switch``` statement is used to perform different actions based on different conditions. use the ```switch``` statement to select one of many code blocks to be executed.

#### Syntax:
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.

### break Keyword
When JavaScript reaches a ```break``` keyword, it breaks out of the switch block. This will stop the execution of inside the block. 

### default Keyword
The ```default``` keyword specifies the code to run if there is no case match.
# Day 4(c)
In Day 4(c) challenge, Conditional Statements.

* Convert ```switch``` statement to ```if```: 
```
switch (browser) {
 case 'Edge':
 alert( "You've got the Edge!" );
 break;
 case 'Chrome':
 case 'Firefox':
 case 'Safari':
 case 'Opera':
 alert( 'Okay we support these browsers too' );
 break;
 default:
 alert( 'We hope that this page looks ok!' );
}
```
# Day 4(d)
In Day 4(d) we learn about Loops (```while```) in JavaScript.

### Loops
Loops can execute a block of code a number of times.

* ```while```: loops through a block of code while a specified condition is true.

**Syntax:**
```
while (condition) {
  // code block to be executed
}
```
### Flow chart
The flow chart of a ```while``` loop would be as follows: 
<p align="center">
  <img width="250" height="400" src="https://user-images.githubusercontent.com/27751735/64491995-7a852c80-d277-11e9-81c5-7809172a0d0a.jpg">
</p>

### Reference
* [JavaScript - While Loops](https://www.tutorialspoint.com/javascript/javascript_while_loop.htm)
