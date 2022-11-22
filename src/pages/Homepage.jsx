import { Layout } from '../common/Layout/Layout';
import CreateShareImage__desktop from '../assets/home/desktop/create-and-share.jpg';
import CreateShareImage__tablet from '../assets/home/tablet/create-and-share.jpg';
import CreateShareImage__mobile from '../assets/home/mobile/create-and-share.jpg';
import BeautifulStoryImage__desktop from '../assets/home/desktop/beautiful-stories.jpg';
import BeautifulStoryImage__tablet from '../assets/home/tablet/beautiful-stories.jpg';
import BeautifulStoryImage__mobile from '../assets/home/mobile/beautiful-stories.jpg';
import DesignEveryOneImage__desktop from '../assets/home/desktop/designed-for-everyone.jpg';
import DesignEveryOneImage__tablet from '../assets/home/tablet/designed-for-everyone.jpg';
import DesignEveryOneImage__mobile from '../assets/home/mobile/designed-for-everyone.jpg';
import MountainsImage from '../assets/stories/desktop/mountains.jpg';
import CityscapesImage from '../assets/stories/desktop/cityscapes.jpg';
import DaysVoyageImage from '../assets/stories/desktop/18-days-voyage.jpg';
import ArchitecturalsImage from '../assets/stories/desktop/architecturals.jpg';
import ResponsiveImage from '../assets/features/desktop/responsive.svg';
import NoLimitImage from '../assets/features/desktop/no-limit.svg';
import EmbedImage from '../assets/features/desktop/embed.svg';
const Homepage = () => {
  return (
    <Layout>
      <main>
        <section>
          <div>
            <h2>Create and share your photo Stories</h2>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <div>
              <a href="#!">Get an invite</a>
              <div>
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div>
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
        </section>
        <section>
          <div>
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
          <div>
            <h2>Beautiful stories every time</h2>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <div>
              <a href="#!">View the stories</a>
              <div className="footer__arrow">
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>Designed for everyone</h2>
            <p>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <div>
              <a href="#!">View the stories</a>
              <div className="footer__arrow">
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div>
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
        </section>
        <section>
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

        <section>
          <div>
            <div>
              <img src={ResponsiveImage} alt="Responsive 100 Illustration" />
            </div>
            <h2>100% Responsive</h2>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
          <div>
            <div>
              <img src={NoLimitImage} alt="No Limit Illustration" />
            </div>

            <h2>No Photo Upload Limit</h2>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
          <div>
            <div>
              <img src={EmbedImage} alt="Embed illustration" />
            </div>

            <h2>Available to Embed</h2>
            <p>
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
