import { FilterButton, FilterButtonContainer, FilterContainer, Items_Left } from "./TuduFilters.components"

const TuduFilters = ({total,activeFilter,showAllTodos,showActiveTodos,showCompletedTodos,handleClearComplete}) => {
    return (
        <FilterContainer>
            <Items_Left total={total}/>
            <FilterButtonContainer>
                <FilterButton action={()=>showAllTodos()} active={activeFilter} filter={'All'}/>
                <FilterButton action={()=>showActiveTodos()} active={activeFilter} filter={'Active'}/>
                <FilterButton action={()=>showCompletedTodos()} active={activeFilter} filter={'Completed'}/>
            </FilterButtonContainer>
            <button onClick={()=>handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Clear Completed
            </button>
        </FilterContainer>
    )
}
export { TuduFilters }
