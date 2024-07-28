import { Component } from "react";
import UserCalss from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg from-stone-700">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>This is Food Order App</h1>
        <UserCalss name={"kalyan (class)"} location={"Guntur (mass😎)"} />
      </div>
    );
  }
}

export default About;
