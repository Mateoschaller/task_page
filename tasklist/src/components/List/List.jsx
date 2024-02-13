import { Tudu } from "../tudu"
import { TuduFilters } from "../Tudu_filter/TuduFilters"

const List = ({todos, handleSetComplete , handleDelete,activeFilter,showAllTodos,showActiveTodos,showCompletedTodos,handleClearComplete}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo=>{
                return(
                    <Tudu 
                    key={todo.id} 
                    todo={todo} 
                    handleSetComplete={handleSetComplete}
                    handleDelete={handleDelete}
                    />
                )
            })}
            <TuduFilters total={todos.length} activeFilter={activeFilter} showAllTodos={showAllTodos} showActiveTodos={showActiveTodos} showCompletedTodos={showCompletedTodos} handleClearComplete={handleClearComplete} 
/>
        </div>
    )
}
export { List }
