var Profile = React.createClass({
  render: function() {
    return (
      <div>
        <UserInfo />
        <Repos />
      </div>
    );
  }
});

var UserInfo = React.createClass({
  render: function() {
    return (
      <div>
        UserInfo
      </div>
    );
  }
});

var Repos = React.createClass({
  render: function() {
    return (
      <div>
        Repos
      </div>
    );
  }
});
