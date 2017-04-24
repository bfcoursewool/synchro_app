import EventsBase from './events_base';

export class GradientBase extends EventsBase {
  constructor() {
    super();

    this._colors = [
      [161,96,181], // Chichi's Purple
      [64,147,218], // Chichi's Blue
      [0,0,255], // Super Blue
      [180,0,180], // Pretty purple
    ];
    this._step = 0;
    this._colorIndices = [0,1,2,3];
    this.upperBound, this.lowerBound = false; 


    this._gradientSpeed = 0.002;
    this._gradientAngle = -30; 

    this._lastMouseX = 0;
    this._lastMouseY = 0; 
  }

  getNextColors() {
    let c0_0 = this._colors[this._colorIndices[0]];
    let c0_1 = this._colors[this._colorIndices[1]];
    let c1_0 = this._colors[this._colorIndices[2]];
    let c1_1 = this._colors[this._colorIndices[3]];

    let istep = 1 - this._step;
    let r1 = Math.round(istep * c0_0[0] + this._step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + this._step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + this._step * c0_1[2]);
    let color1 = "rgb("+r1+","+g1+","+b1+")";

    let r2 = Math.round(istep * c1_0[0] + this._step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + this._step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + this._step * c1_1[2]);
    let color2 = "rgb("+r2+","+g2+","+b2+")";

    return [color1, color2]
  }

  nextStep() {
    this._step += this._gradientSpeed;

    if ( this._step >= 1 || this._step <= 0) {
      this._gradientSpeed *= -1;
      if(this._step >= 1) {
        this.upperBound = true;
      } 
      if(this._step <= 0) {
        this.lowerBound = true; 
      }
    }
  }

  getColorSequence() {
    let startColors = [];
    let endColors = []; 
    let hex1, hex2, color1, color2

    while(!this.upperBound && !this.lowerBound) {
      [color1, color2] = this.getNextColors();
      hex1 = this.rgb2hex(color1);
      hex2 = this.rgb2hex(color2); 
      startColors.push(hex1);
      endColors.push(hex2); 
      this.nextStep(); 
    }

    return [startColors, endColors]; 
  }

  rgb2hex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }
}

export default class GradientEffect extends GradientBase {
  constructor() {
    super();

    this.updateGradient = this.updateGradient.bind(this);
  }

  events() {
    return {
    }
  }

  updateGradient() {  
    let [color1, color2] = this.getNextColors(); 

    $.each($('[id^=gradient-]'), (index, element) => {
      $(element).css({
        background: "-webkit-linear-gradient("+this._gradientAngle+"deg, "+color1+", "+color2+")"}).css({
        background: "-moz-linear-gradient("+this._gradientAngle+"deg, left, "+color1+" 0%, "+color2+" 100%)"}
      );
    });
      
    this.nextStep();
  }


  changeGradientParams(target, e) {
    let deltaX = e.pageX - this.lastMouseX;
    let deltaY = e.pageY - this.lastMouseY; 
    let deltaXPercent = deltaX / screen.width;
    let deltaYPercent = deltaY / screen.height;

    // 270 is the max range of degrees it makes sense to specify as the gradient angle, -90 to 180
    if(deltaXPercent * 270) {
      if(this._gradientAngle <= -90) {
        this._gradientAngle = 180; 
      } else if (this._gradientAngle >= 180) {
        this._gradientAngle = 0;
      }
      this._gradientAngle += deltaXPercent * 270;
    }

    this.lastMouseX = e.pageX;
    this.lastMouseY = e.pageY;
  }

  startEffect() {
    if($('[id^=gradient-]')) {
      setInterval(this.updateGradient, 10);
    }
  }
}