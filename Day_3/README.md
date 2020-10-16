# Day 3(a)
In Day 3(a) challenge, alert() method and console.log() method. 

- Text display in the alert box. <br>
The alert() method displays an alert box with a specified message and an Close button.<br> 
can call an alert either by it's shorthand: alert(); <br> 
```alert("Hello World! JavaScript!");```<br> 
or by referencing the global object window specifically: window.alert();<br> 
```window.alert("Hello World! JavaScript!");```<br> 

- Where can read the result of the following command: 
```console.log(new Date());```.<br>
The console method log() outputs a message to the web console. 


# Day 3(b) 
In Day 3(b) we learn about String in JavaScript.

In JavaScript, a string is a sequence characters enclosed in single or double quotes.
```'abc' === "abc"```

## Escape Sequences in Strings
| Character| Name |
| ---      | ---  |
|```\t ``` |tab|
|```\n ``` |new line|
|```\" ``` |Double quote|
|```\' ``` |single quote |
|```\\ ``` |Backslash |


## String Length
The length property returns the length of a string:<br>
```
var x = "Hello"
document.write(x.length)
``` 

## Extracting String Characters
* ```charAt(position)``` <br> 
The ```charAt()``` method returns the character at a specified index in a string.


## Extracting String Parts
* ```substring(start, end)``` <br>
* ```slice(start, end)``` <br>
Extracts a part of a string and returns the extracted part in a new string.
The ```substring()``` is similar to ```slice()```.

## Finding a String in a String
The ```indexOf()``` method returns the index of the first occurrence of a specified text in a string.<br>
The ```lastIndexOf()``` method returns the index of the last occurrence of a specified text in a string.<br>
Both ```indexOf()```, and ```lastIndexOf()``` return -1 if the text is not found.

## Converting a String to an Array
A string can be converted to an array with the ```split()``` method.

## Replacing String Content
The ```replace()``` method replaces a specified value with another value in a string

## Converting to Upper and Lower Case
* A string is converted to upper case with ```toUpperCase()```.<br>
* A string is converted to lower case with ```toLowerCase()```.<br>


# Day 3(c)
In Day 3(c) we learn about Variable Scope and Operator in JavaScript.


## Boolean Values
A JavaScript Boolean represents one of two values: ```true``` or ```false```.

```
var a = 0;
if (a == 5)   // return false
document.write(a);
```
output: will not print anything because the condition is not met.

```
var a = 0;
if (a !== 5)  // return true
document.write(a);
```
output: 0 

### Arithmetic Operators

|Operator |Description|
|---|---|
|  + | Addition |
|  - | Subtraction |
|  * | Multiplication |
|  ** | Exponentiation |
|  / | Division |
|  % | Modulus |
|  ++ | Increment |
|  -- | Decrement |

### Assignment Operators

| Operator | Example |	Same As|
|---|---|---|
|=	| x = y	| x = y |
|+=	| x += y |	x = x + y |
|-=	| x -= y |	x = x - y |
|*=	| x *= y |  x = x * y |
|/=	| x /= y |  x = x / y |
|%=	| x %= y |  x + x % y |
|**=| x **= y | x = x ** y |


### Comparison Operators
| Operator	| Name |
|---|---|	
| == |	Equal to |
| ===| Equal value and type|
| != |	Not equal |	
| !==| Not equal value and type|
| >	 | Greater than	 |
| <	 | Less than |	
| >= |	Greater than or equal to |
| <= |	Less than or equal to |

### Conditional (Ternary) Operator
| Operator | syntax | Example|
|---|---|---|
| ? | variablename = (condition) ?  | ```voteable = (age < 18) ? "Too young":"Old enough";```

### Logical Operators
|Operator	|Description	|Example|
|---|---|---|	
|&&	|and|	(x < 10 && y > 1)|	
|\|\|	|or	|(x === 5 \|\| y === 5)|	
|!	|not|	!(x === y)|

## Variable Scope
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. 
The two types of scope are local and global:
* Global variables are those declared outside of a block.
* Local variables are those declared inside of a block.

# Day 3(d)
In Day 3(d) we learn about Conditional Statements (```if```,```if else```,```nested if```) in JavaScript.

## Conditional Statements
- ```if```: use to decide whether a certain statement or block of statements will be executed or not. <br>
#### Syntax:
```
if (condition) {
  //  block of code to be executed if the condition is true
}
```

- ```if else```: use the else statement with if statement to execute a block of code when the condition is false.<br>
#### Syntax:
```
if (condition) {
  //  block of code to be executed if the condition is true
} else { 
  //  block of code to be executed if the condition is false
}
```

- ```nested if```: it means an if statement inside an if statement. <br>
#### Syntax:
```
if (condition1) 
{
   // executes when condition1 is true
   if (condition2) 
   {
      // executes when condition2 is true
   }
}
```
