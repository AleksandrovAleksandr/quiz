import {connect} from 'react-redux'
import {
  changeQuestionText,
  clearQuestionText,
} from '../../store/actions/actions'

import './Question.css'

const Question = ({question, changeQuestionText, clearQuestionText}) => {
  return (
    <div className="question">
      <div className="wrapper">
        <label for="question" className="title">
          Вопрос:
        </label>
        <div className="question-wrapper">
          <input
            className="text__field"
            id="question"
            type="text"
            value={question}
            onChange={e => changeQuestionText(e.target.value)}
            placeholder="Введите название вопроса"
          />
          <button
            className="question__clear"
            type="button"
            onClick={clearQuestionText}
          >
            <span class="visuallyhidden"> Очистить поле вопроса</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  question: state.app.question,
})

const mapDispatchToProps = dispatch => ({
  changeQuestionText: text => dispatch(changeQuestionText(text)),
  clearQuestionText: () => dispatch(clearQuestionText()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Question)
