import '@testing-library/jest-dom/vitest';
import { describe,it,expect } from 'vitest'
import { render,screen } from "@testing-library/react"
import ErrorMessage from './errorMessage'
describe('ErrorMessage', () => {
    it('renders default error state', () => {
        render(<ErrorMessage/>);
        expect(screen.getByRole('error-message')).toHaveTextContent("Something went wrong");
    })

    it('renders custom error state', () => {
        const message = "No movie found"
        render(<ErrorMessage message={message}/>);
        expect(screen.getByRole('error-message')).toHaveTextContent(message);
    })
})