import logo from './logo.svg';
import Contact from './Contact';
import './App.css';
import Address from './Address';
import Comment from './Comment';

function App() {
  let title = 'ReactJS';

  return (
    <div className="App">
      <h3> Hello I am Sandhya</h3>
      <h1>present learning topic is {title}</h1>
      <Address time="10:00AM to 1 PM on friday's"></Address>
      {/* <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
      <Contact></Contact>
      <br></br>
       <Address time=" 9:30AM to 5:00PM on WED's"></Address>
       <br></br>
       <Comment text="I am in class"date="13th May 2022"></Comment>
    </div>
  );
}

export default App;
