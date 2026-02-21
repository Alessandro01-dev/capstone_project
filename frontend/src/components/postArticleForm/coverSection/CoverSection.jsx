import { useState, useCallback, useEffect } from 'react';
import { Form, ButtonGroup, Button, Spinner } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import UploadFileIcon from "../../../assets/UploadFileIcon";
import classes from './CoverSection.module.css';
import SuccessIcon from '../../../assets/SuccessIcon';

const CoverSection = ({ cover, setCover }) => {

  const [uploadMethod, setUploadMethod] = useState('file');
  const [isUrlValid, setIsUrlValid] = useState(false);
  const [loadingUrl, setLoadingUrl] = useState(false);

  const handleUploadMethodToggle = () => {
    if (uploadMethod === 'file') {
      setUploadMethod('url')
      setCover('')
    }
    if (uploadMethod === 'url') {
      setUploadMethod('file')
      setCover(null)
    }
  }

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setCover(acceptedFiles[0]);
    }
  }, [setCover]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
    disabled: uploadMethod !== 'file'
  });

  useEffect(() => {
    if (uploadMethod === 'url' && typeof cover === 'string' && cover.startsWith('http')) {
      setLoadingUrl(true);
      const img = new Image();
      img.src = cover;
      img.onload = () => {
        setIsUrlValid(true);
        setLoadingUrl(false);
      };
      img.onerror = () => {
        setIsUrlValid(false);
        setLoadingUrl(false);
      };
    } else {
      setIsUrlValid(false);
    }
  }, [cover, uploadMethod]);

  const handleUrlChange = (e) => {
    setCover(e.target.value);
  };


  const filePreview = cover instanceof File ? URL.createObjectURL(cover) : null;
  const urlPreview = isUrlValid ? cover : null;

  const previewUrl = filePreview || urlPreview;


  useEffect(() => {
    return () => {
      if (previewUrl && cover instanceof File) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl, cover]);

  return (
    <div
      className="d-flex flex-column gap-3"
    >
      <div
        className="d-flex justify-content-between align-items-center"
      >
        <h4>Cover Image</h4>
        <ButtonGroup size="sm">
          <Button
            variant={uploadMethod === 'file' ? 'dark' : 'outline-dark'}
            onClick={handleUploadMethodToggle}
            disabled={uploadMethod === 'file'}
          >
            File
          </Button>
          <Button
            variant={uploadMethod === 'url' ? 'dark' : 'outline-dark'}
            onClick={handleUploadMethodToggle}
            disabled={uploadMethod === 'url'}
          >
            URL
          </Button>
        </ButtonGroup>
      </div>

      <div className="bg-light p-4 rounded-4 border shadow-sm d-flex flex-column gap-3">
        {uploadMethod === 'file' && (
          <div
            {...getRootProps()}
            className={`${classes['dropzone-rect']} ${isDragActive ? classes.active : ''} ${cover instanceof File ? classes['has-file'] : ''}`}
          >
            <input {...getInputProps()} />
            <div
              className="d-flex flex-column align-items-center gap-2"
            >
              {cover instanceof File ? (
                <div className="text-center px-2 d-flex flex-column align-items-center gap-1">
                  <div className="text-success mb-1">
                    <SuccessIcon />
                  </div>
                  <p className={`${classes["file-name"]} m-0 small fw-bold text-success text-truncate`}>{cover.name}</p>
                </div>
              ) : (
                <>
                  <p className="m-0 small text-muted text-center">Click or drag cover image</p>
                  <UploadFileIcon />
                </>
              )}
            </div>
            <div className={classes['dropzone-overlay']}>
              <p className="m-0">{isDragActive ? "Drop it!" : (cover instanceof File ? "Change Image" : "Upload Image")}</p>
            </div>
          </div>
        )}

        {uploadMethod === 'url' && (
          <div className="position-relative">
            <Form.Control
              className={classes['custom-input']}
              type="text"
              placeholder="https://example.com/image.jpg"
              value={typeof cover === 'string' ? cover : ''}
              onChange={handleUrlChange}
              isInvalid={cover && !isUrlValid && !loadingUrl}
            />
            {loadingUrl && (
              <Spinner
                size="sm"
                className={classes['loading-url-spinner']}
              />
            )}
            <Form.Control.Feedback type="invalid">Please enter a valid image URL.</Form.Control.Feedback>
          </div>
        )}

        {previewUrl && (
          <div className={`${classes['preview-container']} mt-2 border rounded-3 overflow-hidden shadow-sm bg-white`}>
            <button
              className={classes['remove-btn']}
              onClick={() => setCover(uploadMethod === 'file' ? null : '')}
            >
              ×
            </button>
            <img
              src={previewUrl}
              alt="cover preview"
              className={classes["cover-preview"]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverSection;
