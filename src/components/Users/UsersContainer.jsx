import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, unfollow } from '../../redux/users-reducer';
import React from 'react';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import {Redirect} from "react-router-dom";

;

//Сontainer ClassСomponent
class UsersContainer extends React.Component {

    componentDidMount() {
        let currentPage = this.props.currentPage;
        let pageSize = this.props.pageSize;
        this.props.getUsers(currentPage, pageSize);

    }

    //For pagination
    onCurrentPageClick = (page) => {
        this.props.setCurrentPage(page);
        let pageSize = this.props.pageSize;
        this.props.getUsers(page, pageSize);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login' />
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <User {...this.props}
                  onCurrentPageClick={this.onCurrentPageClick}
            />
        </>
    }
}

//1st parameter for container component
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
        isAuth: state.auth.isAuth
    }
}

//export container component
export default connect(mapStateToProps, {
    setCurrentPage, getUsers, follow, unfollow
})(UsersContainer);