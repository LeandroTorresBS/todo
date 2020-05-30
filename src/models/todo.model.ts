export class Todo{
    //ctor tab tab
    constructor(
        public id: Number,
        public title: String,
        public done: Boolean
    ) { }
}

// mesma coisa feita de uma forma menos simplificada
// export class Todo{
//     public id: Number;
//     public title: String;
//     public done: Boolean;
    
//     constructor(id: Number, title: String, done: Boolean) {
//         this.id = id;
//         this.title = title;
//         this.done = done;
//     }
// }