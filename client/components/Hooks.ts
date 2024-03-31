import request from 'superagent'
import { useMutation, useQuery } from '@tanstack/react-query'

export function useGetById(fn: any, key: any) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [key],
    queryFn: () => fn,
  })

  return { data, isLoading, isError }
}

export function useAddData(key: any, fn: any) {
  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: () => fn,
  })
  return mutation
}
