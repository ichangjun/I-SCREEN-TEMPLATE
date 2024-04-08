/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-12 14:54:33
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-02 14:57:32
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/api/login.ts
 * @Description: 登录相关接口请求
 */
import { LoginParams } from '@/types/services/login'
import { ApiPath } from '@/constants/api-path'
import Http from '@/utils/request-api'

/**
 * 根据手机号&密码登录
 * @param data
 * @returns
 */
export const login = (data: LoginParams) => {
  return Http.request({
    url: ApiPath.LoginByPhone,
    method: 'post',
    data,
  }, {
    ignoreLoading: true
  })
}
