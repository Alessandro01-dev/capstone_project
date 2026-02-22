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

const PostArticleForm = () => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [readTime, setReadTime] = useState({ value: 0, unit: 'min' });
  const [cover, setCover] = useState(null);
  const [content, setContent] = useState('');
  const URL = import.meta.env.VITE_BASE_SERVER_URL;

  const { createPost, postsIsLoading, postsError } = useCommunityPosts()
  const { uploadFile, isUploading: isFileUploading } = useUpload();

  const { authData } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let finalCoverUrl = cover;

      if (cover instanceof File) {

        const uploadResult = await uploadFile(`${URL}/blogPosts/upload`, cover, 'cover');

        if (!uploadResult.success) {
          throw new Error("Caricamento immagine fallito");
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

      const response = await createPost(finalData);
      if (response) {
        alert("Post created successfully!");
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

      {postsError && (
        <Alert
          variant="danger"
          className="text-center"
        >
          {postsError}
        </Alert>
      )}

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

      <div className="d-flex justify-content-end gap-3 border-top pt-5 mb-5">
        <Button
          variant="outline-dark"
          className="px-3 py-2"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="success"
          className="px-3 py-2 shadow-sm"
          disabled={postsIsLoading}
        >
          {(postsIsLoading || isFileUploading) ? (
            <Spinner
              size="sm"
              className="mx-auto"
            />
          ) : "Submit Article"}
        </Button>
      </div>
    </Form>
  )
}

export default PostArticleForm