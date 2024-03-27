// export const setCookie = (name:string, value:boolean, days:number) => {
//   let expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
// export const getCookie = (name: string) => {
//   const cookie = document.cookie; 
//     if (cookie.substring(name.length + 1) == "true") {     
//       return true;
//     }
//     return false;

// };
