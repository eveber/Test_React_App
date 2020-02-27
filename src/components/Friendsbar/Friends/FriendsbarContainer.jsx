import React from 'react';
import Friendsbar from "../Friendsbar";
import StoreContext from "../../../StoreContext";

const FriendsbarContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                return <Friendsbar friends={state.friendsBar.friends} />;
            }
        }
    </StoreContext.Consumer>
}

export default FriendsbarContainer;