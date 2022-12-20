import { useReducer, createContext } from "react";
import WallReducer from "./wall_reducer";

const WallContext = createContext();

export const WallProvider = ({children}) => {

    const initialState = {
        messages: [],
        comments: []
    };

    const [state, dispatch] = useReducer(WallReducer, initialState);
    
    /* MESSAGE */

    const addMessage = (content) => {
        dispatch({
            type: "ADD_MESSAGE", 
            payload: {
                id: generateId(), 
                content, 
                comments: [],
            }});
    }

    const deleteMessage = (message_id) => {
        dispatch({type: "DELETE_MESSAGE", payload: message_id});
    }

    const updateMessage = (id, content) => {
        dispatch({type: "UPDATE_MESSAGE", payload: {id, content}});
    }

    /* COMMENTS */

    const addComment = (message_id, content) => {
        dispatch({
            type: "ADD_COMMENT", 
            payload: {
                    message_id, 
                    id: generateId(),
                    content
                }
            });
    }

    const deleteComment = (message_id, comment_id) => {
        dispatch({type: "DELETE_COMMENT", payload: {message_id, comment_id}});
    }

    const updateComment = (message_id, comment_id, content) => {
        dispatch({type: "UPDATE_COMMENT", payload: {message_id, comment_id, content}});
    }

    /* HELPERS */

    const generateId = () => {
        return Math.ceil(Date.now() + Math.random());
    }
    
    return (
        <WallContext.Provider
            value={{
                ...state,
                addMessage,
                deleteMessage,
                updateMessage,
                addComment,
                deleteComment,
                updateComment,
            }}
        >
            {children}
        </WallContext.Provider>
    )
}

export default WallContext;