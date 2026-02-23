import { usePostContext } from '../context/PostContext';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const PostCard = ({ post, index }) => {
  const { deletePost, openModal, page } = usePostContext();

  // Calculate global index based on current page and position
  const globalIndex = (page - 1) * 6 + index;

  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleImageClick = () => {
    openModal(images[globalIndex % images.length]);
  };

  return (
    <div style={styles.card}>
      <button 
        onClick={handleDelete}
        style={styles.deleteButton}
        aria-label="Delete post"
      >
        ✕
      </button>
      <img
        src={images[globalIndex % images.length]}
        alt="post"
        style={styles.image}
        onClick={handleImageClick}
      />
      <h3 style={styles.title}>{post.title}</h3>
      <p style={styles.body}>{post.body}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  deleteButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#ff0000',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
    cursor: 'pointer'
  },
  title: {
    fontSize: '16px',
    margin: '10px 0',
    textTransform: 'capitalize',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  body: {
    fontSize: '14px',
    color: '#666',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  }
};

export default PostCard;
