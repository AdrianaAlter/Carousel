var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({
  render: function () {
    var style = {backgroundImage: 'url(./images/backgrounds/' + this.props.content + ')'};
    return <li style={style} className={this.props.status} onClick={this.props.handleClick}></li>
  }

});

module.exports = Item;
