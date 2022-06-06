import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[]= [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }

  update(id, name: string, price: number, description: string) {
    const item = this.findById(id);
    item.name = name;
    item.price = price;
    item.description = description;
    return item;
  }

  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
