import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockIntersectionObserver } from 'jsdom-testing-mocks'
import Home from '../src/app/page'
 
mockIntersectionObserver();

// Mock Carousel element to prevent Embla dependency issues
jest.mock("../src/app/components/Carousel");

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})