# What is HTML Canvas

 ![r12](/r12/r12.png)
The HTML < canvas> element is used to draw graphics, on the fly, via JavaScript.

The < canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics.

Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

## Canvas Examples

A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content.

The markup looks like this:

                <canvas id="myCanvas" width="200" height="100"></canvas>

***Note:*** Always specify an id attribute (to be referred to in a script), and a width and height attribute to define the size of the canvas. To add a border, use the style attribute.

## Add a JavaScript

After creating the rectangular canvas area, you must add a JavaScript to do the drawing.

Here are some examples:

Draw a Line
Example
                                < script>
                                    var c = document.getElementById("myCanvas");
                                    var ctx = c.getContext("2d");
                                    ctx.moveTo(0, 0);
                                    ctx.lineTo(200, 100);
                                    ctx.stroke();
                                < /script>
Draw a Circle
Example
                                < script>
                                    var c = document.getElementById("myCanvas");
                                    var ctx = c.getContext("2d");
                                    ctx.beginPath();
                                    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
                                    ctx.stroke();
                                < /script>
Draw a Text
Example
                                < script>
                                    var c = document.getElementById("myCanvas");
                                    var ctx = c.getContext("2d");
                                    ctx.font = "30px Arial";
                                    ctx.fillText("Hello World", 10, 50);
                                < /script>
Stroke Text
Example
                                < script>
                                    var c = document.getElementById("myCanvas");
                                    var ctx = c.getContext("2d");
                                    ctx.font = "30px Arial";
                                    ctx.strokeText("Hello World", 10, 50);
                                < /script>
Draw Linear Gradient
Example
                                < script>
                                    var c = document.getElementById("myCanvas");
                                    var ctx = c.getContext("2d");
                                    < script>

Create gradient

                                var grd = ctx.createLinearGradient(0, 0, 200, 0);
                                grd.addColorStop(0, "red");
                                grd.addColorStop(1, "white");

Fill with gradient
                                ctx.fillStyle = grd;
                                ctx.fillRect(10, 10, 150, 80);

Draw Circular Gradient
                                var c = document.getElementById("myCanvas");
                                var ctx = c.getContext("2d");

Create gradient
                                var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
                                grd.addColorStop(0, "red");
                                grd.addColorStop(1, "white");

Fill with gradient
                                ctx.fillStyle = grd;
                                ctx.fillRect(10, 10, 150, 80);

## EASILY CREATE STUNNING ANIMATED CHARTS WITH CHART.JS

Charts are far better for displaying data visually than tables and have the added benefit that no one is ever going to press-gang them into use as a layout tool. They’re easier to look at and convey data quickly, but they’re not always easy to create

A great way to get started with charts is with Chart.js, a JavaScript plugin that uses HTML5’s canvas element to draw the graph onto the page


## Setting up

The first thing we need to do is **download Chart.js.** Copy the Chart.min.js out of the unzipped folder and into the directory you’ll be working in. Then create a new html page and import the script:

                                    <!DOCTYPE html>
                                    <html lang="en">
                                        <head>
                                            <meta charset="utf-8" />
                                            <title>Chart.js demo</title>
                                            <script src='Chart.min.js'></script>
                                        </head>
                                        <body>
                                        </body>
                                    </html>


Inside the same script tags we need to **create our data**, in this instance it’s an object that contains labels for the base of our chart and datasets to describe the values on the chart. Add this immediately above the line that begins ‘var buyers=’:

                                        var buyerData = {
                                            labels : ["January","February","March","April","May","June"],
                                            datasets : [
                                                {
                                                    fillColor : "rgba(172,194,132,0.4)",
                                                    strokeColor : "#ACC26D",
                                                    pointColor : "#fff",
                                                    pointStrokeColor : "#9DB86D",
                                                    data : [203,156,99,251,305,247]
                                                }
                                            ]
                                        }
If you test your file in a browser you’ll now see a cool animated line graph.

 
## Drawing a pie chart

Our line chart is complete, so let’s move on to our pie chart. First, we need the **canvas element:**

                    <canvas id="countries" width="600" height="400"></canvas>

Next, we need to get the context and to instantiate the chart:

                    var countries= document.getElementById("countries").getContext("2d");
                    new Chart(countries).Pie(pieData, pieOptions);

You’ll notice that this time, we are going to supply some options to the chart.

Next we need to create the data. This data is a little different to the line chart because the pie chart is simpler, we just need to supply a value and a color for each section:

                            var pieData = [
                                {
                                    value: 20,
                                    color:"#878BB6"
                                },
                                {
                                    value : 40,
                                    color : "#4ACAB4"
                                },
                                {
                                    value : 10,
                                    color : "#FF8153"
                                },
                                {
                                    value : 30,
                                    color : "#FFEA88"
                                }
                            ];

Now, immediately after the pieData we’ll add our options:

                            var pieOptions = {
                                segmentShowStroke : false,
                                animateScale : true
}
These options do two things, first they remove the stroke from the segments, and then they animate the scale of the pie so that it zooms out from nothing.


## Drawing a bar chart

Finally, let’s add  a bar chart to our page. Happily the syntax for the bar chart is very similar to the line chart we’ve already added. First, we add the canvas element:

                <canvas id="income" width="600" height="400"></canvas>

Next, we retrieve the element and **create the graph**:

                    var income = document.getElementById("income").getContext("2d");
                    new Chart(income).Bar(barData);

And finally, we add in the bar chart’s data:

                    var barData = {
                        labels : ["January","February","March","April","May","June"],
                        datasets : [
                            {
                                fillColor : "#48A497",
                                strokeColor : "#48A4D1",
                                data : [456,479,324,569,702,600]
                            },
                            {
                                fillColor : "rgba(73,188,170,0.4)",
                                strokeColor : "rgba(72,174,209,0.4)",
                                data : [364,504,605,400,345,320]
                            }

                        ]
                    }
As you can see, the data is largely the same, except this time we’ve chosen to use RGBA to specify our colors which allows us to add transparency.


