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
  `
  actions.createTypes(typeDefs)
}