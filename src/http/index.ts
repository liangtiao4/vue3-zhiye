import axios, { AxiosResponse } from 'axios'
import { postItem } from '@/store/type'

interface myData{
  data: string,
  code?: number
}

export function requestLogin (email: string, password: string): Promise<AxiosResponse<myData>> {
  return axios.post('user/login', { email, password })
}

export function requestUser (): Promise<AxiosResponse<myData>> {
  return axios.post('user/current')
}

export function requestColumnList (): Promise<AxiosResponse<myData>> {
  return axios.get('column/list')
}

export function requestColumnItem (id: number): Promise<AxiosResponse<myData>> {
  return axios.get(`column/detail?id=${id}`)
}

export function requestPostList (): Promise<AxiosResponse<myData>> {
  return axios.get('post/list')
}

export function requestCreatePost (item: postItem): Promise<AxiosResponse<myData>> {
  return axios.post('post/create', { ...item })
}
