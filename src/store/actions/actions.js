import {
  ADD_ANSWER,
  SET_ANSWER,
  REMOVE_ANSWER,
  SET_RIGHT_ANSWER_ID,
  SET_RIGHT_ANSWERS_ID,
  CHANGE_ANSWER_TEXT,
  CHANGE_QUESTION_TEXT,
  CHANGE_TYPE_OF_ANSWER,
  CLEAR_QUESTION_TEXT,
} from '../types'

export function addAnswer() {
  return {
    type: ADD_ANSWER,
    payload: {id: `${Date.now()}`, answer: ''},
  }
}

export const removeAnswer = id => ({
  type: REMOVE_ANSWER,
  payload: id,
})

export const setAnswer = () => ({
  type: SET_ANSWER,
})
export const setRightAnswerId = (id, type) => {
  const res =
    type === 'checkbox'
      ? {type: SET_RIGHT_ANSWERS_ID, payload: id}
      : type === 'radio'
      ? {type: SET_RIGHT_ANSWER_ID, payload: id}
      : null
  return res
}

export const changeAnswerText = (id, text) => ({
  type: CHANGE_ANSWER_TEXT,
  payload: {
    id,
    text,
  },
})

export const changeQuestionText = text => ({
  type: CHANGE_QUESTION_TEXT,
  payload: text,
})

export const changeTypeOfAnswer = text => ({
  type: CHANGE_TYPE_OF_ANSWER,
  payload: text,
})

export const clearQuestionText = () => ({type: CLEAR_QUESTION_TEXT})
