var React = require('react');
var ReactDOM = require('react-dom');

var Dots = React.createClass({

  render: function () {
    var self = this;
    var dotLis = this.props.elements.map(function(element) {
      var active = self.props.active == self.props.elements.indexOf(element) ? " dot-active" : "";
      return <li className={"dot " + ", " + element + active} key={self.props.elements.indexOf(element)} onClick={self.props.bringCenter}></li>
    });

    return <ul className="dots">{dotLis}</ul>

  }

});


module.exports = Dots;
