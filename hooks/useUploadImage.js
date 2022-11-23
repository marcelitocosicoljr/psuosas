import { ref, getDownloadURL } from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import { storage } from "lib/firebase";
import { v4 as uuidv4 } from "uuid";

function getFileExtention(filename) {
  return (
    filename.substring(filename.lastIndexOf(".") + 1, filename.length) ||
    filename
  );
}

const useUploadImage = ({ file, path = "users-photo" }) => {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();

  const upload = async () => {
    if (file) {
      const ext = getFileExtention(file.name);
      const imageRef = ref(storage, `${path}/${file?.name + uuidv4()}.${ext}`);
      const response = await uploadFile(imageRef, file, {
        contentType: file.type,
      });
      return await getDownloadURL(ref(storage, response?.metadata?.fullPath));
    }
  };

  return [upload, uploading];
};

export default useUploadImage;
