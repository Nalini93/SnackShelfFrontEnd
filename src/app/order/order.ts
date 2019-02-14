import { Product } from '../product/product';
import { User } from '../user/user';
export class Order{
    _id: string;
    total: number;
    user: User;
    products: Product[];
    
    
    constructor(_id?:string, total?: number,  user?: User, products?: Product[] ){
    this._id=_id;
    this.total=total;
    this.user=user;
    this.products=products;
    
    }
    }