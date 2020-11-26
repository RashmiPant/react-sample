import React, { Component, useState } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={_=>this.switchNameHandler("Maximillian")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max")}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;



// ----------------Using Hooks (with functions)-------------------

// const App = props => {
//   const [personsState, setPersonState] = useState({
//     persons: ["Rashmi", "Prachi", "Abhijeet;"]
//   })

//   const [otherState, setOtherState] = useState("some other value") // so that this dosen't get overwritten..

//   const switchNameHandler = () => {
//     setPersonState({ persons: ["Ankita", "Prachi", "Abhijeet;"] })
//   }
//   return (
//     <div className="App">
//       <div className="App-header">
//         <h2>Welcome to React</h2>
//       </div>
//       <h1>Hi, I'm a React App</h1>

//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person name={personsState.persons[0]} />
//       <Person name={personsState.persons[1]} />
//       <Person name={personsState.persons[2]}>I love PUBG!!</Person>

//     </div>
//   );
//   // React.createElement("div", {className: "App"}, React.createElement("h1", null, "This is a react app"))
// }


// export default App;

// state = {
//   persons: ["Rashmi", "Prachi", "Abhijeet;"],
//   otherstate: "Some other data"
// }

// switchNameHandler = () => {
//   this.setState({ persons: ["Ankita", "Prachi", "Abhijeet;"] })
// }

// render() 