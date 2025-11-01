export default defineEventHandler(async (event) => {
    const query = `
    {
        user(login: "Thijs861") {
        pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
            ... on Repository {
                name
                description
                url
                stargazerCount
                primaryLanguage {
                name
                }
            }
            }
        }
        }
    }`

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            
        }
    })
})