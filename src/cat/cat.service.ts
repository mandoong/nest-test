import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat, CatStatus } from './cat.model';
import { v1 as uuid } from 'uuid';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatService {
  private cats: Cat[] = [];

  getAllCat(): Cat[] {
    return this.cats;
  }

  createCat(createCatDto: CreateCatDto) {
    const { title, content } = createCatDto;

    const cat: Cat = {
      id: uuid(),
      title,
      content,
      status: CatStatus.PUBLIC,
    };

    this.cats.push(cat);
    return cat;
  }

  getCatById(id: string): Cat {
    const found = this.cats.find((cat) => cat.id === id);

    if (!found) {
      throw new NotFoundException(`Can't ${id}`);
    }

    return found;
  }

  deleteCat(id: string): void {
    this.cats = this.cats.filter((cat) => cat.id !== id);
  }

  updateCatStatus(id: string, status: CatStatus): Cat {
    const cat = this.getCatById(id);
    cat.status = status;
    return cat;
  }
}
