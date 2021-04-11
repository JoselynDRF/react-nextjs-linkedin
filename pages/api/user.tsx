import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    name: 'John Doe',
    headline: 'Software developer',
    photo: '/cover.jpeg',
    views: 550,
    connections: 110
  })
}
