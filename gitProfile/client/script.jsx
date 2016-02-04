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
        <UserInfo userData={this.state.userData}/>
        <Repos />
      </div>
    );
  }
});

var UserInfo = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <img className="thumbnail img-responsive" src={this.props.userData.avatar_url}></img>
          </div>
          <div className="col-md-8">
            <h3>{this.props.userData.name}</h3>
            <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit GitHub Page</a>
          </div>
        </div>
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
