# HTML
## What is that !?!
![HTML](/img/What-is-html.jpg)

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
- The <h1> element defines a large heading
- The <p> element defines a paragraph


### What is an HTML Element?
![HTML](/img/element.png)

Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!

### Extra Markup
1. **HTML comments** 
HTML comments are not displayed in the browser, but they can help document your HTML source code.
You can add comments to your HTML source by using the following syntax:
<!-- Write your comments here -->
Notice that there is an exclamation point (!) in the start tag, but not in the end tag.

2. **HTML Attributes**
* All HTML elements can have attributes
* Attributes provide additional information about elements
* Attributes are always specified in the start tag
*  Attributes usually come in name/value pairs like: name="value"

![HTML](/img/attr.png)

3. **block & inline element**
Some elements will always
appear to start on a new line in
the browser window. These are
known as block level elements.
Examples of block elements are
<h1>, <p>, <ul>, and <li>.

Some elements will always
appear to continue on the
same line as their neighbouring
elements. These are known as
inline elements.
Examples of inline elements are
<a>, <b>, <em>, and <img>

4. **Groping text and element in a block & inline**
The <div> element allows you to
group a set of elements together
in one block-level box.

The <span> element acts like
an inline equivalent of the <div>
element. It is used to either:
- Contain a section of text
where there is no other suitable
element to differentiate it from
its surrounding text
- Contain a number of inline
elements