# HTML Lists

HTML lists allow web developers to group a set of related items in lists.

There are three types of HTML lists:
**ordered**, **unordered**, and **definition**.

1. Ordered lists use numbers.
2. Unordered lists use bullets.
3. Definition lists are used to define terminology.
XX Lists can be nested inside one another.

***HTML List Tags***

    Tag |Description
-----------------------------
 < ul>  |Defines an unordered list
 < ol>  |Defines an ordered list
 < li>  |Defines a list item
 < dl>  |Defines a description list
 < dt>  |Defines a term in a description list
 < dd>  |Describes the term in a description list

   Example                  |
 ----------------------------------------------------
   < ol>                    |   < ul>
      < li>Coffee< /li>     |      < li>Coffee< /li>
      < li>Tea< /li>        |      < li>Tea< /li>
      < li>Milk< /li>       |      < li>Milk< /li>
  < /ol>                    |   < /ul>

# CSS

## CSS Width & height

**height**Definition and Usage
The height property sets the height of an element.

The height of an element does not include padding, borders, or margins!

If height: auto; the element will automatically adjust its height to allow its content to be displayed correctly.

If height is set to a numeric value (like pixels, (r)em, percentages) then if the content does not fit within the specified height, it will overflow. How the container will handle the overflowing content is defined by the overflow property.

**width**Definition and Usage
The width property sets the width of an element.

The width of an element does not include padding, borders, or margins!

Property Values ( for height,max-height,min-height)
                ( for width,max-width,min-width)

  Value   | Description Play it
 -----------------------------------------------------------------------
 auto |Default value. The browser calculates the width(height)
 length  |Defines the width(height) in px, cm, etc. Read about length units
 %     |Defines the width(height) in percent of the containing block
 initial |Sets this property to its default value.
 inherit |Inherits this property from its parent element.

## CSS Overflow

The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

![overflow](/R3/overflow.PNG)

The overflow property has the following values:
**hidden** - The overflow is clipped, and the rest of the content will be invisible
**scroll** - The overflow is clipped, and a scrollbar is added to see the rest of the content

## Border, Margin & Padding

![BMP](/R3/pad.PNG)

**The CSS Box Model**
All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

![BMP](/R3/box.gif)

Explanation of the different parts:

* Content - The content of the box, where text and images appear
* Padding - Clears an area around the content. The padding is transparent
* Border - A border that goes around the padding and content
* Margin - Clears an area outside the border. The margin is transparent
The box model allows us to add a border around elements, and to define space between elements.

Example
Demonstration of the box model:
                div {
                width: 300px;
                border: 15px solid green;
                padding: 50px;
                margin: 20px;
                }

The visibility property allows you to hide boxes from users but It leaves a space where the element would have been.
This property can take two values:
-***hidden***
This hides the element.
-***visible***
This shows the element.

### CSS3

* border-image
* box-shadow
* border-radius
* border-radius

# Javascript

## array


JavaScript arrays are used to store multiple values in a single variable.
Example
        var cars = ["Saab", "Volvo", "BMW"];

### Creating an Array

Using an array literal is the easiest way to create a JavaScript Array.
Syntax:
Example
        var array_name = [item1, item2, ...];

### How Access the Elements of an Array

You access an array element by referring to the index number.
This statement accesses the value of the first element in cars:
Example:
        var name = cars[0];

### How to Changing an Array Element

This statement changes the value of the first element in cars:
Example
        cars[0] = "Opel";

***Test ..***
![array](/imgC2/testarray.PNG)

## if & else Statements

The else if Statement
Use the else if statement to specify a new condition if the first condition is false.

Syntax
        if (condition1) {
        //  block of code to be executed if condition1 is true
        } else if (condition2) {
        //  block of code to be executed if the condition1 is false and condition2 is true
        } else {
        //  block of code to be executed if the condition1 is false and condition2 is false
        }
Example
If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

        if (time < 10) {
        greeting = "Good morning";
        } else if (time < 20) {
        greeting = "Good day";
        } else {
        greeting = "Good evening";
        }
The result of greeting will be:

        Good morning

## JavaScript Switch Statement

The switch statement is used to perform different actions based on different conditions.

The JavaScript Switch Statement
Use the switch statement to select one of many code blocks to be executed.

**syntax**
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
This is how it works:

* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.
* If there is no match, the default code block is executed.

Example
The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:

            switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
            }
The result of day will be:

            Tuesday

![Switch](/R3/ifvssw.PNG)

## JavaScript For Loop

Loops can execute a block of code a number of times.

JavaScript Loops
Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:

Instead of writing:
        text += cars[0] + "< br>";
        text += cars[1] + "< br>";
        text += cars[2] + "< br>";
        text += cars[3] + "< br>";
        text += cars[4] + "< br>";
        text += cars[5] + "< br>";
You can write:
        var i;
        for (i = 0; i < cars.length; i++) {
        text += cars[i] + "< br>";
        }
Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

![loop](/R3/loop.PNG)


### The For Loop

The for loop has the following syntax:

        for (statement 1; statement 2; statement 3) {
        // code block to be executed
        }

Statement 1 is executed **(one time)** before the execution of the code block.

Statement 2 **defines the condition** for executing the code block.

**Statement** 3 is executed (every time) after the code block has been executed.

Example
        for (i = 0; i < 5; i++) {
        text += "The number is " + i + "< br>";
        }
From the example above, you can read:

Statement 1 sets a variable before the loop starts (var i = 0).

Statement 2 defines the condition for the loop to run (i must be less than 5).

Statement 3 increases a value (i++) each time the code block in the loop has been executed.

## JavaScript While Loop

Loops can execute a block of code as long as a specified condition is true.

### The While Loop

The while loop loops through a block of code as long as a specified condition is true.

Syntax
        while (condition) {
        // code block to be executed
        }
Example
In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

Example
        while (i < 10) {
        text += "The number is " + i;
        i++;
        }
***If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.***

### The Do/While Loop

The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax
        do {
        // code block to be executed
        }
        while (condition);
Example
The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

Example
        do {
        text += "The number is " + i;
        i++;
        }
        while (i < 10);
***Do not forget to increase the variable used in the condition, otherwise the loop will never end!***

**test**
![testloop](/R3/testloop.PNG)

## TYPE COERCION & WEAK TYPING

![TWT](/R3/bla1.PNG)

## TRUTHY & FALSY VALUES

![TFV](/R3/bla2.PNG)
