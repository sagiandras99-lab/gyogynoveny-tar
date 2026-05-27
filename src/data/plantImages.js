// Dynamically import all JPG images from ../images using Vite's import.meta.glob
// This avoids build errors if some suggested images are not yet present.
const modules = import.meta.glob('../images/*.jpg', { eager: true, as: 'url' });

export const plantImages = Object.entries(modules).reduce((acc, [path, url]) => {
  const file = path.split('/').pop();
  const key = file.replace(/\.[^.]+$/, '');
  acc[key] = url;
  return acc;
}, {});

export default plantImages;
