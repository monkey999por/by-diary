const buildSuffix = (url?: {query?: Record<string, string>, hash?: string}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  "sample": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample' as const, hash: url?.hash, path: `/sample${buildSuffix(url)}` })
  },
  "sample2": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample2' as const, hash: url?.hash, path: `/sample2${buildSuffix(url)}` })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash, path: `/${buildSuffix(url)}` })
};

export type PagesPath = typeof pagesPath;
