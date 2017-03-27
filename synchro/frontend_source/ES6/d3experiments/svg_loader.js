export default class SVGLoader {
  constructor() {

    this.svg = null;
    this.maproot = null;
  }

  loadSVG() {
    d3.xml("http://synchro-assets.storage.googleapis.com/cognos/svg/Anti-Flammatory.svg", (error, xml) => {
      if (error) throw error;

      // "xml" is the XML DOM tree
      let htmlSVG = document.getElementById('anti-inflammatory');  // the svg-element in our HTML file
      // append the "maproot" group to the svg-element in our HTML file
      //htmlSVG.appendChild(xml.documentElement.getElementById('maproot'));

      // d3 objects for later use
      this.svg = d3.select(htmlSVG);
      //this.maproot = svg.select('#maproot');

      // get the svg-element from the original SVG file
      let xmlSVG = d3.select(xml.getElementsByTagName('svg')[0]);
      // copy its "viewBox" attribute to the svg element in our HTML file
      this.svg.attr('viewBox', xmlSVG.attr('viewBox'));
      this.svg.append(xmlSVG);
    });
  }

}
