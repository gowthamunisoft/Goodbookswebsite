export function getHomePermalink() {
    return '/'; // Homepage permalink
  }
  
  export function getBlogPermalink(slug: any) {
    return `/blog/${slug}/`; // Dynamic blog post permalink
  }
  
  export function getProjectPermalink(projectName: any) {
    return `/projects/${projectName}/`; // Dynamic project permalink
  }
  