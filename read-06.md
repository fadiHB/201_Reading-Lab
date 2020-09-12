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

## JavaScript HTML DOM

With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

### The HTML DOM (Document Object Model)

When a web page is loaded, the browser creates a **D**ocument **O**bject **M**odel of the page.

The **HTML DOM** model is constructed as a tree of **Objects**:

![tree](/r6/tree.PNG)

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

* JavaScript can change all the HTML elements in the page
* JavaScript can change all the HTML attributes in the page
* JavaScript can change all the CSS styles in the page
* JavaScript can remove existing HTML elements and attributes
* JavaScript can add new HTML elements and attributes
* JavaScript can react to all existing HTML events in the page
* JavaScript can create new HTML events in the page.

#### What is the DOM?

The DOM is a W3C (World Wide Web Consortium) standard.

The DOM defines a standard for accessing documents:

"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

The W3C DOM standard is separated into 3 different parts:

- Core DOM - standard model for all document types
- XML DOM - standard model for XML documents
- HTML DOM - standard model for HTML documents

#### What is the HTML DOM?

The HTML DOM is a standard object model and programming interface for HTML. It defines:

+ The HTML elements as objects.
+ The properties of all HTML elements.
+ The methods to access all HTML elements.
+ The events for all HTML elements.

In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

### JavaScript - HTML DOM Methods

HTML DOM methods are actions you can perform (on HTML Elements).

HTML DOM properties are values (of HTML Elements) that you can set or change.

#### The DOM Programming Interface

The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as **objects**.

The programming interface is the properties and methods of each object.

A **property** is a value that you can get or set (like changing the content of an HTML element).

A **method** is an action you can do (like add or deleting an HTML element).

Example
The following example changes the content (the innerHTML) of the < p> element with id="demo":

                                    Example
                                    < html>
                                    < body>

                                    < p id="demo"></p>

                                    < script>
                                    document.getElementById("demo").innerHTML = "Hello World!";
                                    < /script>

                                    < /body>
                                    < /html>

In the example above, getElementById is a method, while innerHTML is a property.

### JavaScript HTML DOM Document

The HTML DOM document object is the owner of all other objects in your web page.

#### The HTML DOM Document Object

The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

Below are some examples of how you can use the document object to access and manipulate HTML.

**Finding HTML Elements**

![op](/r6/find.PNG)

**Finding HTML Elements by CSS Selectors**

If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the **querySelectorAll()** method.

This example returns a list of all < p > elements with class="intro".

                        Example
                        var x = document.querySelectorAll("p.intro");


**Changing HTML Elements**

![changing](/r6/changing.PNG)

**Adding and Deleting Elements**

![adding](/r6/adding.PNG)

**Adding Events Handlers**

![adding2](/r6/adding2.PNG)
