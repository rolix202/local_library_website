import Author from "../models/author.js";
import asyncHandler from "express-async-handler"

// Display list of all Authors
const author_list = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author list")
})

// Display detail page for a specific Author
const author_detail = asyncHandler(async(req, res, next) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`)
})

// Display Author create form on GET
const author_create_get = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create POST")
})

// Handle Author create on POST
const author_create_post = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create POST")
})

// Display Author delete form on GET
const author_delete_get = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete GET")
})

// Handle Author delete on POST
const author_delete_post = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
})

// Display Author update form on GET.
const author_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update GET");
  });
  
  // Handle Author update on POST.
const author_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update POST");
  });