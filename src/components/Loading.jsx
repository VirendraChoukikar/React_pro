const Loading = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>Loading...</h2>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  },
  text: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

export default Loading;
