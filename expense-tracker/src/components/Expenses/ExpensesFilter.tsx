import React, { ChangeEvent } from 'react';

import './ExpensesFilter.css';

interface ExpensesFilterProps {
	selected: string;
	onChangeFilter: (selectedYear: string) => void;
}

function ExpensesFilter({selected, onChangeFilter}: ExpensesFilterProps) {
	function dropdownChangeHandler(event: ChangeEvent<HTMLSelectElement>) {
		onChangeFilter(event.target.value);
	}

	// select is chat emits a change event whenever a user selects a new option in the dropdown
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
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