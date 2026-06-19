
function FilterSidebar({ setCategory }) {

  return (

    <div className="filter-box">

      <h3>Category</h3>

      <button onClick={() => setCategory("")}>
        All
      </button>

      <button onClick={() => setCategory("Mobile")}>
        Mobile
      </button>

      <button onClick={() => setCategory("Laptop")}>
        Laptop
      </button>

      <button onClick={() => setCategory("Watch")}>
        Watch
      </button>

    </div>

  );

}

export default FilterSidebar;
