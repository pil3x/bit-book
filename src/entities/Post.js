class Post {
    constructor(id, createdAt, isPublic, type, videoUrl, imageUrl) {
        this.id = id;
        this.date = createdAt;
        this.public = isPublic;
        this.type = type;
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
    }
}

export default Post;