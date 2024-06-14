import UserCalss from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>About</h1>
                <h1>This is Food Order App</h1>
                <UserCalss name={"kalyan (class)"} location={"Guntur (mass😎)"}/>
            </div>
        )
    }
}

export default About;
