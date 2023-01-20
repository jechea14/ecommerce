// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
    id: number
    name: string
  }

export type Menu = {
  id: number
  name: string
}

export type Product = {
    id: number
    name: string
    slug: string
    price: number
    amount?: number
    image: Array<string>
    description: string
    feature?: Array<string>
    productType: "Keycap" | "Switch" | "Keyboard"
    switchType?: "Linear" | "Tactile" | "Clicky"
}