import ProductsCont from "./ProductsCont";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="btn-rel">
          <button className="btn-abs" type="button">
            CURRENT SERIES{" "}
          </button>
        </div>
        <ProductsCont />
      </div>
      <div className="btn-class">
        <button className="btn-cards" type="button">
          LOAD MORE
        </button>
      </div>
    </main>
  );
}
