import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
// const SaveImages = async (images, folderPath) => {
//   try {
//     const imageUrls = [];

//     for (const image of images) {
//       const timestamp = Date.now();
//       let fileName = image.originalname.replace(/ /g, "_"); // Replace spaces with underscores
//       const publicId = `${folderPath}/${timestamp}_${fileName}`;

//       // Upload image to Cloudinary
//       const uploadResponse = await cloudinary.uploader.upload(image.path, {
//         folder: folderPath,
//         public_id: publicId,
//         resource_type: "auto",
//       })
//        .catch((error) => {
//            console.log(error);
//        });
    
//     // console.log(uploadResult);

//     //   imageUrls.push(uploadResponse.secure_url); // Store Cloudinary URL
//     }

//     return imageUrls;
//   } catch (err) {
//     console.error("Image upload error:", err);
//     return [];
//   }
// };

// export { SaveImages };





// import { v2 as cloudinary } from "cloudinary";



const SaveImages = async (images, folpath) => {
  try {
    const imageMap = [];
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true, // Ensures HTTPS URLs
    });

    for (const image of images) {
      const timestamp = Date.now();
      let fileName = image.originalname.replace(/ /g, "_"); // Remove spaces from filename
      const filename = `${folpath}/${timestamp}_${fileName}`;

      // Convert buffer to Base64 string
      const base64String = `data:${image.mimetype};base64,${image.buffer.toString("base64")}`;

      // Upload Base64 string to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(base64String, {
        folder: folpath,
        resource_type: "auto",
      });

      imageMap.push(uploadResponse.secure_url);
    }

    return imageMap;
  } catch (err) {
    console.error("Image upload error:", err);
    return [];
  }
};

export { SaveImages };
