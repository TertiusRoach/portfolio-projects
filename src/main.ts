//--|►| Index (Log a Ticket) |◄|--//
import { GetPage } from 'tools/get-page';

export namespace ProjectName {
  export function startProgram() {
    console.log('index.js Loaded');

    let filename = location.href.split('/')[5];
    GetPage.forHTML(filename);
  }
}
// ProjectName.startProgram();
// export namespace Tools {
//   export function clearPage(id: string) {
//     let container: HTMLElement = document.getElementById(id);
//     container.innerHTML = '';
//   }
//   export function getPage(id: string) {
//     let element: HTMLElement = document.getElementById(id);
//     let filename: string = `${id}.html`;
//     $.get(filename, function (data) {
//       $(element).html(data);
//     });
//   }
// }
