import React from "react";
import css from './Users.module.scss';


const Users = (props) => {
    return <div>
        {
            props.users.map ((u) => <div key={u.id}>
                <div>
                    <img src={u.avatarUrl} alt="avatar"/>
                </div>
                <div>
                    {
                        u.follow ? <button onClick={()=>{props.userUnfollow(u.id)}}>Unfollow</button> :
                            <button onClick={()=>{props.userFollow(u.id)}}>Follow</button>
                    }
                </div>
                <div>{u.id}</div>
                <div></div>
                <div></div>
                <div></div>
            </div>)
        }
    </div>
};

export default Users;