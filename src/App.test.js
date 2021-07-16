import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

const Product = require('./helpers/AddFunction').Product;

test('Function for testing', () => {
    const value1 = 6;
    const value2 = 12;
    const product = Product(value1, value2);
    expect(product).toBe(72);
})

const ScrollToTop = require('./helpers/ScrollToTop').ScrollToToP;

test('Scroll back to top of page', () => {
    const ScrollToTop = jest.spyOn(window, 'scrollTo');
    expect(window.scrollTo).toHaveBeenCalledWith(0, "smooth");
    window.scrollTo.mockRestore();
});