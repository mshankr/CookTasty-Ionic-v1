import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@Pipe({
  name: 'random',
  pure: false
})

export class RandomPipe implements PipeTransform {
  transform(items: Item[], filter: Item): Item[] {
    return items;
  }
}
