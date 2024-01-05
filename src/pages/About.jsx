import React from "react";
import User from "../components/User";

class About extends React.Component {
  render() {
    return (
      <>
        <h1>About the User</h1>
        <User />
      </>
    );
  }
}

// import User from "../components/User";

// const About = () => {
//   return (
//     <div>
//       <User name="Bharanidharan M" />
//     </div>
//   );
// };

export default About;
