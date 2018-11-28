import { FormControl } from '@angular/forms';

export function pinCodeValidator(ctrl:FormControl){
console.log(ctrl.errors);
    // if(ctrl.value){
    //      return null;
    // }

    if(ctrl.value ==123456){
        return null;
    }

    return {
        pinCode :{ valiCode :123456}
    };
}