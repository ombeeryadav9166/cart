import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 120,
    image: "https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg",
  },
  {
    id: 2,
    name: "Green Apple",
    price: 150,
    image:
      "https://cdn.shopify.com/s/files/1/0522/4149/8278/products/Greenapple_600x.jpg",
  },
  {
    id: 3,
    name: "Orange",
    price: 80,
    image:
      "https://img.theculturetrip.com/wp-content/uploads/2018/03/origins-of-the-word-orange.jpg",
  },
  {
    id: 4,
    name: "Strawberry",
    price: 125,
    image:
      "https://clv.h-cdn.co/assets/15/22/1600x1066/gallery-1432670728-strawberry-facts10.jpg",
  },
  {
    id: 5,
    name: "Fresh Pineapple",
    price: 75,
    image:
      "https://5.imimg.com/data5/PW/ND/MY-46595757/fresh-pineapple-281kg-29-500x500.png",
  },
  {
    id: 6,
    name: "Watermelon",
    price: 48,
    image: "https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg",
  },
  {
    id: 7,
    name: "Banana",
    price: 30,
    image:
      "https://www.bobtailfruit.co.uk/pub/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
  },
  {
    id: 8,
    name: "Mango",
    price: 35,
    image:
      "https://eco-fruits.com/wp-content/uploads/2020/03/Artboard-18-570x570.png",
  },
];

const Dashboard = () => {
  const dispatch = useDispatch();

  const addToCart = (item)=>{
    dispatch(addCart({...item,count : 1}))
  }

  return (
    <div className="row">
      {products.map((res, index) => (
        <div className="col-md-3">
          <div className="card" key={index}>
            <img className="card-img-top" src={res.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{res.name}</h5>
              <p>₹{res.price}</p>
              <button className="btn btn-primary" onClick={()=>addToCart(res)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Dashboard;
