import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Results from '../Results';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useLocation: () => ({
      search: '?search=Perro',
    }),
  };
});

vi.mock('../../hooks/useGetData', () => ({
  __esModule: true,
  default: vi.fn(() => ({
    data: [
      {
        id: 1,
        title: 'Perro',
        description: 'Un perro muy bonito',
        image: 'image_url',
        url: 'perro.com',
      },
    ],
    isLoading: false,
    getTypes: vi.fn(),
  })),
}));

describe('Results Component', () => {
  test('should show Skeleton while loading', () => {
    vi.mock('../../hooks/useGetData', () => ({
      __esModule: true,
      default: vi.fn(() => ({
        data: [],
        isLoading: true,
        getTypes: vi.fn(),
      })),
    }));

    render(
      <MemoryRouter>
        <Results />
      </MemoryRouter>
    );

    const skeleton = screen.getByLabelText('cargando');
    expect(skeleton).toBeVisible();
  });

  test('should render data when it is loaded', async () => {
    render(
      <MemoryRouter>
        <Results />
      </MemoryRouter>
    );

    const skeleton = screen.getByLabelText('cargando');

    await waitForElementToBeRemoved(skeleton);

    const text = await screen.findByText('Perro');
    expect(text).toBeVisible();
  });

  test('should show no results and tip when there are no results', async () => {
    vi.mock('../../hooks/useGetData', () => ({
      __esModule: true,
      default: vi.fn(() => ({
        data: [],
        isLoading: false,
        getTypes: vi.fn(),
      })),
    }));

    render(
      <MemoryRouter>
        <Results />
      </MemoryRouter>
    );

    const skeleton = screen.getByLabelText('cargando');

    await waitForElementToBeRemoved(skeleton);

    const noResults = await screen.findByText('No results found for:');
    expect(noResults).toBeVisible();

    const tryLooking = await screen.findByText('Try looking for:');
    expect(tryLooking).toBeVisible();
  });
});
