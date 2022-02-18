import Counter from '../src/components/Counter'
import AuthorisationForm from "./components/AuthorisationForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className='container'>
      <Counter />
      <AuthorisationForm />
      <ToDoList/>
    </div>
  );
}

export default App;