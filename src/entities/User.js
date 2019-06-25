
class User {
    constructor(id, first, last, about, avatarUrl, createdAt) {
        this.id = id;
        this.first = first;
        this.last = last;
        this.about = about;
        this.avatarUrl = avatarUrl;
        this.createdAt = createdAt;
    }

    getFullName() {
        return `${this.first} ${this.last}`
    }


}

export default User;