export default class SVGLoader {
  constructor() {
    //this.svg = null;
    this.svgElements = $('svg.external');
    this.loadedSVGs = []; 

    $.each(this.svgElements, (index, value) => {
      this.loadSVG($(value).attr('data-src'), $(value).attr('id')); 
    })
  }

  loadSVG(svgURL, svgId) {
    d3.xml(svgURL, (error, xml) => {
      if (error) throw error;

      // 'xml' is the XML DOM tree
      let htmlSVG = document.getElementById(svgId);  // the svg-element in our HTML file

      // d3 objects for later use
      let svg = d3.select(htmlSVG);

      // get the svg-element from the original SVG file
      let xmlSVG = d3.select(xml.getElementsByTagName('svg')[0]);
      this.applyGradientMask(xmlSVG); 

      // copy its 'viewBox' attribute to the svg element in our HTML file
      svg.attr('viewBox', xmlSVG.attr('viewBox'));
      svg.node().appendChild(xmlSVG.node()); 
    });
  }

  applyGradientMask(xmlSVG) {
    let defs = xmlSVG.append('defs');
    let gradient = defs.append('linearGradient')
      .attr('id', 'svgGradient')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '0%')
      .attr('y2', '100%');

    gradient.append('stop')
      .attr('class', 'start')
      .attr('offset', '0%')
      .attr('stop-color', '#4093DA')
      .attr('stop-opacity', 1);
      //.append('animate')
      //.attr('attributeName', 'stop-color')
      //.attr('values', '#A160B5;#0000FF')
      //.attr('dur', '4s')
      //.attr('repeatCount', 'indefinite');


    gradient.append('stop')
      .attr('class', 'end')
      .attr('offset', '100%')
      .attr('stop-color', '#A160B5')
      .attr('stop-opacity', 1);
      //.append('animate')
      //.attr('attributeName', 'stop-color')
      //.attr('values', '#4093DA;#B400B4')
      //.attr('dur', '4s')
      //.attr('repeatCount', 'indefinite');

    let paths = xmlSVG.selectAll('g');
    paths.each(function() {
      d3.select(this).select('path').style('stroke', 'url(#svgGradient)');
    });
  }
}
