import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    family_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    date_of_birth: {
        type: Date
    },
    date_0f_death: {
        type: Date
    }
})

// Virtual for author's full name
AuthorSchema.virtual("name").get(function(){
    // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";

  if (this.first_name && this.family_name){
    fullname = `${this.family_name}, ${this.first_name}`;
  }
  return fullname
})

// Virtual for author's URL
AuthorSchema.virtual("url").get(function(){
    return `/catalog/author/${this._id}`;
})

const Author = mongoose.model("Author", AuthorSchema)

export default Author