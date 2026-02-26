import { Form, Button, Spinner, Alert } from "react-bootstrap"
import classes from './PostArticleForm.module.css'
import { useState } from "react"
import CoverSection from "./coverSection/CoverSection"
import ContentSection from "./contentSection/ContentSection"
import TitleSection from "./titleSection/TitleSection"
import CategorySection from "./categorySection/CategorySection"
import ReadTimeSection from "./readTimeSection/ReadTimeSection"
import useCommunityPosts from "../../hooks/useCommunityPosts"
import { useAuth } from "../../contexts/AuthContext"
import useUpload from "../../hooks/useUpload"
import toast from "react-hot-toast"

const PostArticleForm = ({ initialData, onSuccess, onCancel }) => {

  const { authData } = useAuth();
  const { createPost, updatePost, postsIsLoading, postsError } = useCommunityPosts();
  const { uploadFile, isUploading: isFileUploading } = useUpload();

  const URL = import.meta.env.VITE_BASE_SERVER_URL;
  const isEditMode = !!initialData;

  const [title, setTitle] = useState(initialData?.title || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [readTime, setReadTime] = useState(initialData?.readTime || { value: 0, unit: 'min' });
  const [cover, setCover] = useState(initialData?.cover || null);
  const [content, setContent] = useState(initialData?.content || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let finalCoverUrl = cover;

      if (cover instanceof File) {

        const uploadResult = await uploadFile(`${URL}/blogPosts/upload`, cover, 'cover');

        if (!uploadResult.success) {
          throw new Error("Image upload failed");
        }

        finalCoverUrl = uploadResult.data.cover;
      }

      const finalData = {
        title,
        category,
        readTime: {
          value: Number(readTime.value),
          unit: readTime.unit
        },
        cover: finalCoverUrl,
        content,
        user: authData?._id
      };

      const response = isEditMode
        ? await updatePost(initialData._id, finalData)
        : await createPost(finalData);

      if (response) {
        toast.success(isEditMode ? "Post updated!" : "Post created!");
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error("Errore nel processo di creazione:", err);
    }
  };

  return (
    <Form
      className={classes['post-article-form-main-container']}
      onSubmit={handleSubmit}
    >

      <TitleSection
        title={title}
        setTitle={setTitle}
      />

      <CategorySection
        category={category}
        setCategory={setCategory}
      />

      <ReadTimeSection
        readTime={readTime}
        setReadTime={setReadTime}
      />

      <CoverSection
        cover={cover}
        setCover={setCover}
      />

      <ContentSection
        content={content}
        setContent={setContent}
      />

      {postsError && (
        <Alert
          variant="danger"
          className="text-center"
        >
          {postsError}
        </Alert>
      )}

      <div className="d-flex justify-content-end gap-3 border-top pt-5 mb-5">
        <Button
          variant="outline-dark"
          className="px-3 py-2"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="success"
          className="px-3 py-2 shadow-sm"
          disabled={postsIsLoading || isFileUploading}
        >
          {(postsIsLoading || isFileUploading) ? (
            <Spinner
              size="sm"
              className="mx-auto"
            />
          ) : isEditMode ? "Save Changes" : "Submit Article"}
        </Button>
      </div>
    </Form>
  )
}

export default PostArticleForm