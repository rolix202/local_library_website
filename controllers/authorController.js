import Author from "../models/author.js";
import asyncHandler from "express-async-handler"
import Book from "../models/book.js";

// Display list of all Authors
export const author_list = asyncHandler(async(req, res, next) => {
    const allAuthors = await Author.find().sort({family_name: 1}).exec();

    res.render("author_list", {title: "Author List", author_list: allAuthors})
})

// Display detail page for a specific Author
export const author_detail = asyncHandler(async(req, res, next) => {
    const [author, allBooksByAuthor] = await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({author: req.params.id}, "title summary").exec()
    ])

    if (author === null){
        const err = new Error("Author not found");
        err.status = 404;
        return next(err);
    }

    res.render("author_detail", {
        title: "Author Detail",
        author: author,
        author_books: allBooksByAuthor
    })
})

// Display Author create form on GET
export const author_create_get = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create POST")
})

// Handle Author create on POST
export const author_create_post = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create POST")
})

// Display Author delete form on GET
export const author_delete_get = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete GET")
})

// Handle Author delete on POST
export const author_delete_post = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
})

// Display Author update form on GET.
export const author_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update GET");
  });
  
  // Handle Author update on POST.
export const author_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update POST");
  });