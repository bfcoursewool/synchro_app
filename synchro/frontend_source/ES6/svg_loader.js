let entries = require('object.entries');
import GradientBase from './gradient_effect';

export default class SVGLoader extends GradientBase {
  constructor() {
    super();

    this.svgElements = $('svg.external');
    this.gradientLayers = {}; 
    this._gradientSpeed = .04;
    //[this.startColors, this.endColors] = this.getColorSequence();
    this._promises = [];

    // 
    this._cognosEffectsMethods = {
      'anti-inflammatory-actual': 'antiInflammatoryDrawing',
      'flow-actual': 'flowDrawing',
      'nutrient-delivery-actual': 'nutrientDrawing'
    };

    $.each(this.svgElements, (index, value) => {
      this._promises.push(
        this.loadSVG($(value).attr('data-src'), $(value).attr('id'), $(value).attr('data-stroke'))
      ); 
    });

    Promise.all(this._promises).then((promiseValue) => {
      for(let [index, componentId] of entries(promiseValue)) {
        if(componentId in this._cognosEffectsMethods) {
          this[this._cognosEffectsMethods[componentId]](componentId);          
        }
      }

    })

    this.updateGradient = this.updateGradient.bind(this);
    setInterval(this.updateGradient, 10); 
  }

  loadSVG(svgURL, svgId, stroke) {
    return new Promise((resolve, reject) => {
      d3.xml(svgURL, (error, xml) => {
        if (error) throw error;

        // 'xml' is the XML DOM tree
        let htmlSVG = document.getElementById(svgId);  // the svg-element in the DOM

        let svg = d3.select(htmlSVG);

        // get the svg-element from the original SVG file
        let xmlSVG = d3.select(xml.getElementsByTagName('svg')[0]);  
        if(stroke == "gradient") {
          this.applyGradientMask(xmlSVG, svgId); 
        } 

        xmlSVG.attr('id', svgId+'-actual');

        // copy its 'viewBox' attribute to the svg element in our HTML file
        svg.attr('viewBox', xmlSVG.attr('viewBox'));
        svg.node().appendChild(xmlSVG.node()); 
        resolve(xmlSVG.attr('id')); 
      });
    })
  }

  updateGradient() {
    let [color1, color2] = this.getNextColors();
    let color1Hex = this.rgb2hex(color1);
    let color2Hex = this.rgb2hex(color2); 
    
    for(let [svgId, gradientLayer] of entries(this.gradientLayers)) {
      gradientLayer.select('.start').attr('stop-color', color1Hex);
      gradientLayer.select('.end').attr('stop-color', color2Hex);  
    }

    this.nextStep(); 
  }

  applyGradientMask(xmlSVG, svgId) {
    this.initGradient(xmlSVG, svgId);

    let paths = xmlSVG.selectAll('g');
    paths.each(function() {
      d3.select(this).select('path').style('stroke', 'url(#'+svgId+'-gradient)');
    });
  }

  initGradient(xmlSVG, svgId) {
    let defs = xmlSVG.append('defs');

    this.gradientLayers[svgId] = defs.append('linearGradient')
      .attr('id', svgId+'-gradient')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '0%')
      .attr('y2', '100%');

    this.gradientLayers[svgId].append('stop')
      .attr('class', 'start')
      .attr('offset', '0%')
      .attr('stop-color', '#4093DA')
      .attr('stop-opacity', 1)
      //.append('animate')
      //.attr('attributeName', 'stop-color')
      //.attr('values', this.startColors.join(';'))
      //.attr('dur', '5s')
      //.attr('repeatCount', 'indefinite');


    this.gradientLayers[svgId].append('stop')
      .attr('class', 'end')
      .attr('offset', '100%')
      .attr('stop-color', '#A160B5')
      .attr('stop-opacity', 1)
      //.append('animate')
      //.attr('attributeName', 'stop-color')
      //.attr('values', this.endColors.join(';'))
      //.attr('dur', '5s')
      //.attr('repeatCount', 'indefinite');
  }

  antiInflammatoryDrawing(componentId) {
    return; 
  }

  flowDrawing(componentId) {
    let options = {
      duration: 100,
      start: 'autostart',
      type: 'sync',
      reverseStack: true
    }
    let vivus = new Vivus(componentId, options, () => {
      vivus.reset().play();
    });
  }

  nutrientDrawing(componentId) {
    let vivus = new Vivus(componentId, {duration: 200}, () => {
      vivus.finish();
    });
  }
}
