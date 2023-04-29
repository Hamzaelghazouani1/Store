export interface Product {
  id: number
  name: string
  price: number
  rating: number
  img: Img
  desc: string
  about: string[]
  color:string[]
  detail: Detail[]
}

export interface Img {
  base_img: string
  img: string
}

export interface Detail {
  description: string
  value: string
}
