export const getAssetPath = (relativePath) => {
  if (!relativePath) return ''

  const cleaned = relativePath.replace(/^\/+/, '')
  // import.meta.env.BASE_URL already includes trailing slash for Vite
  return `${import.meta.env.BASE_URL}${cleaned}`
}


