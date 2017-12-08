import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';

<<<<<<< HEAD
    for(let v of values) {
=======
    for (let v of values) {
>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(value: string) {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }
<<<<<<< HEAD
};
=======

}
>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b
