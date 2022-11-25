import CreateShareImage__desktop from '../../../../assets/home/desktop/create-and-share.jpg';
import CreateShareImage__tablet from '../../../../assets/home/tablet/create-and-share.jpg';
import CreateShareImage__mobile from '../../../../assets/home/mobile/create-and-share.jpg';
import BeautifulStoryImage__desktop from '../../../../assets/home/desktop/beautiful-stories.jpg';
import BeautifulStoryImage__tablet from '../../../../assets/home/tablet/beautiful-stories.jpg';
import BeautifulStoryImage__mobile from '../../../../assets/home/mobile/beautiful-stories.jpg';
import DesignEveryOneImage__desktop from '../../../../assets/home/desktop/designed-for-everyone.jpg';
import DesignEveryOneImage__tablet from '../../../../assets/home/tablet/designed-for-everyone.jpg';
import DesignEveryOneImage__mobile from '../../../../assets/home/mobile/designed-for-everyone.jpg';
import whiteArrow from '../../../../assets/shared/desktop/arrow-white.svg';
import arrow from '../../../../assets/shared/desktop/arrow.svg';
import './Services.scss';

const Services = () => {
  return (
    <section className="services">
      <div className="services__illustration one">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet={CreateShareImage__desktop}
          />
          <source media="(min-width:700px)" srcSet={CreateShareImage__tablet} />
          <img
            src={CreateShareImage__mobile}
            alt="Create and share illustration"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="services__content first two">
        <h2 className="services__title">Create and share your photo Stories</h2>
        <p className="services__description">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <div className="services__get-invite cta">
          <a href="#!" className="text">
            Get an invite
          </a>
          <div>
            <img src={whiteArrow} alt="" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="services__illustration three">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet={BeautifulStoryImage__desktop}
          />
          <source
            media="(min-width:700px)"
            srcSet={BeautifulStoryImage__tablet}
          />
          <img
            src={BeautifulStoryImage__mobile}
            alt="Create and share illustration"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="services__content four">
        <h2 className="services__title">Beautiful stories every time</h2>
        <p className="services__description">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>
        <div className="services__view-stories cta">
          <a href="#!">View the stories</a>
          <div className="footer__arrow">
            <img src={arrow} alt="" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="services__illustration five">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet={DesignEveryOneImage__desktop}
          />
          <source
            media="(max-width:700px)"
            srcSet={DesignEveryOneImage__tablet}
          />
          <img
            src={DesignEveryOneImage__mobile}
            alt="Create and share illustration"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="services__content six">
        <h2 className="services__title">Designed for everyone</h2>
        <p className="services__description">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>
        <div className="services__view-stories cta">
          <a href="#!">View the stories</a>
          <div className="footer__arrow">
            <img src={arrow} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
