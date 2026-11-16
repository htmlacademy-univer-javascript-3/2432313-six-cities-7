type SortingOptionsProps = {
  currentSorting: string;
  onSortingChange: (sorting: string) => void;
};

const SORTING_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export default function SortingOptions({ currentSorting, onSortingChange }: SortingOptionsProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORTING_OPTIONS.map((option) => (
          <li
            key={option}
            className={`places__option ${option === currentSorting ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onSortingChange(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}
