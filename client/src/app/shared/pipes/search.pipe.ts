import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false,
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], criteria: any): any {
        if (!items || !items.length || !criteria || !criteria.length) return null;
        // if (!criteria) return items;
        // console.log('items:', items, 'criteria:', criteria);
        return items.filter(item => {
            return item.title.toLocaleLowerCase().includes(criteria.toLocaleLowerCase());
            // ||
                // item._description.toLocaleLowerCase().includes(criteria.toLocaleLowerCase());
        });
    }
}