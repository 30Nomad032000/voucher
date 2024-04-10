export class DbError extends Error {
    constructor(public message: string) {
        super(message)
    }
}
