// //--|►| get-page |◄|--//
export namespace GetPage {
  export function forHTML(filename: string) {
    let page = filename.split('.')[0];
    switch (page) {
      case 'index':
        // BuildBody.forID(`${page}-body`);
        break;
      case 'tickets':
        // BuildBody.forID(`${page}-body`);
        break;
    }
  }
}
