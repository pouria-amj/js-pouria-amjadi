export const creatListItem = (contactInfo) => {
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-1 bg-slate-400 rounded-lg";
    const contactNameElemnt = document.createElement("h2");
    contactNameElemnt.innerText = contactInfo.contactName;
    const contactPhoneElemnt = document.createElement("p");
    contactPhoneElemnt.innerText = contactInfo.phoneNumber.toString();
    listItem.appendChild(contactNameElemnt);
    listItem.appendChild(contactPhoneElemnt);
    return listItem;
};
export const validateFields = (...fields) => {
    return fields.every((fields) => !!(fields).toString());
};
//# sourceMappingURL=functions.js.map