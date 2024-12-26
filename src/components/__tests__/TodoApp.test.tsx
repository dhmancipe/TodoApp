import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store'; 
import TodoApp from '../TodoView';

describe('TodoApp Component', () => {
  it('renders the TodoApp component correctly', () => {
    render(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    // Usamos getByLabelText para apuntar específicamente al label del input
    expect(screen.getByLabelText(/new todo/i)).toBeInTheDocument();
    expect(screen.getByText(/show first/i)).toBeInTheDocument();
  });
});
