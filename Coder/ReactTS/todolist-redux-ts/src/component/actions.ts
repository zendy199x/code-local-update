// mình sẽ viết bằng typesafe-actions luôn mà không viết những cách khác, các bạn tự so sánh nhé.
import { action, createAction } from 'typesafe-actions';

// Cách 1, dùng action 
export const todoActions = {
  addTodo: (content: string) => action('ADD_TODO', { content }),
  updateTodo: (id: number, content: string) => action('UPDATE_TODO', { id, content }),
  deleteTodo: (id: number) => action('DELETE_TODO', { id }),
  toggleTodo: (id: number) => action('TOGGLE_TODO', { id }),
  toggleAll: (completing: boolean) => action('TOGGLE_ALL', { completing }),
  clearCompleted: () => action('CLEAR_COMPLETED'),
  setFilter: (type: FilterType) => action('SET_FILTER', { type })
};

// Cách 2, dùng createAction
// export const todoActions = {
//   addTodo: createAction('ADD_TODO', actionCb => (content: string) => actionCb({content})),
//   updateTodo: createAction('UPDATE_TODO', actionCb => (id: number, content: string) => actionCb({id, content})),
//   deleteTodo: createAction('DELETE_TODO', actionCb => (id: number) => actionCb({id})),
//   toggleTodo: createAction('TOGGLE_TODO', actionCb => (id: number) => actionCb({id})),
//   toggleAll: createAction('TOGGLE_ALL', actionCb => (completing: boolean) => actionCb({completing})),
//   clearCompleted: createAction('CLEAR_COMPLETED', actionCb => actionCb),
//   setFilter: createAction('SET_FILTER', actionCb => (type: FilterType) => actionCb({type}))
// }
