const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    alt: 'Foto departamento, sala',
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banios: 2,
    costo: 2000,
    smoke: false,
    pets: true,
    id : 1
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: 'Foto departamento',
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banios: 3,
    costo: 2500,
    smoke: true,
    pets: true,
    id : 2
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    alt: 'Foto condominio de lujo',
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banios: 2,
    costo: 2200,
    smoke: false,
    pets: false,
    id : 3
  },
  {
    nombre: "Cabaña en la montaña",
    src: "./assets/img/alquiler4.jpg",
    alt: 'Foto cabaña en la montaña',
    descripcion:
      "Acogedora casa de sur, con vista a una exhuberante naturaleza ",
    ubicacion: "234 subida al volcan CA 67680",
    habitaciones: 2,
    banios: 1,
    costo: 1200,
    smoke: false,
    pets: true,
    id : 4
  },
  {
    nombre: "Casa rodante",
    src: "./assets/img/alquiler5.jpg",
    alt: 'Foto interior casa rodante',
    descripcion: "Camper reacondicionada, especial para viajes",
    ubicacion: "789 Camino central, CA86876",
    habitaciones: 1,
    banios: 1,
    costo: 1200,
    smoke: false,
    pets: false,
    id : 5
  },
  {
    nombre: "Hermosa casa vista al mar",
    src: "./assets/img/alquiler6.jpg",
    alt: 'Foto casa con vista al mar',
    descripcion: "Fantastica casa en acantilado, con vista al mar",
    ubicacion: "456 Sea Avenue, CA 91234",
    habitaciones: 4,
    banios: 2,
    costo: 2200,
    smoke: false,
    pets: true,
    id : 6
  },
  {
    nombre: "Loft en el centro de la ciudad",
    src: "./assets/img/alquiler7.jpg",
    alt: 'Foto interior de loft',
    descripcion: "Estudio recién reacondicionado, fantastica ubicación",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 1,
    banios: 1,
    costo: 2000,
    smoke: false,
    pets: false,
  },
];

const rent = document.querySelector("#rent");
let templateAlquiler = "";
for (let propiedadAlquiler of propiedadesAlquiler) {
  if (propiedadAlquiler.id === 4 && rent.classList.contains("on")) break
  if (propiedadAlquiler.smoke === true) {
    propiedadAlquiler.smoke = `<p class="text-success">
    <i class="fas fa-smoking"></i> Permitido Fumar
  </p>`;
  } else {
    propiedadAlquiler.smoke = `<p class="text-danger">
    <i class="fas fa-smoking-ban"></i> No se permite Fumar
  </p>`;
  }
  if (propiedadAlquiler.pets === true) {
    propiedadAlquiler.pets = `<p class="text-success">
    <i class="fas fa-paw"></i> Pet friendly
  </p>`;
  } else {
    propiedadAlquiler.pets = `<p class="text-danger">
    <i class="fas fa-ban"></i> No se permiten mascotas
  </p>`;
  }
  templateAlquiler += `
  <div class="col-md-4 mb-4" >
  <div class="card">
              <img
                src=${propiedadAlquiler.src}
                class="card-img-top"
                alt=${propiedadAlquiler.alt}
              />
              <div class="card-body">
                <h5 class="card-title"> ${propiedadAlquiler.nombre} </h5>
                <p class="card-text">
                ${propiedadAlquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedadAlquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedadAlquiler.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedadAlquiler.banios} baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadAlquiler.costo}0</p>
                <p>
                  ${propiedadAlquiler.smoke}
                </p>
                <p>
                ${propiedadAlquiler.pets}
                </p>
              </div>
            </div>
            </div>`;

}
rent.innerHTML = templateAlquiler;
