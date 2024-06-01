import { TodoItem } from "./models/todoItem";
import { TodoList } from "./services/todoList";

const todoList = new TodoList<{ message: string; dueDate: Date; category: string }>();

const item1 = new TodoItem(1, { message: "Tejet, kenyeret venni", dueDate: new Date(), category: "personal" });
const item2 = new TodoItem(2, { message: "Ügyfelet felhívni", dueDate: new Date(), category: "work" });
const item3 = new TodoItem(3, { message: "Prezentációt készíteni", dueDate: new Date(), category: "work" });
const item4 = new TodoItem(4, { message: "Medencét kitakarítani", dueDate: new Date(), category: "personal" });

todoList.addItem(item1);
todoList.addItem(item2);
todoList.addItem(item3);
todoList.addItem(item4);

console.log("All items:");
console.log(todoList.listItems());
