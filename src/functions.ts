import{contactInfotype}from './types'
export const creatListItem = (contactInfo : contactInfotype): HTMLLIElement =>{
    const listItem = document.createElement("li")
    listItem.className="py-4 px-1 bg-slate-400 rounded-lg"
    const contactNameElemnt = document.createElement("h2")
    contactNameElemnt.innerText =contactInfo. contactName
    const contactPhoneElemnt = document.createElement("p")
    contactPhoneElemnt.innerText =contactInfo. phoneNumber.toString()
    listItem.appendChild(contactNameElemnt)
    listItem.appendChild(contactPhoneElemnt)
    return listItem
}
export const validateFields = (...fields:string[]):boolean=>{
    return fields.every((fields) =>!!(fields).toString())
    }