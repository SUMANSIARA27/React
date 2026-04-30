import { render , screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
test('Contact render page', () => {
   render(<Contact/>);
   const heading = screen.getAllByRole("heading");
   expect(heading)
})
