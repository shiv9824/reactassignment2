import logo from './logo.svg';
import './App.css';
import Listitem from './Listitem';
import User from './User';
import Form from './Form';
import Validation from './Validation';
import Didmount from './Didmount';
import Unmount from './Unmount';
import Counter from './Counter';
import Mountfetch from './Mountfetch';
import Rerender from './Rerender';


function App() {
  return (
    <div className="App">
     <Listitem></Listitem> 
   <User></User>
    <Form></Form>
    <Validation></Validation>
    <Didmount></Didmount>
    <Unmount></Unmount>
    <Counter></Counter>
    <Mountfetch></Mountfetch>
    <Rerender></Rerender>
    </div>
  );
}

export default App;
