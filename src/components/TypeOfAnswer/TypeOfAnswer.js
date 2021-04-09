import {connect} from 'react-redux'
import {changeTypeOfAnswer} from '../../store/actions/actions'

const TypeOfAnswer = ({typeOfAnswer, changeTypeOfAnswer}) => {
  return (
    <div className="select">
      <div className="wrapper">
        <label htmlFor="typeOfAnswer" className="title">
          Тип ответа:
        </label>
        <select
          className="text__field"
          id="typeOfAnswer"
          name="typeOfAnswer"
          value={typeOfAnswer}
          onChange={e => changeTypeOfAnswer(e.target.value)}
        >
          <option value="radio">Один верный</option>
          <option value="checkbox">Множественный выбор</option>
        </select>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  typeOfAnswer: state.app.typeOfAnswer,
})

const mapDispatchToProps = dispatch => ({
  changeTypeOfAnswer: text => dispatch(changeTypeOfAnswer(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TypeOfAnswer)
