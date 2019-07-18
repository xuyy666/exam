import React from 'react';
import { connect } from 'dva';

import { Form } from 'antd';
import Adduser from './adduser'
import AddRank from './addRank'
import AddApiJurisdiction from './addApiJurisdiction'
import AddAttempt from './addAttempt'
import RankSetApi from './RankSetApi'
import RankSetView from './RankSetView'
function AddUser(props) {
    return (
        <div className="wrap">
           <div className="title">
               <h2>添加用户</h2>
           </div>
           <div className="cont">
               <div className="user">
                   <Adduser></Adduser>
                   <AddRank></AddRank>
                   <AddApiJurisdiction></AddApiJurisdiction>
                   <AddAttempt></AddAttempt>
                   <RankSetApi></RankSetApi>
                   <RankSetView></RankSetView>
               </div>
           </div>
        </div>
    );
}

AddUser.propTypes = {
};

export default connect()(Form.create()(AddUser));
