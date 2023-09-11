/*producto*/
//crear objeto producto
export const productos = [
    {
        id: 1,
        nombre: "Nike Air Max", 
        precio: 100, 
        imagen:"https://nikeclprod.vteximg.com.br/arquivos/ids/593038-1000-1000/DV1734_100_A_PREM.jpg?v=638016356061670000", 
    },
    {
        id: 2,
        nombre: "Nike Dunk Low Twist",
        precio: 200,
        imagen:"https://nikeclprod.vteximg.com.br/arquivos/ids/778934-1000-1000/DZ2794_001_A_PREM.jpg?v=638259934936100000",
    },
    {
        id: 3,
        nombre:"Jordan Pro Jumpman", 
        precio: 150, 
        imagen: "https://nikeclprod.vteximg.com.br/arquivos/ids/208734-1000-1000/AR2118_688_A.jpg?v=637692065406170000", 
    },
    {
        id: 4,
        nombre: "Nike Court Borough Low", 
        precio: 47, 
        imagen:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtearB95e3MfZJLR9Nc7IQ4S2GL2Zp4OfH3GKOW3-Hm7rC_6HrP7kudjARNSAULyQYV9RL9cBVKaMCgyPJQ8kX3HFgnwquFsd3eWGmfqhowpcGmRbP_XBV&usqp=CAE",
    },
    {
        id: 5,
        nombre: "NIKE Lebron Witness 7 colo negro",
        precio: 122,
        imagen:"https://sparta.cl/media/catalog/product/d/m/dm1123-002-phsrh000.png?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550",
    },
    {
        id: 6,
        nombre:"Jordan Max Aura 4", 
        precio: 78, 
        imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTNwR4-xert0y_qzHz7xJ7oN7nME_vqCw7hX7KNEwejoS15huVV2PO1rLzSWsxS2AVw2Lda-bbekSv0a1vy56UdPUVMJ9g6k3OJswbw8ML3K-sAmxgrayoF&usqp=CAE", 
    },
];

//verifica si esta el producto            en caso que no             este lo ingresa
JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));