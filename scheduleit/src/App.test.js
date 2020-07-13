import React from "react"
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    test("App renders correctly", () => {
       const {getByRole} = render(<App />);
        expect(getByRole("heading",{name: "Hello from App!"})).toBeInTheDocument();
    })
})