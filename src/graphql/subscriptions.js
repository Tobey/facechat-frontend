/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInfluencer = /* GraphQL */ `
  subscription OnCreateInfluencer($owner: String!) {
    onCreateInfluencer(owner: $owner) {
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
export const onUpdateInfluencer = /* GraphQL */ `
  subscription OnUpdateInfluencer($owner: String!) {
    onUpdateInfluencer(owner: $owner) {
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
export const onDeleteInfluencer = /* GraphQL */ `
  subscription OnDeleteInfluencer($owner: String!) {
    onDeleteInfluencer(owner: $owner) {
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
export const onCreateFan = /* GraphQL */ `
  subscription OnCreateFan($owner: String!) {
    onCreateFan(owner: $owner) {
      id
      name
      username
      owner
      getOpenTokSession
    }
  }
`;
export const onUpdateFan = /* GraphQL */ `
  subscription OnUpdateFan($owner: String!) {
    onUpdateFan(owner: $owner) {
      id
      name
      username
      owner
      getOpenTokSession
    }
  }
`;
export const onDeleteFan = /* GraphQL */ `
  subscription OnDeleteFan($owner: String!) {
    onDeleteFan(owner: $owner) {
      id
      name
      username
      owner
      getOpenTokSession
    }
  }
`;
export const onCreateFacechatSession = /* GraphQL */ `
  subscription OnCreateFacechatSession($owner: String!) {
    onCreateFacechatSession(owner: $owner) {
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
export const onUpdateFacechatSession = /* GraphQL */ `
  subscription OnUpdateFacechatSession($owner: String!) {
    onUpdateFacechatSession(owner: $owner) {
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
export const onDeleteFacechatSession = /* GraphQL */ `
  subscription OnDeleteFacechatSession($owner: String!) {
    onDeleteFacechatSession(owner: $owner) {
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
