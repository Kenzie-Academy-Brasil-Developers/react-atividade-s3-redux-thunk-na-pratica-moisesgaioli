import './App.css';
import AddComment from "./components/AddComment";
import ShowComments from './components/ShowComments';


function App() {
  return (
      <main className="main-container">

        <AddComment />
        
        <ShowComments />
      </main>
  );
}

export default App;
