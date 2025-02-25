import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Home from '../Home';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Component Home', () => {
  test('should change search term', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox', { name: /buscar/i });
    await userEvent.type(input, 'Perro');

    expect(input.value).toBe('Perro');
  });

  test('should delete search term', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox', { name: /buscar/i });
    await userEvent.type(input, 'Gato');

    const deleteButton = screen.getByLabelText(/delete/i);
    await userEvent.click(deleteButton);

    expect(input.value).toBe('');
  });

  test('should redirects when submitting', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox', { name: /buscar/i });
    await userEvent.type(input, 'Gato');

    const button = screen.getByRole('button', { name: /buscar/i });
    await userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/results?search=Gato');
  });

  test('should change route when pressing Enter', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Perro');

    await userEvent.keyboard('{Enter}');

    expect(mockNavigate).toHaveBeenCalledWith(
      `/results?search=${encodeURIComponent('Perro')}`
    );
  });

  test('should disable button when it does not have search term', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /buscar/i });
    const input = screen.getByRole('textbox', { name: /buscar/i });

    expect(button).toBeDisabled();

    await userEvent.type(input, 'Perro');
    expect(button).toBeEnabled();

    await userEvent.clear(input);
    expect(button).toBeDisabled();
  });
});
