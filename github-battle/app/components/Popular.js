var React = require('react');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component {
  render() {
    return (
      <ul className='languages'>
        {this.props.languages.map( (lang) => {
          return (
            <li
              className={lang === this.props.selectedLanguage && 'active'}
              onClick={this.props.updateLanguage.bind(null, lang)}
              key={lang} >
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(()=> {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <div>
        <SelectLanguage
          languages={languages},
          selectedLanguage={this.state.selectedLanguage},
          updateLanguage={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;
