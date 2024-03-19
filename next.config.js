/** @type {import('next').NextConfig} */
// const isPort= process.env.NODE_ENV === 'production'
const nextConfig = {

    // basePath: isPort ? "/CardDetails" : "",
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true,
    },
}

module.exports = nextConfig
