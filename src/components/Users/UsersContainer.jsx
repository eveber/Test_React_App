import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, unfollow } from '../../redux/users-reducer';
import React from 'react';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        isFollowing: state.usersPage.isFollowing
    }
}

export default compose (
    connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow}),
    withAuthRedirect
)(UsersContainer);
