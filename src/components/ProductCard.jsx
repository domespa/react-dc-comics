export default function ProductCard({ thumb, type, title }) {
  return (
    <div className="card">
      <img src={thumb} alt={type} />
      <h4>{title}</h4>
    </div>
  );
}
