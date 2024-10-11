import {combineReducers,applyMiddleware} from 'redux';
import authReducer from './reducer/auth/auth';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import getProjectsReducer from './reducer/projects/getProjects';
import createProjectsReducer from './reducer/projects/getProjects';
import updateProjectsReducer from './reducer/projects/getProjects';
import  deleteProjectsReducer from './reducer/projects/getProjects';
import updateTasksReducer from './reducer/tasks/getTasks';
import   deleteTasksReducer from './reducer/tasks/getTasks';
import     getByidTasksReducer from './reducer/tasks/getTasks';
import createTasksReducer from './reducer/tasks/getTasks';
import addNoteReducer from './reducer/tasks/getTasks';
import     deleteNoteReducer from './reducer/tasks/getTasks';
import updateNoteReducer from './reducer/tasks/getTasks';
import getProjectsPagReducer from './reducer/projects/getProjects';
import  getUserReducer  from './reducer/auth/auth';
import addUserReducer from './reducer/auth/auth';
import getByIdUserReducer from './reducer/auth/auth';
import deleteUserReducer from './reducer/auth/auth';
import    updateUserReducer from './reducer/auth/auth';
import  getByidTasDetailsReducer from './reducer/tasks/getTasks';
import  getProjectNewReducer  from './reducer/projects/getProjects';
import getProjectInprogressReducer  from './reducer/projects/getProjects';
import getProjectCompletedReducer  from './reducer/projects/getProjects';
import getNoteReducer from './reducer/tasks/getTasks';
import  getByidProjectReducer from './reducer/projects/getProjects';  
import  setNotificationReducer from './reducer/projects/getProjects';
import   searchReducer         from './reducer/auth/auth';
import getTasksAllReducer from './reducer/tasks/getTasks';
import getProjectStatueReducer from './reducer/projects/getProjects';
import loginReducer from './reducer/auth/auth';
import singUpReducer from './reducer/auth/auth';
import tasksToDoReducer from './reducer/tasks/getTasks';
import tasksReviewReducer from './reducer/tasks/getTasks';
import     tasksInProgressReducer from './reducer/tasks/getTasks';
import    tasksConfirmedReducer from './reducer/tasks/getTasks';
import forgotPasswordReducer from './reducer/auth/auth';
import resetPasswordReducer  from './reducer/auth/auth'
import timeReducer from '../store/reducer/auth/auth'
import uploadReducer  from'../store/reducer/auth/auth'
import updateUserProfilReducer from '../store/reducer/auth/auth'
import  getTasksAllHomeReducer  from '../store/reducer/tasks/getTasks';
import  getPaternsReducer from '../store/reducer/tasks/getTasks'


export default   createStore(
    combineReducers({
     getUserReducer, 
     addUserReducer,  
     getByIdUserReducer,
    deleteUserReducer,
   updateUserReducer,
    getProjectsReducer ,
    getProjectsPagReducer,
    createProjectsReducer,
    updateProjectsReducer,
    deleteProjectsReducer,
    updateTasksReducer,
    deleteTasksReducer,
    getByidTasksReducer,
    createTasksReducer,
    addNoteReducer,
    deleteNoteReducer,
    updateNoteReducer,
    getByidTasDetailsReducer,
    getProjectNewReducer,
    getProjectInprogressReducer,
    getProjectCompletedReducer,
    getNoteReducer,
    getByidProjectReducer,
    setNotificationReducer,
    searchReducer,
    getTasksAllReducer,
    getProjectStatueReducer,
    loginReducer,
    singUpReducer,
    tasksToDoReducer,
    tasksReviewReducer,
    tasksInProgressReducer,
    tasksConfirmedReducer,
    forgotPasswordReducer,
    resetPasswordReducer,
    timeReducer,
    uploadReducer,
    updateUserProfilReducer,
    getTasksAllHomeReducer,
    getPaternsReducer


}),
composeWithDevTools(applyMiddleware(thunk))
 



)

 ;




