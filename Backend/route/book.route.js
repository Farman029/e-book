import express from "express";
import Book from "../model/book.model.js";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/demo",async(req,res)=>{

let newBook=new Book({
    
        "id":1,
       " name":"The Jungle Book",
       "title":" Hi My This is random text created by author farman and i want to write something on feebook card ",
"price":20,
"category":"Free",
"image":"https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1727853733~exp=1727857333~hmac=e7948eb757ef90a7a606d2478b60d208b341bb4617484a8ff5bdf7524129333d&w=740"
    
})
await newBook.save().then(()=>{
    console.log("new book saved");
    
});
res.send(" demo page");
})


export default router;