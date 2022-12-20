import CommentItem from "./comment_item";

function CommentList({comments}){

    return (
        <ul>
            {
                comments.map(comment => (
                    <CommentItem 
                        key={comment.id} 
                        comment={comment} 
                    />
                ))
            }
        </ul>
    );
}

export default CommentList;