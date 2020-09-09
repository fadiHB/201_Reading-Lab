# Read-05

## Images

Choosing Images forYour Site.
A picture can say a thousand words, and great images help make the difference between an average-looking site and a really engaging one.

Images should...

* Be relevant
* Convey information
* Convey the right mood
* Be instantly recognisable
* Fit the color palette

Stock photos

- www.istockphoto.com
- www.gettyimages.com
- www.veer.com
- www.sxc.hu
- www.fotolia.com

**HTML Images Syntax**
The HTML < img> tag is used to embed an image in a web page.

Images are not technically inserted into a web page; images are linked to web pages. The < img> tag creates a holding space for the referenced image.

The < img> tag is empty, it contains attributes only, and does not have a closing tag.

The < img> tag has two required attributes:

src - Specifies the path to the image
alt - Specifies an alternate text for the image
Syntax
< img src="url" alt="alternatetext">

**The src Attribute**
The required src attribute specifies the path (URL) to the image.

Note: When a web page loads; it is the browser, at that moment, that gets the image from a web server and inserts it into the page. Therefore, make sure that the image actually stay in the same spot in relation to the web page, otherwise your visitors will get a broken link icon. The broken link icon and the alt text are shown if the browser cannot find the image.

                Example
                < img src="img_chania.jpg" alt="Flowers in Chania">

**The alt Attribute**
The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

The value of the alt attribute should describe the image:

                Example
                <img src="img_chania.jpg" alt="Flowers in Chania">

If a browser cannot find an image, it will display the value of the alt attribute:

                Example
                <img src="wrongname.gif" alt="Flowers in Chania">

Tip: A screen reader is a software program that reads the HTML code, and allows the user to "listen" to the content. Screen readers are useful for people who are visually impaired or learning disabled.

**Image Size - Width and Height**
You can use the style attribute to specify the width and height of an image.

                Example
                <img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">

Alternatively, you can use the width and height attributes:

                Example
                <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

The width and height attributes always define the width and height of the image in pixels.

### Tools to Edit & Save Images

There are several tools you can use to edit and save images to ensure that they are the right size, format, and resolution.

The most popular tool amongst web professionals is Adobe Photoshop.
(In fact, professional web designers often use this software to design entire sites.)

![test4](/r5/phot.PNG)

### HTML < figcaption > Tag

Example
Use a < figure> element to mark up a photo in a document, and a < figcaption> element to define a caption for the photo:

                    <figure>
                    <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
                    <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                    </figure>

the result will be this ..
![fig](/r5/fig.PNG)


Definition and Usage
The < figcaption> tag defines a caption for a < figure> element.

The < figcaption> element can be placed as the first or last child of the < figure> element.

## css Colors

![fig](/r5/co.jpg)

Colors in CSS can be specified by the following methods:

1. Hexadecimal colors
2. RGB colors
3. RGBA colors
4. HSL colors
5. HSLA colors
6. Predefined/Cross-browser color names With the currentcolor keyword

**Hexadecimal Colors**
A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color. All values must be between 00 and FF.

For example, the #0000ff value is rendered as blue, because the blue component is set to its highest value (ff) and the others are set to 00.

Example
Define different HEX colors:

                        #p1 {background-color: #ff0000;}   /* red */
                        #p2 {background-color: #00ff00;}   /* green */
                        #p3 {background-color: #0000ff;}   /* blue */
**RGB Colors**
An RGB color value is specified with the rgb() function, which has the following syntax:

rgb(red, green, blue)

Each parameter (red, green, and blue) defines the intensity of the color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%).

For example, the rgb(0,0,255) value is rendered as blue, because the blue parameter is set to its highest value (255) and the others are set to 0.

Also, the following values define equal color: rgb(0,0,255) and rgb(0%,0%,100%).

Example
Define different RGB colors:

                    #p1 {background-color: rgb(255, 0, 0);}   /* red */
                    #p2 {background-color: rgb(0, 255, 0);}   /* green */
                    #p3 {background-color: rgb(0, 0, 255);}   /* blue */

**RGBA Colors**
RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity of the object.

An RGBA color is specified with the rgba() function, which has the following syntax:

rgba(red, green, blue, alpha)

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

Example
Define different RGB colors with opacity:

                #p1 {background-color: rgba(255, 0, 0, 0.3);}   /* red with opacity */
                #p2 {background-color: rgba(0, 255, 0, 0.3);}   /* green with opacity */
                #p3 {background-color: rgba(0, 0, 255, 0.3);}   /* blue with opacity */

***HSL Colors***
HSL stands for hue, saturation, and lightness - and represents a cylindrical-coordinate representation of colors.

An HSL color value is specified with the hsl() function, which has the following syntax:

