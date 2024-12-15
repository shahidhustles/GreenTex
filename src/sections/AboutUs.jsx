import { about, logo } from "../assets/images";

const AboutUs = () => {
  return (
    <section
      id="about"
      className=" min-h-screen relative flex flex-col justify-center items-center"
    >
      <div className="w-full ">
        <img
          src={about}
          alt="about"
          className="object-fill w-full  opacity-10"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ">
        <h2 className="font-montserrat font-bold text-4xl">About us</h2>
        <img src={logo} alt="logo" className="rounded-xl my-8" />
        <p className="font-lato text-base  my-8">
          GreenTex is a platform dedicated to empowering consumers with
          knowledge and access to sustainable textiles. We provide a seamless
          way to discover eco-friendly fabrics tailored to individual needs,
          fostering environmentally responsible choices. Our mission is to
          bridge the gap between eco-conscious consumers and the growing world
          of sustainable materials.
        </p>
        <p className="font-semibold font-lato text-xl  my-8">Mission Statement</p>
        <p className="font-lato text-base">
          “To empower eco-conscious consumers by simplifying access to
          sustainable textiles and fostering environmentally responsible
          choices.”
        </p>
        <p className="font-semibold font-lato text-xl  my-8">Vision Statement</p>
        <p className="font-lato text-base">
          &quot;To lead the transformation toward a sustainable textile
          industry, promoting a greener planet through informed
          decision-making.&quot;
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
