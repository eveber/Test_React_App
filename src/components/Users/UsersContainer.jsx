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
import {getUsers} from "../../api/api";

//Сontainer ClassСomponent
class UsersContainer extends React.Component {

    componentDidMount() {
        let currentPage = this.props.currentPage;
        let pageSize = this.props.pageSize;
        this.props.toggleIsFetching (true); //For Preloader!!!
        getUsers(currentPage, pageSize).then((data) => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
            });
    }

    //For pagination
    onCurrentPageClick = (page) => {
        let pageSize = this.props.pageSize;
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching (true);
        getUsers(page, pageSize).then((data) => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(data.items);
            });
    }

    render() {

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
        isFetching: state.usersPage.isFetching
    }
}

//export container component
export default connect(mapStateToProps, {
    setUsers,
    userFollow,
    userUnfollow,
    setCurrentPage,
    setUsersCount,
    toggleIsFetching
})(UsersContainer);