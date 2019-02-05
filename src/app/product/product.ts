export class Product{
    id: string;
    type: string;
    productName: string;
    companyName: string;
    productionName:string;
    expirationDate: string;
    price: number;
    
    constructor(id: string, type: string,  productName: string, companyName: string, productionName:string, expirationDate: string, price: number ){
    this.id = id;
    this.type=type;
    this.productName=productName;
    this.companyName=companyName;
    this.productionName=productionName;
    this.expirationDate=expirationDate;
    this.price=price;
    }
    }