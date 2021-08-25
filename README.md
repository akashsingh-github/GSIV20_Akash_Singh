# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## `upcoming movies and search`
The upcoming movies list is well oraganized and mapped on the upcoming movies array and retun to the MovieCard component. 
The search bar on the home page works well when you type something on the search bar it renders the component from search API by filtering search query. Same movie card is used for rendering search results in the home page using conditional rendering. If search query is empty then render upcoming movies else render search result.

## `detail`
Detail page: seperate container is for detail page to render detail component and to pass detail stateToProps

## `Further improvement`
If I got more hours then I will make more filter on upcoming movies using genre array and also movie recommendation on the detail page based on the genre.
