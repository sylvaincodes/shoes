export const API_URL = "http://localhost:8000/api";
export const ASSET_URL = "http://localhost:8000/";
export const CATEGRIE_FOLDER="media/categories/";
export const SLIDE_FOLDER="media/slides/";


export const getSortedProducts = (products, sortType, sortValue) => {
  if (products && sortType && sortValue) {
    if (sortType === "category") {
        return products.filter(
          product => product.category === sortValue
        )
      }
  }else{ 
    return products;
  }
} 