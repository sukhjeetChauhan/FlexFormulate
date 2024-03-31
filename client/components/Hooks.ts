import request from 'superagent'
import { useQuery } from '@tanstack/react-query'

export function useGetById(fn: any, key: any) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [key],
    queryFn: () => fn,
  })

  return { data, isLoading, isError }
}
