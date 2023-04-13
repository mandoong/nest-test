import { BadRequestException, PipeTransform } from '@nestjs/common';
import { DogType } from '../dog.interface';

export class DogTypeValidationPipe implements PipeTransform {
  readonly TypeOption = [DogType.PRIVATE, DogType.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isTypeValid(value)) {
      throw new BadRequestException();
    }

    return value;
  }

  private isTypeValid(type: any) {
    const index = this.TypeOption.indexOf(type);
    return index !== -1;
  }
}
