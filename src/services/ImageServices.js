import path from 'path';
import { put } from "@vercel/blob";

const Saveimages = async (images, folpath) => {
  try {
    const imageMap = [];

    for (const image of images) {
      const timestamp = Date.now();
      let fileName = image.originalname.replace(/ /g, "_"); // Replace spaces with underscores
      const filename = `uploads/${folpath}/${timestamp}_${fileName}`;

      // Upload to Vercel Blob Storage
      const { url } = await put(filename, image.buffer, { access: 'public' });

      imageMap.push(url); // Store the public URL
    }

    return imageMap;
  } catch (err) {
    console.error("Image upload error:", err);
    return [];
  }
};

export { Saveimages };



