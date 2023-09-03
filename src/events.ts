import {ContactsListDrawer,contactNameInput,PhonNumberInput,deviceStorageInput,contactsListElement,} from './importer.js'
import {contactList} from './state.js'
export const showContactsButtonHandler =  ()=>{
    ContactsListDrawer?.classList.remove("hidden");
}
import{contactProps}from './types.js'
export const closeContactsHandler =  ()=>{
    ContactsListDrawer?.classList.add("hidden");
}
export const handelCreateContact = ()=>{

    const newContact :contactProps={
        id: crypto.randomUUID(),
        contactName:contactNameInput?.value??"",
        phoneNumber:PhonNumberInput?.value??"",
        avatar:null,
        storage:deviceStorageInput?.checked? "Device":"SIM",
    }
    contactList.push(newContact)
    
    
    const listItem = document.createElement("li")
    listItem.className="py-4 px-1 bg-slate-400 rounded-lg"
    const contactNameElemnt = document.createElement("h2")
    contactNameElemnt.innerText = newContact.contactName
    const contactPhoneElemnt = document.createElement("p")
    contactPhoneElemnt.innerText = newContact.phoneNumber.toString()
    listItem.appendChild(contactNameElemnt)
    listItem.appendChild(contactPhoneElemnt)
    contactsListElement?.appendChild(listItem)
    
     }