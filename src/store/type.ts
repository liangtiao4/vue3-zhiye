export interface userProp {
  username?: string,
  isLogin: boolean
}
export interface postItem {
  readonly id?: string,
  title: string,
  content: string,
  imgUrl?: string,
  createTime?: string,
  columnId: string,
  editer?: string
}
export interface columnItem {
  readonly _id: string,
  title: string,
  des: string,
  imgUrl: string
}
