class Cancion{
	
	constructor(titulo,artista,duracion,codec,genero)
	{
		this.titulo=titulo;
		this.artista=artista;
		this.duracion=duracion;
		this.codec=codec;
		this.genero=genero;
		this.estado=false;	
			}
	
	reproducir()
	{
		this.estado=true;
	}
	
	detener()
	{
		this.estado=false;
	}
	
	nombre(){
		
		return this.artista+" "+this.titulo;
	}
}



var nuevaCancion=new Cancion("Wonderwall","Oasis","3:43","mp3","Rock");
nuevaCancion.reproducir();
console.log("El estado de la cancion es: "+nuevaCancion.estado);
console.log(nuevaCancion.nombre());

var nuevaCancion2=new Cancion("Veneno","La Renga","3:20","mp3","Rock");
nuevaCancion2.reproducir();
console.log("El estado de la cancion es: "+nuevaCancion2.estado);
console.log(nuevaCancion2.nombre());