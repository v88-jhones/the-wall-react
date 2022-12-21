import { createSlice } from "@reduxjs/toolkit";
import modalService from "./modal_service";

const initialState = {
    delete_comment: {modal: false, message_id: 0 ,id: 0},
    delete_message: {modal: false, id: 0}
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openDeleteMessageModal : modalService.openDeleteMessageModal,
        openDeleteCommentModal : modalService.openDeleteCommentModal,
        closeDeleteModal       : modalService.closeDeleteModal
    }
});

export const { 
    openDeleteMessageModal, 
    openDeleteCommentModal, 
    closeDeleteModal 
} = modalSlice.actions;

export default modalSlice.reducer;