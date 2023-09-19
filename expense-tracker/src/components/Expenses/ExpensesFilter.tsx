import React, { ChangeEvent } from 'react';

import './ExpensesFilter.css';

// prop values and changes to these values itself are not managed by the component
// itself, but the parent component
interface ExpensesFilterProps {
	selectedOption: string;
	onChangeFilter: (selectedYear: string) => void;
}

function ExpensesFilter({selectedOption, onChangeFilter}: ExpensesFilterProps) {
	function dropdownChangeHandler(event: ChangeEvent<HTMLSelectElement>) {
		onChangeFilter(event.target.value);
	}

	// select is chat emits a change event whenever a user selects a new option in the dropdown
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedOption} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;