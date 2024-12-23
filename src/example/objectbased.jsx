import React, { useState } from 'react'

export default function Objectbased() {

    // const [form, setForm] = useState({ username: "", password: "" });


    const [form, setForm] = useState({ username: "", password: "", email: "", phone: "" });

    const [dropdown, setDropdown] = useState("drop2");


//... is used to copy the previous state and then update the new state
//spread operator is used to copy the previous state and then update the new state


    return (
        <>
            {/* <h1>object based</h1>
            <h1>input value getting</h1>

            <input type="text" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} placeholder='username' />
            <br />
            <input style={{}}  value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type="text" placeholder='password' />

            <h1>{form.username}</h1>
            <h1>{form.password}</h1> */}

            <h1>object based</h1>

            <input type="text" placeholder='USER name' value={form.username} onChange={(e)=>setForm({...form,username:e.target.value})} />

            <input type="text"  placeholder='password' value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>

            <h1>{form.username}</h1>
            <h1>{form.password}</h1>


<h1>dropdown </h1>

<select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}} >
    <option value="drop1">drop 1 </option>
    <option value="drop2">drop 2 </option>
    <option value="drop3">drop 3 </option>
    <option value="drop4">drop 4 </option>
</select>

<h1>{dropdown}</h1>


        </>
    )
}