import { useMemo } from "react";
import ReactQuill from "react-quill-new";
import classes from './ContentSection.module.css'

const ContentSection = ({ content, setContent }) => {

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link', 'image', 'blockquote'],
        ['clean']
      ]
    }
  }), []);

  return (
    <div className="d-flex flex-column gap-2 mb-5">
      <h4>Content</h4>
      <div className={classes['editor-wrapper']}>
        <ReactQuill
          theme="snow"
          value={content || ''}
          onChange={setContent}
          modules={modules}
          placeholder="Write your article content here..."
        />
      </div>
    </div>
  )
}

export default ContentSection