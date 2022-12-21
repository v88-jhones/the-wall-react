import { createSlice } from "@reduxjs/toolkit";
import wallService from "./wall_service";

const initialState = {
    messages: []
};

export const wallSlice = createSlice({
    name: "wall",
    initialState,
    reducers: {
        addMessage    : wallService.addMessage,
        deleteMessage : wallService.deleteMessage,
        updateMessage : wallService.updateMessage,
        addComment    : wallService.addComment,
        deleteComment : wallService.deleteComment,
        updateComment : wallService.updateComment,
    }
});

export const { 
    addMessage, 
    deleteMessage, 
    updateMessage, 
    addComment,
    deleteComment,
    updateComment
} = wallSlice.actions;

export default wallSlice.reducer;