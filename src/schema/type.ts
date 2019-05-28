export interface resTypes {
    res?: number
    errors?: string
    data?: any
}

export interface getProductsTypes {
    ID: number
    Name: string
    Price: number
    Cost: number
    Description: string
    Img: string
    Update_time: string
}

export interface addProductTypes {
    Name: string
    Price: number
    Cost: number
    Description: string
}
