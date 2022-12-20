
import { useReducer, createContext } from "react";
import ModalReducer from "./modal_reducer";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {

    const initialState = {
        delete_comment: {modal: false, message_id: 0 ,id: 0},
        delete_message: {modal: false, id: 0}
    };

    const [state, dispatch] = useReducer(ModalReducer, initialState);
    
    const openDeleteMessageModal = (message_id) => {
        dispatch({type: "SHOW_DELETE_MESSAGE", payload: message_id})
    }

    const openDeleteCommentModal = (message_id, comment_id) => {
        dispatch({type: "SHOW_DELETE_COMMENT", payload: {message_id, comment_id}});
    }

    const closeDeleteModal = () => {
        dispatch({type: "CLOSE_DELETE_MODAL"});
    }
    
    return (
        <ModalContext.Provider
            value={{
                ...state,
                openDeleteMessageModal,
                openDeleteCommentModal,
                closeDeleteModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;