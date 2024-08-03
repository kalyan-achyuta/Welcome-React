Welcome React 😎

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Reloading)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization - Most expensive things in web browsers
- Minification - for production
- Bundling
- Compress
- Content Hashing
- Code Splitting
- Differential Bundling - support of odler browsers
- Diagnostics - Good Error View
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and prod bundles

# HEALTHY FOOD APP

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - Restaurent Container
  - Restaurent Card
    - IMG
    - Name, Rating, Cuisines, Delivery time, Buy for two
- Footer
- - Copyright
- - Links
- - Address
- - Contact Us
    \*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility Functions)

- useState() -- SuperPowerful State Variable in React.
- useEffect()

2 types of routing in web apps

- Client side routing
- Server side routing

# LifeCycleMethod - Process

-----MOUNTING PHASE-----

Constructor (Dummy)
Render (Dummy)
<HTML DUMMY>
ComponentDidMount
<API Call>
<this.setState> --> State Variable is updated

------UPDATE PHASE-----

render(API data)
<HTML new API data>
ComponentDidUpdate

------UNMOUNT PHASE------

ComponentWillUnmount ---> will call when remove the component from DOM (EX:- navigate to new page)

#

Chunking
Code Splitting
Dynamic Bundling
Lazy Loading
On Demand Loading
Dynamic Import

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector(subscribe)

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End tO End Testing - e2e testing

# Setting up Testing in our App

- installed React Testing Library
- installed Jest
- installed Babel dependencies
- Configured Babel
- Configured Parcel Config filr to disable default babel transpilation
- Jest Config
- installed jsdom library
- installed @babel/preset-react - for to make JSX enable in our tests
- include @babel/preset-react inside my babel config
- installed @testing-library/jest-dom


 # Issues Need to addressed

    1. Implement the Accordian close Feature.
    2. Top Rated Restaurants Filter Functionality and the test case of it.
    3. Test Coverage Should be cover 100%.
    4. Implement the Add Button as like Swiggy.
 