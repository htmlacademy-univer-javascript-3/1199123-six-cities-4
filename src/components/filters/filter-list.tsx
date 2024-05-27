import './FilterList.css';

import { FilterOption } from './filter-option';

type FilterListProps = {
  filterTypes: string[];
  currentFilter: string;
  handleCurrentFilter: (filterType: string) => void;
  handleOfferSort: (sortBy: string) => void;
}

export function FilterList({ filterTypes, currentFilter, handleCurrentFilter, handleOfferSort}: FilterListProps): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {filterTypes.map((value) => (
        <FilterOption key={value} filterType={value} currentFilter={currentFilter} handleCurrentFilter={handleCurrentFilter} handleOfferSort={handleOfferSort}></FilterOption>
      ))}
    </ul>
  );
}
