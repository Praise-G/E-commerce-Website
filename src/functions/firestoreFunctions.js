import { collection, addDoc } from 'firebase/firestore';
import {db} from "../pages/firebase";


export const saveBuyerToFirestore = async (user, name, mobileNumber) => {
    try {
        const buyer = {
            name,
            email: user.email,
            mobileNumber,
            uid: user.uid
        };

        const docRef = await addDoc(collection(db, "buyers"), buyer);
        console.log("Buyer document added with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding buyer document: ", error);
    }
};

export const saveSellerToFirestore = async (user, firstName, lastName, mobileNumber, companyName, companyTelephone, companyEmail) => {
    try {
        const seller = {
            firstName,
            lastName,
            mobileNumber,
            companyName,
            companyTelephone,
            companyEmail,
            uid: user.uid
        };

        const docRef = await addDoc(collection(db, "sellers"), seller);
        console.log("Seller document added with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding seller document: ", error);
    }
};

export const saveProductToFirestore = async (productbrand, productName, productDescription, productPrice, productStock) => {
    try {
        const product = {
            brand: productbrand,
            name: productName,
            description: productDescription,
            price: productPrice,
            stock: productStock
        };

        const docRef = await addDoc(collection(db, "Products"), product);
        console.log("Product document added with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding product document: ", error);
    }
};



