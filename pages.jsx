var React = require('react');
var ReactDOM = require('react-dom');

var Pages = React.createClass({

  render: function () {
    var self = this;
    var total = this.props.elements.length / 5;
    var pagesArray = [];
    for (var i = 0; i < total; i++) {
      pagesArray.push(i);
    };
    var pageLis = pagesArray.map(function(pageNum) {
      var active = self.props.current == pageNum ? " page-active" : "";
      return <li className={"page" + active} key={pageNum} onClick={self.props.goToPage}>{pageNum}</li>;
    });

    return <ul className="pages">
              {pageLis}
           </ul>
  }

});

module.exports = Pages;
