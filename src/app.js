import express from "express"
import __dirname from "./utils.js";
import productsRouter from "./routes/products.router.js"
import productsManager from "./Managers/productManager.js"
const app = express();
app.use(express.static(__dirname+"/public"));
app.set("views",__dirname+"/public");
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index")
});
const productsService = new productsManager();
app.get("/productos",async(req,res)=>{
    let productos = await productsService.getAll()
    let productosArray = productos.products
res.render("productos",
{
    productosArray
}
)
});
app.use(express.json());
app.use("/api/productos",productsRouter);
app.listen(8080, ()=>console.log("Escuchando"))
