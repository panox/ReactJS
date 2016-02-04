var Profile = React.createClass({
  getDefaultProps: function () {
    return {
      clientId: '3e78b0022afdceee9311',
      clientSecret: '5180ff5893ac9764b93b9155b46c329e3543e313',
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
      url: this.props.urls.user + '/' + this.state.username + '?client_id=' + this.props.client_id + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function () {

      }.bind(this),
      error: function () {

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
