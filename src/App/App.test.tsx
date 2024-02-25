
import { render, screen } from "@testing-library/react";
import App from './App';

describe("test App.tsx", () => {
  it("should render the title through props", () => {
    render(<App title="testing component"/>); 
    expect(
      screen.getByText(/testing component/)
    ).toBeInTheDocument();
  });
});