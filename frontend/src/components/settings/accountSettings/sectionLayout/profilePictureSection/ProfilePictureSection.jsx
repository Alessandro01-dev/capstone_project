import { useState, useCallback, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import SectionLayout from '../SectionLayout';
import classes from './ProfilePictureSection.module.css';
import UploadFileIcon from '../../../../../assets/UploadFileIcon';

const ProfilePictureSection = ({ initialData, onSave, isLoading }) => {

  const [avatar, setAvatar] = useState(initialData);
  const [uploadMethod, setUploadMethod] = useState('file');
  const [temporaryFile, setTemporaryFile] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (initialData) {
      setAvatar(initialData);
    }
  }, [initialData]);


  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setTemporaryFile(URL.createObjectURL(file));
      setAvatar(file);
      setHasError(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
    disabled: uploadMethod !== 'file'
  });

  const handleCancel = () => {
    setAvatar(initialData || "");
    setTemporaryFile(null);
    setUploadMethod('file');
    setHasError(false);
  };

  const handleImageError = () => {
    if (avatar && uploadMethod === 'url') setHasError(true);
  };

  return (
    <SectionLayout
      title="Profile picture"
      currentValue={avatar}
      initialValue={initialData}
      onCancel={handleCancel}
      onSave={() => onSave(avatar)}
      isLoading={isLoading}
      customDisabled={hasError || (uploadMethod === 'url' && !avatar)}
    >
      {(isEditing) => (
        <div
          className="d-flex flex-column gap-3 align-items-center"
        >
          <div
            className='d-flex align-items-center justify-content-between w-100 px-3'
          >
            <div className={classes['avatar-wrapper']}>
              {isEditing && uploadMethod === 'file' ? (
                <div
                  {...getRootProps()}
                  className={`${classes['dropzone-circle']} ${isDragActive ? classes.active : ''}`}
                >
                  <input {...getInputProps()} />
                  <img
                    src={temporaryFile || (typeof avatar === 'string' ? avatar : initialData)}
                    alt="preview"
                    className={classes['avatar-img']}
                  />
                  <div className={classes['dropzone-overlay']}>
                    <p>{isDragActive ? "Drop it!" : "Click or Drag"}</p>
                    <UploadFileIcon />
                  </div>
                </div>
              ) : (
                <div className={classes['static-circle']}>
                  <img
                    src={typeof avatar === 'string' && avatar ? avatar : (temporaryFile || initialData)}
                    alt="profile"
                    className={`${classes['avatar-img']} ${(hasError || (uploadMethod === 'url' && !avatar)) ? 'opacity-0' : ''}`}
                    onError={handleImageError}
                    onLoad={() => setHasError(false)}
                  />
                </div>
              )}
              {isEditing && uploadMethod === 'url' && (hasError || !avatar) && (
                <div className={classes['error-overlay']}>
                  <span>{!avatar ? "Insert an URL" : "Invalid Image URL"}</span>
                </div>
              )}
            </div>

            {isEditing && (
              <div className="d-flex flex-column gap-4 mb-2">
                <Form.Check
                  className={classes['custom-radio-input']}
                  type="radio"
                  label="Upload File"
                  name="uploadMethod"
                  checked={uploadMethod === 'file'}
                  onChange={() => {
                    setUploadMethod('file');
                    if (!avatar || avatar === "") {
                      setAvatar(initialData);
                    }
                    setHasError(false);
                  }}
                />
                <Form.Check
                  className={classes['custom-radio-input']}
                  type="radio"
                  label="Image URL"
                  name="uploadMethod"
                  checked={uploadMethod === 'url'}
                  onChange={() => {
                    setUploadMethod('url');
                    if (typeof avatar !== 'string') {
                      setAvatar("");
                    }
                  }}
                />
              </div>
            )}
          </div>

          <div
            className={classes['custom-input-container']}
          >
            {isEditing && uploadMethod === 'url' && (
              <Form.Control
                type="text"
                placeholder="Paste image URL here..."
                isInvalid={hasError || !avatar}
                value={typeof avatar === 'string' ? avatar : ''}
                onChange={(e) => {
                  setAvatar(e.target.value);
                  setTemporaryFile(null);
                  setHasError(false);
                }}
                className={classes['custom-input']}
              />
            )}
          </div>
        </div>
      )}
    </SectionLayout>
  );
};

export default ProfilePictureSection;
