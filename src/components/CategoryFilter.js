import React from "react";


function CategoryFilter(props) {
  const { categories, setCurrentCategory, currentCategory, resetTasks, setTasks, tasks } = props
  console.log('categories', categories)

  function handleCategorySelection(categoryClicked) {
    if (categoryClicked !== "All") {
      setTasks(tasks.filter((task) => task.category === categoryClicked))
      setCurrentCategory(categoryClicked)
    }
    resetTasks
    setCurrentCategory(categoryClicked)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((c) => {
        return (
          <button className={currentCategory === c ? "selected" : ""} key={c} 
          onClick={() => handleCategorySelection(c)}>{c}
          </button>)}
      )}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
