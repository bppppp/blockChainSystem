import type { PersonData } from '../type/personDataType'
export const constPersonData:Array<Record<string,string>> = [
    {
        name: '张三',
        sex: '男',
        age: '24',
        phoneNumber: '18012345678',
        id: '991189867438451985',
        province: '浙江省',
        city: '杭州市',
        address: '宏景路23号',
        malady: '感冒',
        result: '白细胞、中性粒细胞升高明显，C反应蛋白升高，血清淀粉样蛋白增高。为细菌感染导致的感冒。',
        advice: '建议多饮水、服药期间忌饮酒，注意休息',
        remark: '无',
        doctor: '李平',
        hospital: '浙江省X医院',
        time: '2023-3-15',
        ppl: '0',
    },
    {
        name: '张三',
        sex: '男',
        age: '24',
        phoneNumber: '18012345678',
        id: '991189867438451985',
        province: '浙江省',
        city: '杭州市',
        address: '宏景路23号',
        malady: '肠胃炎',
        result: '白细胞总数增高很多，尤其是白细胞分类中性粒细胞显著增高，淋巴细胞下降，红细胞总数增加，血红蛋白增高。诊断为急性细菌性胃肠炎。',
        advice: '忌烟，不要吃辛辣食物，可以吃适量酸性食物减少肠胃消化负担',
        remark: '无',
        doctor: '陈浩',
        hospital: '浙江省X医院',
        time: '2023-3-15',
        ppl: '0',
    },
    {
        name: '张三',
        sex: '男',
        age: '24',
        phoneNumber: '18012345678',
        id: '991189867438451985',
        province: '浙江省',
        city: '杭州市',
        address: '宏景路23号',
        malady: '阑尾炎',
        result: '血常规白细胞升高，中性粒细胞比例升高，下腹部CT发现阑尾肿胀，直径超过6mm，阑尾腔内有积液，诊断为阑尾炎',
        advice: '注意休息，避免并发炎症发生；注意饮食，尽量避免刺激性食物的摄入',
        remark: '无',
        doctor: '陈浩',
        hospital: '浙江省X医院',
        time: '2023-3-15',
        ppl: '0',
    },
    {
        name: '李四',
        sex: '男',
        age: '41',
        phoneNumber: '18012341234',
        id: '875963156894236348',
        province: '江苏省',
        city: '南京市',
        address: '成港村17号',
        malady: '脂肪肝',
        result: '血清转氨酶和谷氨酰转肽酶水平，超声诊断前场回声增强，后场回声减弱，诊断为脂肪肝',
        advice: '注意饮食，避免高热量、高脂肪类事务，注意锻炼',
        remark: '无',
        doctor: '姜楠',
        hospital: '江苏省Y医院',
        time: '2023-3-15',
        ppl: '0',
    },
    {
        name: '李四',
        sex: '男',
        age: '41',
        phoneNumber: '18012341234',
        id: '875963156894236348',
        province: '江苏省',
        city: '南京市',
        address: '成港村17号',
        malady: '肾结石',
        result: '左肾集合系统下极可见大小约8x5mm的强回声，后伴声影',
        advice: '多饮水，多锻炼，注意饮食',
        remark: '无',
        doctor: '陆海莹',
        hospital: '江苏省Y医院',
        time: '2023-3-15',
        ppl: '0',
    },
    {
        name: '王五',
        sex: '女',
        age: '52',
        phoneNumber: '18856785678',
        id: '672384159635741596',
        province: '广东省',
        city: '汕头市',
        address: '金凤东路13号',
        malady: '冠心病',
        result: '右冠状动脉近段少许局灶性钙化斑块，管腔明显狭窄，诊断为冠心病',
        advice: '注意饮食，避免油脂类食物；注意休息，避免熬夜；戒烟戒酒，坚持按医嘱规律服药。',
        remark: '无',
        doctor: '杨懿',
        hospital: '广东省X医院',
        time: '2023-3-15',
        ppl: '0',
    }
]


export const messageTitle =  {
    name: '姓名',
    sex: '性别',
    age: '年龄',
    phoneNumber: '联系方式',
    id: '身份证',
    province: '省份',
    city: '城市',
    address: '地址',
    malady: '病因',
    result: '诊断结果',
    advice: '医生建议',
    remark: '备注',
    doctor: '就诊医生',
    hospital: '就诊医院',
    time: '时间',
    ppl: 'ppl等级',
} as Record<string,string>

export const addPagemessageTitle =  {
    name: '姓名',
    sex: '性别',
    age: '年龄',
    phoneNumber: '联系方式',
    id: '身份证',
    province: '省份',
    city: '城市',
    address: '地址',
    malady: '病因',
    result: '诊断结果',
    advice: '医生建议',
    remark: '备注',
    doctor: '就诊医生',
    hospital: '就诊医院',
} as Record<string,string>

export const PPLLeve = [
    {
        value: '0',
        label: '0'
    },
    {
        value: '1',
        label: '1'
    },
    {
        value: '2',
        label: '2'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '4',
        label: '4'
    },
]

export const anonymousPersonDatas = [
    {
        age: '[16,18]',
        sex: '男',
        id: '991***************',
        address: '浙江省',
        malady: '流感'
    },
    {
        age: '[16,18]',
        sex: '男',
        id: '991***************',
        address: '浙江省',
        malady: '疟疾'
    },
    {
        age: '[16,18]',
        sex: '男',
        id: '991***************',
        address: '浙江省',
        malady: '胃溃疡'
    },
    {
        age: '[25,29]',
        sex: '女',
        id: '880***************',
        address: '上海市',
        malady: '流感'
    },
    {
        age: '[25,29]',
        sex: '女',
        id: '880***************',
        address: '上海市',
        malady: '*'
    },
    {
        age: '[25,29]',
        sex: '女',
        id: '880***************',
        address: '上海市',
        malady: '新冠肺炎'
    },
    {
        age: '[32,37]',
        sex: '*',
        id: '758***************',
        address: '江苏省苏州市吴江区',
        malady: '胰腺炎'
    },
    {
        age: '[32,37]',
        sex: '*',
        id: '758***************',
        address: '江苏省苏州市吴江区',
        malady: '流感'
    },
    {
        age: '[32,37]',
        sex: '*',
        id: '758***************',
        address: '江苏省苏州市吴江区',
        malady: '*'
    },
    {
        age: '[32,37]',
        sex: '*',
        id: '758***************',
        address: '江苏省苏州市吴江区',
        malady: '高血压'
    },
    
] as Array<Record<string,string>>