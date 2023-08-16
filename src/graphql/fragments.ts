import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment logo on Setting {
    logo {
      data {
        id
        attributes {
          altText: alternativeText
          url
        }
      }
    }
  }

  fragment cover on Post {
    cover {
      data {
        id
        attributes {
          altText: alternativeText
          url
        }
      }
    }
  }

  fragment menuLink on Setting {
    menuLink {
      id
      link
      text
      newTab
    }
  }

  fragment tag on Tag {
    displayName
    slug
  }

  fragment author on Author {
    displayName
    slug
  }

  fragment category on Category {
    displayName: DisplayName
    slug
  }

  fragment tags on Post {
    tags {
      data {
        attributes {
          ...tag
        }
      }
    }
  }

  fragment authors on Post {
    author {
      data {
        attributes {
          ...author
        }
      }
    }
  }

  fragment categories on Post {
    categories {
      data {
        attributes {
          ...category
        }
      }
    }
  }

  fragment post on Post {
    slug
    title
    excerpt
    content
    allowComments
    ...cover
    ...categories
    ...tags
    ...authors
  }

  fragment posts on PostEntityResponseCollection {
    data {
      id
      attributes {
        ...post
      }
    }
  }

  fragment settings on SettingEntityResponse {
    data {
      id
      attributes {
        blogName
        blogDescription
        ...logo
        ...menuLink
        footerText
      }
    }
  }
`;
