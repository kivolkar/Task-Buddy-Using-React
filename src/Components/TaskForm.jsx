import React from 'react'
import { useState } from 'react'
export default function TaskForm() {
    let [task, setTask] = useState("")
    let [priority, setPriority] = useState("medium");
    let [category, setCategory] = useState("General");
  return (
    <>
    <div>
        <div className="">
            <input onChange={(e) => setTask(e.target.value)} type="text" />
            <h1>{task}</h1>
            <h2>{priority}</h2>
            <h2>{category}</h2>
            <button>Submit</button>
                <div className="">
                    <select onChange={(e) => setPriority(e.target.value)} name="" id="">
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Low">Low</option>
                    </select>

                    <select onChange={(e) => setCategory(e.target.value)} name="" id="">
                        <option value="Genral">Genral</option>
                        <option value="Personal">Personal</option>
                        <option value="Work related">Work related</option>
                    </select>
                </div>
        </div>
    </div>
    </>
  )
}