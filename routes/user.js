const router = require("express").Router()
const bcrypt = require("bcrypt");
const User = require("../models/User");


//UPDATE
router.put('/:id' , async (req,res) =>{
    if (req.body.userId === req.params.id)
    {
        if (req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password,salt);
        }
        try{
            const upDateUser = await User.findByIdAndUpdate(req.params.id , {
                $set:req.body,
            });
            res.status(200).json(upDateUser);

        }catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("you can update only your account!")
    }

});

//DELETE
router.delete('/:id' , async (req,res) =>{
    if (req.body.userID === req.params.id){
        try{
            const user = await User.findById(req.params.id);
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted ... ");
        }catch(err){
            res.status(500).json(err); }
        }catch(err){
            res.status(404).json("User not found !");
        
        }
    } else {
        res.status(401).json("you can delete only your account!");
    }

});

//Get user 
router.get("/:id" , async (req , res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password , ...others}=user._doc;
        res.status(200).json(others);

    }catch{

        res.status(500).json(err)
    }
})













module.exports = router;
