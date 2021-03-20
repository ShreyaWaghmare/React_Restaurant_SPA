import {fireEvent, render} from "@testing-library/react";//what is =>,{<to import here>},"@ in this line"
import App from './App';
import index from './index';

test("renders h1",()=>{
    const {getByText} = render(<App />);
    const h1 = getByText(/Welcome/);
    expect(h1).toHaveTextContent("Welcome");
});

// test("selecting checkbox",()=>{
//     const {getByLabelText} = render(<checkbox />);
//     const checkbox = getByLabelText(/not checked/);
//     fireEvent.click(checkbox);
//     expect(checkbox.checked).toEqual(true);
// });