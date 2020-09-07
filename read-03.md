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

 Example                   |
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

![overflow](/R3/overflow.png)

The overflow property has the following values:
**hidden** - The overflow is clipped, and the rest of the content will be invisible
**scroll** - The overflow is clipped, and a scrollbar is added to see the rest of the content

## Border, Margin & Padding

![BMP](/R3/pad.png)

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
