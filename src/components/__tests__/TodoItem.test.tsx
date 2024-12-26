import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import TodoItem from '../TodoItem';
import { Todo } from '../../store/todoSlice';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

const mockTodo: Todo = {
  id: '1',
  title: 'Test Todo',
  status: 'Todo',
};

describe('TodoItem Component', () => {
  it('renders the TodoItem correctly', () => {
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });
});
