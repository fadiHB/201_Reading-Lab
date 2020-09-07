# HTML part
 ## Text
HTML contains several elements for defining text with a special meaning.

![text](/imgC2/text1.PNG)

* HTML elements are used t XX o describe the structure of
the page (e.g. headings, subheadings, paragraphs).
* They also provide semantic information (e.g. where
emphasis should be placed, the definition of any
acronyms used, when given text is a quotation).



# CSS part
## intro to CSS

### What is CSS?
- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files

### CSS Syntax
A CSS rule-set consists of a selector and a declaration block:

![css](/imgC2/css2.PNG)

The selector points to the HTML element you want to style.
The declaration block contains one or more declarations separated by semicolons.
Each declaration includes a CSS property name and a value, separated by a colon.
Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

### How To Add CSS ?
There are three ways of inserting a style sheet:

1. External CSS
With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the < link> element, inside the head section

Example:
 {             <!DOCTYPE html>
            <html>
            <head>
            <link rel="stylesheet" href="mystyle.css">
            </head>
            <body>

            <h1>This is a heading</h1>
            <p>This is a paragraph.</p>

            </body>
            </html>
 }

An external style sheet can be written in any text editor, and must be saved with a .css extension.

The external .css file should not contain any HTML tags.

{
        "mystyle.css"
    body {
    background-color: lightblue;
    }

    h1 {
    color: navy;
    margin-left: 20px;
    }

}

2. Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the < style> element, inside the head section.

Example
Internal styles are defined within the < style> element, inside the < head> section of an HTML page:

        <!DOCTYPE html>
        <html>
        <head>
        <style>
        body {
        background-color: linen;
        }

        h1 {
        color: maroon;
        margin-left: 40px;
        }
        </style>
        </head>
        <body>

        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>

        </body>
        </html>


3. Inline CSS
An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

Example
Inline styles are defined within the "style" attribute of the relevant element:

            <!DOCTYPE html>
            <html>
            <body>

            <h1 style="color:blue;text-align:center;">This is a heading</h1>
            <p style="color:red;">This is a paragraph.</p>

            </body>
            </html>

### CSS Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

+ Simple selectors (select elements based on name, id, class)
+ Combinator selectors (select elements based on a specific relationship between them)
+ Pseudo-class selectors (select elements based on a certain state)
+ Pseudo-elements selectors (select and style a part of an element)
+ Attribute selectors (select elements based on an attribute or attribute value)

### important

![summ](/imgC2/summ.jpg)

* CSS treats each HTML e XX lement as if it appears inside
its own box and uses rules to indicate how that
element should look.
*  Rules are made up of selectors (that specify the
elements the rule applies to) and declarations (that
indicate what these elements should look like).
*  Different types of selectors allow you to target your
rules at different elements.
* Declarations are made up of two parts: the properties
of the element that you want to change, and the values
of those properties. For example, the font-family
property sets the choice of font, and the value arial
specifies Arial as the preferred typeface.
* CSS rules usually appear in a separate document,
although they may appear within an HTML page.

# Javascript part
## Basic Javascript instructions

### JavaScript Programs
A **computer program** is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called **statements**.

A **JavaScript program** is a list of programming **statements**.

Example
        var x, y, z;    // Statement 1
        x = 5;          // Statement 2
        y = 6;          // Statement 3
        z = x + y;      // Statement 4

**whats is JavaScript Statements**
JavaScript statements are composed of:
Values, Operators, Expressions, Keywords, and Comments

some prperity
* Semicolons separate JavaScript statements.Add a semicolon at the end of each executable statement,When separated by semicolons, multiple statements on one line are allowed.
* JavaScript ignores multiple spaces. You can add white space to your script to make it more readable
* For best readability, programmers often like to avoid code lines longer than 80 characters.
If a JavaScript statement does not fit on one line, the best place to break it is after an operator
* JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
The purpose of code blocks is to define statements to be executed together.
One place you will find statements grouped together in blocks, is in JavaScript functions
* avaScript statements often start with a keyword to identify the JavaScript action to be performed


### COMMENTS
JavaScript comments can be used to explain JavaScript code, and to make it more readable.
JavaScript comments can also be used to prevent execution, when testing alternative code.

 MULTI-LINE COMMENTS                    | SINGLE-LINE COMMENTS 
 ---------------------------------------|----------------------
 Single line comments start             |Multi-line comments start with /* and end with */.                           |
 with //. Any text between // and the   |Any text between /* and */ will be 
 end of the line will bbe ignored by    |ignored by JavaScript.
 JavaScript (will not be executed).     |

 ### WHAT IS A VARIABLE? 
 JavaScript variables are containers for storing data values.

In this example, x, y, and z, are variables:
            Example
            var x = 5;
            var y = 6;
            var z = x + y;

### How to Declear Variable ?
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var keyword:

EX:         var carName;

After the declaration, the variable has no value (technically it has the value of undefined).
To assign a value to the variable, use the equal sign:

EX          carName = "Volvo";

You can also assign a value to the variable when you declare it:

EX          var carName = "Volvo";

### JavaScript Data Types
JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

Example
            var pi = 3.14;
            var person = "John Doe";
            var answer = 'Yes I am!';
            var bool   = True;


![DType](/imgC2/testtype.PNG)




### JavaScript Arrays
JavaScript arrays are used to store multiple values in a single variable.
Example
        var cars = ["Saab", "Volvo", "BMW"];


### Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.
Syntax:
Example
        var array_name = [item1, item2, ...];


### How Access the Elements of an Array?
You access an array element by referring to the index number.
This statement accesses the value of the first element in cars:
Example:
        var name = cars[0];

### how to Changing an Array Element?
This statement changes the value of the first element in cars:
Example
        cars[0] = "Opel";


***Test ..***
![array](/imgC2/testarray.PNG)



### ARITHMETIC & Storing OPERATORS 
JavaScript contains the following mathematical operators, which you can use with numbers.
You may remember some from math class.
![oper](/imgC2/oper.PNG)

STRING OPERATOR
There is just one string operator: the+ symbol.
It is used to join the strings on either side of it.


## JavaScript Loops
Loops are handy, if you want to run the same code over and over again, each time with a different value.
Often this is the case when working with arrays

### Different Kinds of Loops
JavaScript supports different kinds of loops:

* for - loops through a block of code a number of times
* for/in - loops through the properties of an object
* for/of - loops through the values of an iterable object
* while - loops through a block of code while a specified condition is true
* do/while - also loops through a block of code while a specified condition is true













