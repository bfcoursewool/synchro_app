import EventsBase from './events_base';

export default class GradientEffect {
  constructor() {
    /*
    this._colors = [
      [62,35,255], // Royal Blue
      [60,255,60], // Neon Green
      [255,35,98], // Fuscia? Pinkish...
      [45,175,230],// Aqua blue
      [255,0,255], // Super purple
      [255,128,0] // Gold-ish
    ];
    */
    //super();

    // TODO -- Color strategy: Pick two pairs of colors. This gradient effect blends each pair of colors in inverse ratios, sliding from
    // predominantly one to the other and back again, and then renders a gradient between these two blended colors. So, what are the two color
    // pairs which will blend ranges of blues and purples that can be shifted in the gradient? 
    // Things to play with: 
    //  Dynamically altering the angle of the gradient
    //  Connect both the color blending and perhaps the angle of gradient to mouse/scroll interactions

    this._colors = [
      [161,96,181], // Chichi's Purple
      [64,147,218], // Chichi's Blue
      [0,0,255], // Royal Blue
      [180,0,180], // Super purple
      //[45,175,230],
      //[161,96,181]
    ];

    this._step = 0;

    this._colorIndices = [0,1,2,3];

    //transition speed
    this._gradientSpeed = 0.002;

    this.updateGradient = this.updateGradient.bind(this);
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
      background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"}
    );
      
    this._step += this._gradientSpeed;
    if ( this._step >= 1 || this._step <= 0) {
      this._gradientSpeed *= -1;
    }
  }

  startEffect() {
    if($('#gradient')) {
      setInterval(this.updateGradient, 10);
    }
  }
}