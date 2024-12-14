const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="w-[250px] h-[275px] flex flex-col justify-center items-center">
      <img 
        src={image} 
        width={110} 
        height={110} 
        alt="feature" 
        className="rounded-full shadow-[0_0_20px_rgba(85,183,107,0.3)]" 
      />
      <p className="font-montserrat font-bold text-xl mt-4 text-center">{title}</p>
      <p className="font-lato text-base text-center mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
