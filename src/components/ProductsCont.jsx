import ProductCard from "./ProductCard";
import comics from "../data/comics";

export default function ProductsCont() {
  return (
    <main>
      <div className="container">
        <div className="row">
          {comics.map((comic) => {
            return (
              <div className="col" key={comic.id}>
                <ProductCard
                  thumb={comic.thumb}
                  title={comic.series.toUpperCase()}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
