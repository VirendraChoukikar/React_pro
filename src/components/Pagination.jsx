import { usePostContext } from '../context/PostContext';

const Pagination = () => {
  const { page, totalPages, goToPage } = usePostContext();

  if (totalPages === 0) {
    return null;
  }

  return (
    <div style={styles.container}>
      <div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'10px'}}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            style={{
              padding: '5px 10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
              backgroundColor: page === i + 1 ? '#007bff' : '#fff',
              color: page === i + 1 ? '#fff' : '#000'
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '30px',
    textAlign: 'center'
  }
};

export default Pagination;
