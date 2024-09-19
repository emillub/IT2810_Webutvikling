import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFilter } from '../contexts/filterContext';
import FilterDropdown from './filterDropdown';
import { fetchMovieGenres } from '../server/api';
import { vi, Mock, } from 'vitest';
import userEvent from '@testing-library/user-event';
vi.mock('../contexts/filterContext', () => ({
    useFilter: vi.fn(),
}));

vi.mock('../server/api', () => ({
    fetchMovieGenres: vi.fn(),
}));

const queryClient = new QueryClient();

describe('FilterDropdown', () => {
    const mockSetFilter = vi.fn();
    const mockUseFilter = {
        filter: 0,
        setFilter: mockSetFilter,
    };

    beforeEach(() => {
        (useFilter as Mock).mockReturnValue(mockUseFilter);
        (fetchMovieGenres as Mock).mockResolvedValue({
            genres: [
                { id: 1, name: 'Action' },
                { id: 2, name: 'Comedy' },
                { id: 3, name: 'Drama' }
            ],
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    const renderComponent = () =>
        render(
            <QueryClientProvider client={queryClient}>
                <FilterDropdown />
            </QueryClientProvider>
        );

        
    test('renders dropdown with default option', async () => {
        renderComponent();
        expect(await screen.findByText('All genres')).toBeInTheDocument();
    });

    test('renders dropdown with fetched genres', async () => {
        renderComponent();
        expect(await screen.findByText('Action')).toBeInTheDocument();
        expect(await screen.findByText('Comedy')).toBeInTheDocument();
        expect(await screen.findByText('Drama')).toBeInTheDocument();
    });

    test('calls setFilter and updates sessionStorage on change', async () => {
        renderComponent();
        const selectElement = await screen.findByRole('combobox');
        await userEvent.selectOptions(selectElement, '1');

        expect(mockSetFilter).toHaveBeenCalledWith(1);
        expect(sessionStorage.getItem('filter')).toBe('1');
    });
});