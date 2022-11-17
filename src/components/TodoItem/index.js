import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteList} = props
  const {title, id} = todoDetails

  const onDeleted = () => {
    deleteList(id)
  }

  return (
    <li className="list-container">
      <div className="lists">
        <p className="title">{title}</p>
        <button className="button" type="button" onClick={onDeleted}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
