import { describe, expect, it } from "vitest";
import { render,screen } from "@testing-library/react"
import LikeButton from './likeButton'
import userEvent from '@testing-library/user-event';

describe("LikeButton", () => {
    beforeEach(() => { 
        localStorage.clear();
    });

    it("should render a like button", () => {
        render(<LikeButton itemId={1} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it("should display an unliked state initially", () => {
        render(<LikeButton itemId={1} />);
        expect(screen.getByRole('button')).toHaveTextContent('🤍');
    });

    it("should toggle like state on click", async () => {
        render(<LikeButton itemId={1} />);
        const button = screen.getByRole('button');
        await userEvent.click(button);
        expect(button).toHaveTextContent('❤️');
        await userEvent.click(button);
        expect(button).toHaveTextContent('🤍');
    });

    it("should not toggle like state of another itemId on click", async () => {
        render(<LikeButton itemId={1} />);
        render(<LikeButton itemId={2} />);
        const buttons = screen.getAllByRole('button');
        const button1 = buttons[0];
        const button2 = buttons[1];

        await userEvent.click(button1);
        expect(button1).toHaveTextContent('❤️');
        expect(button2).toHaveTextContent('🤍');

        await userEvent.click(button2);
        expect(button1).toHaveTextContent('❤️');
        expect(button2).toHaveTextContent('❤️');
    });

    it("should save like state to localStorage", async () => {
        render(<LikeButton itemId={1} />);
        const button = screen.getByRole('button');
        await userEvent.click(button);
        expect(localStorage.getItem('liked_1')).toBe('true');
        await userEvent.click(button);
        expect(localStorage.getItem('liked_1')).toBe('false');
    });

    it("should load like state from localStorage", () => {
        localStorage.setItem('liked_1', 'true');
        render(<LikeButton itemId={1} />);
        expect(screen.getByRole('button')).toHaveTextContent('❤️');
    });
});