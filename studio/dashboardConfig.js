export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6272aad40faeca009a9fa2e8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-otz8ehjy',
                  apiId: 'ef494abb-f5d1-4fc2-9ad0-62ca697d25fa'
                },
                {
                  buildHookId: '6272aad46916b500723d0f8f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hvh4e5vf',
                  apiId: '86d94bb0-7089-46d1-9fbc-0abe72640b0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slaterduskinwilson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hvh4e5vf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
