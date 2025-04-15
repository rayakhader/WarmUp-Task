import MembersList from './components/MembersList';
import Searchbar from './components/Searchbar';
import './App.css'
function App() {
  return (
    <div className="App">
      <h3>Add member to Front-End development team </h3>
      <Searchbar />
      <MembersList />
    </div>
  );
}

export default App;
