'use strict';

import BlackTriangle from "./ES6/BlackTriangle";

const triangle = new BlackTriangle('#triangle');

window.setInterval(
  () => {
    triangle.rotate(1);
    triangle.render();
  },
  20
);
