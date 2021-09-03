import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../utils/database'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { db } = await connect()
  const collection = db.collection('posts')

  switch (req.method) {
    case 'GET':
      return res.status(200).json(await collection.find({}).toArray())
    case 'POST':
      return res.status(200).json(await collection.insertOne(req.body))
    default:
      return res.status(400).json({ message: 'Wrong request method' })
  }
}
