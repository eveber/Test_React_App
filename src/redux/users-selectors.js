export const usersSel = (state) => {
    return state.usersPage.users;
}

export const pageSizeSel = (state) => {
    return state.usersPage.pageSize;
}

export const totalUsersCountSel = (state) => {
    return state.usersPage.totalUsersCount;
}

export const currentPageSel = (state) => {
    return state.usersPage.currentPage;
}

export const isFetchingSel = (state) => {
    return state.usersPage.isFetching;
}

export const isFollowingSel = (state) => {
    return state.usersPage.isFollowing;
}