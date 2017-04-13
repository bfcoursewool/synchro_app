import EventsBase from './events_base';

export default class GradientEffect extends EventsBase {
  constructor() {
    super();

    // Things to play with: 
    //  Dynamically altering the angle of the gradient
    //  Connect both the color blending and perhaps the angle of gradient to mouse/scroll interactions

    this._colors = [
      [161,96,181], // Chichi's Purple
      [64,147,218], // Chichi's Blue
      [0,0,255], // Super Blue
      [180,0,180], // Pretty purple
    ];
    this._step = 0;
    this._colorIndices = [0,1,2,3];

    this._gradientSpeed = 0.002;
    this._gradientAngle = 0; 

    this._lastMouseX = 0;
    this._lastMouseY = 0; 

    this.updateGradient = this.updateGradient.bind(this);
  }

  events() {
    return {
      'mousemove body': 'changeGradientParams'
    }
  }

  updateGradient() {  
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

    $('#gradient').css({
      background: "-webkit-linear-gradient("+this._gradientAngle+"deg, "+color1+", "+color2+")"}).css({
      background: "-moz-linear-gradient("+this._gradientAngle+"deg, left, "+color1+" 0%, "+color2+" 100%)"}
    );
      
    this._step += this._gradientSpeed;
    if ( this._step >= 1 || this._step <= 0) {
      this._gradientSpeed *= -1;
    }
  }

  // TODO -- Figure out a way to degrade the gradient speed and then this mouse effect will be cool
  degradeSpeed() {
    if(this._gradientSpeed > .002) {
      this._gradientSpeed -= .01; 
    }
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
    
    /* 
    if (deltaYPercent * 270) {
      if(this._gradientSpeed > .05) {
        this._gradientSpeed = .002;
      }
      this._gradientSpeed += .001 * deltaYPercent * 270
    }
    */ 

    this.lastMouseX = e.pageX;
    this.lastMouseY = e.pageY;
  }

  startEffect() {
    if($('#gradient')) {
      setInterval(this.updateGradient, 10);
    }
  }
}