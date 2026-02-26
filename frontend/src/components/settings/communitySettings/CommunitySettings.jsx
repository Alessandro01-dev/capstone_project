import { useEffect, useState } from 'react';
import { Spinner, Alert, Button, Modal, Form, Badge } from 'react-bootstrap';
import useCommunityPosts from '../../../hooks/useCommunityPosts';
import { useAuth } from '../../../contexts/AuthContext';
import TrashIcon from '../../../assets/TrashIcon';
import toast from 'react-hot-toast';
import { formatDate } from '../../../utils/formatDate';
import classes from './CommunitySettings.module.css';
import EditIcon from '../../../assets/EditIcon';
import PostArticleForm from '../../postArticleForm/PostArticleForm';

const CommunitySettings = () => {

  const { authData } = useAuth();
  const { getUserPosts, deletePost, postsIsLoading, postsError } = useCommunityPosts();

  const [myPosts, setMyPosts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    const userId = authData?._id || authData?.user?._id;
    if (userId) {
      const data = await getUserPosts(userId);
      if (data) setMyPosts(data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (post) => {
    setSelectedPost(post);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    const success = await deletePost(selectedPost._id);
    if (success) {
      toast.success("Post removed successfully");
      setMyPosts(myPosts.filter(post => post._id !== selectedPost._id));
      setShowDeleteModal(false);
      setSelectedPost(null);
    }
  };

  const handleEditOpen = (post) => {
    setSelectedPost({ ...post });
    setShowEditModal(true);
  };

  return (
    <>
      <h4 className="mb-4">Posts Manager</h4>

      {postsError && <Alert variant="danger">{postsError}</Alert>}

      <div className="d-flex flex-column gap-3">
        {postsIsLoading && myPosts.length === 0 ? (
          <div className="text-center py-5"><Spinner animation="border" variant="success" /></div>
        ) : myPosts.length > 0 ? (
          myPosts.map(post => (
            <div key={post._id} className={classes["post-management-card"]}>
              <div className="d-flex gap-3 align-items-center flex-grow-1">
                <img src={post.cover} className={classes["post-thumbnail"]} alt="cover" />
                <div className="text-start overflow-hidden">
                  <Badge bg="secondary" className="mb-1">{post.category}</Badge>
                  <h6 className="mb-0 fw-bold text-wrap">{post.title}</h6>
                  <p className="mb-0 x-small text-muted">{formatDate(post.createdAt)}</p>
                </div>
              </div>

              <div className="d-flex gap-2 align-items-center">
                <div
                  className={classes['edit-icon-container']}
                  onClick={() => handleEditOpen(post)}
                >
                  <EditIcon
                    size={18}
                  />
                </div>
                <div
                  className={classes['delete-icon-container']}
                  onClick={() => handleDelete(post)}>
                  <TrashIcon
                    size={16}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted py-5">You haven't published any posts yet.</p>
        )}
      </div>

      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
        size="xl"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold">Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <PostArticleForm
            initialData={selectedPost}
            onSuccess={() => {
              setShowEditModal(false);
              fetchPosts();
            }}
            onCancel={() => setShowEditModal(false)}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered size="md">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title
            className="fw-bold"
          >Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-3">
          <p className="mb-4">Are you sure you want to delete this post?
            <br />
            This action cannot be undone.</p>

          {selectedPost && (
            <div className="d-flex align-items-center gap-3 p-3 bg-light rounded-3 border">
              <img
                src={selectedPost.cover}
                alt="preview"
                className="rounded object-fit-cover"
                style={{ width: '60px', height: '60px' }}
              />
              <div className="overflow-hidden">
                <p className="mb-0 fw-bold text-truncate small">{selectedPost.title}</p>
                <Badge bg="secondary" style={{ fontSize: '10px' }}>{selectedPost.category}</Badge>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button
            className="px-4"
            variant="outline-dark"
            onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            className="px-4"
            variant="danger"
            onClick={handleConfirmDelete}
            disabled={postsIsLoading}
          >
            {postsIsLoading ? <Spinner size="sm" /> : 'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommunitySettings;
