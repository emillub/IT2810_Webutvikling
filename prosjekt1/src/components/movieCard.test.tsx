import '@testing-library/jest-dom/vitest';
import { describe,it,expect,vi } from 'vitest'
import { render,screen } from "@testing-library/react"
import MovieCard from './movieCard';
import { movieApiInterface } from '../server/api';

// Mock the LikeButton component
vi.mock('./likeButton', () => ({
  default: ({itemId = 0}) => <button data-testid="like-button">{`Like ${itemId}`}</button>,
}));

describe('MovieCard', () => {
  const mockMovie : movieApiInterface = {
      backdrop_path: '',
      id: 123,
      title: 'Test Movie',
      original_title: '',
      overview: '',
      poster_path: 'test-poster.jpg',
      adult: false,
      original_language: '',
      genre_ids: [],
      popularity: 0,
      release_date: '',
      vote_average: 0,
      vote_count: 0
  };

  it('renders movie information correctly', () => {
    render(<MovieCard movie={mockMovie} />);
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/project1/movie/${mockMovie.id}`);
    const likeButton = screen.getByTestId('like-button');
    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveTextContent(`Like ${mockMovie.id}`);
  });
});