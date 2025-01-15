import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store'; 
import TodoApp from '../TodoView';

describe('Componente TodoApp', () => {
  it('renderiza correctamente el componente TodoApp', async () => {
    render(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    
   
    await waitFor(() => screen.getByLabelText(/new todo/i));
    
    
    expect(screen.getByLabelText(/new todo/i)).toBeInTheDocument();
    
  });
});
