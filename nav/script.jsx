var Nav = React.createClass({
  getInitialState: function () {
    return {current: 0}
  },
  clicked: function (index) {
    this.setState({
      current: index
    });
  },
  render: function () {
    var self = this;
    if (self.state.current == 0) {
      var content = 'Welcome to the homepage'
    } else if (self.state.current === 1) {
      var content = 'Welcome to the about'
    } else if (self.state.current === 2) {
      var content = 'Welcome to the services'
    } else if (self.state.current === 3) {
      var content = 'Welcome to the contact'
    }
    return (
      <div>
        <ul className="nav">
          {this.props.menuItems.map(function (m, index) {
            var style = '';
            if (self.state.current === index) {
              style = 'current';
            }
            return <li className={style} onClick={self.clicked.bind(self, index)}>
              {m}
            </li>
          })}
        </ul>
        <h1>{this.props.menuItems[this.state.current]}</h1>
        <p>{content}</p>
      </div>
    )
  }
});

ReactDOM.render(
  <Nav menuItems={['Home', 'About', 'Services', 'Contact']} />,
  document.getElementById('nav')
);
