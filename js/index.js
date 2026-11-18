let url_lista_categorias="https://dummyjson.com/products/category-list"
let menu_vertical=document.querySelector(".menu_vertical")
let url_categoria_smartphones=`https://dummyjson.com/products/category/smartphones`
let url_categoria_mobile_accessories=`https://dummyjson.com/products/category/mobile-accessories`
let seccion_smartphones=document.querySelector(".seccion_aleatorias")
let titulo_seccion1=document.querySelector(".titulo_seccion1")
let titulo_seccion2=document.querySelector(".titulo_seccion2")
let seccion_accessories=document.querySelector(".seccion_mas_vendidos")



fetch(url_lista_categorias)
     .then(function(response){
     	return response.json();
 	})
     .then(function(data){
         console.log(data);
         for (i=0;i<data.length;i++){
            menu_vertical.innerHTML+=`
            <li class="categoria"><a href="./category.html?categoria=${data[i]}"> ${data[i]} </a></li>`

            
         }


 
 	})
     .catch(function(error){
         console.log('El error es: ' + error);
 	});


fetch(url_categoria_smartphones)
     .then(function(response){
     	return response.json();
 	})
     .then(function(data){
         console.log(data);
         productos=data.products
         titulo_seccion1.innerText=`${productos[0].category}`
         for(let i=0;i<productos.length;i++){
            seccion_smartphones.innerHTML+=
            `
                     <article class="productos_index">
                        <a class="link_fotos_productos" href="./product.html?id=${productos[i].id}">
                        <img class="fotos_productos" src=${productos[i].images[0]} alt="">
                        </a>
                        <h3> ${productos[i].title}</h3>
                        <p class="descripciones_remeras_index">${productos[i].description}</p>
                        <p class="precio">$${productos[i].price}</p>
                        <a class="ver_detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                    </article>
            
            `


         }
        
    


 
 	})
     .catch(function(error){
         console.log('El error es: ' + error);
 	});

    fetch(url_categoria_mobile_accessories)
     .then(function(response){
     	return response.json();
 	})
     .then(function(data){
         console.log(data);
         productos=data.products
         titulo_seccion2.innerText=`${productos[0].category}`
         for(let i=0;i<productos.length;i++){
            seccion_accessories.innerHTML+=
            `
                     <article class="productos_index">
                        <a class="link_fotos_productos" href="./product.html?id=${productos[i].id}">
                        <img class="fotos_productos" src=${productos[i].images[0]} alt="">
                        </a>
                        <h3> ${productos[i].title}</h3>
                        <p class="descripciones_remeras_index">${productos[i].description}</p>
                        <p class="precio">$${productos[i].price}</p>
                        <a class="ver_detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                    </article>
            
            `


         }
        
    


 
 	})
     .catch(function(error){
         console.log('El error es: ' + error);
 	});