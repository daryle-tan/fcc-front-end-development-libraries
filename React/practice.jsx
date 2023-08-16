// const JSX = (
//   <div>
//     <h1></h1>
//     <p></p>
//     <ul>
//       <li>This</li>
//       <li>is</li>
//       <li>Practice</li>
//     </ul>
//   </div>
// )

/* const JSX = (
  <div className="myDiv">
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
)
// Add your code below this line
const node = document.getElementById("challenge-node")
ReactDOM.render(JSX, node) */

/* self closing tag  
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
*/

/* return a single div with string text 
const MyComponent = function() {
  // Change code below this line
return (
  <div>Hello</div>
)
  // Change code above this line
}
*/

/* class and constructor 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
  return(
    <div><h1>Hello React!</h1></div>
  );
    // Change code above this line
  }
};
*/

/* Child component 
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />     
      </div>
    );
  }
};
*/

/* Nested components
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};
*/

/* Series of nested components
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits/>
        <Vegetables />
      </div>
    );
  }
};
*/

/* ReactDOM.render()
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
     </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
*/

/* Create class and render it 
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))
*/

/* prop down 
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};
*/

/* Passing prop arrays with .join() 
const List = (props) => {
 
  return <p>{props.tasks.join(", ")}</p>

};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>

        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["run", "lift", "code"]}/>
      </div>
    );
  }
};
*/
