// require - looks for the rectable.js file and takes the exports from that file and set them as properties or methods of this rect object.
// rect - calls the function from rectangle.js which checks if l,w are positive numbers, if not it returns the callback function with an err object as it's first argument. expects 3 values: 2 positive numbers and a callback function.
// err, rectangle - this arrow (callback) function is not being executed here in the parameter list, only being defined. It won't be used until it enter the code inside the rectangle module (rectangle.js).
// if (err) - if the function in rectangle.js returned an error, then console log the error message.
// if (err) returned false (the function in rectangle.js did not error) then the else statment kicks and we know the callback was called with a first argument of null.
// rectangle.area - the object that owns these methods is now being passed into this callback function with the name rectangle as defined in the paramter list of the rect function.

const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);