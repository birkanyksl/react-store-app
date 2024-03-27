import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Plajlardan Sokağa: Yazın Renklerini Dolabınıza Taşıyın 🔥</span>
        <h2>Yazın Modası Burada, Siz Neredesiniz?</h2>
        <a href="/">Şimdi Keşfet</a>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero.png" alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
