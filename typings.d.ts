type UserProps = {
  username: string
  name: string
  headline: string
  photo: string
  views: number
  connections: number
}

type PostProps = {
  _id?: number
  author: string
  degreeConnection: string
  headline: string
  createDate: string
  content: string
  likes: number
}

type RecommendationProps = {
  id: number
  title: string
  headline: string
}
