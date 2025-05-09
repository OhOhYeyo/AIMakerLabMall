/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'cdn.example.com'], // 이미지 도메인 허용 목록
  },
  // API 프록시 또는 리라이트 예시
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*', // 백엔드 API 주소로 프록시
      },
    ];
  },
};

module.exports = nextConfig;
