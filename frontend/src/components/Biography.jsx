import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="About Image" />
      </div>

      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Welcome to PEL Medical, the trusted healthcare provider dedicated to serving PEL employees with the highest standard of medical care. Our state-of-the-art facility is committed to delivering comprehensive healthcare services tailored to the unique needs of our community.
        </p>
        <p>
          At PEL Medical, we believe in a holistic approach to health and wellness, ensuring that each patient receives personalized attention and compassionate care. Our team of experienced professionals is equipped with the latest medical technology and continuously strives for excellence in all aspects of healthcare delivery.
        </p>
        <p>
          We prioritize your well-being and are devoted to making your healthcare journey as seamless and supportive as possible. From preventive care and routine check-ups to specialized treatments and emergency services, PEL Medical is here to ensure you receive the best care available.
        </p>
        <p>
          Our mission is to foster a healthy, thriving workforce by providing accessible, high-quality medical services that PEL employees can rely on. We are proud to be your healthcare partner, committed to your health and happiness every step of the way.
        </p>
      </div>

    </div>
  )
}

export default Biography;