# read-06

## JavaScript Objects
Real Life Objects, Properties, and Methods 

In real life, a car is an **object**.

A car has **properties** like weight and color, and **methods** like start and stop:

![ob](/r6/ob.PNG)

All cars have the same **properties**, but the property **values** differ from car to car.

All cars have the same **methods**, but the methods are performed at **different times**.

### JavaScript Objects

You have already learned that JavaScript variables are containers for data values.

This code assigns a **simple value** (Fiat) to a **variable** named car:

                    var car = "Fiat";


Objects are variables too. But objects can contain many values.

This code assigns **many values** (Fiat, 500, white) to a **variable** named car:

                    var car = {type:"Fiat", model:"500", color:"white"};

The values are written as **key:value** pairs (name and value separated by a colon).

### Object Definition

You define (and create) a JavaScript object with an object literal:

                Example
                var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Spaces and line breaks are not important. An object definition can span multiple lines:

                    Example
                    var person = {
                    firstName: "John",
                    lastName: "Doe",
                    age: 50,
                    eyeColor: "blue"
                    };

### Object Properties

The **key:values** pairs in JavaScript objects are called **properties**:

![op](/r6/op.PNG)

## Accessing Object Properties

You can access object properties in two ways:

                    objectName.propertyName
or

                    objectName[" propertyName "]

## Object
