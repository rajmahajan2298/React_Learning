import { useState } from "react";


const User = (props) => {

    const [count] = useState(0);
    const[count2] = useState(1);

    return(
        <div className="user-card">
            <h1>Count: { count }</h1>
            <h1>Count: { count2 }</h1>
            <h1>Name: {props.name}</h1>
            <h3>Location: Indore</h3>
            <h4>Contact: @RajMahajan22</h4>
        </div>
    );
};

export default User;