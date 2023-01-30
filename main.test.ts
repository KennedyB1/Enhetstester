/**
 * @jest-environment jsdom
 */

import * as main from '../ts/main';
import * as func from '../ts/functions';
import { Todo } from '../ts/models/Todo';
import { displayError, toggleTodo, clearTodos } from "../ts/main";
import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";


beforeEach(() => {
	document.body.innerHTML = '';
});

afterEach(() => {
	jest.restoreAllMocks();
});



test('should clear todos', () => {
	document.body.innerHTML =
		'<ul id="todos" class="todo">' +
		'<li class="todo__text">Todo 1</li>' +
		'</ul>';

	const todos: Todo[] = [
		{ text: 'Todo 1', done: false },
	];

	const spy = jest.spyOn(func, 'removeAllTodos').mockReturnValue();


	main.clearTodos(todos);


	expect(spy).toHaveBeenCalled();


});
////////////////////////////////////////////////////////////////////////
test('Should create HTML', () => {
	document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

	const todos: Todo[] = [
		{ text: 'Todo 1', done: false },
		{ text: 'Todo 2', done: true },

	];

	const todosExpect =
		'<ul id="todos" class="todo">' +
		'<li class="todo__text">Todo 1</li>' +
		'<li class="todo__text--done todo__text">Todo 2</li>' +
		'</ul>';

	main.createHtml(todos);

	expect(document.querySelector('#todos')?.outerHTML).toEqual(todosExpect);
	//expect(toggleTodo).toHaveBeenCalledWith(todos[i]);
	// expect(toggleTodo).toHaveBeenCalledWith('click');
	//	expect().toHaveBeenCalled();
});

test('should display error message', () => {
	document.body.innerHTML =
		`<div id="error" class="error"></div>`;

	const errorText = 'Error text';
	main.displayError(errorText, true);

	const errorDiv = document.querySelector('#error');
	expect(errorDiv?.classList.contains('show')).toBeTruthy();
	expect(errorDiv?.innerHTML).toBe('Error text');
});

test('Should remove error', () => {
	document.body.innerHTML =
		`<div id="error" class="error show"></div>`;

	const errorText = 'Error text';
	main.displayError(errorText, false);

	const errorDiv = document.querySelector('#error');
	expect(errorDiv?.classList.contains('show')).toBeFalsy();
});

test('Should create new todo', () => {
	document.body.innerHTML =
		`<ul id="todos" class="todo"></ul>`;

	const todos: Todo[] = [];
	const todoText = 'Todo text';



	main.createNewTodo(todoText, todos);

	expect(todos.length).toBe(1);

});

test('should not create new todo', () => {
	document.body.innerHTML =
		'<div id="error" class="error"></div>' +
		'<ul id="todos" class="todo"></ul>';

	const todoText = 'X';
	const todos: Todo[] = [];

	main.createNewTodo(todoText, todos);

	expect(todos.length).toBe(0);
});

test('Should toggle todo', () => {
	document.body.innerHTML =
		'<ul id="todos" class="todo">' +
		'<li class="todo__text">Todo 1</li>' +
		'</ul>';

	const todos: Todo[] = [
		{ text: 'Todo 1', done: false },
	];

	const spy = jest.spyOn(func, 'changeTodo');



	main.toggleTodo(todos[0]);

	expect(spy).toHaveBeenCalled();
});

/*
test('test', () => {


})*/


