export const initialState = {
    mainPosts: [{
        id: 1,
        userId: 1,
        title: '1번글',
        content: 'asdfasdfasdfaaaaaaaaa',
        Comments: [{
            userNickname : '유저1',
            content: '댓글1',
        }, {
            userNickname: '유저2',
            content: '댓글2',
        }]
    },{
        id: 2,
        userId: 2,
        title: 'title',
        content: 'content',
        Comments: [{
            userNickname : '유저1',
            content: '댓글1',
        }, {
            userNickname: '유저2',
            content: '댓글2',
        }]
    },{
        id: 3,
        userId: 3,
        title: 'title',
        content: 'content',
        Comments: [{
            userNickname : '유저1',
            content: '댓글1',
        }, {
            userNickname: '유저2',
            content: '댓글2',
        }]
    },{
        id: 4,
        userId: 4,
        title: 'title',
        content: 'content',
        Comments: [{
            userNickname : '유저1',
            content: '댓글1',
        }, {
            userNickname: '유저2',
            content: '댓글2',
        }]
    }],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                userId: action.data.userId,
                userNickname: action.data.userNickname,
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                userId: null,
                userNickname: null,
            };
        default:
            return state;
    }
};

export default reducer;
