// 🚀 Optimized Asset Helper for Vite Build Consistency
// This uses import.meta.glob to ensure ALL assets are indexed and bundled correctly.

const images = import.meta.glob('../../assets/images/*.{webp,svg,jpg,png}', { eager: true, as: 'url' });

/**
 * Returns the bundled URL for an image asset.
 * @param name The filename without extension (assumes .webp if not specified)
 * @returns Resolvable asset URL
 */
export const getAsset = (name: string): string => {
  // Filename with .webp extension if none provided
  const filename = name.includes('.') ? name : `${name}.webp`;
  
  // Construct the search path that Vite uses as the key
  const path = `../../assets/images/${filename}`;
  
  // Look up in the globbed index
  const asset = images[path];
  
  if (!asset) {
    console.warn(`Asset not found: ${name} (checked path: ${path})`);
    return '';
  }
  
  return asset as string;
};

/**
 * Temporary fallback for blur assets since the blur directory doesn't exist.
 * Returns the main asset URL.
 */
export const getBlurAsset = (name: string): string => {
  return getAsset(name);
};
