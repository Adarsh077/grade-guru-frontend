export const studentSelector = (batch) => (state) => {
  return state.studentReducer.studentsByBatch[batch];
};

export const studentErrorSelector = (state) => state.studentReducer.error;
