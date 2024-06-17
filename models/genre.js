import mongoose, { mongo } from "mongoose";

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100,
        minLength: 3
    }
})

GenreSchema.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`
})

const Genre = mongoose.model("Genre", GenreSchema)

export default Genre