import GradientBase from './gradient_effect';

export default class SVGLoader extends GradientBase {
  constructor() {
    super();

    this.svgElements = $('svg.external');
    this.gradientLayers = {}; 

    $.each(this.svgElements, (index, value) => {
      this.loadSVG($(value).attr('data-src'), $(value).attr('id')); 
    })

    this.updateGradient = this.updateGradient.bind(this); 
    setInterval(this.updateGradient, 10); 
  }

  loadSVG(svgURL, svgId) {
    d3.xml(svgURL, (error, xml) => {
      if (error) throw error;

      // 'xml' is the XML DOM tree
      let htmlSVG = document.getElementById(svgId);  // the svg-element in the DOM

      let svg = d3.select(htmlSVG);

      // get the svg-element from the original SVG file
      let xmlSVG = d3.select(xml.getElementsByTagName('svg')[0]);      
      this.applyGradientMask(xmlSVG, svgId); 

      // copy its 'viewBox' attribute to the svg element in our HTML file
      svg.attr('viewBox', xmlSVG.attr('viewBox'));
      svg.node().appendChild(xmlSVG.node()); 
    });
  }

  updateGradient() {
    let [color1, color2] = this.getNextColors();
    let color1Hex = this.rgb2hex(color1);
    let color2Hex = this.rgb2hex(color2); 
    
    for(let [svgId, gradientLayer] of Object.entries(this.gradientLayers)) {
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
      .attr('stop-opacity', 1);


    this.gradientLayers[svgId].append('stop')
      .attr('class', 'end')
      .attr('offset', '100%')
      .attr('stop-color', '#A160B5')
      .attr('stop-opacity', 1);
  }
}
