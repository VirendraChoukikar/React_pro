import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const PostContext = createContext();

export const usePostContext = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [deletedIds, setDeletedIds] = useState(new Set());
  const [modalImage, setModalImage] = useState(null);
  const postsPerPage = 6;

  useEffect(() => {
    // Fetch posts from API with 5 second loading
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
          setLoading(false);
        });
    }, 5000);
  }, []);

  // Get filtered posts (excluding deleted ones)
  const getVisiblePosts = useCallback(() => {
    return posts.filter(post => !deletedIds.has(post.id));
  }, [posts, deletedIds]);

  const visiblePosts = getVisiblePosts();
  const totalPages = Math.ceil(visiblePosts.length / postsPerPage);

  // Get current page posts
  const getCurrentPosts = useCallback(() => {
    const start = (page - 1) * postsPerPage;
    return visiblePosts.slice(start, start + postsPerPage);
  }, [visiblePosts, page]);

  const deletePost = (id) => {
    setDeletedIds(prev => new Set([...prev, id]));
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const value = {
    posts,
    visiblePosts,
    loading,
    page,
    postsPerPage,
    totalPages,
    getCurrentPosts,
    deletePost,
    goToPage,
    nextPage,
    prevPage,
    getVisiblePosts,
    modalImage,
    openModal,
    closeModal
  };

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
};
