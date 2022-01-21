import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyAppBar from "../MyAppBar";
import React from 'react';
import "@testing-library/jest-dom"

test("app bar should render blinklist logo",()=>{

    render(
       <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );
    const image= screen.getByRole("img");
    expect(image).toHaveAttribute("src","test-file-stub");

});

test("app bar should have explore",()=>{

    render(
        <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );

    const explore=screen.getByText(/Explore/i);
    expect(explore).toBeInTheDocument();
});

test("app bar should have My library",()=>{

    render(
        <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );

    const mylibrary=screen.getByText(/My Library/i);
    expect(mylibrary).toBeInTheDocument();
});

test("app bar should have Avatar A",()=>{

    render(
        <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );

    const avatar=screen.getByText("A");
    expect(avatar).toBeInTheDocument();
});