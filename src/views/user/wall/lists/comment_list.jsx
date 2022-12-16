import CommentItem from "./comment_item";

function CommentList({comments}){

    if(comments.length < 1){
        return false;
    }

    return (
        <ul>
            {
                comments.map(comment => (
                    <CommentItem key={comment.id} comment={comment} />
                ))
            }
        </ul>
    );
}

export default CommentList;