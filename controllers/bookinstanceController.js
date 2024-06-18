import BookInstance from "../models/bookinstance.js";
import asyncHandler from "express-async-handler"


// Display list of all BookInstances.
  export const bookinstance_list = asyncHandler(async (req, res, next) => {
    const allBookInstances = await BookInstance.find().populate("book").exec();

    res.render("bookinstance_list", {title: "Book Instance List", bookinstance_list: allBookInstances})
  });
  
  // Display detail page for a specific BookInstance.
  export const bookinstance_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
  });
  
  // Display BookInstance create form on GET.
  export const bookinstance_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create GET");
  });
  
  // Handle BookInstance create on POST.
  export const bookinstance_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
  });
  
  // Display BookInstance delete form on GET.
  export const bookinstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
  });
  
  // Handle BookInstance delete on POST.
  export const bookinstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
  });
  
  // Display BookInstance update form on GET.
  export const bookinstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
  });
  
  // Handle bookinstance update on POST.
  export const bookinstance_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
  });