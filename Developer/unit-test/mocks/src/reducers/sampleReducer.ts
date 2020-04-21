export interface SampleReducerState {
  pieceOfState: string;
}

const defaultSampleState: () => SampleReducerState = () => ({
  pieceOfState: '',
});

export const sampleReducer = (state = defaultSampleState()) => {
  return state;
}
