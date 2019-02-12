export class User{
    _id?: string;
    name?: string;
    surname?: string;
    username?: string;
    password?:string;
    
    
    constructor(_id?: string, name?: string,  surname?: string, username?: string, password?:string){
    this._id=_id;
    this.name=name;
    this.surname=surname;
    this.username=username;
    this.password=password;
    
    }
    }