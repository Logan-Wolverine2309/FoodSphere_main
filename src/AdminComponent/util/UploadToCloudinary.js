const upload_preset = "FoodSphere"; // from your Cloudinary settings
const cloud_name = "dcconejjp";     // your Cloudinary cloud name

const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

export const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', upload_preset); // must match the one set in your Cloudinary dashboard

    try {
        const res = await fetch(api_url, {
            method: "POST",
            body: data,
        });

        if (!res.ok) {
            throw new Error("Image upload failed");
        }

        const fileData = await res.json();
        console.log(fileData); // Optional: Check the response
        return fileData.secure_url; // use 'secure_url' instead of 'url'
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        return null;
    }
};
