import fs from "node:fs";
import { v2 as cloudinary } from "cloudinary";
import {CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET_KEY,CLOUDINARY_CLOUD_NAME} from '../constant.js';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET_KEY,
  secure: true,
});

export const uploadFileInCloudinary = async (fileUrl) => {
  if (!fileUrl) {
    return { error: "file Url is not found" };
  }
  try {
    const result = await cloudinary.uploader.upload(fileUrl, {
      resource_type: "image",
      folder: "book_store",
    });
    fs.unlink(fileUrl, (err) => {
      if (err) console.log(err);
      else {
        console.log("file is deleted successfully");
      }
    });

    console.log("file uploaded successfully");

    return result;
  } catch (error) {
    fs.unlink(fileUrl, (err) => {
      if (err) console.log(err);
      else {
        console.log("file is deleted successfully");
      }
    });
    console.log("something went wrong at file upload in cloudinary");
    return null;
  }
};



