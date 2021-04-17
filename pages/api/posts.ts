import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([
    {
      id: 1,
      author: 'Welcome to Linkedin',
      degreeConnection: '2nd',
      headline: 'IT Bussiness Manager',
      createDate: '10h',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
      likes: 30
    },
    {
      id: 2,
      author: 'My First Post',
      degreeConnection: '3rd+',
      headline: 'Programmer',
      createDate: '1h',
      content: 'Lorem ipsum dolor sit amet.',
      likes: 1
    }
  ])
}
