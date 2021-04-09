import {connect} from 'react-redux'
import AddAnswer from './components/AddAnswer/AddAnswer'
import AnswersContainer from './components/AnswersContainer/AnswersContainer'
import Question from './components/Question/Question'
import TypeOfAnswer from './components/TypeOfAnswer/TypeOfAnswer'
import './App.css'

const App = ({state}) => {
  function handleSubmit(e) {
    e.preventDefault()
    alert(JSON.stringify(state, null, 2))
  }

  return (
    <main className="App">
      <section class="quiz-form-container">
        <h2 class="visuallyhidden">Форма создания вопроса</h2>
        <form class="quiz-form" onSubmit={handleSubmit}>
          <Question />
          <TypeOfAnswer />
          <AnswersContainer />
          <AddAnswer />
          <div className="wrapper">
            <button className="save-quiz" type="submit">
              Готово
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

const mapStateToProps = state => ({
  state: state.app,
})

export default connect(mapStateToProps)(App)
