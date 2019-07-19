import Addquestion from '../views/questionmanage/addquestion'//试题管理 添加试题
import Questionclassifiy from '../views/questionmanage/questionclassifiy'//试题管理 试题分类
import Lookquestion from '../views/questionmanage/lookquestion'//试题管理 添加试题
import Addusers from '../views/usersmanage/addusers'; // 用户管理 添加用户
import Usershow from '../views/usersmanage/usershow'; // 用户管理 用户展示

import Addexam from '../views/exammanage/addexam';  // 考试管理 添加考试
import Examlist from '../views/exammanage/examlist'; // 考试管理 考试列表
import Grademanage from '../views/grademanage/grademanage'; // 班级管理 班级管理
import Classroomanage from '../views/grademanage/classroomanage'; // 班级管理 教室管理
import Studentmanage from '../views/grademanage/studentmanage'; // 班级管理 学生管理
import Awaitingapp from '../views/markingmanage/awaitingapp'; // 阅卷管理 待批班级
import Itemdetails from '../views/lookquedetail/questionsdetail'//试题详情
import Edititem from '../views/lookquedetail/edititem' //编辑详情

export default {
    routes:[
        {
            name:'router.questions',
            path:'',
            children:[
                {
                    name:'router.questions.add',
                    path:'../views/questionmanage/addquestion',
                    view_id:'../views/questionmanage/addquestion',
                    component:Addquestion,
                },
                {
                    name:'router.questions.type',
                    path:'../views/questionmanage/questionclassifiy',
                    view_id:'../views/questionmanage/questionclassifiy',
                    component:Questionclassifiy,
                },
                {
                    name:'router.questions.classi',
                    path:'../views/questionmanage/lookquestion',
                    view_id:'../views/questionmanage/lookquestion',
                    component:Lookquestion,
                },
             
            ]
        },


        {
            name:'router.user',
            path:'',
            children:[
                {
                    name:'router.user.add',
                    path:'../views/usersmanage/addusers',
                    view_id:'../views/usersmanage/addusers',
                    component:Addusers,
                },
                {
                    name:'router.user.show',
                    path:'../views/usersmanage/usershow',
                    view_id:'../views/usersmanage/usershow',
                    component:Usershow,
                },
            ]
        },


        {
            name:'router.exam',
            path:'',
            children:[
                {
                    name:'router.exam.add',
                    path:'../views/exammanage/addexam',
                    view_id:'../views/exammanage/addexam',
                    component:Addexam,
                },
                {
                    name:'router.exam.list',
                    path:'../views/exammanage/examlist',
                    view_id:'../views/exammanage/examlist',
                    component:Examlist,
                },
            ]
        },

        {
            name:'router.class',
            path:'',
            children:[
                {
                    name:'router.class.classi',
                    path:'../views/grademanage/grademanage',
                    view_id:'../views/grademanage/grademanage',
                    component:Grademanage,
                },
                {
                    name:'router.class.room',
                    path:'../views/grademanage/classroomanage',
                    view_id:'../views/grademanage/classroomanage',
                    component:Classroomanage,
                },
                {
                    name:'router.class.study',
                    path:'../views/grademanage/studentmanage',
                    view_id:'../views/grademanage/studentmanage',
                    component:Studentmanage,
                },
            ]
        },

        {
            name:'router.juan',
            path:'',
            children:[
                {
                    name:'router.juan.not',
                    path:'../views/lookquedetail/edititem',
                    view_id:'../views/lookquedetail/edititem',
                    component:Edititem,
                },
            ]
        },
    ]
}