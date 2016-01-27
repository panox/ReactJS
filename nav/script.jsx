var Nav = React.createClass({
  getInitialState: function () {
    return {current: 0}
  },
  render: function () {
    var self = this;
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
      </div>
    )
  }
});

ReactDOM.render(
  <Nav menuItems={['Home', 'About', 'Services', 'Contact']} />,
  document.getElementById('nav')
);
