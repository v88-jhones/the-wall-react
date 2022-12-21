const addMessage = (state, action) => {
    state.messages = [
        {
            id: generateId(),
            content: action.payload,
            comments: []
        },
        ...state.messages
    ];
};

const deleteMessage = (state, action) => {
    state.messages = state.messages.filter(item => item.id !== action.payload);
};

const updateMessage = (state, action) => {
    state.messages = state.messages.map(item => {
        if(item.id === action.payload.id){
            return {...item, content: action.payload.content};
        }
        return item;
    });
};

const addComment = (state, action) => {
    state.messages = state.messages.map(message => {
        if(message.id === action.payload.message_id){
            return {
                    ...message, 
                    comments: [
                        {
                            message_id: action.payload.message_id,
                            id: generateId(),
                            content: action.payload.content
                        },
                        ...message.comments
                    ]
                };
        };
        return message;
    });
};

const deleteComment = (state, action) => {
    state.messages = state.messages.map(message => {
        if(message.id === action.payload.message_id){
            return {
                ...message,
                comments: message.comments.filter(comment => {
                    return comment.id !== action.payload.comment_id;
                })
            };
        }
        return message;
    });
};

const updateComment = (state, action) => {
    state.messages = state.messages.map(message => {
        if(message.id === action.payload.message_id){
            return {
                ...message,
                comments: message.comments.map(comment => {
                    if(comment.id === action.payload.comment_id){
                        return {
                            ...comment,
                            content: action.payload.content
                        };
                    }
                    return comment;
                })
            };
        }
        return message;
    });
};

const generateId = () => {
    return Math.ceil(Date.now() + Math.random());
};

const wallService = {
    addMessage,
    deleteMessage,
    updateMessage,
    addComment,
    deleteComment,
    updateComment
};

export default wallService;
