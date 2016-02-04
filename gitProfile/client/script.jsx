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
    $.ajax({
      url: this.props.urls.user + '/' + this.state.username + '/repos?per_page='+this.props.perPage+'?sort=created',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({
          repoData: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({username: null});
        console.log(err);
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.loadUserData();
    this.loadRepoData();
  },
  render: function() {
    return (
      <div>
        <UserInfo userData={this.state.userData}/>
        <Repos repoData={this.state.repoData}/>
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
        <div className="row">
          <div className="col-md-12">
            <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
            <span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
            <span className="label label-info">{this.props.userData.followers} Followers</span>
            <span className="label label-danger">{this.props.userData.following} Following</span>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <li className="list-group-item"><strong>Username: </strong>{this.props.userData.login}</li>
              <li className="list-group-item"><strong>Email Address: </strong>{this.props.userData.email}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

var Repos = React.createClass({
  render: function(){
    var repoNodes=this.props.repoData.map(function(repo, index){
      return (
          <Repo name={repo.name} description={repo.description} url={repo.html_url} key={index} />
        );
    });
    return(
        <div>
          <h2 className="page-header">Latest Repos</h2>
          {repoNodes}
        </div>
      )
  }
});

var Repo = React.createClass({
  render: function(){
    return(
        <div className="repoItem">
          <h4><a target="_blank" href={this.props.url}>{this.props.name}</a></h4>
          <p>{this.props.description}</p>
        </div>
      )
  }
});

ReactDOM.render(
  <Profile />,
  document.getElementById("github-profiles")
);
