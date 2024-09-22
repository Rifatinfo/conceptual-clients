import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddProduct = () => {
     
    const {user} = useContext(AuthContext);
    console.log(user.email);

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const imageUrl = form.image.value; 
        const type = form.type.value;
        const rating = form.rating.value;
        const email = user.email;

         
        console.log(name, brand, price, imageUrl, type, rating);
        const info = {name,brand,price,imageUrl,type,rating, email}
        console.log(info)

        fetch("http://localhost:5000/addProduct", {
            method : "POST",
            headers  : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
               alert("insert complete")
            }
        })
    };

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-center mt-10 text-2xl">Add Your Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="flex items-center gap-3  mt-10">
                    <div className="w-2/4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="w-2/4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="image url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" name="type" placeholder="Type" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="rating" className="input input-bordered" />
                        </div>
                    </div>
                </div>
                <button className="py-3 w-full btn btn-error text-white mt-3">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
