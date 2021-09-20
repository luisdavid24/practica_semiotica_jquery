$(function(){
      
    $("#boton1").click(function (e) { 
        e.preventDefault();
        var nombre=$("#nombre").val();
        var cedula=$("#cedula").val();
        var fecha=$("#fecha").val();
        
        let warnings="";
        if(nombre.length=== 0){
            warnings+="El nombre esta vacio  <br>"
        }else if(!isNaN(nombre)){
            warnings+="El nombre debe ser texto  <br>"
        }
    
        if(cedula===''||cedula===null){
            warnings+="La cedula debe ser ocupada  <br>"
        } else if(typeof cedula==='number'){
            warnings+="La cedula debe tener numeros  <br>"
        
        }
        let fecha2='01/01/';
        fecha2+=fecha
        let fechaNacimiento=new Date(fecha2);
        let ahora=new Date();
        var agnios=ahora.getFullYear()-fechaNacimiento.getFullYear();
        if(agnios<18){
            alert("Eres menor de edad");
    
        }
       
        $("#warning").html(warnings);
        
    });
    $("#boton2").click(function (e) { 
        e.preventDefault();
        var imagen=$("#imagen").val()
        var opcionFoto=$("#opcionFoto").val();
        if(opcionFoto==="Foto1"){
            $("#imagen").attr("src","./foto1.jpg");
        }else if(opcionFoto==="Foto2"){
            $("#imagen").attr("src","./foto2.jpg");
        }else if(opcionFoto==="Foto3"){
            $("#imagen").attr("src","./foto3.jpg");

        }
    });
    var cont=0; 
    $("#boton3").click(function (e) { 
        e.preventDefault();
        agregar()
        
    });
    function agregar(){
        cont++;
        var Espacio1=$("#Espacio1").val();
        var Espacio2=$("#Espacio2").val();
        let filaNueva='<tr  class="seleccionada" id="'+cont+'"><td>'+cont+'</td><td>'+Espacio1+'</td><td>'+Espacio2+'</td></tr>';
        $("#tabla").append(filaNueva);
    }
    function seleccionar(id) {
        if($("#"+id).hasClass('seleccionada')){
            $("#"+id).removeClass('seleccionada');
        }else{
            $("#"+id).addClass('seleccionada');
        }
    }
    
    function eliminar(id) {
        $("#"+id).remove();
    }
    $("#btnRecorrer").click(function () {
        $("#tabla tr").each(function (index) {
            var id= $(this).attr('id');
            if(id>2){
                let idbusca="#"
                idbusca+=id;
                $(idbusca).css({"background":"red"})
            }
            
        })
    });

});

