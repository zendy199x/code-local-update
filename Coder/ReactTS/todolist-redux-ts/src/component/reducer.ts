type Reducer<State, Action> = (state: State, action: Actions) => State;

export type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
};
export type FilterType = 'all' | 'active' | 'completed';
// Todo và FilterType là arbitrary (không quan trọng). Có thể hoàn toàn khác trong 1 ứng dụng Todo khác

interface TodoState {
  todos: Todo[];
  filter: FilterType;
}

const initialState = {
  todos: [],
  filter: 'all'
} as TodoState;
