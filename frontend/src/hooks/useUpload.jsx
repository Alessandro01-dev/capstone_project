import { useState } from 'react';

const useUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const uploadFile = async (url, file, fieldName, method = 'POST') => {
    setIsUploading(true);
    setUploadError(null);
    
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append(fieldName, file);

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) throw new Error(`Errore durante l'upload`);
      
      const data = await response.json();
      return { success: true, data };
    } catch (err) {
      setUploadError(err.message);
      return { success: false, error: err.message };
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadFile, isUploading, uploadError };
};

export default useUpload;
