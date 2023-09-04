export type contactProps = {
    id:string;
    contactName: string;
    phoneNumber: string | number;
    storage: "SIM"| "Device";
    avatar: string |null
    }
   export type contactListType =Array<contactProps>;
   
  export type contactInfotype ={
    contactName : string,
    phoneNumber : string |number

}