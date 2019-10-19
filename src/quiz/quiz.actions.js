/* eslint-disable import/prefer-default-export */
export const updateQuestion = (info) => async (dispatch) => {
  dispatch(newQuestionDetails(info));
};

function newQuestionDetails(info) {
  return {
    type: 'UPDATE_QUESTION',
    payload: info,
  };
}
