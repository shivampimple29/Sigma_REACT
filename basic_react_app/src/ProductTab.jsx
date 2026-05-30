import Product from "./Product.jsx";

function ProductTab() {
  let title = [
    "Logitech MX Master 3S",
    "Apple Pencil (2nd Gen)",
    "Zebronics Zeb-Transformer",
    "Portronics 0Mouse",
  ];
  let descrp = [
    ["8,000 DP", "5 Programmable Buttons"],
    ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Wireless Mouse 2.4GHz","Optical Orientation"],
  ];
  let styles={
    display:"flex",
    flexWrap:"wrap",
    gap:"1rem",
    justifyContent:"center",
    alignItems:"center",
  };
  return (
    <div style={styles}>
      <Product title={title} descrp={descrp} idx={0} />
      <Product title={title} descrp={descrp} idx={1} />
      <Product title={title} descrp={descrp} idx={2} />
      <Product title={title} descrp={descrp} idx={3} />
    </div>
  );
}

export default ProductTab;

/*

Logitech MX Master 35
Apple Pencil (2nd Gen)
Zebronics
Zeb-Transformer
Portronics Toad 23
Wireless Mouse
8,000 DPI
5 Programmable Buttons
Intuitive touch surface
Designed for iPad Pro
Intuitive touch surface
Designed for iPad Pro
Wireless Mouse 2.4GHz
Optical Orientation

*/
