var Nav = React.createClass({
  getInitialState: function () {
    return {current: 0}
  },
  render: function () {
    var self = this;
    return (
      <div>
        <ul className="nav">

        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <Nav menuItems={['Home', 'About', 'Services', 'Contact']} />,
  document.getElementById('nav')
);
