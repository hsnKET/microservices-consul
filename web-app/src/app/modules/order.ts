export interface Order {

  id:number,
  createdAt:number,
  status:string,
  customerId:number,
  customer:number,
}

export interface Embedded{
  products:Order[];

}
export interface OrderResponse{
  _embedded:Embedded;
  page:Page;
}

export interface Page{
  size:number;
  totalElements:number;
  totalPages:number;
  number:number;
}