hsl(hue, saturation, lightness)

Hue is a degree on the color wheel (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue. Saturation is a percentage value; 0% means a shade of gray and 100% is the full color. Lightness is also a percentage; 0% is black, 100% is white.

Example
Define different HSL colors:

                #p1 {background-color: hsl(120, 100%, 50%);}   /* green */
                #p2 {background-color: hsl(120, 100%, 75%);}   /* light green */
                #p3 {background-color: hsl(120, 100%, 25%);}   /* dark green */
                #p4 {background-color: hsl(120, 60%, 70%);}    /* pastel green */

**HSLA Colors**
HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity of the object.

An HSLA color value is specified with the hsla() function, which has the following syntax:

hsla(hue, saturation, lightness, alpha)

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

Example
Define different HSL colors with opacity:

            #p1 {background-color: hsla(120, 100%, 50%, 0.3);}   /* green with opacity */
            #p2 {background-color: hsla(120, 100%, 75%, 0.3);}   /* light green with opacity */
            #p3 {background-color: hsla(120, 100%, 25%, 0.3);}   /* dark green with opacity */
            #p4 {background-color: hsla(120, 60%, 70%, 0.3);}    /* pastel green with opacity */

**Predefined/Cross-browser Color Names**
140 color names are predefined in the HTML and CSS color specification.

For example: blue, red, coral, brown, etc:

Example
Define different color names:

                    #p1 {background-color: blue;}
                    #p2 {background-color: red;}
                    #p3 {background-color: coral;}
                    #p4 {background-color: brown;}
A list of all predefined names can be found in our Color Names Reference.

**The currentcolor Keyword**
The currentcolor keyword refers to the value of the color property of an element.

Example
The border color of the following < div> element will be blue, because the text color of the < div> element is blue:

                #myDIV {
                color: blue; /* Blue text color */
                border: 10px solid currentcolor; /* Blue border color */
                }

## Text

***CSS text-align Property***

Example
Set the text alignment for different < div> elements:

                    div.a {
                    text-align: center;
                    }

                    div.b {
                    text-align: left;
                    }

                    div.c {
                    text-align: right;
                    }

                    div.c {
                    text-align: justify;
                    }

![al](/r5/alight.PNG)

**CSS text-decoration Property**
Example
Set different text decorations for < h1>, < h2>, and < h3> elements:

                        h1 {
                        text-decoration: overline;
                        }

                        h2 {
                        text-decoration: line-through;
                        }

                        h3 {
                        text-decoration: underline;
                        }

                        h4 {
                        text-decoration: underline overline;
                        }

Definition and Usage
The text-decoration property specifies the decoration added to text, and is a shorthand property for:

1. text-decoration-line (required)
2. text-decoration-color
3. text-decoration-style

**CSS text-transform Property**
Example
Transform text in different < div > elements:

            div.a {
            text-transform: uppercase;
            }

            div.b {
            text-transform: lowercase;
            }

            div.c {
            text-transform: capitalize;
            }
![ma](/r5/ma.PNG)

**Styling Links**
Links can be styled with any CSS property (e.g. color, font-family, background, etc.).

                        Example
                        a {
                        color: hotpink;
                        }

In addition, links can be styled differently depending on what state they are in.

The four links states are:

1. a:link - a normal, unvisited link
2. a:visited - a link the user has visited
3. a:hover - a link when the user mouses over it
4. a:active - a link the moment it is clicked

                    Example
                    /* unvisited link */
                    a:link {
                    color: red;
                    }

                    /* visited link */
                    a:visited {
                    color: green;
                    }

                    /* mouse over link */
                    a:hover {
                    color: hotpink;
                    }

                    /* selected link */
                    a:active {
                    color: blue;
                    }

**First Lett er or Line**
You can specify different values for the first letter or first line of text inside an element using

:first-letter and
:first-line.

Technically these are not properties. They are known as pseudo-elements.

![f](/r5/f.PNG)

**CSS text-shadow Property**
Example
Basic text-shadow:

                    h1 {
                    text-shadow: 2px 2px #ff0000;
                    }

Definition and Usage
The text-shadow property adds shadow to text.

This property accepts a comma-separated list of shadows to be applied to the text.

![shadow](/r5/shadow.PNG)


**CSS text-indent Property**
Example
Indent the first line of text with different values:

                div.a {
                text-indent: 50px;
                }

                div.b {
                text-indent: -2em;
                }

                div.c {
                text-indent: 30%;
                }

Definition and Usage
The text-indent property specifies the indentation of the first line in a text-block.

Note: Negative values are allowed. The first line will be indented to the left if the value is negative.

![indent](/r5/dent.PNG)