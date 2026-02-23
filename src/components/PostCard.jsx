import { usePostContext } from '../context/PostContext';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import img28 from "../assets/img28.jpg";
import img29 from "../assets/img29.jpg";
import img30 from "../assets/img30.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30];

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
