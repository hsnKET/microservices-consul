export interface Product {

  id:number,
  name:string,
  price:number,
  quantity:number
}

export interface Embedded{
  products:Product[];

}
export interface ProductResponse{
  _embedded:Embedded;
  page:Page;
}
export interface Page{
  size:number;
  totalElements:number;
  totalPages:number;
  number:number;
}
