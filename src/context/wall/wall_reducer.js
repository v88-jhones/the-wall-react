const WallReducer = (state, action) => {
    switch(action.type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                messages: [action.payload, ...state.messages],
            };
        case "DELETE_MESSAGE":
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            };
        case "UPDATE_MESSAGE":
            return {
                ...state,
                messages: state.messages.map(item => {
                            if(item.id === action.payload.id){
                                return {...item, content: action.payload.content}
                            }
                            return item
                        })
            };
            case "ADD_COMMENT":
                return {
                    ...state,
                    messages: state.messages.map(message => {
                        if(message.id === action.payload.message_id){
                            return {
                                    ...message, 
                                    comments: [
                                        {
                                            message_id: action.payload.message_id,
                                            id: action.payload.id,
                                            content: action.payload.content
                                        },
                                        ...message.comments
                                    ]
                                }
                        }
                        return message;
                    })
                }
            case "DELETE_COMMENT":
                return {
                    ...state,
                    messages: state.messages.map(message => {
                        if(message.id === action.payload.message_id){
                            return {
                                ...message,
                                comments: message.comments.filter(comment => {
                                    return comment.id !== action.payload.comment_id;
                                })
                            };
                        }
                        return message;
                    })
                }
            case "UPDATE_COMMENT":
                return {
                    ...state,
                    messages: state.messages.map(message => {
                        if(message.id === action.payload.message_id){
                            return {
                                ...message,
                                comments: message.comments.map(comment => {
                                    if(comment.id === action.payload.comment_id){
                                        return {
                                            ...comment,
                                            content: action.payload.content
                                        }
                                    }
                                    return comment;
                                })
                            };
                        }
                        return message;
                    })
                }
        default:
            return state;
    }
}

export default WallReducer;