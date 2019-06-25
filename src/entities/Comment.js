class Comment {
    constructor(id, postId, userId, createdAt, isPublic, body) {
        this.id = id;
        this.postId = postId;
        this.userId = userId;
        this.commentDate = createdAt;
        this.isPublic = isPublic;
        this.body = body;
    }
}

export default Comment;