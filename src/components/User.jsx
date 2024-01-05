import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "anonymous",
        location: "somewhere in the world",
      },
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/BharaniDharan86");
    const data = await res.json();
    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div>
        <h1>UserName : {name}</h1>
        <h4>Location : {location}</h4>
      </div>
    );
  }
}

export default User;

// /* eslint-disable react/prop-types */
// import React from "react";
// class User extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 3,
//     };
//   }

//   render() {
//     const { name } = this.props;
//     const { count } = this.state;

//     return (
//       <>
//         <h1>{name}</h1>
//         <span>Count : {count}</span>
//         <p>bharanidev.08@gmail.com</p>
//         <button
//           onClick={() => {
//             this.setState({
//               count: count + 1,
//             });
//           }}
//         >
//           Inc
//         </button>
//       </>
//     );
//   }
// }

// export default User;
