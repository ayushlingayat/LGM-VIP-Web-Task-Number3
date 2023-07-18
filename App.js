import './App.css';
import React,{useState} from 'react'
import Display from './Display';
import Form from './Form';

function App() {
  const [data,setData] = useState([]);
  const addData = (newData) =>{
    setData((prev)=>{
      return [...prev,newData]
    })
  }
  return (
    <div className="App">
      <Form className='' addData={addData}/>
      <Display className='' data={data} />
    </div>
  );
}

export default App;
