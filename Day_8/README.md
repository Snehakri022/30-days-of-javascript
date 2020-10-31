# Day 7(a)
In Day 7(a) we learn about Deleting Properties in JavaScript.

### Deleting Properties
The delete operator deletes both the value of the property and the property itself.
After deletion, the property cannot be used before it is added back again.
# Day 7(b)
In Day 7(b) we learn about Testing Properties in JavaScript.

### Testing Properties
Is a way to testing whether properties are present or not

#### Object.prototype.hasOwnProperty()
The ```hasOwnProperty()``` method returns a boolean indicating whether the object has the specified property as its own property.

All descendents of Object inherit the ```hasOwnProperty``` method. This method can be used to determine whether an object has the specified property as a direct property of that object; unlike the in operator, this method does not check for a property in the object's prototype chain. If an Object is an Array, hasOwnProperty  method can check whether an index exists.

**Syntax**
```
obj.hasOwnProperty(property)
```

#### Object.prototype.propertyIsEnumerable()
The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable.

Every object has a ```propertyIsEnumerable``` method. This method can determine whether the specified property in an object can be enumerated by a for...in loop, with the exception of properties inherited through the prototype chain. If the object does not have the specified property, this method returns false.

**Syntax**
```
obj.propertyIsEnumerable(property)
```
# Day 7(c)
In Day 7(c) we learn about Property Getters and Setters in JavaScript.

### Getter 
The ```get``` syntax binds an object property to a function that will be called when that property is looked up.
**Syntax**
```
{get prop() { ... } }
{get [expression]() { ... } }
```

### Setter
The ```set``` syntax binds an object property to a function to be called when there is an attempt to set that property.
**Syntax**
```
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```
