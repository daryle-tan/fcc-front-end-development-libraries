/** 1/10
 * class DisplayMessages extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
      input: "",
      messages: []
    }
    
  }
  render() {
    return <div />
  }
};

// 2/10
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }

  submitMessage() {
  
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input]
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((x,i) => {
            return <li key={i}>{x}</li>
          })}
        </ul>
        
      </div>
    );
  }
};

// 3/10
// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const messageReducer = (prevState = [],action) => {
  switch(action.type) {
    case ADD:
      return [...prevState, action.message];
      break;
    default:
     return prevState;
  }
    
};

const store = Redux.createStore(messageReducer);

// 4/10
 */
