import { Form, Button } from "react-bootstrap"
import classes from './PostArticleForm.module.css'
import { useState } from "react"
import CoverSection from "./coverSection/CoverSection"
import ContentSection from "./contentSection/ContentSection"
import TitleSection from "./titleSection/TitleSection"
import CategorySection from "./categorySection/CategorySection"
import ReadTimeSection from "./readTimeSection/ReadTimeSection"

const PostArticleForm = () => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [readTime, setReadTime] = useState({ value: 0, unit: 'min' });
  const [cover, setCover] = useState(null);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      title,
      category,
      readTime,
      cover,
      content
    };
    console.log("Data to send:", finalData);
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
        >
          Submit Article
        </Button>
      </div>
    </Form>
  )
}

export default PostArticleForm