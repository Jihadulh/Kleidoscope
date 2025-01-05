let symmetry = 6;    // number of reflections so in my instance its 6
let angle;
let savebutton;
let clearbutton;
let slider;
let colorpicker;3

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(0);
  
      // This Calculates base angle for symmetry
      angle = 360 / symmetry;
      
       // created colour picker for the user controls and i positioned it to the top left
      colorpicker = createColorPicker('#ff0000');
      colorpicker.position(10, 10);
      // slider to change colours from left to right 
      slider = createSlider(4, 12, 6, 1);
      slider.position(10, 40);
  

//  save button for the user to save their drawing to their device 
      savebutton = createButton('Save');
      savebutton.position(10, 70);
      savebutton.mousePressed(saveArt);
      // this button clears the 
      clearbutton = createButton('Clear');
      clearbutton.position(70, 70);
      clearbutton.mousePressed(() => background(0));
}

function draw() {
  // this makes a slider which can create more symtry depending on how many s
  symmetry = slider.value();
  angle = 360 / symmetry;
  
  translate(width / 2, height / 2);
  
          if (mouseIsPressed && mouseButton === LEFT) {
            // this calculates the position of the mouse pressed
            let mx = mouseX - width / 2;
            let my = mouseY - height / 2;
            let pmx = pmouseX - width / 2;
            let pmy = pmouseY - height / 2;

    //  symmetrical lines
    for (let i = 0; i < symmetry; i++) {
      rotate(angle);
      
      // drawing lines
      stroke(colorpicker.color());
      strokeWeight(3);
      line(mx, my, pmx, pmy);
      
        // mirrored line
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
    }
  }
}
// this is to save the file to the users device
function saveArt() {
      saveCanvas('symetry  drawing', 'png');
}