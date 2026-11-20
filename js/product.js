let url_lista_categorias="https://dummyjson.com/products/category-list"
let menu_vertical=document.querySelector(".menu_vertical")
let queryString=location.search
let queryStringobj=new URLSearchParams(queryString)
let id=queryStringobj.get("id")
let url_producto=`https://dummyjson.com/products/${id}`
let producto_y_resenas=document.querySelector(".producto_y_resenas")
let formulario=document.querySelector(".buscador")
let campoBuscar=document.querySelector(".input_buscador")
let mensajeError=document.querySelector(".error_caracteres")

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

fetch(url_producto)
     .then(function(response){
     	return response.json();
 	})
     .then(function(data){
         console.log(data);
         producto_y_resenas.innerHTML=
         `
        <article class="producto_unico">
            
            <img class="fotos_productos" src="${data.images[0]}" alt="${data.title}">
                
            <div class="remera">
                <h3>${data.title}</h3>
                    <p>${data.description}</p>
                    <p class="precio">$${data.price}</p>
                    <a class="categoria_producto" href="./category.html?categoria=${data.category}"> Categoria: ${data.category}</a>
                    <p class="ultima">quedan ${data.stock} unidades</p>
                            
                  
            </div>

            <div class="tags">
                <p class="tag">${data.tags[0]}</p>
                <p class="tag">${data.tags[1]}</p>
            </div>
            
                    
        </article>
        <div class="resenas_seccion">
                <h2 class="titulo_resenas_de_usuarios">Reseñas de Usuarios</h2>
                <div class="resena">               
                    <p>${data.reviews[0].rating}/5</p>                   
                    <p class="usuario_resena"> ${data.reviews[0].reviewerName}  ${data.reviews[0].date} :</p>
                    <p>${data.reviews[0].comment}</p>
                </div>    
                <div class="resena">               
                    <p>${data.reviews[1].rating}/5</p>                   
                    <p class="usuario_resena"> ${data.reviews[1].reviewerName }  ${data.reviews[1].date}: </p>
                    <p> ${data.reviews[1].comment}</p>
                </div> 
                <div class="resena">               
                    <p>${data.reviews[2].rating}/5</p>                   
                    <p class="usuario_resena"> ${data.reviews[2].reviewerName}  ${data.reviews[2].date} : </p>
                    <p> ${data.reviews[2].comment}</p>
                </div> 
 
                    
            </div>
         
         
         `
         


 
 	})
     .catch(function(error){
         console.log('El error es: ' + error);
 	});
     formulario.addEventListener("submit", function(event){
        event.preventDefault()

        if (campoBuscar.value===""){
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