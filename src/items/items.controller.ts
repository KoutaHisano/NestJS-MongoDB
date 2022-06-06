import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Item {
    return this.itemService.findById(id);
  }

  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
    ): Item {
      const item: Item = {
        id,
        name,
        price,
        description
      };
    return this.itemService.create(item);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string
  ) {
    return this.itemService.update(id, name, price, description);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemService.delete(id);
  }
}
