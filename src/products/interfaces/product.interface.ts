export interface Product {
    id: string
    name: string
    qty: number
    price: number
    productDetails: ProductDetails
}


export interface ProductDetails {
    id?: string
    dimension?: string
    partNumber?: string
    manufacturer?: string
    weight?: number
    origin?: string
}