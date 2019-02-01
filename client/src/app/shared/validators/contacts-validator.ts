import { FormControl } from '@angular/forms';

export function nameValidator(control: FormControl): { firstName: string } {
    const value = control.value;
    const validName = /^[A-z]{4,}$/i.test(value);
    if (!validName) {
        return { firstName: 'invalid' };
    }
    return null;
}

export function emailValidator(control: FormControl): { email: string } {
    const value = control.value;
    const validEmail = /[A-z]+@.+\..+/i.test(value);
    if (!validEmail) {
        return { email: 'invalid' };
    }
    return null;
}