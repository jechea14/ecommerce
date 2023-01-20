import {ProductData} from '../../../utils/data'
import type {Product} from '../../../interfaces/index'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseError = {
    message: string
  }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = ProductData.filter((product) => product.productType === "Switch")
    console.log(filtered)
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({message: `${id} not found`})
}