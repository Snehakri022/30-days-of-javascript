# Day 7(a)
In Day 7(a) we learn about Object with method in JavaScript.


### Object Methods
Object Methods in JavaScript can be accessed by using functions. Functions in JavaScript are stored as property values. 

- In a method, ```this``` refers to the owner object.

**Syntax:**
```
objectName.methodName()
```
# Day 7(b)
In Day 7(b) challenge, ```try```/```catch```/```finally```.

* Write code:
Using ```try```/```catch```/```finally``` in divide by zero.

# Day 7(c)
In Day 7(c) we learn about ```this``` Keyword in JavaScript.

### What is this?
The JavaScript this keyword refers to the object it belongs to.

### this in a Method
In an object method, ```this``` refers to the owner object.
```
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```

### this Alone
When used alone, ```this``` refers to the global object.
```
var x = this;
```

### this in a Function
In a function, ```this``` refers to the Global object [object Window].
```
function myFunction() {
  return this;
}
```
# Day 7(d)
In Day 7(d) we learn about Inheritance in JavaScript.

### Inheritance  
Inheritance is an important concept in object oriented programming. In the classical inheritance, methods from base class get copied into derived class.
