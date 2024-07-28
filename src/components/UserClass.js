import React from "react";

class UserCalss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kalyan");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: Achyuta {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: kalyan@gmail.com</h4>
      </div>
    );
  }
}

export default UserCalss;
