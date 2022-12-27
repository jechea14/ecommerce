import {ProductData} from '../../../utils/data'
import type {Product} from '../../../interfaces/index'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(ProductData)
}