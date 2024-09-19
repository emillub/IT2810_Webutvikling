import '@testing-library/jest-dom/vitest';
import '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { cleanup, render, screen } from "@testing-library/react"
import SwipePage from './swipePage';
import { movieApiInterface, useTopRatedMovies } from '../server/api';
import ErrorMessage from '../components/errorMessage';
import userEvent from '@testing-library/user-event';



describe('Swiping page', () => {
    const mockData = {results:[{id:1,title:"Movie 1"}, {id:2,title:"Movie 2"}]}
    beforeEach(()=>{       
        vi.mock('../server/api', () => ({
            useTopRatedMovies: vi.fn()
        }));

        vi.mock('../components/movieCard', () => ({
            default: ({ movie } : {movie : movieApiInterface}) => <div data-testid="movie-card">{movie.title}</div>
        }));
    })

    afterEach(() =>{
        sessionStorage.clear()
        vi.clearAllMocks()
        cleanup()
    }

)

    it('Renders loading state', () => {
        useTopRatedMovies.mockReturnValue({ isLoading: true });
        render(<SwipePage />);
        expect(screen.getByTestId('loading-text')).toBeInTheDocument();
    });

    it('Renders error state', ()=>{
        useTopRatedMovies.mockReturnValue({isError : true, error:{message : "err"}})
        render(<SwipePage />);
        expect(screen.getByText("err")).toBeInTheDocument();
    })
    
    it('Renders correct state', ()=>{
        useTopRatedMovies.mockReturnValue({ data: mockData, isLoading: false, isError: false });
        render(<SwipePage />);
        userEvent.dblClick(screen.getByLabelText('Previous movie'));
        expect(screen.getByText(mockData.results[0].title)).toBeInTheDocument();
    })

    it('Handles userinput', async ()=>{
        useTopRatedMovies.mockReturnValue({ data: mockData, isLoading: false, isError: false });
        render(<SwipePage />);
        const nextButton = screen.getByLabelText('Next movie');
        const prevButton = screen.getByLabelText('Previous movie');

        await userEvent.click(nextButton)
        expect(screen.getByText(mockData.results[1].title)).toBeInTheDocument();
        await userEvent.click(prevButton)
        expect(screen.getByText(mockData.results[0].title)).toBeInTheDocument();

        await userEvent.dblClick(prevButton);
        expect(screen.getByText(mockData.results[0].title)).toBeInTheDocument();
        await userEvent.dblClick(nextButton);
        expect(screen.getByText(mockData.results[0].title)).toBeInTheDocument();

        await userEvent.tripleClick(prevButton);
        expect(screen.getByText(mockData.results[1].title)).toBeInTheDocument();
        await userEvent.tripleClick(prevButton);
        expect(screen.getByText(mockData.results[0].title)).toBeInTheDocument();
    })

    it('Stores and retrieves index from sessionStorage', async () => {
        useTopRatedMovies.mockReturnValue({ data: mockData, isLoading: false, isError: false });
        render(<SwipePage />);
        const nextButton = screen.getByLabelText('Next movie');
        
        await userEvent.click(nextButton);
        expect(sessionStorage.getItem("index")).toBe("1");
        
        cleanup();
        render(<SwipePage />);
        expect(screen.getByText(mockData.results[1].title)).toBeInTheDocument();
    });
})
