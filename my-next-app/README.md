# Next.js

- next dev , run the development mode
- next build, build the application so that the app is ready to run (Production)
- next start, run the app on development server
- next lint, ES 6 linting

- Folder Structure for the production

- pages: 
        - use to store  all the React Component. 
        - Associated with the Route based on the files names under this folder
            - pages/dept.js
                - default route to /dept
            - pages/component/mycomponent.js
                - default route
                    - /component/mycomponent        
- public
    - used to store all static assets  e.g. images, fonts, etc
    - files from the public folder are referred as '/'
- All Components are React functional components               

- styles, store all css files those are used by the components or pages           

- netxt/link, for hyperlinks using 'Link' component
- next/router 
    - provides a 'useRouter' Hooks
        - push({
            pathname: 'URL',
            query:{Query Parameter object}
        })
        - e.g.
            - const router = useRouter()
                - router.push({
                    pathname: '/components/home',
                    query: {
                        p1: 10, p2:20,
                    }
                })
            - read the parameter from router
                - let data = router.query.p1

- Server-Side-rendering for the AJAX calls 
    - getStaticProps()
        - Global method to the components
        - Make an AJAX call during the Build time
            - This is performance improvisation factor for the Modern apps and its is recommended in Production                      


