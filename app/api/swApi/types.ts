export type Pelicula = {
    titulo: string; 
    episodio: number;
    textoApertura: string;
    director: string;
    productores: string;
    fechaEstreno: string;
    especies: string[];
    navesEstelares: string[];
    vehiculos: string[];
    personajes: string[];
    planetas: string[];
    url: string;
    creado: string;
    editado: string;
  };

export type Planeta = {
    nombre: string;            
    diametro: string;          
    periodoRotacion: string;   
    periodoOrbital: string;    
    gravedad: string;          
    poblacion: string;         
    clima: string;             
    terreno: string;           
    aguaSuperficial: string;   
    residentes: string[];      
    peliculas: string[];       
    url: string;              
    creado: string;           
    editado: string;          
  };

export type Persona = {
  nombre: string;            
  anoNacimiento: string;     
  colorOjos: string;         
  genero: string;            
  colorCabello: string;      
  altura: string;            
  masa: string;              
  colorPiel: string;         
  planetaNatal: string;      
  peliculas: string[];       
  especies: string[];        
  navesEstelares: string[];  
  vehiculos: string[];       
  url: string;              
  creado: string;           
  editado: string;          
};