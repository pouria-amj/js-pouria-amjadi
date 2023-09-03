// type contactProps = {
// id:string;
// contactName: string;
// phoneNumber: string | number;
// storage: "SIM"| "Device";
// avatar: string |null
// }
// type contactListType =Array<contactProps>;
import{contactListType,contactProps} from "./src/types"
import{showContactsButton,closeDrawerButton,submitButton,} from "./src/importer.js"



import{showContactsButtonHandler,closeContactsHandler,handelCreateContact} from './src/events.js'
showContactsButton?.addEventListener("click",showContactsButtonHandler);
closeDrawerButton?.addEventListener("click",closeContactsHandler);
 submitButton?.addEventListener("click" ,handelCreateContact)