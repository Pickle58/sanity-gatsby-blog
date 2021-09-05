export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6134a974df6ebf31bb22fba7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3fgzkbiq",
                  apiId: "555984c2-4ded-4e40-80eb-0093b064be5e",
                },
                {
                  buildHookId: "6134a974988a02d6c0747294",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-d7y3tv3d",
                  apiId: "f284f033-4b3c-4adc-86f9-0b0f7f4240ef",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Pickle58/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-d7y3tv3d.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
