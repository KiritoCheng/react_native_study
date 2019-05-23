import { graphql } from "react-relay";

export interface getProductsProps {
    res: any
    errors: any
    data: {
        ID: number
        Name: number
        Price: string
        Cost: number
        Description: string
        Img: string
        Update_time: string
    }
}
export const test = graphql`
    query getProducts {
        res
        errors
        data {
            ID
            Name
            Price
            Cost
            Description
            Img
            Update_time
        }
  }
`
