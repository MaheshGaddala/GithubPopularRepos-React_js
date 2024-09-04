// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, updateActiveLanguageId, isActive} = props
  const {id, language} = languageFilterDetails
  const languageFilterClassName = isActive
    ? 'active-language'
    : 'inactive-language'

  const onLanguageFilter = () => {
    updateActiveLanguageId(id)
  }

  return (
    <div>
      <button
        className={`button ${languageFilterClassName}`}
        type="button"
        onClick={onLanguageFilter}
      >
        {language}
      </button>
    </div>
  )
}

export default LanguageFilterItem
