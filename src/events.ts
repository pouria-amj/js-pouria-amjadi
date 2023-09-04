import {ContactsListDrawer,contactNameInput,PhonNumberInput,deviceStorageInput,contactsListElement,} from './importer.js'
import {contactList} from './state.js'
import {creatListItem ,validateFields} from './functions.js'
export const showContactsButtonHandler =  ()=>{
    ContactsListDrawer?.classList.remove("hidden");
}
import{contactInfotype, contactProps}from './types.js'
export const closeContactsHandler =  ()=>{
    ContactsListDrawer?.classList.add("hidden");
}

const validateCreatContact =(contactInfo :contactInfotype)=>{
    if (!validateFields(contactInfo.contactName,contactInfo.phoneNumber + "")){
alert("fill all fields")  
throw Error("fill all fields")   
 }
}


export const handelCreateContact = ()=>{
validateCreatContact({
    contactName:contactNameInput!.value ,
    phoneNumber:PhonNumberInput!.value
} )

    const newContact :contactProps={
        id: crypto.randomUUID(),
        contactName:contactNameInput?.value??"",
        phoneNumber:PhonNumberInput?.value??"",
        avatar:null,
        storage:deviceStorageInput?.checked? "Device":"SIM",
    }
    contactList.push(newContact)
    const listItem = creatListItem({
        contactName:newContact.contactName,
        phoneNumber:newContact.phoneNumber

    })
    
    contactsListElement?.appendChild(listItem)

    
     }