import mongoose, { Schema } from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author", 
        required: true
    },
    summary: {
        type: String, 
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: "Genre"
    }]
})

BookSchema.virtual("url").get(function(){
    return `/catalog/book/${this._id}`
})

const Book = mongoose.model("Book", BookSchema)

export default Book