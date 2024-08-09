import { Column } from '../../types/index';

export const tableColumns: Column[] = [
   {
      id: 'id',
      align: 'center',
      label: 'Id',
      width: '4%',
   },
   {
      id: 'title',
      align: 'left',
      label: 'Title',
      width: '*',
   },
   {
      id: 'price',
      align: 'center',
      label: 'Price',
      width: '10%',
   },
   {
      id: 'category',
      align: 'center',
      label: 'Category',
      width: '10%',
   },
];
