const openDeleteMessageModal = (state, action) => {
    state.delete_comment = { modal: false, message_id: 0 ,id: 0 };
    state.delete_message = { modal: true, id: action.payload };
};

const openDeleteCommentModal = (state, action) => {
    state.delete_comment = { modal: true, message_id: action.payload.message_id ,id: action.payload.comment_id };
    state.delete_message = { modal: false, id: 0 };
};

const closeDeleteModal = (state) => {
    state.delete_comment = { modal: false, message_id: 0 ,id: 0 };
    state.delete_message = { modal: false, id: 0 };
};

const modalService = {
    openDeleteMessageModal,
    openDeleteCommentModal,
    closeDeleteModal
};

export default modalService;
