import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor is Called");
    }
    componentDidMount() {
        console.log("Parent Component Did Mount is Called");
    }

    render() {
        console.log("Parent Render is Called");

        return(
            <div className="user-card">
                <UserClass name = { "First Child" } Location = { "Indore" } Contact = { "@RajMahajan22" } /> 
            </div>
        );
    };
}


// const About = () => {
//     return(
//         <div>
//             <h1>Welcome To About Us Page</h1>
//             {/* <User name =  { "Raj Mahajan (Functional)" }/> */}
//             <UserClass name = { "Raj Mahajan (Class) " } Location = { "Indore "} Contact = { "@RajMahajan22" } />
//         </div>
//     );
// };

export default About;