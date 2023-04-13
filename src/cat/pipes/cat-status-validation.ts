import { BadRequestException, PipeTransform } from '@nestjs/common';
import { CatStatus } from '../cat.model';

export class CatStatusValidationPipe implements PipeTransform {
  readonly StatusOPtion = [CatStatus.PRIVATE, CatStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOPtion.indexOf(status);
    return index !== -1;
  }
}
