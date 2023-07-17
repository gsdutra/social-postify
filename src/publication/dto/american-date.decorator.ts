// is-american-date.decorator.ts
import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'isAmericanDateFormat', async: false })
  export class IsAmericanDateFormatConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      return dateRegex.test(value);
    }
  
    defaultMessage(args: ValidationArguments) {
      return 'Invalid American date format. Should be in the format YYYY-MM-DD';
    }
  }
  
  export function IsAmericanDateFormat(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsAmericanDateFormatConstraint,
      });
    };
  }
  