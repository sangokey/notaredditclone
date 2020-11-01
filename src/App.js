import './App.css';
import Posts from './components/Posts.js'
import Header from './components/Header.js';

function App() {
  return (
    <div>
      <Header/>
      <div style = {{paddingTop: "100px"}}>
      <Posts/>
      </div>
    </div>
  );
}

export default App;
