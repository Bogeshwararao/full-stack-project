const asyncHandler= require("express-async-handler");
const Contact= require("../models/contactModel");
// const contactModel = require("../models/contactModel");
// des get all contacts
//route get /api/contacts
//acces public 
const getContacts =asyncHandler(async(req,res)=>{
    const contacts =await contact.find();
    res.status(200).json(contacts);
});

const createContact =asyncHandler(async(req,res)=>{
    console.log("The request body is",req.body);
    const {name,email,phone}= req.body;
    if (!name || !email || !phone ){
        res.status(400);
        throw new Error("all fields are mandataory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

const getContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`});
})

const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
})

const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
})

module.exports ={getContacts , createContact,getContact,updateContact,deleteContact};