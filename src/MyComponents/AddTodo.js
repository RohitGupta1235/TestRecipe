//react arrow function rafc
import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Tile or Description cannot be blank");
    }
    addTodo(title, desc);
  };
  return (
    <div className="container">
      <h3 my-3>Add Your Recipe</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc "
          />
        </div>

        <button type="submit" onClick={submit} class="btn btn-sm btn-success">
          AddTodo
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
