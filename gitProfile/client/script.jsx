var Profile = React.createClass({
  getDefaultProps: function () {
    return {
      urls : {
        user: 'https://api.github.com/users'
      },
      perPage: 5
    };
  },
  getInitialState : function () {
    return {
      username: 'panox',
      userData: [],
      repoData: []
    };
  },
  loadUserData: function () {
    $.ajax({
      url: this.props.urls.user + '/' + this.state.username,
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log(data);
        this.setState({
          userData: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({username: null});
        console.log(err);
      }.bind(this)
    });
  },
  loadRepoData: function () {

  },
  componentDidMount: function () {
    this.loadUserData();
    this.loadRepoData();
  },
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

ReactDOM.render(
  <Profile />,
  document.getElementById("github-profiles")
);
