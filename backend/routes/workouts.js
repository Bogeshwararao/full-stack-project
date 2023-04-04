const express =require('express')
const router = express.Router()


//get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'get all workouts'})
})

//get a single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'get a single  workouts'})
})

//post a new workout
router.post('/',(req,res)=>{
        res.json({mssg:'post a new workout'})
})
//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a workout'})
})
//update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a workout'})
})

module.exports= router