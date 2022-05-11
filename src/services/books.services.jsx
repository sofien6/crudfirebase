import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";


const BookCollectionRef = collection(db,"books")

class BookDataSerices {
    addBooks = (newBook) =>{
       return addDoc(BookCollectionRef,newBook)
    }

    updateBooks = (id,updatedBooks) => {
        const validateBook = doc(db,'books',id); 
                console.log(validateBook)

        return updateDoc(validateBook,updatedBooks)
    }

    deleteBook = (id, deletedBooks) =>{
        const deletedValidatBookd = doc(db,'books',id)
        return deleteDoc(deletedValidatBookd,deletedBooks)
    }

    getAllBooks = ()=>{
        return getDocs(BookCollectionRef)
    }
    getBook = (id)=>{
        const getBook = doc(db,'books',id);
        return getDoc(getBook,id);
    }
}

export default new BookDataSerices();
