import academicSubjectModel from '../models/academicSubjectModel.js';


const getAllAcademicSubjects = async (req, res) => { 
    try {
        const academicSubject = await academicSubjectModel.findAll();
        res.json({message:"Academic Subject data retrieved succesfully",data:academicSubject});
    } catch (error) {
        res.json({ message: error.message });
    }
}   


const getAcademicSubjectById = async (req, res) => {    
    try {
        const academicSubject = await academicSubjectModel.findByPk(req.params.id);
        res.json({message:"Academic Subject data retrieved succesfully",data:academicSubject});
    } catch (error) {
        res.json({ message: error.message });
    }
}

const createAcademicSubject = async (req,res)=>{
    try{
        const academicSubject = await academicSubjectModel.create(req.body);
        res.json({message:"Academic Subject data created successfully",data:academicSubject});
    }catch(error){
        res.json({message:error.message});
    }
};

const updateAcademicSubject = async (req,res)=>{    
    try{
        const academicSubject = await academicSubjectModel.update(req.body,{where:{academic_subject_id:req.params.id}});
        if (academicSubject[0]==0){
            res.json({message:"Invalid Academic Subject id"});
            return;
        }else{
            const updatedAcademicSubject = await academicSubjectModel.findByPk(req.params.id);
            res.json({message:"Academic Subject data updated successfully",data:updatedAcademicSubject});
        }
    }catch(error){
        res.json({message:error.message});
    }
}

const deleteAcademicSubject = async (req,res)=>{
    try{
        const academicSubject = await academicSubjectModel.destroy({where:{academic_subject_id:req.params.id}});
        res.json({message:"Academic Subject data deleted successfully"});
    }  catch(error){        
        res.json({message:error.message});
    }   
};

export { getAllAcademicSubjects, getAcademicSubjectById, createAcademicSubject, updateAcademicSubject, deleteAcademicSubject };