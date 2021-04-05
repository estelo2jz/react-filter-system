import { useState } from 'react';
import {Items} from './allData';
import Menu from './components/Menu';
import Button from './components/Button';
import './App.css';

const allCategories = ['All', ...new Set(Items.map(item => item.category))]

console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(Items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(Items);
      return;
    }
    const filteredData = Items.filter(item => item.category === button)
    setMenuItem(filteredData)
  }
  return (
    <div className="App">
      <div className="title">
        <h1>
          Portfolio
          <span> Filter</span>
        </h1>
      </div>
      <Button 
        button = {buttons}
        filter = {filter}
      />
      <Menu 
        menuItem = {menuItem}
      />
    </div>
  );
}

export default App;
