# HTML < link > Tag

Example
Link to an external style sheet:

            < head>
            < link rel="stylesheet" href="styles.css">
            < /head>

**Definition and Usage**
The < link> tag defines the relationship between the current document and an external resource.

The < link> tag is most often used to link to external style sheets.

The < link> element is an empty element, it contains attributes only.

**Attributes**
![link](/r4/link.PNG)

## HTML < a> target Attribute

Example
The target attribute specifies where to open the linked document:

            < a href="https://www.google.com" target="_blank">Visit google</a>

**Definition and Usage**
The target attribute specifies where to open the linked document.

![target](/r4/target.PNG)

## Email Links

![mailto](/r4/mailto.PNG)

# CSS

## Key Concepts in Positioning El ements

CSS treats each HTML element as if it is in its own box. This box will either be a block-level box or an inline box.

Block-level boxes start on a new line and act as the main building blocks of any layout, while inline boxes flow between surrounding text.

You can control how much space each box takes up by setting the width of the boxes (and sometimes the height, too).

To separate boxes, you can use borders, margins, padding, and background colors.

![BI](/r4/BI.PNG)

## Containing Elements

If one block-level element sits inside another block-level element then the outer box is
known as the containing or parent element.
It is common to group a number of elements together inside a < div >
(or other block-level) element.

For example, you might group together all of the elements that form the header of a site (such as the logo and the main navigation).
The < div> element that contains this group of elements is then referred to as the containing element.

![mailto](/r4/partner.PNG)

## How Controlling the Position of Elements ?

CSS has the following positioning schemes that allow you to control the layout of a page: normal flow, relative positioning, and absolute positioning.
You specify the positioning scheme using the position property in CSS.
You can also float elements using the float property.

![3](/r4/3.PNG)

To indicate where a box should be positioned, you may also need to use box offset properties to tell the browser how far from the top or bottom and left or right it should be placed.

![4](/r4/4.PNG)

# JS

## WHAT IS A FUNCTION?

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Example
                    function myFunction(p1, p2) {
                    return p1 * p2;   // The function returns the product of p1 and p2
                    }

**JavaScript Function Syntax**
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

                        function name(parameter1, parameter2, parameter3) {
                        // code to be executed
                        }

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

A Function is much the same as a Procedure or a Subroutine, in other programming languages.

**Function Invocation**
The code inside the function will execute when "something" invokes (calls) the function:

* When an event occurs (when a user clicks a button)
* When it is invoked (called) from JavaScript code
* Automatically (self invoked)

**Function Return**
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Example
Calculate the product of two numbers, and return the result:

                    var x = myFunction(4, 3);   // Function is called, return value will end up in x

                    function myFunction(a, b) {
                    return a * b;             // Function returns the product of a and b
                    }
The result in x will be:

                    12

### Why Functions?

You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

Example
Convert Fahrenheit to Celsius:

                    function toCelsius(fahrenheit) {
                    return (5/9) * (fahrenheit-32);
                    }
                    document.getElementById("demo").innerHTML = toCelsius(77);

### GETTING single VALUES OUT OF A FUNCTION

Example:

![single](/r4/single.PNG)

### GETTING MULTIPLE VALUES OUT OF A FUNCTION

Example:

![mult](/r4/Mult.PNG)

***test***

![test4](/r4/test4.PNG)
