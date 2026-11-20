let url_lista_categorias="https://dummyjson.com/products/category-list"
let menu_vertical=document.querySelector(".menu_vertical")
let categorias=document.querySelector(".categorias")
let queryString=location.search
let queryStringobj=new URLSearchParams(queryString)
let categoria=queryStringobj.get("categoria")
let url_categorias=`https://dummyjson.com/products/category/${categoria}`
let titulo_cat=document.querySelector(".titulo_categoria")
let formulario=document.querySelector(".buscador");
let campoBuscar=document.querySelector(".input_buscador");
let mensajeError=document.querySelector(".error_caracteres");

fetch(url_lista_categorias)
     .then(function(response){
     	return response.json();
 	})
     .then(function(data){
         console.log(data);
         for (let i=0;i<data.length;i++){
            menu_vertical.innerHTML+=`
            <li class="categoria"><a href="./category.html?categoria=${data[i]}"> ${data[i]} </a></li>`

            
         }


 
 	})
     .catch(function(error){
         console.log('El error es: ' + error);
 	});

    fetch(url_categorias)
     .then(function(response){
     	return response.json();
 	})
     .then(function(data){
         console.log(data);
         productos=data.products;
         let todos_productos=""
         titulo_cat.innerText=`${categoria}`
         for (let i=0;i<productos.length;i++){  
            todos_productos+=`
            <article class="productos">
                    <a class="link_fotos_productos" href="./product.html?id=${productos[i].id}">
                        <img class="fotos_productos" src=${productos[i].images[0]} alt="${productos[i].title}">
                    </a>
                    <h3>${productos[i].title}</h3>
                    <p class="descripciones_remeras_index">${productos[i].description}</p>
                    <p class="precio">${productos[i].price}</p>
                    <a class="ver_detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
            </article>
            `
         }
          categorias.innerHTML=todos_productos



 
 	})
     .catch(function(error){
         console.log('El error es: ' + error);
 	});
     formulario.addEventListener("submit", function(event){
        event.preventDefault()

        if (campoBuscar.value==""){
            mensajeError.innerText="El campo no puede estar vacio";
        }
        else if (campoBuscar.value.length < 3){
            mensajeError.innerText="Debe escribir al menos 3 caracteres";
        }
        else{
            this.submit()
        }
    });


campoBuscar.addEventListener("keydown", function(){
    mensajeError.innerText = "";
});