export enum PathName {
    message = '首页', 
    dateHandle =  '医疗数据处理',
    dataManagement = '医疗数据管理',
    dataAuthorization = '数据详情',
    dataDetail = '数据授权',
    DataShare = '医疗数据共享'
}

export const pathNameList = {
    'message':'首页', 
    'dateHandle':  '医疗数据处理',
    'dataManagement': '医疗数据管理',
    'dataAuthorization': '数据详情',
    'dataDetail': '数据授权',
    'dataShare':'医疗数据共享',
} as Record<string,string>

export const pathNameMap = new Map([
    ['message','首页'],
    ['dateHandle','医疗数据处理'],
    ['dataManagement','医疗数据管理'],
    ['dataAuthorization','数据详情'],
    ['dataDetail','数据授权'],
    ['dataShare','医疗数据共享']
])

interface PathNameList {
    message:string, 
    dateHandle:string,
    dataManagement:string,
    dataAuthorization:string,
    dataDetail:string,
    dataShare:string,
}