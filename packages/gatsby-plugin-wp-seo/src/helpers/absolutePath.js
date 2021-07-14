export const absolutePath = (siteUrl, path) => {
  return `${siteUrl}/${path}`.replace(/([^:])(\/\/+)/g, "$1/")
}
