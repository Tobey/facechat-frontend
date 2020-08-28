/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInfluencer = /* GraphQL */ `
  mutation CreateInfluencer(
    $input: CreateInfluencerInput!
    $condition: ModelInfluencerConditionInput
  ) {
    createInfluencer(input: $input, condition: $condition) {
      id
      name
      username
      owner
      sessionId
      price
      getOpenTokSession
    }
  }
`;
export const updateInfluencer = /* GraphQL */ `
  mutation UpdateInfluencer(
    $input: UpdateInfluencerInput!
    $condition: ModelInfluencerConditionInput
  ) {
    updateInfluencer(input: $input, condition: $condition) {
      id
      name
      username
      owner
      sessionId
      price
      getOpenTokSession
    }
  }
`;
export const deleteInfluencer = /* GraphQL */ `
  mutation DeleteInfluencer(
    $input: DeleteInfluencerInput!
    $condition: ModelInfluencerConditionInput
  ) {
    deleteInfluencer(input: $input, condition: $condition) {
      id
      name
      username
      owner
      sessionId
      price
      getOpenTokSession
    }
  }
`;
export const createFan = /* GraphQL */ `
  mutation CreateFan(
    $input: CreateFanInput!
    $condition: ModelFanConditionInput
  ) {
    createFan(input: $input, condition: $condition) {
      id
      name
      username
      owner
      getOpenTokSession
    }
  }
`;
export const updateFan = /* GraphQL */ `
  mutation UpdateFan(
    $input: UpdateFanInput!
    $condition: ModelFanConditionInput
  ) {
    updateFan(input: $input, condition: $condition) {
      id
      name
      username
      owner
      getOpenTokSession
    }
  }
`;
export const deleteFan = /* GraphQL */ `
  mutation DeleteFan(
    $input: DeleteFanInput!
    $condition: ModelFanConditionInput
  ) {
    deleteFan(input: $input, condition: $condition) {
      id
      name
      username
      owner
      getOpenTokSession
    }
  }
`;
export const createFacechatSession = /* GraphQL */ `
  mutation CreateFacechatSession(
    $input: CreateFacechatSessionInput!
    $condition: ModelFacechatSessionConditionInput
  ) {
    createFacechatSession(input: $input, condition: $condition) {
      influencerId
      influencer {
        id
        name
        username
        owner
        sessionId
        price
        getOpenTokSession
      }
      fanId
      fan {
        id
        name
        username
        owner
        getOpenTokSession
      }
      duration
      owner
    }
  }
`;
export const updateFacechatSession = /* GraphQL */ `
  mutation UpdateFacechatSession(
    $input: UpdateFacechatSessionInput!
    $condition: ModelFacechatSessionConditionInput
  ) {
    updateFacechatSession(input: $input, condition: $condition) {
      influencerId
      influencer {
        id
        name
        username
        owner
        sessionId
        price
        getOpenTokSession
      }
      fanId
      fan {
        id
        name
        username
        owner
        getOpenTokSession
      }
      duration
      owner
    }
  }
`;
export const deleteFacechatSession = /* GraphQL */ `
  mutation DeleteFacechatSession(
    $input: DeleteFacechatSessionInput!
    $condition: ModelFacechatSessionConditionInput
  ) {
    deleteFacechatSession(input: $input, condition: $condition) {
      influencerId
      influencer {
        id
        name
        username
        owner
        sessionId
        price
        getOpenTokSession
      }
      fanId
      fan {
        id
        name
        username
        owner
        getOpenTokSession
      }
      duration
      owner
    }
  }
`;
