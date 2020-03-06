import {connect} from "react-redux";
import {setCurrentPageAC, setUsersAC, userFollowAC, userUnfollowAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {dispatch(setUsersAC(users))},
        userFollow: (userId) => {dispatch(userFollowAC(userId))},
        userUnfollow: (userId) => {dispatch(userUnfollowAC(userId))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;