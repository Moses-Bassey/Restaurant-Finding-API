import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator';

export function IsInRange(min: number, max: number, validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'isInRange',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [min, max],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [minValue, maxValue] = args.constraints;
          if (typeof value !== 'number') {
            return false;
          }
          return value >= minValue && value <= maxValue;
        },
        defaultMessage(args: ValidationArguments) {
          const [minValue, maxValue] = args.constraints;
          return `${args.property} must be between ${minValue} and ${maxValue}.`;
        }
      }
    });
  };
}