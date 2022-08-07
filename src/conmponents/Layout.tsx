import React, {FC} from 'react';
import UserList from "./UserList";

const Layout:FC = () => {

    return (
        <div className='layout'>
          <h1 className="title">DATA-USERS</h1>
            <UserList/>
        </div>
    );
};

export default Layout;