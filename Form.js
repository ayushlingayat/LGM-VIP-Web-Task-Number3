import './App.css';
import React,{useState} from 'react'

const Form = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [agree, setAgree] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    if(!agree){
      alert("Fill all the details :)");
    }
    else{
      const data = {'name' : name, 'email' : email, 'website' : website};
      console.log(data);    
      props.addData(data);
      setName('');
      setEmail('');
      setWebsite('');
    }
  }
  return (
    <div className='form'>
      <h1>Registration Form</h1>
      <form className='form-data' onSubmit={onSubmit}>
        <input type="text" name="name" id="name" placeholder='Name' value={name}
              onChange={event=>setName(event.target.value)}/> <br />

        <input type="text" name="email" id="email" placeholder='Email' value={email}
              onChange={event=>setEmail(event.target.value)}/> <br />
        
        <input type="text" name="phone" id="phone" placeholder='Website' value={website}
              onChange={event=>setWebsite(event.target.value)}/> <br />
        
        <div>  
          <input type="checkbox" id="agree" name="agree" 
              onChange={()=>{setAgree(!agree);}}/>
          <label htmlFor="agree" > Do you agree to our Terms and Conditions</label>
        </div><br></br>
        <input type="submit" value="Register"/>
      </form>
    </div>
  )
}

export default Form