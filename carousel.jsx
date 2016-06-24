var React = require('react');
var ReactDOM = require('react-dom');

ARRAY = require('./pic_constants.js');

var Wrapper = require('./wrapper.jsx');
var List = require('./list.jsx');

var Carousel = React.createClass({
  render: function () {
    return <div><Wrapper elements={ARRAY} /><a href="http://www.adrianaalter.site/">Adriana Alter</a></div>
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Carousel />, document.getElementById("main"));
});
