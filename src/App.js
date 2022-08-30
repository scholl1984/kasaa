import './App.css';
import TagName from './components/tagName/TagName';
import DropDown from './components/dropDown/DropDown';

function App() {
  return (
    <div className="App">
      <TagName name="Yannick" />
      <DropDown list="Equipements" />
    </div>
  );
}

export default App;
