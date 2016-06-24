var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({

  render: function () {
    return <li onClick={this.props.handleClick} className={this.props.status + " " + this.props.content}></li>
  }

});

module.exports = Item;
