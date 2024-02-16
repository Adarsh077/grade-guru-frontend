export const batchesSelector = (state) => state.batchReducer.batches;
export const singleBatchSelector = (batchYear) => (state) => {
  const batches = state.batchReducer.batches;

  return batches.find((batch) => +batch.year === +batchYear);
};
export const batchErrorSelector = (state) => state.batchReducer.error;
