import studentFeeModel from '../models/studentFeeModel.js';


const getAllStudentsFee = async (req, res) => { 
    try {
        const studentFee = await studentFeeModel.findAll();
        res.json({message:"Student Fee data retrieved succesfully",data:studentFee});
    } catch (error) {
        res.json({ message: error.message });
    }
}

const getStudentFeeById = async (req, res) => {    
    try {
        const studentFee = await studentFeeModel.findByPk(req.params.id);
        res.json({message:"Student Fee data retrieved succesfully",data:studentFee});
    } catch (error) {
        res.json({ message: error.message });
    }
}



// testing purpose 
const createStudentFee = async (req,res)=>{
    try{
        const studentFee = await studentFeeModel.create(req.body);
        res.json({message:"Student Fee data created successfully",data:studentFee});
    }catch(error){
        res.json({message:error.message});
    }
};

export { getAllStudentsFee, getStudentFeeById, createStudentFee };