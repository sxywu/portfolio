import productImage from './images/product.png';
import reactd3Image from './images/reactd3.png';
import filmflowersImage from './images/filmflowers.png';

export default {
  "product": {
    "id": "product",
    "title": "Building Data Visualizations for Product",
    "startDate": "Apr 25, 2016",
    "type": "talk",
    "annotationHeight": 350,
    "images": [productImage, "left", 230, 350],
    "annotations": [
      `
For two and a half years, I worked at Illumio on a part of the product called Illumination - a visualization of application traffic, and a tool for securing it. I helped build it up from scratch, starting from a d3 force layout, to architecting a refactor from Backbone to React, to scaling it to meet the demands of our customers' large environments.

This is the talk I gave at OpenVis Conf about my experiences, the challenges we faced, and the lessons we learned.
      `
    ],
    "buttons": [[["Watch", "https://www.youtube.com/watch?v=fnp9g29lF8c"]]]
  },

  "reactd3": {
    "id": "reactd3",
    "title": "On D3, React, and a little bit of Flux",
    "startDate": "Jul 13, 2015",
    "type": "write",
    "annotationHeight": 350,
    "images": [reactd3Image, "right", 288, 350],
    "annotations": [
      `
For a more technical writeup of some of the challenges we faced, I wrote a more detailed account of how we moved from Backbone to React. In particular, it covers our reasons for migrating, as well as the difficulties we faced pairing React with D3, and provides an example app to demonstrate our approach.
      `,
      `
I also gave a talk about the three different approaches I have experimented with using React and D3 together.
      `
    ],
    "buttons": [
      [
        ["Read", "https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3#.45ai7qjrd"],
        ["Demo", "http://sxywu.com/expenses"]
      ],
      [["Read", "http://slides.com/shirleywu/deck#/"]]
    ]
  },

  "filmflowers": {
    "id": "filmflowers",
    "title": "Film Flowers",
    "startDate": "Jul 19, 2016",
    "endDate": "Jul 30, 2016",
    "type": "build",
    "images": [filmflowersImage, "top"],
    "annotations": [
      `
Summer blockbusters reimagined as flowers. An experimentation with color.
      `
    ],
    "buttons": [[["View", "http://bl.ocks.org/sxywu/raw/d612c6c653fb8b4d7ff3d422be164a5d/"]]]
  },

};
