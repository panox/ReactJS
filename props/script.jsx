var MyComponent = React.createClass({
  getDefaultProps: function () {
    return {
      myString: "Hello World!"
    };
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
  <MyComponent />,
  document.getElementById('container')
);
