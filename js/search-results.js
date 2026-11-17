let url_lista_categorias="https://dummyjson.com/products/category-list"
let menu_vertical=document.querySelector(".menu_vertical")
let seccion=document.querySelector(".categorias")
let queryString=location.search
let queryStringobj=new URLSearchParams(queryString)
let search_results=queryStringobj.get("q")
titulo_cat=document.querySelector(".h2_search")
let url_search_results=`https://dummyjson.com/products/search?q=${search_results}`

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


        fetch(url_search_results)
     .then(function(response){
     	return response.json();
 	})
     .then(function(data){
         console.log(data);
         productos=data.products;
        titulo_cat.innerText=`resultados para: "${search_results}"`
         for (let i=0;i<productos.length;i++){
          
            seccion.innerHTML+=`
            <article class="productos_index">
                    <a class="link_fotos_productos" href="./product.html?id=${productos[i].id}">
                        <img class="fotos_productos" src=${productos[i].images[0]} alt="">
                    </a>
                    <h3>${productos[i].title}</h3>
                    <p class="descripciones_remeras_index">${productos[i].description}</p>
                    <p class="precio">${productos[i].price}</p>
                    <a class="ver_detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
            </article>
            `
         }



 
 	})
     .catch(function(error){
         console.log('El error es: ' + error);
 	});