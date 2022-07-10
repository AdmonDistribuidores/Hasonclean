
function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("dispensadores").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    document.getElementById("maquinaria").style.display = "none";
    document.getElementById("bioseguridad").style.display = "none";
    document.getElementById("carito2").style.display = "none";
    conta=0;
    contador=0;
}




var btn = contador=0;


function servicios() {

if (contador==0) {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("carito2").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
}
else{

}
}

function catalogos() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("carito2").style.display = "block";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("dispensadores").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    conta=0;
    contador=1;
   
}

function Absorbentes() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("Absorbentes").style.display = "grid";
    document.getElementById("back").style.display = "block";
    document.getElementById("carito2").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
   
}

function dispensadores() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("dispensadores").style.display = "grid";
    document.getElementById("side").style.display = "none";
    document.getElementById("carito2").style.display = "block";
    document.getElementById("back").style.display = "block";
    conta=0;
    contador=2;    
    
}

function desinfectantes() {
    document.getElementById("desinfectantes").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("carito2").style.display = "block";
    document.getElementById("back").style.display = "block";
    conta=0;
    contador=2;    
    
}

function limpieza() {
    document.getElementById("limpieza").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("carito2").style.display = "block";
    document.getElementById("back").style.display = "block";
    conta=0;
    contador=2;    
    
}

function maquinaria() {
    document.getElementById("maquinaria").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("carito2").style.display = "block";
    document.getElementById("back").style.display = "block";
    conta=0;
    contador=2;    
    
}

function bioseguridad() {
    document.getElementById("bioseguridad").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("carito2").style.display = "block";
    document.getElementById("back").style.display = "block";
    conta=0;
    contador=2;    
    
}

function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("dispensadores").style.display = "none";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    document.getElementById("maquinaria").style.display = "none";
    document.getElementById("bioseguridad").style.display = "none";
    document.getElementById("carito2").style.display = "none";
    conta=0;
    contador=3;   
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });  
}

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("carito2").style.display = "none";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("dispensadores").style.display = "none";
        document.getElementById("Absorbentes").style.display = "none";
        document.getElementById("desinfectantes").style.display = "none";
        document.getElementById("limpieza").style.display = "none";
        document.getElementById("maquinaria").style.display = "none";
        document.getElementById("bioseguridad").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("dispensadores").style.display = "none";
        document.getElementById("Absorbentes").style.display = "none";
        document.getElementById("desinfectantes").style.display = "none";
        document.getElementById("limpieza").style.display = "none";
        document.getElementById("maquinaria").style.display = "none";
        document.getElementById("bioseguridad").style.display = "none";
        contador=1;

    }
    
    
    }

   //    menu laterl 

    var btns = conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

// llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
document.getElementById("side").style.display = "none";
conta=0;
});




// llevar arriba
    
document.querySelector('.side1')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

document.querySelector('.side2')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});


document.querySelector('.back')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});


// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593996701685";
  
    let cliente = document.querySelector("#cliente").value;
    let contacto = document.querySelector("#contacto").value;
    let venta = document.querySelector("#venta").value;
    let cantidad = document.querySelector("#cantidad").value;
    let productos = document.querySelector("#productos1").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Admon Distribuidores*%0A
          *Datos de la Cotización*%0A
          *Nombre de Cliente*%0A
          ${cliente}%0A
          *Numero de Contacto*%0A
          ${contacto}%0A
          *Tipo de Venta*%0A
          ${venta}%0A
          *Items*%0A
          ${cantidad}%0A
          *Cotizar*%0A
          ${productos}%0A`;
  
    if (cliente === "" || contacto === "" || venta === "" || productos === "" || cantidad === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Tu Cotización Fue Enviada, ${cliente}`;
  
    window.open(url);
  });
  
  //ALERTAS>
  function save(){
    let url = `https://drive.google.com/u/0/uc?id=1exRAyy748YrBo3xblSH7xJrWWTC588Qg&export=download`;
    window.open(url); 
   }
  
  function ftuser() {
      Swal.fire({
          title: 'Handersson Albarracin',
          text: 'Especialista de Producto',
          imageUrl: 'img/logohadson.png',
          imageWidth: 250,
          confirmButtonText: 'Añadir a Contactos',
          showCloseButton: 'true',
          showCancelButton: true,
    
      
        }).then((result) => {
          if (result.isConfirmed) {
            save();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Descarga Correcta',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
   
  };
  
  
  
function msj2() {
    Swal.fire({
        icon: 'success',
        title: 'Cotizar',
        text: 'Producto Agregado a la Lista',
        footer: 'Hason Clean',
        timer: 2000
      });
  
   
  }


var suma = 0;

var agregar = ``;

let amountProduct = document.querySelector('.count-product');

//absorventes>


  function agp1() {

    agregar = agregar + ` Papel Higiénico Jumbo Soott -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
    
     
    }   

function agp2() {

    agregar = agregar + ` Toalla Forest 100 metros -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}
    
function agp3() {

    agregar = agregar + ` Toalla Aurora 100 metros -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp4() {

    agregar = agregar + ` Toalla en Z Doble Hoja Aurora -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp5() {

    agregar = agregar + ` Toalla en Z Doble Hoja Forest -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp6() {

    agregar = agregar + ` Limpiones Industriales de 100, 300, 600 Metros -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}
    
//Dispensadores>   
      

function agp7() {

    agregar = agregar + ` Dispensador de Papel Higenico -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}
function agp8() {

    agregar = agregar + ` Dispensador de Papel Toalla en Z -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}
function agp9() {

    agregar = agregar + ` Dispensadores de jabon liquido -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}       
  

//desinfectantes> 

function agp10() {

    agregar = agregar + ` Desinfectante Liquido Concentrado -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
} 
function agp11() {

    agregar = agregar + ` Amonio Cuaternario -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
} 
function agp12() {

    agregar = agregar + ` Cloro al 5% y 10% -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
} 
function agp13() {

    agregar = agregar + ` Jabon Liquido -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
} 
function agp14() {

    agregar = agregar + ` Desengrasante "Mundo Clean -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
} 
function agp15() {

    agregar = agregar + ` Desengrasante "Tornado OZZ -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
} 
function agp16() {

    agregar = agregar + ` Limpia Vidrios "Mundo Clean -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
} 

//limpieza> 

function agp17() {

    agregar = agregar + ` Mopas de Barrido Y trapeo "BINNER -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp18() {

    agregar = agregar + ` Coches de Limpieza -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp19() {

    agregar = agregar + ` Escobas -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp20() {

    agregar = agregar + ` Trapeadores -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp21() {

    agregar = agregar + ` Fundas de Basura -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp22() {

    agregar = agregar + ` Paños Microfibra -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp23() {

    agregar = agregar + ` Detergente en Polvo -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp24() {

    agregar = agregar + ` Detergente Liquido Enzimatico -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp25() {

    agregar = agregar + ` Detergente de Ropa -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp26() {

    agregar = agregar + ` Guantes de Caucho -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

//maquinaria> 

function agp27() {

    agregar = agregar + ` Abrillantadoras Industriale -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp28() {

    agregar = agregar + ` Aspiradoras de Polvo Y Agua -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}                                             

//bioseguridad>

function agp29() {

    agregar = agregar + ` Cepillo de Dientes -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp30() {

    agregar = agregar + ` Alcohol al 70% "Mundo Clean -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}

function agp31() {

    agregar = agregar + ` Gel Antibacterial "DR Clean -`;
    document.querySelector("#productos1").value =  agregar;
    suma = suma +1;
    amountProduct.innerHTML = suma;
    document.querySelector("#cantidad").value =  suma ;
    msj2();
     
}