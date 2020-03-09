import {connect} from 'react-redux';
import {
    setCurrentPage,
    setUsers,
    setUsersCount,
    toggleIsFetching,
    userFollow,
    userUnfollow
} from '../../redux/users-reducer';
import React from 'react';
import * as axios from 'axios';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';

//Class component
class UsersApiComponent extends React.Component {

    componentDidMount() {
        let currentPage = this.props.currentPage;
        let pageSize = this.props.pageSize;
        let apiString = 'https://social-network.samuraijs.com/api/1.0/users';
        this.props.toggleIsFetching (true);
        axios.get(`${apiString}?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    //For pagination
    onCurrentPageClick = (page) => {
        let pageSize = this.props.pageSize;
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching (true);
        let apiString = 'https://social-network.samuraijs.com/api/1.0/users';
        axios.get(`${apiString}?page=${page}&count=${pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <User users={this.props.users}
                  userFollow={this.props.userFollow}
                  userUnfollow={this.props.userUnfollow}
                  pageSize={this.props.pageSize}
                  totalUsersCount={this.props.totalUsersCount}
                  currentPage={this.props.currentPage}
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
        isFetching: state.usersPage.isFetching
    }
}

//Container component
const UsersContainer = connect(mapStateToProps, {
    setUsers,
    userFollow,
    userUnfollow,
    setCurrentPage,
    setUsersCount,
    toggleIsFetching
})(UsersApiComponent);

export default UsersContainer;