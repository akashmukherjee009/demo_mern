import React, { useState } from 'react'
import axios from 'axios'

const NewNote = () => {
    const [form, setForm]= useState({name:'', email:'', password:''})
    const nameChangeHandler= (events)=>{
        // setname(events.target.value)
        // setForm({...form, name: events.target.value})
        setForm((prevState)=>{
            return {...prevState, name: events.target.value}
        })
        // console.log(form);
    }
    const emailChangeHandler= (events)=>{
        // setname(events.target.value)
        // setForm({...form, name: events.target.value})
        setForm((prevState)=>{
            return {...prevState, email: events.target.value}
        })
        // console.log(form);
    }
    const passwordChangeHandler= (events)=>{
        // setname(events.target.value)
        // setForm({...form, name: events.target.value})
        setForm((prevState)=>{
            return {...prevState, password: events.target.value}
        })
        // console.log(form);
    }
    const submitHandler= async (events)=>{
        events.preventDefault()

        // const subscription= {name: form.name, email: form.email, password: form.password}
        // props.onSave(subscription)
        try {
           const response = await axios.post('http://localhost:5000/notes', form);

            console.log('Response:', response.data);
          } catch (error) {
            // Handle errors
            console.error('Error:', error);
          }

        console.log('on save',form);
    }
  return ( 
    <div>
       <form onSubmit={submitHandler}>
        <div className="new_subscription_controls">
            <div className="new_subscription_control">
                <label htmlFor="">Name</label>
                <input type="text" value={form.name} onChange={nameChangeHandler} />
            </div>
            <div className="new_subscription_control">
                <label htmlFor="">Email</label>
                <input type="email"  onChange={emailChangeHandler}/>
            </div>
            <div className="new_subscription_control">
                <label htmlFor="">Password</label>
                <input type="password" value={form.password} onChange={passwordChangeHandler}/>
            </div>
        </div>
        <div className="new_subscription_actions">
            <button type="submit">Add Subscription</button>
        </div>
      
      </form>
    </div>
  )
}

export default NewNote



