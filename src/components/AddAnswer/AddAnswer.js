import {connect} from 'react-redux'
import {addAnswer} from '../../store/actions/actions'
import './AddAnswer.css'

const AddAnswer = ({addAnswer}) => {
  return (
    <div className="wrapper">
      <button className="add-answer" type="button" onClick={addAnswer}>
        <span class="visuallyhidden">Добавить поле с ответом</span>
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addAnswer: () => dispatch(addAnswer()),
})
export default connect(null, mapDispatchToProps)(AddAnswer)
