export default class SVGLoader {
  constructor() {
    //this.svg = null;
    this.svgElements = $('svg.external');

    $.each(this.svgElements, (index, value) => {
      this.loadSVG($(value).attr('data-src'), $(value).attr('id')); 
    })
  }

  loadSVG(svgURL, svgId) {
    d3.xml(svgURL, (error, xml) => {
      if (error) throw error;

      // "xml" is the XML DOM tree
      let htmlSVG = document.getElementById(svgId);  // the svg-element in our HTML file

      // d3 objects for later use
      let svg = d3.select(htmlSVG);

      // get the svg-element from the original SVG file
      let xmlSVG = d3.select(xml.getElementsByTagName('svg')[0]);
      // copy its "viewBox" attribute to the svg element in our HTML file
      svg.attr('viewBox', xmlSVG.attr('viewBox'));
      svg.node().appendChild(xmlSVG.node()); 
    });
  }

}
