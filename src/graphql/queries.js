/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOpenTokSession = /* GraphQL */ `
  query GetOpenTokSession {
    getOpenTokSession
  }
`;
export const getPublishToken = /* GraphQL */ `
  query GetPublishToken {
    getPublishToken
  }
`;
export const getInfluencer = /* GraphQL */ `
  query GetInfluencer($username: String!) {
    getInfluencer(username: $username) {
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
export const listInfluencers = /* GraphQL */ `
  query ListInfluencers(
    $username: String
    $filter: ModelInfluencerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInfluencers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        username
        owner
        sessionId
        price
        getOpenTokSession
      }
      nextToken
    }
  }
`;
export const getFan = /* GraphQL */ `
  query GetFan($id: ID!) {
    getFan(id: $id) {
      id
      name
      username
      owner
      getOpenTokSession
    }
  }
`;
export const listFans = /* GraphQL */ `
  query ListFans(
    $filter: ModelFanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        owner
        getOpenTokSession
      }
      nextToken
    }
  }
`;
export const getFacechatSession = /* GraphQL */ `
  query GetFacechatSession($id: ID!) {
    getFacechatSession(id: $id) {
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
export const listFacechatSessions = /* GraphQL */ `
  query ListFacechatSessions(
    $filter: ModelFacechatSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacechatSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
