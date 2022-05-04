import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const userCollectionRef = collection(db,"users")

class LoginDataServices {
    addusers = (newuser) =>{
       return addDoc(userCollectionRef,newuser)
    }

    updateusers = (id,updatedusers) => {
        const validateuser = doc(db,'users',id); 
        return updateDoc(validateuser,updatedusers)
    }

    deleteuser = (id, deletedusers) =>{
        const deletedValidatuserd = doc(db,'users',id)
        return deleteDoc(deletedValidatuserd,deletedusers)
    }

    getAllusers = ()=>{
        return getDocs(userCollectionRef)
    }
    getuser = (id)=>{
        const getuser = doc(db,'users',id);
        return getDoc(getuser,id);
    }
}

export default new LoginDataServices();