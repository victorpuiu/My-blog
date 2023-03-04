import './App.css';

function App() {

    const title = "Welcome to the new blog";
    const likes = 50;
    // const person = {name: "Dan", age: 30}
    const link = "http://google.com"

  return (
    <div className="App">
      <div className="content">
          <h1>{ title }</h1>
          <p>Liked { likes } times</p>
          {/*<p>{ person }</p>*/}

          <a href={ link }>Google sites</a>
      </div>
    </div>
  );
}

export default App;
