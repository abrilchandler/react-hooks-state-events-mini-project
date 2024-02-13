import React, {useState} from "react";

function NewTaskForm(props) {
  const {categories, tasks, setTasks, onTaskFormSubmit} = props
  const [text, setText] = useState("");
  const [category, setCategory] = useState("")

  console.log(category)

  function handleTextChange(event) {
    setText(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({text: text, category: category})
  }
 

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(event) => setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">Placeholder</option>
          {categories.map((c) => {
            if (c !== "All") {
              return (
              <option key={c} value={c}>{c}</option>
              )
            }
          }
          )}
          
          
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
