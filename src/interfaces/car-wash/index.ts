import { GetQueryInterface } from 'interfaces';

export interface CarWashInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CarWashGetQueryInterface extends GetQueryInterface {
  id?: string;
}
