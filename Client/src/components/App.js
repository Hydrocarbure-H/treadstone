import logo from '../logo.svg';
import '../styles/App.css';
import './Window.js';
import Window from "./Window";
import Sidebar from "./Sidebar";

import '../styles/window.css';
import '../styles/sidebar.css';
import '../styles/card.css';
import '../styles/App.css';
function App() {
  return <div className="container"><Sidebar /><Window /></div>
}

export default App;
