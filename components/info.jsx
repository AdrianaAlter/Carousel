var React = require('react');
var ReactDOM = require('react-dom');

var Info = React.createClass({

  getInitialState: function (){
    return { display: "icon" }
  },

  toggleDisplay: function (){
    var sample = document.getElementsByClassName('sample')[0];
    sample.style.display != "none" ? sample.style.display = "none" : sample.style.display = "block";
    this.state.display == "icon" ? this.setState({ display: "info" }) : this.setState({ display: "icon" });
  },

  render: function (){
    var xout = <span onClick={this.toggleDisplay}>X</span>;
    var icon = <span className="icon" onClick={this.toggleDisplay}>?</span>;
    var infoShow = <div className="info">
                {xout}
                <p>
                  The carousel is a reusable React.js component. It needs to be initialized with an array of file names, which will form the slides; at the top of the carousel.jsx file, just change the variable assignment for "ARRAY" to point to whatever array you would like to use.
                </p>
                <p>
                  To cycle through the carousel, use the triangular buttons to the left and right.  The carousel loops both forwards and backwards.  Click on a slide to select it.
                </p>
                <p>
                  The dots represent the individual slides.  Selecting a slide will highlight the corresponding dot.  You can also navigate through the carousel by clicking on the dots.
                </p>
                <p>
                  The rectangles represent the different pages in the carousel; clicking on the first rectangle will display the first five carousel slides, clicking on the second rectangle will display the second five, and so on.  If you are manually cycling through the carousel, the rectangle for the page you are currently viewing will automatically highlight.
                </p>

              </div>;
    if (this.state.display == "icon") {
        return icon
    }
    else {
      return infoShow
    };
  }

});

module.exports = Info;
