import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    listItems: initialTodosList,
  }

  onDeleteListItem = id => {
    const {listItems} = this.state
    const lists = listItems.filter(each => each.id !== id)

    this.setState({listItems: lists})
  }

  render() {
    const {listItems} = this.state
    return (
      <div className="simple-todo-container">
        <div className="simple-todo-card">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {listItems.map(eachItem => (
              <TodoItem
                todoDetails={eachItem}
                key={eachItem.id}
                deleteList={this.onDeleteListItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
