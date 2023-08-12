import React from "react";
import { useState } from "react";
import SingleTodo from "./SingleTodo";

function Todo() {
    const [notes, setNotes] = useState([]);
    const [curVale, setCurValue] = useState("");

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <input
                onChange={(e) => {
                    setCurValue(e.target.value);
                }}
                type="text"
                placeholder="Add your new todo"
            />
            <button
                className="add-todo"
                onClick={() => {
                    const newArrayList = [...notes, curVale];
                    setNotes(newArrayList);
                }}
            >
                +
            </button>
            <ul>
                {notes.map((note, index) => (
                    <div className="lists" key={index}>
                        <li>
                            <SingleTodo note={note} />
                        </li>
                        <button
                            className="delete-todo"
                            onClick={() => {
                                const newArrayList = [...notes];
                                if (index === 0) {
                                    newArrayList.splice(index,1);
                                    setNotes(newArrayList);
                                } else {
                                    newArrayList.splice(index,1);
                                    setNotes(newArrayList);
                                }
                            }}
                        >
                            -
                        </button>
                    </div>
                ))}
            </ul>
            <button
                className="clear-btn"
                onClick={() => {
                    const newArrayList = [...notes, curVale];
                    newArrayList.splice(0);
                    setNotes(newArrayList);
                }}
            >
                Clear All
            </button>
        </div>
    );
}

export default Todo;
