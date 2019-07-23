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
// import Itemdetails from '../views/lookquedetail/questionsdetail'//试题详情
// import Edititem from '../views/lookquedetail/edititem' //编辑详情

export default {
    routes:[
        {
            name:'router.questions',
            path:'',
            children:[
                {
                    name:'router.questions.add',
                    path:'/index/addquestion',
                    view_id:'main-addQuestions',
                    component:Addquestion,
                },
                {
                    name:'router.questions.classify',
                    path:'/index/questionclassifiy',
                    view_id:'main-watchQuestions',
                    component:Questionclassifiy,
                },
                {
                    name:'router.questions.type',
                    path:'/index/lookquestion',
                    view_id:'main-questionsType',
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
                    path:'/index/addusers',
                    view_id:'main-addUser',
                    component:Addusers,
                },
                {
                    name:'router.user.show',
                    path:'/index/usershow',
                    view_id:'main-showUser',
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
                    path:'/index/addexam',
                    view_id:'main-addExam',
                    component:Addexam,
                },
                {
                    name:'router.exam.list',
                    path:'/index/examlist',
                    view_id:'main-menu',
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
                    path:'/index/grademanage',
                    view_id:'main-grade',
                    component:Grademanage,
                },
                {
                    name:'router.class.room',
                    path:'/index/classroomanage',
                    view_id:'main-room',
                    component:Classroomanage,
                },
                {
                    name:'router.class.study',
                    path:'/index/studentmanage',
                    view_id:'main-student',
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
                    path:'/index/awaitingapp',
                    view_id:'main-examPaperClassmate',
                    component:Awaitingapp,
                },
            ]
        }
    ]
}

