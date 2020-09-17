# HTML < table> Tag

Example
A simple HTML table, containing two columns and two rows:

                <table>
                <tr>
                    <th>Month</th>
                    <th>Savings</th>
                </tr>
                <tr>
                    <td>January</td>
                    <td>$100</td>
                </tr>
                </table>

Definition and Usage
The < table> tag defines an HTML table.

An HTML table consists of one < table> element and one or more < tr>, < th>, and < td> elements.

The < tr> element defines a table row, the < th> element defines a table header, and the < td> element defines a table cell.

## Default CSS Settings

Most browsers will display the < table> element with the following default values:

Example
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
}

# Javascript

## JavaScript Object Constructors
Example
                                    function Person(first, last, age, eye) {
                                      this.firstName = first;
                                      this.lastName = last;
                                      this.age = age;
                                      this.eyeColor = eye;
}
It is considered good practice to name constructor functions with an upper-case first letter.

### Object Types (Blueprints) (Classes)

The examples from the previous chapters are limited. They only create single objects.

Sometimes we need a "**blueprint**" for creating many objects of the same "type".

The way to create an "object type", is to use an **object constructor function**.

In the example above, function Person() is an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:

                            var myFather = new Person("John", "Doe", 50, "blue");
                            var myMother = new Person("Sally", "Rally", 48, "green");

The this Keyword
In JavaScript, the thing called this is the object that "owns" the code.

The value of this, when used in an object, is the object itself.

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

Note that this is not a variable. It is a keyword. You cannot change the value of this.

Adding a Property to an Object
Adding a new property to an existing object is easy:

Example
myFather.nationality = "English";
The property will be added to myFather. Not to myMother. (Not to any other person objects).

### Adding a Method to an Object
Adding a new method to an existing object is easy:

Example
                    myFather.name = function () {
                      return this.firstName + " " + this.lastName;
                    };
The method will be added to myFather. Not to myMother. (Not to any other person objects).

### Adding a Property to a Constructor
You cannot add a new property to an object constructor the same way you add a new property to an existing object:

Example
Person.nationality = "English";
To add a new property to a constructor, you must add it to the constructor function:

                  Example
                  function Person(first, last, age, eyecolor) {
                    this.firstName = first;
                    this.lastName = last;
                    this.age = age;
                    this.eyeColor = eyecolor;
                    this.nationality = "English";
                  }
This way object properties can have default values.

### Adding a Method to a Constructor
Your constructor function can also define methods:

                          Example
                          function Person(first, last, age, eyecolor) {
                            this.firstName = first;
                            this.lastName = last;
                            this.age = age;
                            this.eyeColor = eyecolor;
                            this.name = function() {return this.firstName + " " + this.lastName;};
                          }
You cannot add a new method to an object constructor the same way you add a new method to an existing object.

Adding methods to an object constructor must be done inside the constructor function:

                            Example
                            function Person(firstName, lastName, age, eyeColor) {
                              this.firstName = firstName; 
                              this.lastName = lastName;
                              this.age = age;
                              this.eyeColor = eyeColor;
                              this.changeName = function (name) {
                                this.lastName = name;
                              };
                            }

The changeName() function assigns the value of name to the person's lastName property.


                            myMother.changeName("Doe");
JavaScript knows which person you are talking about by "substituting" this with myMother.

### Built-in JavaScript Constructors
JavaScript has built-in constructors for native objects:

              Example
              var x1 = new Object();    // A new Object object
              var x2 = new String();    // A new String object
              var x3 = new Number();    // A new Number object
              var x4 = new Boolean();   // A new Boolean object
              var x5 = new Array();     // A new Array object
              var x6 = new RegExp();    // A new RegExp object
              var x7 = new Function();  // A new Function object
              var x8 = new Date();      // A new Date object


## OJ & Array

![f2](/r7/r71.png)


## GLOBAL OBJECTS: MATH OBJECT

The Math object has properties and methods for mathematical constants and functions.

![f2](/r7/r72.png)