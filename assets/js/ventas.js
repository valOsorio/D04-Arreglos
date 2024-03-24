const propiedadesVentas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    alt: 'Foto interior de departamento',
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banios: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
    id :1
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    alt: 'Foto casa rodante en la naturaleza',
    descripcion:
      "Esta camper te llevará a lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banios: 1,
    costo: "1.200",
    smoke: true,
    pets: true,
    id :2
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    alt: 'Foto interior penthouse con terraza panorámica',
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banios: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
    id :3
  },
  {
    nombre: "Casa en las afueras de la ciudad",
    src: "./assets/img/venta5.jpg",
    alt: 'Foto casa a orillas de playa',
    descripcion: "Casa en las afueras de la ciudad, amplios jardines",
    ubicacion: "Camino al volcán sin numero CA 1234",
    habitaciones: 5,
    banios: 3,
    costo: "6.500",
    smoke: true,
    pets: true,
    id :4
  },
  {
    nombre: "Departamento remodelado",
    src: "./assets/img/venta4.jpeg",
    alt: 'Foto interior de departamento',
    descripcion: "Este departamento cuenta con vista al patio interior",
    ubicacion: "123 Sunday Avenue, Minesota, CA 56789",
    habitaciones: 3,
    banios: 2,
    costo: "3.500",
    smoke: false,
    pets: true,
    id: 5
  },
  {
    nombre: "Casa junto al lago",
    src: "./assets/img/venta6.jpg",
    alt: 'Foto casa a orillas de lago',
    descripcion: "Ubicada en un acantilado, con vista al mar",
    ubicacion: "1256 Camino El despeñadero BA 1234",
    habitaciones: 2,
    banios: 1,
    costo: "2.500",
    smoke: false,
    pets: false,
    id: 6
  },
  {
    nombre: "Casa con piscina",
    src: "./assets/img/venta7.jpg",
    alt: 'Foto casa y patio con piscina',
    descripcion: "Amplia casa de tres niveles, con piscina exterior",
    ubicacion: "455 Camino de la Costa, CA 1234",
    habitaciones: 3,
    banios: 3,
    costo: "3.500",
    smoke: true,
    pets: false,
    id: 7
  },
];

const sale = document.querySelector("#sale");
let templateVentas = "";
for (let propiedadVenta of propiedadesVentas) {
  if (propiedadVenta.id === 4 && sale.classList.contains("on")) break
  if (propiedadVenta.smoke === true) {
    propiedadVenta.smoke = `<p class="text-success">
    <i class="fas fa-smoking"></i> Permitido Fumar
  </p>`;
  } else {
    propiedadVenta.smoke = `<p class="text-danger">
    <i class="fas fa-smoking-ban"></i> No se permite Fumar
  </p>`;
  }

  if (propiedadVenta.pets === true) {
    propiedadVenta.pets = `<p class="text-success">
    <i class="fas fa-paw"></i> Pet friendly
  </p>`;
  } else {
    propiedadVenta.pets = `<p class="text-danger">
    <i class="fas fa-ban"></i> No se permiten mascotas
  </p>`;
  }
  templateVentas += `
  <div class="col-md-4 mb-4" >
  <div class="card">
              <img
                src=${propiedadVenta.src}
                class="card-img-top"
                alt=${propiedadVenta.alt}
              />
              <div class="card-body">
                <h5 class="card-title"> ${propiedadVenta.nombre} </h5>
                <p class="card-text">
                ${propiedadVenta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedadVenta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedadVenta.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedadVenta.banios} baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadVenta.costo}</p>
                <p> ${propiedadVenta.smoke}
                </p>
                <p>${propiedadVenta.pets}
                </p>
              </div>
            </div>
            </div>`;

}
sale.innerHTML = templateVentas;