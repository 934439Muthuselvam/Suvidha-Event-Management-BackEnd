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
      const { url } = await put(filename, image.buffer, { access: 'public',token:process.env.BLOB_READ_WRITE_TOKEN });

      imageMap.push(url); // Store the public URL
    }

    return imageMap;
  } catch (err) {
    console.error("Image upload error:", err);
    return [];
  }
};

export { Saveimages };


// import path from 'path'
// import fs from 'fs'
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const Saveimages = async (images, folpath) => {
//   try {
//     const imageMap = []
//     for (const image of images) {
//       const binaryData = Buffer.from(image.buffer, 'base64')
//       const timestamp = new Date().getTime()
//       const directoryPath = path.join(__dirname, '../../uploads', folpath)
//       if (!fs.existsSync(directoryPath)) {
//         fs.mkdirSync(directoryPath, { recursive: true })
//       }
//       let fileName = image.originalname;
//       let updatedFileName = fileName.replace(/ /g, "_");
//       const filename = `/${folpath}/${timestamp}_${updatedFileName}`
//       const tempFilePath = path.join(__dirname, '../../uploads', filename)
//       fs.writeFileSync(tempFilePath, binaryData)
//       imageMap.push(`uploads${filename}`)
//     }
//     return imageMap
//   } catch (err) {
//     console.log(err)
//   }
// }

// export { Saveimages }
