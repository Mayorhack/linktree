import React, { useState } from "react";
import profile from "../assets/profile__img.png";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header>
        <div className="profile_image">
          <img src={profile} alt="" id="profile__img" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8.37722C2 8.0269 2 7.85174 2.01462 7.70421C2.1556 6.28127 3.28127 5.1556 4.70421 5.01462C4.85174 5 5.03636 5 5.40558 5C5.54785 5 5.61899 5 5.67939 4.99634C6.45061 4.94963 7.12595 4.46288 7.41414 3.746C7.43671 3.68986 7.45781 3.62657 7.5 3.5C7.54219 3.37343 7.56329 3.31014 7.58586 3.254C7.87405 2.53712 8.54939 2.05037 9.32061 2.00366C9.38101 2 9.44772 2 9.58114 2H14.4189C14.5523 2 14.619 2 14.6794 2.00366C15.4506 2.05037 16.126 2.53712 16.4141 3.254C16.4367 3.31014 16.4578 3.37343 16.5 3.5C16.5422 3.62657 16.5633 3.68986 16.5859 3.746C16.874 4.46288 17.5494 4.94963 18.3206 4.99634C18.381 5 18.4521 5 18.5944 5C18.9636 5 19.1483 5 19.2958 5.01462C20.7187 5.1556 21.8444 6.28127 21.9854 7.70421C22 7.85174 22 8.0269 22 8.37722V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.37722Z"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16.5C14.2091 16.5 16 14.7091 16 12.5C16 10.2909 14.2091 8.5 12 8.5C9.79086 8.5 8 10.2909 8 12.5C8 14.7091 9.79086 16.5 12 16.5Z"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p id="twitter">SodipoM</p>
        <p id="slack" className="hidden">
          Mayorhack
        </p>
        <div className="share_button" onClick={() => setShow((prev) => !prev)}>
          <div className="share" data-visible={show}>
            <svg
              className="share-icon"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
              <path
                d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                stroke="#D0D5DD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 3"
              />
            </svg>
          </div>
          <div className="three_dots">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
              <path
                d="M21 21.8333C21.4602 21.8333 21.8333 21.4602 21.8333 21C21.8333 20.5398 21.4602 20.1667 21 20.1667C20.5397 20.1667 20.1666 20.5398 20.1666 21C20.1666 21.4602 20.5397 21.8333 21 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.8333 21.8333C27.2935 21.8333 27.6666 21.4602 27.6666 21C27.6666 20.5398 27.2935 20.1667 26.8333 20.1667C26.3731 20.1667 26 20.5398 26 21C26 21.4602 26.3731 21.8333 26.8333 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.1666 21.8333C15.6269 21.8333 16 21.4602 16 21C16 20.5398 15.6269 20.1667 15.1666 20.1667C14.7064 20.1667 14.3333 20.5398 14.3333 21C14.3333 21.4602 14.7064 21.8333 15.1666 21.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                stroke="#D0D5DD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 3"
              />
            </svg>
          </div>
        </div>
      </header>
      <section>
        <a href="https://www.twitter.com" className="btn">
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" className="btn" id="btn__zuri">
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team/"
          className="btn"
          id="books"
          title="This is where you will find books about design and coding"
        >
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=Mayorhack"
          className="btn"
          id="book__python"
          title="Wanna become a pro in python, 'Python for Beginners' is the book for you"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team/"
          className="btn"
          id="pitch"
          title="Want the coders with the best background, our algorithm provides the best result for you"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          className="btn"
          id="book__design"
          title="New to design, Zuri has got your back with the best design book for u"
        >
          Design Books
        </a>
        <a href="/contact" className="btn" id="contact">
          Contact Me
        </a>
      </section>
      <section className="social_icons">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8752 11.2498C20.9106 11.2498 21.75 10.4104 21.75 9.37496C21.75 8.33952 20.9105 7.50012 19.8751 7.50012C18.8395 7.50012 18 8.33959 18 9.37512V11.2498H19.8752ZM14.625 11.2498C15.6605 11.2498 16.5 10.4103 16.5 9.3748V4.12512C16.5 3.08959 15.6605 2.25012 14.625 2.25012C13.5895 2.25012 12.75 3.08959 12.75 4.12512V9.3748C12.75 10.4103 13.5895 11.2498 14.625 11.2498Z"
            fill="#2EB67D"
          />
          <path
            d="M4.12484 12.7502C3.08939 12.7502 2.25 13.5896 2.25 14.625C2.25 15.6605 3.08947 16.4999 4.12492 16.4999C5.16045 16.4999 6 15.6604 6 14.6249V12.7502H4.12484ZM9.375 12.7502C8.33947 12.7502 7.5 13.5897 7.5 14.6252V19.8749C7.5 20.9104 8.33947 21.7499 9.375 21.7499C10.4105 21.7499 11.25 20.9104 11.25 19.8749V14.6252C11.25 13.5897 10.4105 12.7502 9.375 12.7502Z"
            fill="#E01E5A"
          />
          <path
            d="M12.7501 19.8752C12.7501 20.9106 13.5895 21.75 14.625 21.75C15.6604 21.75 16.4998 20.9105 16.4998 19.8751C16.4998 18.8395 15.6603 18 14.6248 18L12.7501 18L12.7501 19.8752ZM12.7501 14.625C12.7501 15.6605 13.5896 16.5 14.6251 16.5L19.8748 16.5C20.9103 16.5 21.7498 15.6605 21.7498 14.625C21.7498 13.5895 20.9104 12.75 19.8748 12.75L14.6251 12.75C13.5896 12.75 12.7501 13.5895 12.7501 14.625Z"
            fill="#ECB22E"
          />
          <path
            d="M11.2498 4.12484C11.2498 3.08939 10.4104 2.25 9.37496 2.25C8.33952 2.25 7.50012 3.08947 7.50012 4.12492C7.50012 5.16045 8.33959 6 9.37512 6L11.2498 6L11.2498 4.12484ZM11.2498 9.375C11.2498 8.33947 10.4103 7.5 9.3748 7.5L4.12512 7.5C3.08959 7.5 2.25012 8.33947 2.25012 9.375C2.25012 10.4105 3.08959 11.25 4.12512 11.25L9.3748 11.25C10.4103 11.25 11.2498 10.4105 11.2498 9.375Z"
            fill="#36C5F0"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
            fill="black"
          />
        </svg>
      </section>
    </>
  );
};

export default Home;
