import useSWR from 'swr'
import api from '../server/api'

export function useFetch<Data>(url: string) {
  const { data, mutate } = useSWR<Data>(url, async url => {
    const response = await api.get(url)
    return response.data
  })

  return { data, mutate }
}
