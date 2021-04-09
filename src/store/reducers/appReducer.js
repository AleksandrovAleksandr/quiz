import {
  ADD_ANSWER,
  CHANGE_ANSWER_TEXT,
  CHANGE_QUESTION_TEXT,
  REMOVE_ANSWER,
  SET_ANSWER,
  SET_RIGHT_ANSWER_ID,
  SET_RIGHT_ANSWERS_ID,
  CLEAR_QUESTION_TEXT,
  CHANGE_TYPE_OF_ANSWER,
} from '../types'

const initialState = {
  question: '',
  typeOfAnswer: 'radio',
  answers: [
    {
      id: '1',
      answer: '',
    },
    {
      id: '2',
      answer: '',
    },
    {
      id: '3',
      answer: '',
    },
    {
      id: '4',
      answer: '',
    },
  ],
  rightAnswerId: [],
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {
        ...state,
        answers: state.answers.concat(action.payload),
      }
    case REMOVE_ANSWER:
      return {
        ...state,
        answers: state.answers.filter(answer => answer.id !== action.payload),
      }
    case SET_ANSWER:
      return {
        ...state,
      }
    case SET_RIGHT_ANSWER_ID:
      return {
        ...state,
        rightAnswerId: action.payload,
      }
    case SET_RIGHT_ANSWERS_ID:
      let rightAnswersId = [...state.rightAnswerId]
      rightAnswersId = rightAnswersId.includes(action.payload)
        ? filteredAnswersId(rightAnswersId, action.payload)
        : rightAnswersId.concat(action.payload)
      return {
        ...state,
        rightAnswerId: rightAnswersId,
      }
    case CHANGE_ANSWER_TEXT:
      const a = [...state.answers]
      const answer = a.find(answer => answer.id === action.payload.id)
      answer.answer = action.payload.text
      return {
        ...state,
        answers: a,
      }

    case CHANGE_QUESTION_TEXT:
      return {
        ...state,
        question: action.payload,
      }
    case CHANGE_TYPE_OF_ANSWER:
      return {
        ...state,
        typeOfAnswer: action.payload,
      }
    case CLEAR_QUESTION_TEXT:
      return {
        ...state,
        question: '',
      }

    default:
      return state
  }
}

export default appReducer

const filteredAnswersId = (answersId, id) => {
  return answersId.filter(answerId => answerId !== id)
}
