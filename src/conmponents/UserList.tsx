import React, {FC} from 'react';
import User from "./User";

const UserList:FC = () => {
    return (
        <div className='user-list'>
            <User/>
            <User/>
            <User/>
            <User/>
        </div>
    );
};

export default UserList;