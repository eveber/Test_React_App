import {connect} from 'react-redux';
import {follow, requestUsers, setCurrentPage, unfollow} from '../../redux/users-reducer';
import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Users from "./Users";
import {
    currentPageSel,
    isFetchingSel, isFollowingSel,
    pageSizeSel, totalUsersCountSel,
    usersSel
} from "../../redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";

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
        users: usersSel(state),
        pageSize: pageSizeSel(state),
        totalUsersCount: totalUsersCountSel(state),
        currentPage: currentPageSel(state),
        isFetching: isFetchingSel(state),
        isFollowing: isFollowingSel(state)
    }
}

export default compose (
    connect(mapStateToProps, {setCurrentPage, requestUsers, follow, unfollow}),
    withAuthRedirect
)(UsersContainer);
