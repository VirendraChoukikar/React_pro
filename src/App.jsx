import { usePostContext, PostProvider } from './context/PostContext';
import PostCard from './components/PostCard';
import Pagination from './components/Pagination';
import Loading from './components/Loading';
import './App.css';

const AppContent = () => {
  const { loading, getCurrentPosts, page, totalPages, modalImage, closeModal } = usePostContext();
  const currentPosts = getCurrentPosts();

  if (loading) {
    return <Loading />;
  }

  if (totalPages === 0) {
    return (
      <div style={styles.noPosts}>
        <h2>No posts available</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Posts</h1>
      
      <div style={styles.grid}>
        {currentPosts.map((post, index) => (
          <PostCard 
            key={post.id} 
            post={post} 
            index={index} 
          />
        ))}
      </div>

      <Pagination />

      {/* Modal for image preview */}
      {modalImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>✕</button>
            <img src={modalImage} alt="Preview" style={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <PostProvider>
      <AppContent />
    </PostProvider>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  noPosts: {
    textAlign: 'center',
    marginTop: '50px',
    color: '#666'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%'
  },
  closeButton: {
    position: 'absolute',
    top: '-40px',
    right: '0',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#ff0000',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '80vh',
    borderRadius: '8px'
  }
};

export default App;
