import {connect} from 'react-redux';
import {follow, requestUsers, setCurrentPage, unfollow} from '../../redux/users-reducer';
import React from 'react';
import User from './User/User';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Users from "./Users";
import {
    currentPageSel,
    isFetchingSel, isFollowingSel,
    pageSizeSel,
    totalUsersCountSel,
    usersSel
} from "../../redux/users-selectors";

//Сontainer ClassСomponent
class UsersContainer extends React.Component {

    componentDidMount() {
        let currentPage = this.props.currentPage;
        let pageSize = this.props.pageSize;
        this.props.requestUsers(currentPage, pageSize);

    }

    //For pagination
    onCurrentPageClick = (page) => {
        let pageSize = this.props.pageSize;
        this.props.requestUsers(page, pageSize);
    }

    render() {
        return <>
            <Users {...this.props}
                  onCurrentPageClick={this.onCurrentPageClick}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: usersSel,
        pageSize: pageSizeSel,
        totalUsersCount: totalUsersCountSel,
        currentPage: currentPageSel,
        isFetching: isFetchingSel,
        isFollowing: isFollowingSel
    }
}

export default compose (
    connect(mapStateToProps, {setCurrentPage, requestUsers, follow, unfollow}),
    withAuthRedirect
)(UsersContainer);
