import React, {useState} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItemForm from '../AddItemForm';

import './App.css';


const App = () => {
    const [todoData, setTodoData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [status, setStatus] = useState('all');
    const [maxId, setMaxId] = useState(100);

    const createItem = (label) => {
        const newItem = {
            label,
            done: false,
            important: false,
            id: maxId
        };
        setMaxId(maxId + 1)
        return newItem
    }

    const toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    const deleteItem = (id) => {
        const idx = todoData.findIndex((el) => el.id === id);

        const newArray = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1)
        ]

        setTodoData(newArray);
    };

    const addItem = (text) => {
        const newItem = createItem(text);

        const newList = [
            ...todoData,
            newItem
        ]

        setTodoData(newList)
    }

    const onToggleImportant = (id) => {
        setTodoData(toggleProperty(todoData, id, 'important'));
    }

    const onToggleDone = (id) => {
        setTodoData(toggleProperty(todoData, id, 'done'));
    }

    const onChangeSearchHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const filterStatus = (status) => {
        setStatus(status);
    }

    const doneCount = todoData.filter((item) => {
        return item.done
    }).length;
    const todoCount = todoData.length - doneCount;

    return (
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel
                    list={todoData}
                    value={searchValue}
                    updateValue={onChangeSearchHandler}
                />
                <ItemStatusFilter
                  filterStatus={filterStatus}
                  activeStatus={status}
                />
            </div>
            <TodoList
                todos={todoData}
                searchValue={searchValue}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
                status={status}
            />
            <AddItemForm
                onAdding={addItem}
            />
        </div>
    );

};

export default App;