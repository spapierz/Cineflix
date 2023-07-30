# CineFlix Movie App

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [State Management with useContext](#state-management-with-usecontext)
- [Testing with React Testing Library](#testing-with-react-testing-library)
- [Accessibility Considerations](#accessibility-considerations)
- [Material-UI (MUI) Library](#material-ui-mui-library)
- [User-Centric Approach](#user-centric-approach)
- [Note](#note)
- [Installation](#installation)
- [How to Run](#how-to-run)
- [Running Tests](#running-tests)

## Introduction

The CineFlix Movie App is a web application designed to provide users with a convenient way to discover and explore movies. Users can view a collection of movies, access movie details, add favorites, and read movie descriptions. The app aims to deliver an enjoyable movie browsing experience, focusing on user-centric design and accessibility.

## Technologies Used

- **React**: The app is built using the React framework, providing a fast and interactive user interface.
- **React Context API**: The app employs the Context API for state management, enabling global state sharing without prop drilling.
- **React Testing Library**: This testing library is used for unit testing React components, ensuring the app functions as expected.
- **Material-UI (MUI)**: The app utilizes the Material-UI library for its sleek and responsive UI components, enhancing the overall user experience.
- **TypeScript**: TypeScript is used for type checking, improving code reliability and developer productivity.
- **Jest**: Jest is the testing framework used in conjunction with React Testing Library for running test cases.
- **Axios**: Axios is used for making HTTP requests to external APIs for movie data.

## Folder Structure

The folder structure is organized to promote maintainability and scalability. Below is an overview of the primary folders and their purposes:

- `src/`
  - `components/`: Contains reusable React components used throughout the app.
  - `context/`: Holds the MovieContext and related context providers for global state management.
  - `interfaces/`: Defines TypeScript interfaces for movie-related data structures.
  - `services/`: Includes utility functions for API interactions, data processing, etc.
  - `styles/`: Contains global styles and theme configurations.
  - `views/`: Each view corresponds to a specific page in the app, containing its components and logic.

## State Management with useContext

The app utilizes the `useContext` hook, which is part of the React Context API, for state management. The MovieContext is defined in the `context/MovieContext.tsx` file, enabling global state sharing across components. This approach eliminates the need for prop drilling and provides a more concise and scalable solution for managing application state.

## Testing with React Testing Library

To ensure the app's stability and functionality, unit tests are written using the React Testing Library and Jest. Tests cover components, context providers, and utility functions, guaranteeing that the app performs as expected and remains robust during development and future updates.

## Accessibility Considerations

Accessibility is a top priority in the CineFlix Movie App. All components are designed with accessible markup, proper ARIA attributes, and keyboard navigation support. Focus management, color contrast, and semantic HTML elements are carefully implemented to improve accessibility for users with disabilities.

## Material-UI (MUI) Library

Material-UI (MUI) is chosen as the primary UI library due to its wide range of beautifully designed components, responsive layouts, and theming capabilities. MUI components are used throughout the app to ensure a consistent and modern look, saving development time and enhancing the user experience.

## User-Centric Approach

The app is developed with users in mind, aiming to provide an intuitive and engaging experience. User feedback and needs are taken into account during the design process. The app's user interface is clean, simple, and easy to navigate, ensuring users can focus on exploring their favorite movies without distractions.

## Note

Given more time, I would decouple the `MovieList` component so that the favorites button lived in its own component along with the popular movies title. Additionally, the movies title would change dynamically based on whether a user was searching for a movie or the `filteredMovies` state was empty. This would further improve the code organization and reusability, enhancing the maintainability of the app in the long run.

While exploring The Movie DB API, I noticed that it provides valuable information such as movie popularity and votes. However, I did not come across any data related to movie ratings. As a result, the app currently does not include movie ratings in its displayed content.

The API key should live in AWS secrets or a relating secure storage for keys, but lives in the code as a small project playground to be shared and tested.

## Installation

To install the app and its dependencies, run the following command in your project directory:

`npm install --legacy-peer-deps`

## How to Run

To start the app, use the following command:

`npm start`

The app will be available at `http://localhost:3000`.

## Running Tests

To run the tests for the app, use the following command:

`npm test`

Jest will execute the test cases, and you'll see the results in the console.
