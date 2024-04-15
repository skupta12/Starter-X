/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000"
			},
			{
				protocol: "https",
				port: "",
				hostname: "starter-x.vercel.app",
				pathname: "/**"
			},
		],
	},
};

export default nextConfig;
