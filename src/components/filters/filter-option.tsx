type FilterOptionProps = {
  filterType: string;
  currentFilter: string;
  handleCurrentFilter: (filterType: string) => void;
  handleOfferSort: (sortBy: string) => void;
};

export function FilterOption({ filterType, currentFilter, handleCurrentFilter, handleOfferSort}: FilterOptionProps): JSX.Element {
  return (
    <li className={`places__option ${currentFilter === filterType ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => {
      handleCurrentFilter(filterType);
      handleOfferSort(filterType);
    }}
    >{filterType}
    </li>
  );
}
