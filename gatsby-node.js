exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
    type ContentfulPageJoinTeamSelectionCompanies implements Node
    @childOf(types: ["ContentfulPageJoinTeam"]) {
      positions: [ContentfulPageJoinTeamSelectionCompaniesPositions]
    }

    type ContentfulPageJoinTeamSelectionCompaniesPositions implements Node
    @childOf(types: ["ContentfulPageJoinTeam"]) {
      id: ID!
      position: String
      link: String
      location: String
      schedule: String
    }
    
    type ContentfulModalReviewSlider implements Node
    @childOf(types: ["ContentfulPageHome"]) {
      logoWhile: ContentfulAsset
    }
    type ContentfulModelReviewSlider implements Node
    @childOf(types: ["ContentfulPageCoFound"]) {
      logoWhile: ContentfulAsset
    }
    
    type ContentfulPageCompanies implements Node
    @childOf(types: ["ContentfulPageCompanies"]) {
      textEndList: String
    }
  `
  actions.createTypes(typeDefs)
}