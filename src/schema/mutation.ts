export const addProduct = `mutation addProduct($Name:String!,$Price:Float,$Cost:Float,$Description:String,$Img:String){
    addProduct(Name:$Name,Price:$Price,Cost:$Cost,Description:$Description,Img:$Img){
      res
      errors
    }
}`