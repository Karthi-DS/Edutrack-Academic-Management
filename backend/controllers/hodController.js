import hodModel from '../models/hodModel.js';

const getAllHods = async (req, res) => {
    try {
        const hod = await hodModel.findAll();
        res.json({message:"Hod data retrieved succesfully",data:hod});
    } catch (error) {
        res.json({ message: error.message });
    }
}

const getHodById = async (req, res) => {    
    try {
        const hod = await hodModel.findByPk(req.params.id);
        res.json({message:"Hod data retrieved succesfully",data:hod});
    } catch (error) {
        res.json({ message: error.message });
    }
}   

const createHod = async (req,res)=>{
    try{
        const hod = await hodModel.create(req.body);
        res.json({message:"Hod data created successfully",data:hod});
    }catch(error){
        res.json({message:error.message});
    }
}

const updateHod = async (req,res)=>{    
    try{
        const hod = await hodModel.update(req.body,{where:{hod_id:req.params.id}});
        res.json({message:"Hod data updated successfully"});
    }catch(error){
        res.json({message:error.message});
    }
}

const deleteHod = async (req,res)=>{
    try{
        const hod = await hodModel.destroy({where:{hod_id:req.params.id}});
        res.json({message:"Hod data deleted successfully"});
    }  catch(error){        
        res.json({message:error.message});
    }   
}        

export { getAllHods, getHodById, createHod, updateHod, deleteHod };