// use alert or console.log for testing purposes
// when someone puts something in the input box, do _____

// document in our webpage, find this element - get the todo input
const todoInput = document.getElementById('todo-input')


// add an event listener to the todoInput
todoInput.addEventListener('keypress', function (e) {

    // if the keypress is the enter key
    if (e.key === 'Enter') {
        e.preventDefault(); // tell the input to NOT do what it would usually do
        const todo = e.target.value; // keep a list
        const todoListEle = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        const removal = document.createElement('span');
        removal.classList.add('todo-list__exit');
        listItem.classList.add('todo-list__item');
        removal.innerText = 'X';
        listItem.innerText = todo;
        todoListEle.append(listItem);
        listItem.append(exit);
        e.target.value=''; // empty the input so we are ready to add a new item
        const listItemArr = document.querySelectorAll('li');
        const removalButtonArr = document.querySelectorAll('span');
        for (let i = 0; i < removalButtonArr.length; i++) {
            removalButtonArr[i].addEventListener('click', (e) => { 
                listItemArr[i].remove();
            })
        }
    }
})

const todoListEle = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        const exit = document.createElement('span');
        exit.classList.add('todo-list__exit');
        const createListEle = document.createElement('li');
        listItem.classList.add('todo-list__item');
        exit.innerText = 'X';
        listItem.innerText = todo;
        todoListEle.append(listItem);
