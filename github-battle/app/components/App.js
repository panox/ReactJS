var React = require('react');
var Popular = require('./components/Popular.js');

class App extends React.Component {
    render() {
      return (
        <div>
            <Popular />
        </div>
      )
    }
}

module.exports = App;
