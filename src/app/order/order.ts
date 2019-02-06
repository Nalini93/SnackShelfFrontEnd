import { Product } from '../product/product';
import { User } from '../user/user';
export class Order{
    id: string;
    quantity: number;
    total: number;
    user: User;
    products: Product[];
    
    
    constructor(id?:string, quantity?: number,  total?: number,  user?: User, products?: Product[] ){
    this.id=id;
    this.quantity=quantity;
    this.total=total;
    this.user=user;
    this.products=products;
    
    }
    }