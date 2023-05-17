// des get all contacts
//route get /api/contacts
//acces public 
const getContacts = (req,res)=>{
    res.status(200).json({message:"get all contacts"});
}

const createContact = (req,res)=>{
    console.log("The request body is",req.body);
    const {name,email,phone}= req.body;
    if (!name || !email || !phone ){
        res.status(400);
        throw new Error("all fields are mandataory")
    }
    res.status(201).json({message:"create contacts"});
}


const getContact=(req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`});
}

const updateContact=(req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
}

const deleteContact=(req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
}

module.exports ={getContacts , createContact,getContact,updateContact,deleteContact};