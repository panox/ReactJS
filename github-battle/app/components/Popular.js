var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utills/api');

function SelectLanguage(props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map( (lang) => {
        return (
          <li
            className={lang === props.selectedLanguage && 'active'}
            onClick={props.updateLanguage.bind(null, lang)}
            key={lang} >
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount () {
    //Ajax
    api.fetchPopularRepos(this.state.selectedLanguage)
      .then(function (repos) {
        console.log(repos);
      })
  }
  updateLanguage(lang) {
    this.setState(()=> {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;
