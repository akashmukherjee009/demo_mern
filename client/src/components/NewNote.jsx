import React, { useState } from 'react'


const NewNote = () => {
    const [form, setForm]= useState({userName:'', email:'', password:''})
    const nameChangeHandler= (events)=>{
        // setuserName(events.target.value)
        // setForm({...form, userName: events.target.value})
        setForm((prevState)=>{
            return {...prevState, userName: events.target.value}
        })
        // console.log(form);
    }
    const emailChangeHandler= (events)=>{
        // setuserName(events.target.value)
        // setForm({...form, userName: events.target.value})
        setForm((prevState)=>{
            return {...prevState, email: events.target.value}
        })
        // console.log(form);
    }
    const passwordChangeHandler= (events)=>{
        // setuserName(events.target.value)
        // setForm({...form, userName: events.target.value})
        setForm((prevState)=>{
            return {...prevState, password: events.target.value}
        })
        // console.log(form);
    }
    const submitHandler=(events)=>{
        events.preventDefault()

        const subscription= {title: form.userName, email: form.email, password: form.password}
        // props.onSave(subscription)
        

        console.log('on save',subscription);
    }
  return ( 
    <div>
       <form onSubmit={submitHandler}>
        <div className="new_subscription_controls">
            <div className="new_subscription_control">
                <label htmlFor="">Name</label>
                <input type="text" value={form.userName} onChange={nameChangeHandler} />
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



