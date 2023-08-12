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

const JSX = (
  <div className="myDiv">
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
)
// Add your code below this line
const node = document.getElementById("challenge-node")
ReactDOM.render(JSX, node)
