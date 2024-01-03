/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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
      domains: ['baqnudafllnpwpnshixg.supabase.co','bqjmarvunpsdurmdeoof.supabase.co'],
    },
   
}

module.exports = nextConfig
