import Mock from 'mockjs'

/**
 * 登陆接口
 */
Mock.mock('/users',{
    'name':'admin',
    'password':'123456',
})
Mock.mock('/homePage/getBaseData',
{
    "yearData":
         {"time":"2018年总览（截至本月）","commitMoney":"2434.59","repayMoney":"272.66","commitCaseCount":315,"repayCaseCount":78,"batchTimes":null,"receivableAge":null,"orgName":null},
    "monthData":
       [
         {"time":"本月","commitMoney":"152.81","repayMoney":"213.12","commitCaseCount":42,"repayCaseCount":1},
         {"time":"上个月","commitMoney":"165.14","repayMoney":"0.00","commitCaseCount":4,"repayCaseCount":0}
       ],
    "quarterData": 
       [
         {"time":"本季度","commitMoney":"152.81","repayMoney":"213.18","commitCaseCount":42,"repayCaseCount":20,},
         {"time":"上季度","commitMoney":"2181.50","repayMoney":"52.04","commitCaseCount":242,"repayCaseCount":76,}
       ]
    }
)
Mock.mock('/casePage/getDropdown',
  {"loanInstitution":[{"code":"高利贷","name":"高利贷"},{"code":"宜人贷","name":"宜人贷"},{"code":"招商银行","name":"招商银行"},{"code":"交通银行","name":"交通银行"},{"code":"现金快贷","name":"现金快贷"},{"code":"广发银行","name":"广发银行"},{"code":"小牛金融","name":"小牛金融"},{"code":"人人贷","name":"人人贷"},{"code":"安心贷","name":"安心贷"},{"code":"天天测试","name":"天天测试"},{"code":"建设银行","name":"建设银行"},{"code":"拍拍贷","name":"拍拍贷"},{"code":"民信贷","name":"民信贷"},{"code":"银行","name":"银行"},{"code":"工商银行","name":"工商银行"}],"productName":[{"code":"信贷3","name":"信贷3"},{"code":"招银1","name":"招银1"},{"code":"信用卡套现","name":"信用卡套现"},{"code":"消费金融","name":"消费金融"},{"code":"信贷","name":"信贷"},{"code":"消费金融1","name":"消费金融1"},{"code":"adsads","name":"adsads"}],"registeredAddress":[{"code":"赣州市","name":"赣州市"},{"code":"天水市","name":"天水市"},{"code":"揭阳市","name":"揭阳市"},{"code":"广东省","name":"广东省"},{"code":"未知","name":"未知"}],"caseArea":[{"code":"广西","name":"广西"},{"code":"湖北","name":"湖北"},{"code":"海南","name":"海南"},{"code":"北京","name":"北京"},{"code":"赣州","name":"赣州"},{"code":"深圳","name":"深圳"},{"code":"湖南","name":"湖南"},{"code":"云安","name":"云安"},{"code":"广东","name":"广东"},{"code":"四川","name":"四川"},{"code":"河南","name":"河南"}],"receivableAge":[{"code":"M0","name":"M0"},{"code":"M1","name":"M1"},{"code":"M2","name":"M2"},{"code":"M3","name":"M3"},{"code":"M4","name":"M4"},{"code":"M5","name":"M5"},{"code":"M6","name":"M6"},{"code":"M6+","name":"M6+"},{"code":"M-1","name":"未知"}],"caseStatus":[{"code":"1","name":"新案件"},{"code":"2","name":"已还款"},{"code":"3","name":"部分还款"},{"code":"4","name":"已撤案"},{"code":"5","name":"外访中"},{"code":"6","name":"跟进中"},{"code":"10","name":"承诺还款"},{"code":"11","name":"已到期"},{"code":"12","name":"智催已结束"},{"code":"13","name":"批量外呼催收中"},{"code":"14","name":"批量外呼已结束"}],"collectionStatus":[{"code":"0","name":"暂未进行催收"},{"code":"1","name":"智能短信催收"},{"code":"2","name":"智能语音催收"},{"code":"3","name":"智能对话催收"},{"code":"4","name":"人工电话催收"},{"code":"5","name":"申请外访"},{"code":"6","name":"外访中"},{"code":"7","name":"已外访继续跟进"},{"code":"8","name":"申请发函"},{"code":"9","name":"函件催收"},{"code":"10","name":"申请公安协催"},{"code":"11","name":"公安协催"},{"code":"-1","name":"催收终止"},{"code":"12","name":"智能催收结束"},{"code":"13","name":"预测式外呼"},{"code":"19","name":"预测式外呼结束"}],"bacthTimes":[{"code":"1","name":"一手"},{"code":"2","name":"二手"},{"code":"3","name":"三手"},{"code":"4","name":"四手"},{"code":"5","name":"五手"},{"code":"6","name":"六手"},{"code":"7","name":"七手"},{"code":"7+","name":"七手+"},{"code":"-1","name":"未知"}],"gender":[{"code":"0","name":"男"},{"code":"1","name":"女"},{"code":"2","name":"未知"}],"telStatus":[{"code":"0","name":"未知"},{"code":"1","name":"有效"},{"code":"2","name":"无效"}],"allotStatus":[{"code":"0","name":"未分配"},{"code":"1","name":"已分配"},{"code":"2","name":"前催状态（智能催收）"},{"code":"3","name":"预测式外呼"}],"batchAllotStatus":null,"caseLabel":null,"isExpiredLabel":null,"followType":[{"code":"1","name":"3天未跟进"},{"code":"2","name":"5天未跟进"},{"code":"3","name":"7天未跟进"}]}
)
Mock.mock('/casePage/caseList',
  {"currentPage":1,"pageSize":15,"totalNum":72,"isMore":1,"totalPage":5,"startIndex":0,"items":[{"caseId":1512,"caseCode":"1800002279","batchCode":"9999","loanInstitution":"小牛金融","productName":"信用卡套现","borrowerName":"测试007","borrowerIdnumber":"620503198108111211","borrowerAge":20,"borrowerPhone":"18866668888","borrowerGender":0,"overdueDay":31,"receivableAge":"M1","bacthTimes":"一手","totalDebtMoney":null,"commitMoney":"59476.82","commitDate":"2017/02/13","limitDate":"2019/02/13","caseArea":"广东","registeredAddress":"天水市","staffName":"","departmentId":5,"departmentName":null,"followDate":"2018/07/19","allotStatus":0,"caseStatus":10,"telStatus":0,"collectionStatus":0,"borrowerGenderName":"男","allotStatusName":"未分配","telStatusName":"未知","collectionStatusName":"暂未进行催收","caseStatusName":"承诺还款"},{"caseId":343,"caseCode":"1800000011","batchCode":"10000","loanInstitution":"银行","productName":null,"borrowerName":"张李静","borrowerIdnumber":"360124199109264819","borrowerAge":null,"borrowerPhone":"13163295910","borrowerGender":1,"overdueDay":88,"receivableAge":"M1","bacthTimes":"一手","totalDebtMoney":null,"commitMoney":"59476.82","commitDate":"2017/02/03","limitDate":"2017/02/03","caseArea":"广东","registeredAddress":"广东省","staffName":"","departmentId":5,"departmentName":null,"followDate":"","allotStatus":0,"caseStatus":11,"telStatus":0,"collectionStatus":-1,"borrowerGenderName":"女","allotStatusName":"未分配","telStatusName":"未知","collectionStatusName":"催收终止","caseStatusName":"已到期"},{"caseId":273,"caseCode":"e6822d25-a3d6-4403-a4f5-4da6a38be33f","batchCode":null,"loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"大萨达撒(cuishouA000002)","departmentId":70,"departmentName":"dfgdfg","followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":336,"caseCode":"e04c430f-25b4-46a3-ac52-9d3ae75eea71","batchCode":null,"loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"大萨达撒(cuishouA000002)","departmentId":70,"departmentName":"dfgdfg","followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":123,"caseCode":"cdd198e7-93c6-4b88-9156-528d3739db7d","batchCode":"HN-YZ-21","loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"","departmentId":70,"departmentName":null,"followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":452,"caseCode":"case_001","batchCode":"10000","loanInstitution":"广发银行","productName":"adsads","borrowerName":"谢非凡","borrowerIdnumber":"440104197901113139","borrowerAge":88,"borrowerPhone":"13822205992","borrowerGender":0,"overdueDay":55,"receivableAge":null,"bacthTimes":"未知","totalDebtMoney":null,"commitMoney":"88888.00","commitDate":"2018/04/18","limitDate":"2018/05/18","caseArea":"深圳","registeredAddress":"赣州市","staffName":"催收测试(cuishou0000213)","departmentId":70,"departmentName":"部门A","followDate":"2018/06/28","allotStatus":1,"caseStatus":11,"telStatus":0,"collectionStatus":4,"borrowerGenderName":"男","allotStatusName":"已分配","telStatusName":"未知","collectionStatusName":"人工电话催收","caseStatusName":"已到期"},{"caseId":121,"caseCode":"c346e211-acbc-4f26-b2e5-335ffb37c92b","batchCode":"HN-YZ-783","loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"","departmentId":70,"departmentName":null,"followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":337,"caseCode":"b5668979-fdb3-47ba-9fbc-dbad6dd51989","batchCode":null,"loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"大萨达撒(cuishouA000002)","departmentId":70,"departmentName":"dfgdfg","followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":418,"caseCode":"b4bb5493-9f81-4937-b299-1fd1fca4d92a","batchCode":"10000","loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"测试(cuishouA000002)","departmentId":70,"departmentName":"123","followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":207,"caseCode":"b13b025b-569a-4f76-abc0-b0795927979d","batchCode":null,"loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"大萨达撒(cuishouA000002)","departmentId":70,"departmentName":"dfgdfg","followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":60,"caseCode":"7f1dd6d9-76e4-424b-83b6-4f4b19b51764","batchCode":"10000","loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"","departmentId":70,"departmentName":null,"followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":188,"caseCode":"6f42d19f-5965-4931-82b3-ce176fcb5d9c","batchCode":"xzxX","loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"大萨达撒(cuishouA000002)","departmentId":70,"departmentName":"dfgdfg","followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":411,"caseCode":"6032b335-80e6-478d-ac34-2e0c5b498f3b","batchCode":"10000","loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"催收一公司(cuishouA000008)","departmentId":70,"departmentName":null,"followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":413,"caseCode":"5e5f96d2-f423-4c44-8ca3-cf4dd0818a45","batchCode":"10000","loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"催收一公司(cuishouA000008)","departmentId":70,"departmentName":null,"followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""},{"caseId":124,"caseCode":"5aba6d1b-fed0-4929-8349-dc826b361a0d","batchCode":"HN-YZ-21","loanInstitution":null,"productName":null,"borrowerName":null,"borrowerIdnumber":null,"borrowerAge":null,"borrowerPhone":null,"borrowerGender":null,"overdueDay":null,"receivableAge":null,"bacthTimes":"","totalDebtMoney":null,"commitMoney":null,"commitDate":"","limitDate":"","caseArea":null,"registeredAddress":null,"staffName":"","departmentId":70,"departmentName":null,"followDate":"","allotStatus":1,"caseStatus":null,"telStatus":null,"collectionStatus":0,"borrowerGenderName":"","allotStatusName":"已分配","telStatusName":"","collectionStatusName":"暂未进行催收","caseStatusName":""}],"countInfo":{"commitMoney":"7337730.80","latestDebtMoney":"1286142.58"}}
)
Mock.mock('/case/getDepartments',
{"data":
  [{children:[
    {children:[{"label":"测试0620","value":93},{"label":"123","value":83},{"label":"dfgdfg","value":73}],"label":"催收A1","value":70},
    {"label":"天天测试","value":94},
    {"label":"预测式外呼","value":95},
    {"label":"11","value":74},
    {"label":"dion阳","value":96}
  ],"label":"催收公司A","value":5}],"code":0,"msg":"操作成功"}
)
Mock.mock('/case/allotCase',{data:[],message:'分案成功',code:0})
Mock.mock('/repay/repayList',
    {"items":[{"caseCode":"1800001006","batchCode":"SZ-GF-2018-04-19","loanInstitution":"广发银行","latestRepayDate":"2018/05/27","totalRepayMoney":"10000.00","reduceMoney":"300.00","latestDebtMoney":"5555.11","borrowerName":"谢非菲","borrowerIdnumber":"360725199405073000","borrowerPhone":"13424280538","caseArea":"深圳","registeredAddress":"赣州市","overdueDay":55,"receivableAge":"M4","bacthTimes":"五手","commitMoney":"99999.00","commitDate":"2018/06/04","limitDate":"2018/06/30","repayStatus":1,"repayStatusName":"已还款"},{"caseCode":"1800000005","batchCode":"SZ-XX-2018-06-29-552445","loanInstitution":"银行","latestRepayDate":"2018/07/04","totalRepayMoney":"141.00","reduceMoney":"0.00","latestDebtMoney":"59476.82","borrowerName":"张李静","borrowerIdnumber":"370686199308049239","borrowerPhone":"13163295988","caseArea":"广东","registeredAddress":null,"overdueDay":88,"receivableAge":"M1","bacthTimes":"一手","commitMoney":"59476.82","commitDate":"2017/02/03","limitDate":"2017/02/03","repayStatus":1,"repayStatusName":"已还款"},{"caseCode":"1800000004","batchCode":"SZ-XX-2018-06-29-552445","loanInstitution":"银行","latestRepayDate":"2018/07/04","totalRepayMoney":"252.00","reduceMoney":null,"latestDebtMoney":"59476.82","borrowerName":"张李静","borrowerIdnumber":"370686199308049239","borrowerPhone":"13163295988","caseArea":"广东","registeredAddress":null,"overdueDay":88,"receivableAge":"M1","bacthTimes":"一手","commitMoney":"59476.82","commitDate":"2017/02/03","limitDate":"2017/02/03","repayStatus":2,"repayStatusName":"部分还款"}],"countInfo":{"commitMoney":"218952.64","latestDebtMoney":"124508.75"}
}
)
Mock.mock('/caseManage/getAnalysisData',
    {"data":[{"caseCount":1,"caseMoney":"0.80","name":"11","id":74,"flag":true},{"caseCount":1,"caseMoney":"52.09","name":"催收A1","id":70,"flag":true},{"caseCount":1,"caseMoney":"52.09","name":"天天测试","id":94,"flag":true},{"caseCount":0,"caseMoney":"0.00","name":"预测式外呼","id":95,"flag":true},{"caseCount":0,"caseMoney":"0.00","name":"dion阳","id":96,"flag":true},{"caseCount":0,"caseMoney":"0.00","name":"lsy催收分公司","id":99,"flag":true}],"code":0,"msg":"操作成功"}
)
Mock.mock('/user/userList',
{"data":{"currentPage":1,"pageSize":15,"totalNum":22,"isMore":1,"totalPage":2,"startIndex":0,"items":[{"id":94,"createDate":"2018-02-08 17:53:03","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.149","lastLoginTime":"2018-07-23 15:07:54","accountType":"ASSIGNEE","userAccount":"cuishouA_A1","status":"enable","userName":"催收一公司","collectionId":null,"infoId":109,"postionId":12,"postionName":"催收管理员","companySign":"cuishouA","sex":"","age":null,"education":"","seniority":"","email":"","telephone":"","position":{"id":12,"positionName":"催收管理员","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":["人人贷","安心贷","民信贷"]},"lockStatus":false,"lockStatusName":"否"},{"id":108,"createDate":"2018-04-04 16:02:29","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.149","lastLoginTime":"2018-07-10 16:32:02","accountType":"ASSIGNEE","userAccount":"cuishouA_5555","status":"enable","userName":"大萨达撒","collectionId":null,"infoId":119,"postionId":12,"postionName":"催收管理员","companySign":"cuishouA","sex":"女","age":null,"education":"小学","seniority":"","email":"","telephone":"","position":{"id":12,"positionName":"催收管理员","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":125,"createDate":"2018-05-24 10:35:40","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.138","lastLoginTime":"2018-07-23 18:10:23","accountType":"ASSIGNEE","userAccount":"cuishouA_wjq","status":"enable","userName":"王加权","collectionId":null,"infoId":132,"postionId":12,"postionName":"催收管理员","companySign":"cuishouA","sex":"男","age":123,"education":"小学","seniority":"12","email":"","telephone":"18656986512","position":{"id":12,"positionName":"催收管理员","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":145,"createDate":"2018-06-28 18:03:11","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.149","lastLoginTime":"2018-07-24 11:07:37","accountType":"ASSIGNEE","userAccount":"cuishouA_1222","status":"enable","userName":"袁哈哈","collectionId":null,"infoId":144,"postionId":12,"postionName":"催收管理员","companySign":"cuishouA","sex":"","age":null,"education":"","seniority":"","email":"","telephone":"","position":{"id":12,"positionName":"催收管理员","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":146,"createDate":"2018-07-10 10:30:52","createOwner":"amanager","description":"","lastLoginIp":null,"lastLoginTime":null,"accountType":"ASSIGNEE","userAccount":"cuishouA_spring","status":"enable","userName":"春天在哪里","collectionId":null,"infoId":145,"postionId":12,"postionName":"催收管理员","companySign":"cuishouA","sex":"","age":null,"education":"","seniority":"","email":"","telephone":"","position":{"id":12,"positionName":"催收管理员","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":["人人贷","安心贷","民信贷"]},"lockStatus":false,"lockStatusName":"否"},{"id":147,"createDate":"2018-07-12 11:15:54","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.160","lastLoginTime":"2018-07-18 10:10:29","accountType":"ASSIGNEE","userAccount":"cuishouA_yldm01","status":"enable","userName":"预测东敏一号","collectionId":null,"infoId":146,"postionId":12,"postionName":"催收管理员","companySign":"cuishouA","sex":"","age":null,"education":"","seniority":"","email":"","telephone":"","position":{"id":12,"positionName":"催收管理员","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":150,"createDate":"2018-07-13 15:23:06","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.150","lastLoginTime":"2018-07-14 01:35:11","accountType":"ASSIGNEE","userAccount":"cuishouA_dion_admin","status":"enable","userName":"管理员","collectionId":null,"infoId":149,"postionId":12,"postionName":"催收管理员","companySign":"cuishouA","sex":"","age":null,"education":"","seniority":"","email":"","telephone":"","position":{"id":12,"positionName":"催收管理员","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":109,"createDate":"2018-04-04 16:13:07","createOwner":"amanager","description":"23","lastLoginIp":"192.168.10.129","lastLoginTime":"2018-05-09 12:02:11","accountType":"ASSIGNEE","userAccount":"cuishouA_ll","status":"enable","userName":"流行","collectionId":null,"infoId":120,"postionId":25,"postionName":"分公司主管","companySign":"cuishouA","sex":"男","age":23,"education":"","seniority":"","email":"","telephone":"","position":{"id":25,"positionName":"分公司主管","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":126,"createDate":"2018-05-25 16:55:12","createOwner":"amanager","description":"dsadsadsa","lastLoginIp":"127.0.0.1","lastLoginTime":"2018-05-31 15:49:47","accountType":"ASSIGNEE","userAccount":"cuishouA_slx","status":"enable","userName":"沈凌霄","collectionId":null,"infoId":133,"postionId":25,"postionName":"分公司主管","companySign":"cuishouA","sex":"女","age":20,"education":"高中","seniority":"1","email":"391056441@qq.com","telephone":"25454545545","position":{"id":25,"positionName":"分公司主管","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":144,"createDate":"2018-06-28 11:54:21","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.149","lastLoginTime":"2018-07-10 16:33:20","accountType":"ASSIGNEE","userAccount":"cuishouA_www","status":"enable","userName":"大王","collectionId":null,"infoId":143,"postionId":25,"postionName":"分公司主管","companySign":"cuishouA","sex":"","age":null,"education":"","seniority":"","email":"","telephone":"","position":{"id":25,"positionName":"分公司主管","description":null,"positionType":"ADMINISTRATOR"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":119,"createDate":"2018-04-25 15:37:53","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.100","lastLoginTime":"2018-07-24 15:00:27","accountType":"ASSIGNEE","userAccount":"cuishouA_wangjq","status":"enable","userName":"王加权","collectionId":null,"infoId":126,"postionId":26,"postionName":"催收员","companySign":"cuishouA","sex":"男","age":null,"education":"","seniority":"","email":"","telephone":"13409679789","position":{"id":26,"positionName":"催收员","description":null,"positionType":"STAFF"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":120,"createDate":"2018-04-26 18:37:46","createOwner":"amanager","description":"123123123","lastLoginIp":"192.168.10.193","lastLoginTime":"2018-07-20 11:40:04","accountType":"ASSIGNEE","userAccount":"15277432764","status":"enable","userName":"韦实雄","collectionId":null,"infoId":127,"postionId":26,"postionName":"催收员","companySign":"cuishouA","sex":"女","age":null,"education":"研究生","seniority":"2","email":"","telephone":"15277432564","position":{"id":26,"positionName":"催收员","description":null,"positionType":"STAFF"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":121,"createDate":"2018-04-27 10:28:24","createOwner":"amanager","description":"测试外访app","lastLoginIp":"192.168.10.100","lastLoginTime":"2018-07-18 16:12:19","accountType":"ASSIGNEE","userAccount":"cuishouA_Eden","status":"enable","userName":"孙元东","collectionId":null,"infoId":128,"postionId":26,"postionName":"催收员","companySign":"cuishouA","sex":"男","age":27,"education":"大学","seniority":"6","email":"edensyd@sina.com","telephone":"13409679709","position":{"id":26,"positionName":"催收员","description":null,"positionType":"STAFF"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":123,"createDate":"2018-05-23 17:18:28","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.149","lastLoginTime":"2018-07-10 16:33:48","accountType":"ASSIGNEE","userAccount":"cuishouA_test","status":"enable","userName":"测试","collectionId":null,"infoId":130,"postionId":26,"postionName":"催收员","companySign":"cuishouA","sex":"女","age":null,"education":"","seniority":"","email":"","telephone":"","position":{"id":26,"positionName":"催收员","description":null,"positionType":"STAFF"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"},{"id":127,"createDate":"2018-05-25 17:18:33","createOwner":"amanager","description":"","lastLoginIp":"192.168.10.154","lastLoginTime":"2018-05-25 17:18:48","accountType":"ASSIGNEE","userAccount":"cuishouA_apptest1","status":"enable","userName":"催收助手测试","collectionId":null,"infoId":134,"postionId":26,"postionName":"催收员","companySign":"cuishouA","sex":"","age":null,"education":"","seniority":"","email":"","telephone":"","position":{"id":26,"positionName":"催收员","description":null,"positionType":"STAFF"},"caseAuthorityVo":{"loanInstitutions":[]},"lockStatus":false,"lockStatusName":"否"}],"countInfo":null},"code":0,"msg":"操作成功"}
)
Mock.mock('/user/logout',{
  data:'',message: '退出成功',code:0
})
export default Mock