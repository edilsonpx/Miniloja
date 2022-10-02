

const Products1 = [
    {
        imagen: "images/2005.jpg",
        id: 0,
        name: "Produto 1",
        preco: 10,
        quantity:0
    },
    {
        imagen: "images/182.webp",
        id: 1,
        name: "Produto 2",
        preco: 15,
        quantity:0
    },

        {
        imagen: "images/2005.jpg",
        id: 0,
        name: "Produto 1",
        preco: 10,
        quantity:0
    },
    

]
const Products2 = [
    {
        imagen1: "images/2005.jpg",
        id1: 0,
        name1: "Produto 1",
        preco1: 10,
        quantity1:0
    },
    {
        imagen1: "images/182.webp",
        id1: 1,
        name1: "Produto 2",
        preco1: 15,
        quantity1:0
    },
    

    
]







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



//Cria os produtos na loja usando os dados acima

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
                    <button id="${product.id1}" class="AddCart">Adicionar ao Carrinho</button>
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


    
    
    
        
    












    
    
    
        
    









