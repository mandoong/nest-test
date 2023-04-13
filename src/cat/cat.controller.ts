import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat, CatStatus } from './cat.model';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatStatusValidationPipe } from './pipes/cat-status-validation';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get('/')
  getAllCat(): Cat[] {
    return this.catService.getAllCat();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catService.createCat(createCatDto);
  }

  @Get('/:id')
  getCatById(@Param('id') id: string): Cat {
    return this.catService.getCatById(id);
  }

  @Delete('/:id')
  deleteCat(@Param('id') id: string): void {
    return this.catService.deleteCat(id);
  }

  @Patch('/:id/status')
  updateCat(
    @Param('id') id: string,
    @Body('status', CatStatusValidationPipe) status: CatStatus,
  ) {
    return this.catService.updateCatStatus(id, status);
  }
}
