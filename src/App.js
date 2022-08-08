import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import axios, { Axios } from 'axios';
import Course from './Course';

function App() {
  return (
    <div className="App">
  <Course/>
    </div>
  );
}

export default App;
