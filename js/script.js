


/* Inicio Produtos loja*/

const Products1 = [
    {
        imagen: "images/ds5.webp",
        id: 0,
        name: "Produto 1",
        preco: 0,
        quantity:0
    },
    {
        imagen: "images/4k+.jpg",
        id: 1,
        name: "Produto 2",
        preco: 0,
        quantity:0
    },
    {
        imagen: "images/caixapc2.webp",
        id: 2,
        name: "Produto 3",
        preco: 0,
        quantity:0
    },
    {
        imagen: "images/caixapc3.webp",
        id: 3,
        name: "Produto 4",
        preco: 0,
        quantity:0
    },
    {
        imagen: "images/minipc.webp",
        id: 4,
        name: "Produto 5",
        preco: 0,
        quantity:0
    },
    {
        imagen: "images/mic.webp",
        id: 5,
        name: "Produto 6",
        preco: 0,
        quantity:0
    },
    
]

/*Incio Produtos loja*/


const Products2 = [
    {
        imagen1: "images/bateria1.jpeg",
        id1: 0,
        name1: "Produto 1",
        preco1: 0,
        quantity1:0
    },
    {
        imagen1: "images/bateria3.jpeg",
        id1: 1,
        name1: "Produto 2",
        preco1: 0,
        quantity1:0
    },  
            {
        imagen1: "images/cabo3.jpeg",
        id1: 2,
        name1: "Produto 3",
        preco1: 0,
        quantity1:0
    },
            {
        imagen1: "images/cabo5.jpeg",
        id1: 3,
        name1: "Produto 4",
        preco1: 0,
        quantity1:0
    },
            {
        imagen1: "images/cabo12.jpeg",
        id1: 4,
        name1: "Produto 5",
        preco1: 0,
        quantity1:0
    },
            {
        imagen1: "images/cabeça2.jpeg",
        id1: 5,
        name1: "Produto 6",
        preco1: 0,
        quantity1:0
    },

]

/* Fim Produtos loja1*/



//Cria os produtos na loja usando os dados acima

let Create = () =>{
    let chooser1 = document.querySelector(".loja")

    Products1.map((product)=>{
        chooser1.innerHTML+=`
        <div>

            <div class="produto-compra">
                <div class="img-produto"></div>
                <div>
                    <img src="${product.imagen}">
                    <h3>${product.name}</h3>
                    <p>R$${product.preco},00</p>
                </div>
                <div>
                    <button id="${product.id}" class="AddCart">Multi Acessorios</button>
                </div>
            </div>
        </div>
        `
    })
  
    chooser1.innerHTML+=`
        <div class="clear"></div>
    `
}

Create()


 /*  deixa produto com efeito card >>>  <div class="produto-compra">  */

//Cria os produtos na loja1 usando os dados acima

let Create1 = () =>{
    let chooser2 = document.querySelector(".loja1")

    Products2.map((product)=>{
        chooser2.innerHTML+=`
        <div>
            <div class="produto-compra">
                <div class="img-produto"></div>
                <div>
                    <img src="${product.imagen1}">
                    <h3>${product.name1}</h3>
                    <p>R$${product.preco1},00</p>
                </div>
                <div>
                    <button id="${product.id1}" class="AddCart">Multi Acessorios</button>
                </div>
            </div>
        </div>
        `
    })

    chooser2.innerHTML+=`
        <div class="clear"></div>
   `
}

Create1()


    
    
    
        
    












    
    
    
        
    









