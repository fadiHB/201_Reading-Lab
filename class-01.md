# HTML

## What is that !?!

![HTML](/img/WHTML.jpg)

* HTML stands for Hyper Text Markup Language
* HTML is the standard markup language for creating Web pages
* HTML describes the structure of a Web page
* HTML consists of a series of elements
* HTML elements tell the browser how to display the content
* HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

### A Simple HTML Document

![HTML](/img/html-doc.jpg)

Example Explained

- The <!DOCTYPE html> declaration defines that this document is an HTML5 document
- The <html> element is the root element of an HTML page
- The <head> element contains meta information about the HTML page
- The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
- The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The < h1 > element defines a large heading
- The < p > element defines a paragraph

### What is an HTML Element?

![HTML](/img/element.png)

Note: Some HTML elements have no content (like the < br> element). These elements are called empty elements. Empty elements do not have an end tag!

### Extra Markup

1. **HTML comments**

HTML comments are not displayed in the browser, but they can help document your HTML source code.
You can add comments to your HTML source by using the following syntax:
< !-- Write your comments here -->
Notice that there is an exclamation point (!) in the start tag, but not in the end tag.

2. **HTML Attributes**

![HTML](/img/attr.png)

* All HTML elements can have attributes
* Attributes provide additional information about elements
* Attributes are always specified in the start tag
* Attributes usually come in name/value pairs like: name="value"

3. **block & inline element**
Some elements will always appear to start on a new line in the browser window. These are known as block level elements.
Examples of block elements are
< h1 >, < p >, < ul >, and < li >.

Some other elements will always appear to continue on the same line as their neighbouring elements. These are known as inline elements.
Examples of inline elements are
< a>, < b>, < em>, and < img>

4. **Groping text and element in a block & inline**
The < div> element allows you to group a set of elements together in one block-level box.

The < span> element acts like an inline equivalent of the < div> element.
It is used to either:
- Contain a section of text
where there is no other suitable element to differentiate it from its surrounding text
- Contain a number of inline elements

4. <iframe>

An HTML iframe is used to display a web page within a web page.
The HTML < iframe > tag specifies an inline frame.
Use the height and width attributes to specify the size of the iframe.
for example :
![HTML](/img/ifram2.png)

### Using character escapes in markup ?! Yes you can

A character escape is a way of representing a character in source code using only ASCII characters.
Escapes or unescapes an HTML file removing traces of offending characters that could be wrongfully interpreted as markup.

The following characters are reserved in HTML and must be replaced with their corresponding HTML entities:

" is replaced with &quot;
& is replaced with &amp;
< is replaced with &lt;
> is replaced with &gt;

for easily find the character escapes you want,there is a nice website help you for that.
it's name is [freeformatter](https://www.freeformatter.com/html-escape.html)


### Process & Design

this is some advices you shuld take it an any design

* It's important to understand w XX ho your target audience
is, why they would come to your site, what information
they want to find and when they are likely to return.
* Site maps allow you to plan the structure of a site.
* Wireframes allow you to organize the information that
will need to go on each page.
* Design is about communication. Visual hierarchy helps
visitors understand what you are trying to tell them.
* You can differentiate between pieces of information
using size, color, and style.
* You can use grouping and similarity to help simplify
the information you present.

# The ABC of programming

![ABC](/img/ABC.jpg)

## What is a script and how do I creat one

 ***A script or scripting language*** is a computer language with a series of commands within a file capable of being executed without being compiled. Good examples of server-side scripting languages include Perl, PHP, and Python. The best example of a client side scripting language is JavaScript. A full list of scripting languages and other programming languages are found in our programming language definition.

Each time the script runs, it might only use a subset of all the instructions.

Computers approach tasks in a different way than humans, so your instructions must let the computer solve the task prggrammatically.

To approach writing a script, break down your goal into a series of tasks and then work out each step needed to complete that task (a flowchart can help).

#### Advantages of scripts

- Open source, allowing users to view and edit the script if needed.
- Does not require the file to be compiled, but may be when necessary.
- Easy to learn and write.
- Easy to port between different operating systems.
- Much faster to develop than an actual program - some individuals and companies write scripts as a prototype for actual programs.

## How do computers fit in with the word around them?

Computer creat models of the word  using data

The models use **object** to represent physical things 

Each object can have its own"

* properites : that till us about the object

* Events : which are triggered when a user interacts with the computer

* Methods : that perform tasks using the propereties of that object

Together they creat a working model of the object


## How do i write a script on a web page

there is several method ..

1. ### The <script> Tag
In HTML, JavaScript code is inserted between <script> and </script> tags.

Example:

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

2. ### JavaScript in <head> or <body>
You can place any number of scripts in an HTML document.

Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

#### **JavaScript in <head>**

In this example, a JavaScript function is placed in the <head> section of an HTML page.

The function is invoked (called) when a button is clicked:

Example
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

< h1 >A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>

#### **JavaScript in <body>**

In this example, a JavaScript function is placed in the <body> section of an HTML page.

The function is invoked (called) when a button is clicked:

Example
<!DOCTYPE html>
<html>
<body>

< h1 >A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>


***Note***
Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.


3. ### External JavaScript

Scripts can also be placed in external files:

External file: myScript.js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension .js.

To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:

Example
<script src="myScript.js"></script>

-------------
You can place an external script reference in <head> or <body> as you like.

The script will behave as if it was located exactly where the <script> tag is located.
------------
**External JavaScript Advantages**
Placing scripts in external files has some advantages:

* It separates HTML and code
* It makes HTML and JavaScript easier to read and maintain
* Cached JavaScript files can speed up page loads

To add several script files to one page  - use several script tags:
Example:
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>

## quiz
![quiz](/img/quiz.jpg)
1. what can Javascript do?
2. which is the best place to coding javascript ?
