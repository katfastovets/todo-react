import React, {useState} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItemForm from '../AddItemForm';

import './App.css';


const App = () => {

    let maxId = 100;

    const createItem = (label) => {
        return {
            label,
            done: false,
            important: false,
            id: maxId++
        }
    }

    const initialTodoData = [
        createItem('One1'),
        createItem('Two2'),
        createItem('Third3'),
    ];

    const [todoData, setTodoData] = useState(initialTodoData);


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

    const doneCount = todoData.filter((item) => {
        return item.done
    }).length;
    const todoCount = todoData.length - doneCount;

    return (
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter/>
            </div>
            <TodoList
                todos={todoData}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
            />
            <AddItemForm
                onAdding={addItem}
            />
        </div>
    );

};

export default App;