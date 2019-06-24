class User {
    constructor(id, first, last, about, avatarUrl) {
        this.id = id;
        this.first = first;
        this.last = last;
        this.about = about;
        this.avatarUrl = avatarUrl;
    }

    getFullName() {
        return `${this.first} ${this.last}`
    }
}

export default User;