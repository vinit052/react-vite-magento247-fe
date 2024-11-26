import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`query($searchText: String,$pageSize: Int, $currentPage:Int){
  products(search: $searchText, pageSize: $pageSize, currentPage: $currentPage) {
    total_count
    items {
      name
      sku
      thumbnail{
        url
      }
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
      current_page
    }
  }
}`;