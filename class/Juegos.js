//      Examen de clase y herencia
///////////////////////////////////////////////////clase padre /////////////////////////////////////////////////////////////////

class VideoJuegos{                                                  // Creamos la clase Juegos


    //////////////////////////////////propiedades///////////////////////////////////////////

    #precio;                                                        // propiedad privada
    #anno;                                                          // propiedad privada
    compania;                                                       // propiedad
    plataforma;                                                     // propiedad


    /////////////////////////////////constructor//////////////////////////////////////////////

    constructor(precio,anno,compania,plataforma) {                  // Creamos el constructor
        this.#precio=precio;                                        // designamos la propiedad privada al valor entrante precio
        this.#anno=anno;                                            // designamos la propiedad
        this.compania=compania;                                     // designamos la propiedad
        this.plataforma=plataforma;                                 // designamos la propiedad
    }                                                               // cerramos el constructor


    /////////////////////////////////setters y getters////////////////////////////////////////////

    set setPrecio(precio) {                                         // declaramos el set de precio
        this.#precio=precio;                                 
    }                                                               // cerramos set

    set setAnno(anno) {                                             // declaramos el set anno
        this.#anno=anno;                                           
    }                                                               // cerramos set

    set setCompania(compania) {                                     // declaramos el set compania
        this.compania=compania;                                             
    }                                                               // cerramos set

    set setPlataforma(plataforma) {                                 // declaramos set Plataforma
        this.plataforma=plataforma;                   
    }                                                               // cerramos set

    get getPrecio() {                                               // declaramos get precio
       return this.#precio;
    }                                                               // cerramos get

    get getAnno() {                                                 // declaramos get Anno
        return this.#anno;
    }                                                               // cerramos get

    get getCompania() {                                             // declaramos get compania
        return this.compania
    }                                                               // cerramos get

    get getPlataforma() {                                           // declaramos get plataforma
        return this.plataforma;
    }                                                               // cerramos get

 }                                                                  // termina la clase

///////////////////////////////////////////////////fin clase padre/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////clases herederas///////////////////////////////////////////////////////////////////

class estrategia extends VideoJuegos {                           
    
    #numJugadores;                                                  // declaramos la nueva propiedad privada
    #construcion;                                                   // declaramos la nueva propiedad privada

    ////////////////////////////////////////////constructor/////////////////////////////////////////

    constructor(precio,anno,compania,plataforma,numJugadores,construcion){       // declaramos el constructor
        super(precio,anno,compania,plataforma);                                 // Llamamos el constructor padre
        this.#numJugadores=numJugadores;
        this.#construcion=construcion;

    }                                                               // cerramos constructor

    /////////////////////////////////setters y getters////////////////////////////////////////////

    set setNumJugadores(numJugadores) {                             // declaramos el set numJugadores
        this.#numJugadores=numJugadores;                                           
    }                                                               // cerramos set

    set setConstrucion(construcion) {                             // declaramos el set numJugadores
        this.#construcion=construcion;                                           
    }


    get getcarga() {                                                // declaramos el get numJugadores
       return this.#numJugadores; 
    }                                                               // cerramos get

    get getConstrucion() {                                          // declaramos el get numJugadores
        return this.#construcion; 
     }                                                               // cerramos get

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Arcade extends VideoJuegos {                           
    
    #laberintos;                                                    // declaramos la nueva propiedad privada
    #aventura
    ////////////////////////////////////////////constructor/////////////////////////////////////////

    constructor(precio,anno,compania,plataforma,laberintos,aventura){  // declaramos el constructor
        super(precio,anno,compania,plataforma);                        // Llamamos el constructor padre
        this.#laberintos=laberintos;
        this.#aventura=aventura

    }                                                                  // cerramos constructor

    /////////////////////////////////setters y getters////////////////////////////////////////////

    set setLaberintos(laberintos) {                                 // declaramos el set laberintos
        this.#laberintos=laberintos;                                           
    }                                                               // cerramos set

    set setAventura(aventura) {                                 // declaramos el set laberintos
        this.#aventura=aventura;                                           
    }                                                               // cerramos set

    get getLaberintos() {                                           // declaramos el get numJugadores
       return this.#laberintos; 
    }                                                               // cerramos get

    get getAventura() {                                           // declaramos el get numJugadores
        return this.#aventura; 
     }                   

}

/////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////fin clases herederas///////////////////////////////////////////////////////////


