/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 19:29:37
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-01 20:13:58
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/types/config.d.ts
 * @Description: 工程设置hooks 声明文件
 */
export interface GlobConfig {
  // Site title
  title: string;
  // Site description
  description: string
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}
