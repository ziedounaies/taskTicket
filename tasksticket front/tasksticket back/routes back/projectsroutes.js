const express=require('express');
const projectscontrollers=require('../controllers back/projectscontollers');

const router =express.Router();

router.post('/update',projectscontrollers.update);
router.post('/delete',projectscontrollers.delete);
router.post('/getByid',projectscontrollers.getByid);
router.get('/get',projectscontrollers.get);
router.post('/create',projectscontrollers.create);

router.get('/getProjectNewPag',projectscontrollers.getProjectNewPag);
router.get('/getProjectInprogressPag',projectscontrollers.getProjectInprogressPag);
router.get('/getProjectCompletedPag',projectscontrollers.getProjectCompletedPag);
router.post('/getByidNewProject',projectscontrollers.getByidNewProject);
//router.post('/upload',projectscontrollers.upload);
router.get('/getProjectStatue',projectscontrollers.getProjectStatue);
router.post('/uploadProjet',projectscontrollers.uploadProjet);
router.get('/getProPag',projectscontrollers.getProPag)





module.exports=router;
