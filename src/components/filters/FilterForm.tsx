import { useState } from 'react';
import { FilterList } from './FIlterList';

type FilterFormProps = {
  filterTypes: string[];
  handleOfferSort: (sortBy: string) => void;
}

export function FilterForm({ filterTypes, handleOfferSort }: FilterFormProps): JSX.Element {
  const [currentFilter, setCurrentFilter] = useState('Popular');
  const handleCurrentFilter = (chosenFilter: string) => {
    setCurrentFilter(chosenFilter);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <FilterList filterTypes={filterTypes} currentFilter={currentFilter} handleCurrentFilter={handleCurrentFilter} handleOfferSort={handleOfferSort}></FilterList>
    </form>
  );
}
