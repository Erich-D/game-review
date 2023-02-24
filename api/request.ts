import { ENDPOINT } from "./uir"

export type ItemInput = {
    name: string
    description: string
    image: string
  }

export type Item = {
    itemId:number
    name: string,
    description: string,
    image: string
    reviews: Review []
}

export type Review = {
    title:string,
    rating: number,
    description:string,
    author:string
}

// set up a function to call the GraphQL query:
export async function getAllItems(): Promise<Item[]> {
    const query = `
    query getItems {
        items {
          name
          description
          itemId
          image
        }
      }
    `

    const body = JSON.stringify({query});
    const httpResponse = await fetch(ENDPOINT, {method: "POST", body, headers: {"Content-Type": "application/json"}});
    const responseBody = await httpResponse.json();
    const items: Item[] = responseBody.data.items;
    return items;
}

export async function getReviewsByName(name:string):Promise<Item>{
    const query = `query MyQuery($name: String = "") {
        items(name: $name) {
          reviews {
            author
            description
            rating
            title
          }
          name
          image
        }
      }`

    const variables = {name:name}
    const body = JSON.stringify({query:query,variables:variables})
    const httpResponse = await fetch(ENDPOINT, {method: "POST", body, headers: {"Content-Type": "application/json"}});
    const responseBody = await httpResponse.json();
    const item: Item = responseBody.data.items[0];
    return item;
}

export async function addNewGame(game:ItemInput):Promise<Item>{
    const query = `mutation newGame($input: ItemInput!) {
        addItem(input: $input) {
          description
          image
          itemId
          name
        }
      }`

      const variables = {input:game}
      const body = JSON.stringify({query:query,variables:variables})
      const httpResponse = await fetch(ENDPOINT, {method: "POST", body, headers: {"Content-Type": "application/json"}});
      const responseBody = await httpResponse.json();
      const item: Item = responseBody.data.addItem;
      return item;
}