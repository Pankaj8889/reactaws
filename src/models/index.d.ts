import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VehiclesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Vehicles {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly model?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Vehicles, VehiclesMetaData>);
  static copyOf(source: Vehicles, mutator: (draft: MutableModel<Vehicles, VehiclesMetaData>) => MutableModel<Vehicles, VehiclesMetaData> | void): Vehicles;
}