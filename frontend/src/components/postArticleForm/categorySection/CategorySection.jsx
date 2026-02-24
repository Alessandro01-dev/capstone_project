import Select from "react-select";
import { categoriesMock } from "../CategoriesMock";

const CategorySection = ({ category, setCategory }) => {


  return (
    <div
      className="d-flex flex-column gap-3"
    >
      <h4>Category</h4>
      <Select
        name="category"
        className="w-100"
        classNamePrefix="react-select"
        options={categoriesMock}
        placeholder="Select category..."
        value={categoriesMock.find(object => object.value === category) || null}
        onChange={(selectedOption) => {
          setCategory(selectedOption ? selectedOption.value : '');
        }}
        isSearchable={true}
        isClearable
      />
    </div>
  )
}

export default CategorySection