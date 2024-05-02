import React from "react";

const MyProjects = () => {
  return (
    <div className="bg-primary text-white p-5">
      <div className="mx-5">
        <h1>My Projects</h1>
      </div>
      <div className="d-flex border-bottom flex-row py-5 my-4 mx-5 justify-content-center px-5">
        <div class="w-75">
          <h3 class="py-2">Calculator</h3>
          <a
            class="btn btn-light"
            href="https://goutamsirswa.github.io/calculator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to Show
          </a>
        </div>
        <div class="w-100">
          The calculator made with HTML, CSS, and JavaScript is a basic yet
          functional web application designed to perform arithmetic
          calculations. Typically featuring a user-friendly interface resembling
          a physical calculator, it allows users to input numerical values and
          perform operations such as addition, subtraction, multiplication, and
          division. The layout is structured using HTML to define the elements,
          CSS for styling, and JavaScript to handle user interactions and
          perform calculations. Users can click on buttons representing numbers
          and operators to input expressions, with the calculator dynamically
          updating the display as inputs are entered. The JavaScript code behind
          the calculator interprets the user's inputs, evaluates the
          mathematical expressions, and displays the result accurately on the
          screen. Additionally, the calculator may include features like memory
          functions, clear buttons, and error handling to enhance usability and
          functionality.
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
