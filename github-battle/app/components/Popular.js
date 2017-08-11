var React = require('react');

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
      <ul className='languages'>
        {languages.map(function (lang) {
          return (
            <li
              className={lang === this.state.selectedLanguage && 'active'}
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang} >
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular;
