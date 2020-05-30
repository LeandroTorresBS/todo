import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


// centralizando os valores em constante para se precisar utilizar em outros lugares e facilitar a vizualização e edição
const minLength = 3;
const maxLength = 60;

@Component({
  selector: 'app-root', //<app-root>
  templateUrl: './app.component.html',
  //template: '<p>Meu template</p>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mode = 'list';
  public todos: Todo[] = []; //[]
//public todos: any[]; //undefined
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose(this.validation())]
    })
    //this.todos.push(new Todo(1,'Passear com o catioro', false));
    //this.todos.push(new Todo(2, 'Ir ao fukatu fukazu', false));
    //this.todos.push(new Todo(3, 'Cortar a juba', false));
    //this.todos.push('1999');
    //this.todos.push({message: 'teste'});
    //this.todos.push(new Date());

    this.load();
  }

  // separação das validações para ficar mais vizivel
  validation = () => [
    Validators.minLength(minLength),
    Validators.maxLength(maxLength),
    Validators.required
  ];

  add(){
    //this.form.value => { title: 'Titulo'} 
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  // function anónima e lambda
  clear = () => this.form.reset();

  /*alteraTexto(){
    this.title = 'Teste';
  }*/

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index,1);
    }
    this.save();
  }

  markAsDone(todo: Todo){
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.mode = 'list';
  }

  load(){
    const data = localStorage.getItem('todos'); //[{"id":1,"title":"dadad","done":false}]
    // substituição do if por ternario
    this.todos = data ? JSON.parse(data) : [];
  }

  // function anónima e lambda
  changeMode = (mode:string) => this.mode = mode;
}