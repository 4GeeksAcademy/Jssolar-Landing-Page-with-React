function Carrusel() {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
      data-bs-theme="light"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={0}
          className="active"
          aria-label="Slide 1"
          aria-current="true"
        />
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={1}
          aria-label="Slide 2"
          className=""
        />
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={2}
          aria-label="Slide 3"
          className=""
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="bd-placeholder-img width"
            src="https://imagenes.elpais.com/resizer/nRFmztCF6tFf60LjDO9OTohGRPw=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TZNYIGV2ARBKDNKEKHLQNRLDX4.jpeg"
            alt="foto2"
          />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p className="opacity-75">
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p>
                <button className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="bd-placeholder-img"
            src="https://www.nationalgeographic.com.es/medio/2015/06/30/mm8237-140117-06288_1800x1200.jpg"
            alt="foto3"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p>
                <button className="btn btn-lg btn-primary" href="#">
                  Learn more
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="bd-placeholder-img width 100%"
            src="https://www.nationalgeographic.com.es/medio/2015/06/30/mm8237-140117-02086_1800x1200.jpg"
            alt="foto1"
          />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <button className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carrusel;
