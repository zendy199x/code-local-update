export interface SampleReducerState {
  pieceOfState: string;
}

const defaultSampleState: () => SampleReducerState = () => ({
  pieceOfState: '',
});

export const myReducer = (state = defaultSampleState()) => {
  return state;
}
