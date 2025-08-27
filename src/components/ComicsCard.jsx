

const ComicsCard = (comic) => {
  const { id, thumb, title } = comic
  return (
    <div className="comic-card">
      <img src={thumb} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}

export default ComicsCard
