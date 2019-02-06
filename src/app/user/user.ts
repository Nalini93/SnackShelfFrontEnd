export class User{
    id: string;
    name: string;
    surname: string;
    username: string;
    password:string;
    
    
    constructor(id: string, name: string,  surname: string, username: string, password:string){
    this.id = id;
    this.name=name;
    this.surname=surname;
    this.username=username;
    this.password=password;
    
    }
    }