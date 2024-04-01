import request from 'superagent'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getUsersByAuthApi } from '../api/userDbApi'

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

export function useGetUserByAuth(id: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['auth'],
    queryFn: () => getUsersByAuthApi(id),
  })

  return { data, isLoading, isError }
}
