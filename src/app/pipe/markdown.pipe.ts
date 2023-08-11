import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let text: string = "";

    value.split((/\n| |,/)).forEach((word, i) => {
      switch(word){
        case "#": 
          return text += "<p class='is-size-1'/>";
        case "##":
          return text += "<p class='is-size-2'/>";
        case "###":
          return text += "<p class='is-size-4'/>";
        case "####":
          return text += "<p class='is-size-5'/>";
        case "#####":
          return text += "<p class='is-size-6'/>";
        case "-":
          return text += "<li/>";  
        default:
          return text += word;
      }  
    });  
    
    //console.log(text);
    return text;
  }

}
