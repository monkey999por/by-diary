const nextConfig = {
  experimental: {
    // it will only load the modules which is actually used. spesifies some package in array.
    // optimizePackageImports: ['package-name'],
    // https://nextjs.org/docs/app/api-reference/next-config-js/partial-prerendering
    // ppr: true,
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  env: {
    defined_env_val_in_next_config_js:
      'this is defined enveroiment variable in next.config.js',
  },
  //  the consistent build ID which is used while "next build"
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH;
  },
  //   disable http Etag.(the result is disable page(=html) cache. see more HTML Etag. )
  generateEtags: false,

  //   disable http keep alive.
  // keep-aliveを無効にするメリットデメリット。
  // メリット: keep-aliveはクライアントとの確立した通信を保持する仕組み。これによりリクエストごとに通信を確立するオーバーヘッドがなくなり高速化につながる。同じ通信を使うのでネットワークトラフィック不可も軽減できる。
  //   デメリット: 1クライアントごとに1通信を確立するので、サーバのリソースの圧迫につながる。ロードバランサーを使っている場合なんかでkeep-aliveで確立してしまうと1つのサーバに通信が固定されて負荷分散ができなくなる場合がある。
  //   基本的には小規模なアプリケーションであればkeep-aliveは有効で問題ない
  httpAgentOptions: {
    keepAlive: true,
  },
  //   it doesn't work.
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig = nextConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      generateEtags: false,
      ...defaultConfig,
    };
  }

  return defaultConfig;
};

/** @type {import('next').NextConfig} */

// module.exports = nextConfig;
