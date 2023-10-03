import logo from './logo.svg';
import './App.css';

// Changing the background color of the login form to purple
// This is the CSS code
// .App {
//   background-color: purple;
//   color: white;
//   text-align: center;
//   font-family: Arial, Helvetica, sans-serif;
// }


function App() {
  const divstyle = {
    backgroundColor: 'purple',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif'
  };

  return (
     //This is a login page
     
     
     <div className="App" style={divstyle}>
        <form>
          <div className="form-inner">
            <h1>Welcome!</h1>
            <div className="form-group">
              <label htmlFor="name">Username </label>
              <input type="text" name="name" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input type="password" name="password" id="password"/>
            </div>
            <input type="submit" value="Login"/>
          </div>
        </form>
      </div>
  );
}

export default App;
