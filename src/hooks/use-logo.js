import { useStaticQuery, graphql } from 'gatsby'

export const useLogo = () => {
  const { file } = useStaticQuery(
    graphql`
      query logo {
        file(relativePath: { eq: "images/swagonwellness1.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fixed(height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return file.childImageSharp.fixed
}
