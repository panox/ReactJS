var React = require('react');
var ReactDOM = require('react-dom');
var Proptypes = require('prop-types');
require('./index.css');

/*
  --- COMPONENTS ---
*/
class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h1>Name: {this.props.name} </h1>
        <h3>username: {this.props.username} </h3>
      </div>
    )
  }
}
Badge.propTypes = {
  img: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  username: Proptypes.string.isRequired
}

class Users extends React.Component {
  render() {
    var friends = this.props.list.filter((person) => person.friend === true);
    var nonFriends = this.props.list.filter((person) => person.friend === false);
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map((person)=><li>{person.name}</li>)}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {nonFriends.map((person)=><li>{person.name}</li>)}
        </ul>
      </div>
    )
  }
}

User.propTypes = {
  list: propTypes.array.isRequired;
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);
