# Day 2(a)
In Day 2(a) we learn about Semicolons in JavaScript.

## The rules of JavaScript automatic semicolon insertion

The JavaScript parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:

1. when the next line starts with a ```}```, closing the current block
2. when the end of the source code file is reached
3. when there is a ```return``` statement on its own line
4. when there is a ```break``` statement on its own line
5. when there is a ```throw``` statement on its own line
6. when there is a ```continue``` statement on its own line

## Required semicolons: 
When two statements are on the same line.

The semicolon is only obligatory when you have two or more statements on the same line:<br>
```var a=3; var b=5;```

## Optional semicolons : 
After statements.

The semicolon in JavaScript is used to separate statements, but it can be omitted if the statement is followed by a line break (or there’s only one statement in a {block}). 

```
var a=3;
var b=5;
```
## Avoid semicolons:
1. After a closing curly bracket
```// NO semicolons after }:
if  (...) {...} else {...}
for (...) {...}
while (...) {...}
```
2. After the round bracket of an ```if```, ```for```, ```while``` or ```switch``` statement
```if (0 === 1); { alert("hi") }```
This code will alert "hi", but not because 0 equals 1, but because of the semicolon. It makes JavaScript think that you have an empty statement there, and everything to the right of it is treated as no longer belonging to the if conditional and thus independent of it.


# Day 2(b)
In Day 2(b) we learn about Types & Numbers in JavaScript.

## JavaScript divide to tow type:
* primitive types:
  * numbers 
  * text or string 
  * Boolean 
  * null
  * undefined

* object types:
  * global object 
  * array 
  * function
  * Classes & Constructors 
  * garbage collection 

## JavaScript Numbers
JavaScript has only one type of number. Numbers can be written with or without decimals.

## Arithmetic Operators
![image](https://user-images.githubusercontent.com/27751735/63893152-10a49180-c9f2-11e9-8731-fb197f4b0b8b.jpg)

# Day 2(c)
In Day 2(c) we learn about Dates and Times in JavaScript.

## The Date object
A Date object instance represents a single point in time. Despite being named Date, it also handles time.
