# HTML Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

## The < form> Element

The HTML < form> element is used to create an HTML form for user input:

                                        <form>
                                        .
                                        form elements
                                        .
                                        </form>

The < form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

All the different form elements are covered in this chapter: HTML Form Elements.

## The < input> Element

The HTML < input> element is the most used form element.

An < input> element can be displayed in many ways, depending on the type attribute.

Here are some examples:

![f1](/R9/f1.PNG)

## Text Fields

The < input type="text"> defines a single-line input field for text input.

Example
A form with input fields for text:

                                <form>
                                <label for="fname">First name:</label><br>
                                <input type="text" id="fname" name="fname"><br>
                                <label for="lname">Last name:</label><br>
                                <input type="text" id="lname" name="lname">
                                </form>

This is how the HTML code above will be displayed in a browser:

![f2](/R9/f2.PNG)


## The < label> Element
Notice the use of the < label> element in the example above.

The < label> tag defines a label for many form elements.

The < label> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.

The < label> element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the < label> element, it toggles the radio button/checkbox.

The for attribute of the < label> tag should be equal to the id attribute of the < input> element to bind them together.

## Radio Buttons
The < input type="radio"> defines a radio button.

Radio buttons let a user select ONE of a limited number of choices.

Example
A form with radio buttons:

                            <form>
                            <input type="radio" id="male" name="gender" value="male">
                            <label for="male">Male</label><br>
                            <input type="radio" id="female" name="gender" value="female">
                            <label for="female">Female</label><br>
                            <input type="radio" id="other" name="gender" value="other">
                            <label for="other">Other</label>
                            </form>
This is how the HTML code above will be displayed in a browser:

![f3](/R9/f3.PNG)

## Checkboxes
The < input type="checkbox"> defines a checkbox.

Checkboxes let a user select ZERO or MORE options of a limited number of choices.

Example
A form with checkboxes:

                <form>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"> I have a bike</label><br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"> I have a car</label><br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                <label for="vehicle3"> I have a boat</label>
                </form>
This is how the HTML code above will be displayed in a browser:


 ![f4](/R9/f4.PNG)



# CSS

## Lists, Tables and Forms

### list-style-type

 ![f4](/R9/l1.PNG)

 HTML Lists and CSS List Properties
In HTML, there are two main types of lists:

unordered lists (<ul>) - the list items are marked with bullets
ordered lists (<ol>) - the list items are marked with numbers or letters
The CSS list properties allow you to:

* Set different list item markers for ordered lists
* Set different list item markers for unordered lists
* Set an image as the list item marker
* Add background colors to lists and list items

### Border on empty-cells

If you have empty cells in your table, then you can use
the empty-cells property to specify whether or not their
borders should be shown. 

Since browsers treat empty cells in different ways, if you want to
explicitly show or hide borders on any empty cells then you
should use this property. 

It can take one of three values:
- show
This shows the borders of any empty cells.
- hide
This hides the borders of any empty cells.
- inherit
If you have one table nested
inside another, the inherit value instructs the table cells to
obey the rules of the containing table.

### Styling Fieldsets & Legends

Fieldsets are particularly helpful in determining the edges of a
form. In a long form they can help group together related
information within it.

The legend is used to indicate hat information is required in
the fieldset.

***Summmary***
In addition to the CSS p XX roperties covered in other
chapters which work with the contents of all elements,
there are several others that are specifically used to
control the appearance of lists, tables, and forms.

* List markers can be given different appearances
using the list-style-type and list-style image
properties.
* Table cells can have different borders and spacing in
different browsers, but there are properties you can
use to control them and make them more consistent.
* Forms are easier to use if the form controls are
vertically aligned using CSS.
* Forms benefit from styles that make them feel more
interactive.

# JS Event

When you browse the web, your browser registers different types of events. It's the browser's way of saying, "Hey, this just happened." Your script can then respond to these events.

## HOW EVENTS TRIGGER JAVASCRIPT CODE

When the user interacts with the HTML on a web page, there are three steps involved in getting it to trigger some JavaScript code.

Together these steps are known as event handling.
 ![f4](/R9/e1.PNG)

 ## TRADITIONAL DOM EVENT HANDLERS

![f4](/R9/e2.PNG)


## EVENT LISTENERS
Event listeners are a more recent approach to handling events. They can deal with more than one function at a time but they are not supported in older browsers.

![f4](/R9/e3.PNG)

## Event flow
![f4](/R9/e4.PNG)
