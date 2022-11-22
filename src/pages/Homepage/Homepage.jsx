import { Layout } from '../../common/Layout/Layout';
import CreateShareImage__desktop from '../../assets/home/desktop/create-and-share.jpg';
import CreateShareImage__tablet from '../../assets/home/tablet/create-and-share.jpg';
import CreateShareImage__mobile from '../../assets/home/mobile/create-and-share.jpg';
import BeautifulStoryImage__desktop from '../../assets/home/desktop/beautiful-stories.jpg';
import BeautifulStoryImage__tablet from '../../assets/home/tablet/beautiful-stories.jpg';
import BeautifulStoryImage__mobile from '../../assets/home/mobile/beautiful-stories.jpg';
import DesignEveryOneImage__desktop from '../../assets/home/desktop/designed-for-everyone.jpg';
import DesignEveryOneImage__tablet from '../../assets/home/tablet/designed-for-everyone.jpg';
import DesignEveryOneImage__mobile from '../../assets/home/mobile/designed-for-everyone.jpg';
import MountainsImage from '../../assets/stories/desktop/mountains.jpg';
import CityscapesImage from '../../assets/stories/desktop/cityscapes.jpg';
import DaysVoyageImage from '../../assets/stories/desktop/18-days-voyage.jpg';
import ArchitecturalsImage from '../../assets/stories/desktop/architecturals.jpg';
import ResponsiveImage from '../../assets/features/desktop/responsive.svg';
import NoLimitImage from '../../assets/features/desktop/no-limit.svg';
import EmbedImage from '../../assets/features/desktop/embed.svg';
import './style/HomePage.scss';

const Homepage = () => {
  return (
    <Layout>
      <main>
        <section className="services">
          <div className="services__illustration">
            <picture>
              <source
                media="(max-width:700px)"
                srcSet={CreateShareImage__mobile}
              />
              <source
                media="(max-width:1023px)"
                srcSet={CreateShareImage__tablet}
              />
            </picture>
            <img
              src={CreateShareImage__desktop}
              alt="Create and share illustration"
            />
          </div>
          <div className="services__content first">
            <h2 className="services__title">
              Create and share your photo Stories
            </h2>
            <p className="services__description">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <div className="services__get-invite cta">
              <a href="#!" className="text">
                Get an invite
              </a>
              <div>
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="services__illustration">
            <picture>
              <source
                media="(max-width:700px)"
                srcSet={BeautifulStoryImage__mobile}
              />
              <source
                media="(max-width:1023px)"
                srcSet={BeautifulStoryImage__tablet}
              />
            </picture>
            <img
              src={BeautifulStoryImage__desktop}
              alt="Create and share illustration"
            />
          </div>
          <div className="services__content">
            <h2 className="services__title">Beautiful stories every time</h2>
            <p className="services__description">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <div className="services__view-stories cta">
              <a href="#!">View the stories</a>
              <div className="footer__arrow">
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="services__illustration">
            <picture>
              <source
                media="(max-width:700px)"
                srcSet={DesignEveryOneImage__mobile}
              />
              <source
                media="(max-width:1023px)"
                srcSet={DesignEveryOneImage__tablet}
              />
            </picture>
            <img
              src={DesignEveryOneImage__desktop}
              alt="Create and share illustration"
            />
          </div>
          <div className="services__content">
            <h2 className="services__title">Designed for everyone</h2>
            <p className="services__description">
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <div className="services__view-stories cta">
              <a href="#!">View the stories</a>
              <div className="footer__arrow">
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="stories">
          <div>
            <div>
              <img src={MountainsImage} alt="Mountains" />
            </div>
            <p>
              <h4>The Mountains</h4>
              <strong>by John Appleseed</strong>
              <div>
                <a href="#!">Read Story</a>
                <div>
                  <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </p>
          </div>
          <div>
            <div>
              <img src={CityscapesImage} alt="Sunset Cityscrapes" />
            </div>
            <p>
              <h4>Sunset Cityscapes</h4>
              <strong>by Benjamin Cruz</strong>
              <div>
                <a href="#!">Read Story</a>
                <div>
                  <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </p>
          </div>
          <div>
            <div>
              <img src={DaysVoyageImage} alt="18 Days Voyage" />
            </div>
            <p>
              <h4>18 Days Voyage</h4>
              <strong>by Alexei Borodin</strong>
              <div>
                <a href="#!">Read Story</a>
                <div>
                  <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </p>
          </div>
          <div>
            <div>
              <img src={ArchitecturalsImage} alt="Archictecturals" />
            </div>
            <p>
              <h4>Architecturals</h4>
              <strong>by Samantha Brooke</strong>
              <div>
                <a href="#!">Read Story</a>
                <div>
                  <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </p>
          </div>
        </section>
        <section className="features">
          <div className="card">
            <div className="card__image">
              <img src={ResponsiveImage} alt="Responsive 100 Illustration" />
            </div>
            <h2 className="card__title">100% Responsive</h2>
            <p className="card__description">
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={NoLimitImage} alt="No Limit Illustration" />
            </div>

            <h2 className="card__title">No Photo Upload Limit</h2>
            <p className="card__description">
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={EmbedImage} alt="Embed illustration" />
            </div>

            <h2 className="card__title">Available to Embed</h2>
            <p className="card__description">
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage;
