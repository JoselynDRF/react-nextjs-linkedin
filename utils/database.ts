import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DATABASE_URL)

const connect = async () => {
  await client.connect()

  const db = client.db('linkedin')
  return { db, client }
}

export default connect
