var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list.jsx');
var Buttons = require('./buttons.jsx');
var Dots = require('./dots.jsx');
var Pages = require('./pages.jsx');

var Wrapper = React.createClass({
  getInitialState: function () {
      return { leftLeft: 0, left: 1, center: 2, right: 3, rightRight: 4, active: 0, background: "" };
  },

  componentDidMount: function () {
      this.props.elements.length == 5 ? this.setState({ over: true }) : this.setState({ over: false});
      this.setState({ page: this.state.leftLeft * 5 });
  },

  slide: function () {

    var limit = this.props.elements.length - 3;
    if (this.state.center == limit) {
      this.loop();
    }
    else {
      var newCenter = (this.state.center + 1);
      var newLeftLeft = (newCenter - 2);
      var newLeft = (newCenter - 1);
      var newRight = newCenter + 1;
      var newRightRight = newCenter + 2;
      this.setState({ leftLeft: newLeftLeft, left: newLeft, center: newCenter, right: newRight, rightRight: newRightRight });
    };

    if ((newLeftLeft / 5) % 1 == 0) {this.paginate(newLeftLeft)};

  },

  loop: function () {
    if ((this.state.left / 5) % 1 == 0) {this.paginate(this.state.left)};
    this.setState({rightRight: (this.state.rightRight + 1 - this.props.elements.length), right: (this.state.rightRight), center: (this.state.right), left: (this.state.center), leftLeft: (this.state.left)});
  },

  loopBack: function () {
    var newLeftLeft = this.props.elements.length - 1;
    var newLeft = newLeftLeft - 1;
    var newCenter = newLeftLeft + 1;
    this.setState({rightRight: this.state.right, right: (this.state.center), center: newCenter, left: newLeft, leftLeft: newLeftLeft });
  },

  slideBack: function () {
    if (this.state.center == 2) {
        this.loopBack();
    }
    else {
      var newCenter = (this.state.center - 1);
      var newLeftLeft = (newCenter - 2);
      var newLeft = (newCenter - 1);
      var newRight = (newCenter + 1);
      var newRightRight = (newCenter + 2);
      this.setState({ leftLeft: newLeftLeft, left: newLeft, center: newCenter, right: newRight, rightRight: newRightRight });
    };
    if ((newLeftLeft / 5) % 1 == 0) {this.paginate(newLeftLeft)};
  },

  isOver: function () {

    this.setState({ over: true, leftLeft: 0, left: 1, center: 2, right: 3, rightRight: 4 });
  },

  bringCenter: function (e) {
    var bgArray = e.currentTarget.style.backgroundImage.split("/");
    var last = bgArray[bgArray.length - 1];
    var bg = last.slice(0, last.length - 2);
    var newCenter = this.props.elements.indexOf(bg);
    if (newCenter - 2 < 0) {
      newCenter = (this.props.elements.length + Math.abs(newCenter));
    };

    this.setState({ center: newCenter, left: newCenter - 1, leftLeft: newCenter - 2, right: newCenter + 1, rightRight: newCenter + 2 });
    if (((newCenter - 2) / 5) % 1 == 0) {this.paginate(newCenter - 2)};
  },

  goToPage: function (e) {
    var newLeftLeft = e.currentTarget.textContent * 5;
    this.paginate(newLeftLeft);
  },

  paginate: function (num) {
    this.setState({ leftLeft: num, left: num + 1, center: num + 2, right: num + 3, rightRight: num + 4, page: (num / 5) });
  },

  activate: function (e) {
    var elements = this.props.elements;
    var activeIdx = elements.indexOf(e.currentTarget.className.split(" ")[2]);
    this.setState({ active: activeIdx });
  },

  setBG: function (e) {
    var bg = e.currentTarget.style.backgroundImage;
    this.setState({ background: bg });
  },

  handleClick: function (e) {
    this.activate(e);
    this.bringCenter(e);
    this.setBG(e);
  },

  render: function () {
    var sampleBG = {backgroundImage: this.state.background};
    return <div className={"wrapper group"}>
              <h1>Carousel</h1>
              <List handleClick={this.handleClick} activeIdx={this.state.active} elements={this.props.elements} leftLeft={this.state.leftLeft} left={this.state.left} center={this.state.center} right={this.state.right} rightRight={this.state.rightRight} />
              <Buttons first={this.props.leftLeft} done={this.state.over} isOver={this.props.isOver} slide={this.slide} slideBack={this.slideBack} />
              <Dots elements={this.props.elements} bringCenter={this.bringCenter} active={this.state.active}/>
              <Pages elements={this.props.elements} goToPage={this.goToPage} current={this.state.page}/>
              <section className={"sample"} style={sampleBG}></section>
            </div>
  }

});

module.exports = Wrapper;
