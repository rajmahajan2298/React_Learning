import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Child Constructor is Called");

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                contact: "Default"
            }
        }
    }
    
    async componentDidMount() {
        // console.log("Child ComponentDidMount is Called");
        const data = await fetch("https://api.github.com/users/rajmahajan2298");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate Called");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Called");
    }

    render() {
        // console.log("Child Render is Called");
        const { name, location, avatar_url,contact } = this.state.userInfo;
        // const { count } = this.state;

        return(
            <div className="user-card">
                <img src = {avatar_url} />
                <h1>Name: { name }</h1>
                <h3>Location: { location } </h3>
                <h4>Contact: { contact }</h4>
            </div>
        );
    }
}

export default UserClass;