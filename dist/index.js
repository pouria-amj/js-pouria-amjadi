import { showContactsButton, closeDrawerButton, submitButton, } from "./src/importer.js";
import { showContactsButtonHandler, closeContactsHandler, handelCreateContact } from './src/events.js';
showContactsButton?.addEventListener("click", showContactsButtonHandler);
closeDrawerButton?.addEventListener("click", closeContactsHandler);
submitButton?.addEventListener("click", handelCreateContact);
//# sourceMappingURL=index.js.map