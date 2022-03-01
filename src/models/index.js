// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vehicles } = initSchema(schema);

export {
  Vehicles
};