

const ModalReducer = (state, action) => {
    switch(action.type) {
        case "SHOW_DELETE_MESSAGE":
            return {
                delete_comment: { modal: false, message_id: 0 ,id: 0 },
                delete_message: { modal: true, id: action.payload },
            }
        case "SHOW_DELETE_COMMENT":
            return {
                delete_comment: { modal: true, message_id: action.payload.message_id ,id: action.payload.comment_id },
                delete_message: { modal: false, id: 0 },
            }
        case "CLOSE_DELETE_MODAL":
            return {
                delete_comment: { modal: false, message_id: 0 ,id: 0 },
                delete_message: { modal: false, id: 0 }
            }
        default:
            return state
    }
}

export default ModalReducer;