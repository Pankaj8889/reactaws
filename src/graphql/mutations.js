/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVehicles = /* GraphQL */ `
  mutation CreateVehicles(
    $input: CreateVehiclesInput!
    $condition: ModelVehiclesConditionInput
  ) {
    createVehicles(input: $input, condition: $condition) {
      id
      name
      price
      model
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVehicles = /* GraphQL */ `
  mutation UpdateVehicles(
    $input: UpdateVehiclesInput!
    $condition: ModelVehiclesConditionInput
  ) {
    updateVehicles(input: $input, condition: $condition) {
      id
      name
      price
      model
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVehicles = /* GraphQL */ `
  mutation DeleteVehicles(
    $input: DeleteVehiclesInput!
    $condition: ModelVehiclesConditionInput
  ) {
    deleteVehicles(input: $input, condition: $condition) {
      id
      name
      price
      model
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
