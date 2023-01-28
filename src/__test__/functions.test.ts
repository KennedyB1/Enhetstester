import { addTodo, changeTodo, removeAllTodos } from '../ts/functions';
import { Todo } from '../ts/models/Todo';

test('Should ADD todo', () => {

	const todoTextInput = 'Todo text';
	const todos: Todo[] = [];
	const result = addTodo(todoTextInput, todos);

	expect(result.success).toBeTruthy();
});

test('Should NOT add new todo', () => {

	const todoTextInput = 'N';
	const todos: Todo[] = [];
	const result = addTodo(todoTextInput, todos);

	expect(result.success).toBeFalsy();
});

test('should change todo state', () => {

	const todo: Todo = { text: 'Todo', done: false };

	changeTodo(todo);

	expect(todo.done).toBeTruthy();
});

test('should remove all todos', () => {
	const todo: Todo[] = [
		{ text: 'Todo 1', done: false },
		{ text: 'Todo 2', done: false },
		{ text: 'Todo 3', done: false },
	];
	removeAllTodos(todo);

	expect(todo.length).toBe(0);
});
