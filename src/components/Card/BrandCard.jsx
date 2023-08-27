const BrandCard = ({ brand }) => {
  return (
    <div className="brand__card">
      <div className="brand-logo">
        <img src={brand.logo} alt={brand.name} />
      </div>
      <p className="brand-name">{brand.name}</p>
      <p className="brand-discount">{brand.discount}</p>
    </div>
  );
};

export default BrandCard;
