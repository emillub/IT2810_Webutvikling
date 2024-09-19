''
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { vi } from 'vitest';
import MoviePage from './moviePage';
import { useTopRatedMovies, fetchMovieGenres } from '../server/api';

vi.mock('../server/api', () => ({
    useTopRatedMovies: vi.fn(),
    fetchMovieGenres: vi.fn(),
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
}));

const queryClient = new QueryClient();

describe('MoviePage', () => {
    beforeEach(() => {
        queryClient.clear();
    });

    it('renders loading state initially', () => {
        (useTopRatedMovies as vi.Mock).mockReturnValue({ data: null, isLoading: true });
        (fetchMovieGenres as vi.Mock).mockResolvedValue({ genres: [] });

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/1']}>
                    <Routes>
                        <Route path="/movie/:movieId" element={<MoviePage />} />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders movie details when data is available', async () => {
        const mockMovie = {
            id: 1,
            title: 'Test Movie',
            poster_path: '/test.jpg',
            overview: 'Test overview',
            genre_ids: [1],
            release_date: '2023-01-01',
            original_language: 'en',
        };

        const mockGenres = {
            genres: [{ id: 1, name: 'Action' }],
        };

        (useTopRatedMovies as vi.Mock).mockReturnValue({ data: { results: [mockMovie] }, isLoading: false });
        (fetchMovieGenres as vi.Mock).mockResolvedValue(mockGenres);

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/1']}>
                    <Routes>
                        <Route path="/movie/:movieId" element={<MoviePage />} />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('Test Movie')).toBeInTheDocument();
        expect(screen.getByAltText('Test Movie')).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/test.jpg');
        expect(screen.getByText('Test overview')).toBeInTheDocument();
        expect(screen.getByText('Genres: Action')).toBeInTheDocument();
        expect(screen.getByText('Release date: 2023-01-01')).toBeInTheDocument();
        expect(screen.getByText('Original language: en')).toBeInTheDocument();
    });

    it('renders error message when no movie is found', async () => {
        (useTopRatedMovies as vi.Mock).mockReturnValue({ data: { results: [] }, isLoading: false });
        (fetchMovieGenres as vi.Mock).mockResolvedValue({ genres: [] });

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/1']}>
                    <Routes>
                        <Route path="/movie/:movieId" element={<MoviePage />} />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('No movie found')).toBeInTheDocument();
    });
});
