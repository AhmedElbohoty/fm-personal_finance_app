import InputWrapper from "components/Input/InputWrapper";

// CSS prefix: .transactions-filters-
import "./style.css";

function Filters() {
  return (
    <div className="transactions-filters">
      <InputWrapper
        id="search"
        label="Search"
        type="search"
        placeholder="Search transaction"
      />
      <div className="transactions-filters-right">
        <InputWrapper
          id="sort"
          label="Sort by"
          type="select"
          placeholder="Latest"
          options={[
            { value: "latest", label: "Latest" },
            { value: "oldest", label: "Oldest" },
            { value: "highest", label: "Highest Amount" },
            { value: "lowest", label: "Lowest Amount" },
          ]}
        />
        <InputWrapper
          id="category"
          label="Category"
          type="select"
          placeholder="All Transactions"
          options={[
            { value: "all", label: "All Transactions" },
            { value: "general", label: "General" },
            { value: "dining", label: "Dining Out" },
            { value: "groceries", label: "Groceries" },
            { value: "entertainment", label: "Entertainment" },
          ]}
        />
      </div>
    </div>
  );
}

export default Filters;
