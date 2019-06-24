class Post {
    constructor(id, createdAt, isPublic, type, videoUrl, imageUrl, text, comments) {
        this.id = id;
        this.date = createdAt;
        this.public = isPublic;
        this.type = type;
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
        this.text = text;
        this.comments = comments;
    }
}

export default Post;