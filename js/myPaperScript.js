var canvas = document.querySelector('canvas');

canvas.width =window.innerWidth;
canvas.height =window.innerHeight;
console.log(canvas);

// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'red';
var start = new Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 100, -50 ]);

var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.fillColor = 'black';

var circle2 = new Path.Circle(new Point(50, 50), 300);
circle2.fillColor = 'purple';

       
