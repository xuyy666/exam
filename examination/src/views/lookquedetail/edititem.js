import React from 'react';
import { connect } from 'dva';


function Edititem(){
    return (
        <div>
            编辑试题
        </div>
    )

}
Edititem.propTypes = {

};

export default connect()(Edititem)