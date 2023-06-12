import { AccountInterface } from 'interfaces/account';
import { GetQueryInterface } from 'interfaces';

export interface BeerInterface {
  id?: string;
  name: string;
  hero_image: string;
  beer_type: string;
  brewery: string;
  alcohol_content: number;
  brewery_location: string;
  brewery_history: string;
  description: string;
  interesting_facts: string;
  purchase_locations: string;
  account_id: string;
  created_at?: any;
  updated_at?: any;

  account?: AccountInterface;
  _count?: {};
}

export interface BeerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  hero_image?: string;
  beer_type?: string;
  brewery?: string;
  brewery_location?: string;
  brewery_history?: string;
  description?: string;
  interesting_facts?: string;
  purchase_locations?: string;
  account_id?: string;
}
