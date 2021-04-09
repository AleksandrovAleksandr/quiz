import Control from '../UI/Control/Control'
import {connect} from 'react-redux'
import {
  changeAnswerText,
  removeAnswer,
  setRightAnswerId,
} from '../../store/actions/actions'

const AnswersContainer = ({
  answers,
  changeAnswerText,
  removeAnswer,
  typeOfAnswer,
  rightAnswerId,
  setRightAnswerId,
}) => {
  return (
    <fieldset class="answers-container">
      <div class="wrapper answers">
        <legend class="title">Ответы:</legend>
        <ol className="answers__list">
          {answers.map((answer, index) => {
            return (
              <li key={index} className="answers__item answer">
                <input
                  className="text__field"
                  type="text"
                  name={`answer${answer.id}`}
                  value={answer.answer}
                  onChange={e => changeAnswerText(answer.id, e.target.value)}
                />
                <Control
                  type={typeOfAnswer}
                  name={rightAnswerId}
                  value={answer.id}
                  checked={rightAnswerId.includes(answer.id)}
                  onChange={() => setRightAnswerId(answer.id, typeOfAnswer)}
                />
                <button
                  className="answer__remove"
                  type="button"
                  onClick={() => removeAnswer(answer.id)}
                >
                  <span class="visuallyhidden">Удалить поле с ответом</span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </fieldset>
  )
}

const mapStateToProps = state => ({
  answers: state.app.answers,
  typeOfAnswer: state.app.typeOfAnswer,
  rightAnswerId: state.app.rightAnswerId,
})

const mapDispatchToProps = dispatch => ({
  changeAnswerText: (id, text) => dispatch(changeAnswerText(id, text)),
  removeAnswer: id => dispatch(removeAnswer(id)),
  setRightAnswerId: (id, typeOfAnswer) =>
    dispatch(setRightAnswerId(id, typeOfAnswer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswersContainer)
