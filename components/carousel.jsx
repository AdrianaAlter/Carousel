var React = require('react');
var ReactDOM = require('react-dom');

ARRAY = require('../pic_constants.js');

var Wrapper = require('./wrapper.jsx');
var List = require('./list.jsx');

var Carousel = React.createClass({
  render: function () {
    return <div>
              <section className="links">
                <a href="http://www.adrianaalter.site/">Adriana Alter</a>
                <a href="https://github.com/AdrianaAlter/Carousel/">github</a>
                <a href="https://www.linkedin.com/in/adriana-alter-598086111">LinkedIn</a>
              </section>
              <Wrapper elements={ARRAY} />
           </div>
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Carousel />, document.getElementById("main"));
});
