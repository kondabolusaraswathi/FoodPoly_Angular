import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tfilter'
})
export class TfilterPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    if(args==="all"){
      return value
    }
    if(args ==="done"){
      console.log("done filter");
      return value.filter((val)=>val.status)
    }
    if(args ==="not done"){
      return value.filter((val)=>!val.status)
    }
    return value
  }

}
