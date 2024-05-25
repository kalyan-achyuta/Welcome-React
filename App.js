import React from "react";
import ReactDOM from "react-dom/client";

const Header =() => (
  <div className="header">
    <div className="logo-container">
      <img className=" logo" src="https://i.pinimg.com/564x/98/cf/72/98cf72d0a15d4ad7f7e8e584a3d3bd4e.jpg"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestaurentCard = (props) => {
  const {name, image, cuisines, avgRating, costForTwo, deliveryTime} = props?.resData;
  return (
    <div className="res-card" style = {styleCard}>
      <img className="res-logo" src={image}/>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>₹{costForTwo / 100} FOR TWO</h5>
        <h5>{deliveryTime} minutes</h5>
    </div>
  );
}

const resList = [
  {
  id:1,
  name: "Meghana Foods",
  image: "https://i.pinimg.com/564x/90/76/ff/9076ffe25767c5003290da18ff86b26b.jpg",
  cuisines: ['Biryani', 'Staters', 'Desserts', 'Salads'],
  avgRating: 4.5,
  costForTwo: 50000,
  deliveryTime: 30
},
  {
  id:2,
  name: "Star Bucks",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2418209798927d733a50f5d2ebcc2aee",
  cuisines: ['Coffee', 'Tea', 'Biscuits', 'CupCakes'],
  avgRating: 4,
  costForTwo: 60000,
  deliveryTime: 38
},
  {
  id:3,
  name: "KFC",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_564242.JPG",
  cuisines: ['Chiken', 'Prawns', 'Fish', 'Mutton'],
  avgRating: 4.3,
  costForTwo: 70000,
  deliveryTime: 40
},
  {
  id:4,
  name: "Pizza Hut",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7",
  cuisines: ['Thin Base Spicy', 'Thik Base Normall', 'Large Pizza', 'Small Pizza'],
  avgRating: 4.4,
  costForTwo: 60000,
  deliveryTime: 28
},
  {
  id:5,
  name: "Burger King",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f8d6dce1f40b3e14ff83948a0d0f4b32",
  cuisines: ['Chiken Burger', 'Veg Burger', 'Panner Burger', 'Nachos'],
  avgRating: 5,
  costForTwo: 30000,
  deliveryTime: 35
},
]

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {resList.map((restaurent) => (
        <RestaurentCard key={restaurent.id} resData={restaurent}/>
      ))}
    </div>
  </div>
)

const AppLayout =() => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
