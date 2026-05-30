import "./Product.css";
import Price from "./Price.jsx";

function Product({title,idx,descrp}){
    let newPrice=["12,495","11,900","1,599","599"];
    let oldPrice=["8,999","9,199","899","278"];
    return(
        <div className="Product">
            <h2>{title[idx]}</h2>
            <ul>
                <li>{descrp[idx][0]}</li>
                <li>{descrp[idx][1]}</li>
            </ul>
            <Price newPrice={newPrice[idx]} oldPrice={oldPrice[idx]}/>
        </div>
    );
}

export default Product;

