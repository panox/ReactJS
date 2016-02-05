var MyComponent = React.createClass({
  getDefaultProps: function () {
    return {
      myString: "Hello World!"
    };
  },
  propTypes: {
    myString: React.PropTypes.string,
    myArray: React.PropTypes.arrayOf(React.PropTypes.string)
  },
  render: function () {
    return (
      <div>
        <h3>myString: { this.props.myString } </h3>
      </div>
    )
  }
});
ReactDOM.render(
  <MyComponent myArray = {['1','2','3']}/>,
  document.getElementById('container')
);
