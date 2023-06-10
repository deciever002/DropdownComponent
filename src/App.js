import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <>
      <h1 className='gradientText'>Should you use dropdown?</h1>
      <div className='dropdown-container'>
        <Dropdown />
      </div>
    </>
  );
}

export default App;
