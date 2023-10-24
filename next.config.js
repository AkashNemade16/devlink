/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    async redirects(){
      return [
        {
          source:'/',
          destination:'/Homepage',
          permanent:true
        }
      ]
    },
    images: {
      domains: ['baqnudafllnpwpnshixg.supabase.co'],
    },
}

module.exports = nextConfig
