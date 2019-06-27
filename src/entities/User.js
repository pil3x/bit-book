
class User {
    constructor(id, first, last, about, avatarUrl, createdAt, comments, posts) {
        this.id = id;
        this.first = first;
        this.last = last;
        this.about = about;
        this.avatarUrl = avatarUrl;
        this.createdAt = createdAt;
        this.comments = comments;
        this.posts = posts;
    }

    getFullName() {
        return `${this.first} ${this.last}`
    }


}

export default User;