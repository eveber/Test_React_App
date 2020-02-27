let initialState = {
    friends: [
        {id: 1, friendName: 'Коля'},
        {id: 2, friendName: 'Петя'},
        {id: 3, friendName: 'Миша'}]
};

let friendBarReducer = (state = initialState, action) => {
    return state;
}

export default friendBarReducer;