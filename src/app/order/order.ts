import { Product } from '../product/product';
import { User } from '../user/user';
export class Order{
    id: string;
    total: number;
    user: User;
    products: Product[];
    
    
    constructor(id?:string, total?: number,  user?: User, products?: Product[] ){
    this.id=id;
    this.total=total;
    this.user=user;
    this.products=products;
    
    }
    }