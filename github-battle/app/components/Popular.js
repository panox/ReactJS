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

function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo,index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index+1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avater'
                  src={repo.owner.avatar_url}
                  alt={`Avater for ${repo.owner.login}`}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
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
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang) {
    this.setState(()=> {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    api.fetchPopularRepos(lang)
      .then( (repos)=> {
        this.setState(()=> {
          return {
            repos: repos
          }
        });
      });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        <RepoGrid repos={this.state.repos} />
      </div>
    )
  }
}

module.exports = Popular;
