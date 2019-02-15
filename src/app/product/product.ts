export class Product{
    id: string;
    type: string;
    productName: string;
    companyName: string;
    productionDate:string;
    expirationDate: string;
    price: number;
    quantity: number;
    
    
    constructor(id: string, type: string,  productName: string, companyName: string, productionDate:string, expirationDate: string, price: number, quantity: number ){
    this.id = id;
    this.type=type;
    this.productName=productName;
    this.companyName=companyName;
    this.productionDate=productionDate;
    this.expirationDate=expirationDate;
    this.price=price;
    this.quantity=quantity;
    }
    }