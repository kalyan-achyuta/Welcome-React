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

/**
* Header
*  - Logo
*  - Nav Items
* Body
*  - Search
*  - Restaurent Container
    - Restaurent Card
      - IMG
      - Name, Rating, Cuisines, Delivery time, Buy for two
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact Us
*/

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