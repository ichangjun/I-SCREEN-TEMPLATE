import { account, profile } from "./account"

/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-12 14:55:37
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-02 15:19:47
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/types/servers/login.d.ts
 * @Description: 登录接口类型
 */
export interface LoginParams {
  phone: string // 手机号
  password?: string // 密码
  countrycode?: string // 国家码
  md5_password?: string // md5加密密码, 传了就不需要传password
}

export interface LoginResponse {
  code?: number,
  cookie?: string,
  loginType?: number,
  token?: string,
  profile?: profile,
  account?: account
 }
