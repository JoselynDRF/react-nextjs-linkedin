import useSWR from 'swr'
import api from '../utils/api'

export function useFetch<Data>(url: string, initialData: Data) {
  const { data, mutate } = useSWR<Data>(
    url,
    async url => {
      const response = await api.get(url)
      return response.data
    },
    {
      initialData,
      revalidateOnMount: true
    }
  )

  return { data, mutate }
}
