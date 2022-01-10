export const HomepagePostsQuery = `

    query HomepagePosts {
      posts {
          id
          title
          slug
          featured_image {
              id
          }
          body
      }
    }

`;

export const HomepageProductsQuery = `
    #graphql
    query HomepageProducts {
        products {
            id
            product_name
            price
            product_image {
                id
            }
            Category {
                categories_id {
                    id
                    category_name
                }
            }
        }
    }
`;
