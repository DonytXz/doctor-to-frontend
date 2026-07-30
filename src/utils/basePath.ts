const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};
