import animaciones_iniciales from "./animaciones-iniciales";
import fixture_workspace_bloques_de_escena_nueva from "./workspace-bloques-de-escena-nueva";
import fixture_sonidos_iniciales from "./sonidos-iniciales";

export default {
  titulo: "Proyecto",
  ancho: 500,
  alto: 500,
  tamaño: "500x500",
  nombre_de_la_escena_inicial: "escena1",
  imagenes: [],
  animaciones: animaciones_iniciales,
  codigos: {
    escenas: [
      {
        nombre: "escena1",
        codigo: "class escena1 extends Escena {\n    iniciar() {\n\n    }\n\n    actualizar() {\n\n    }\n}",
      },
    ],
    actores: [
      {
        nombre: "protagonista",
        codigo:
          '// @ts-ignore\nclass protagonista extends Actor {\n  pies: Sensor;\n  toca_el_suelo: boolean = false;\n\n  iniciar() {\n    this.estado = "salta";\n    this.pies = this.obtener_sensor("pies");\n  }\n\n  actualizar() {\n    this.pilas.observar("estado del protagonista", this.estado);\n    this.pilas.observar("toca_el_suelo", this.toca_el_suelo);\n\n    this.toca_el_suelo = this.pies.colisiona_con_etiqueta("plataforma")\n  }\n\n  // Estado: parado\n\n  parado_iniciar() {\n    this.animacion = "bmo_parado";\n  }\n\n  parado_actualizar() {\n    if (this.control.izquierda || this.control.derecha) {\n      this.estado = "camina";\n    }\n\n    if (this.control.arriba) {\n      this.estado = "salta";\n      this.impulsar(0, 8);\n    }\n\n    // si deja de tocar el suelo cambia de estado\n    if (!this.toca_el_suelo) {\n      this.estado = "salta";\n    }\n  }\n\n\n  // Estado: camina\n\n  camina_iniciar() {\n    this.animacion = "bmo_camina";\n  }\n\n  camina_actualizar() {\n    if (this.control.izquierda) {\n      this.x -= 4;\n      this.espejado = true;\n    }\n\n    if (this.control.derecha) {\n      this.x += 4;\n      this.espejado = false;\n    }\n\n    if (this.control.arriba) {\n      this.estado = "salta";\n      this.impulsar(0, 8);\n    }\n\n    // si suelta las teclas regresa al estado inicial\n    if (!this.control.derecha && !this.control.izquierda) {\n      this.estado = "parado";\n    }\n\n    // si deja de tocar el suelo cambia de estado\n    if (!this.toca_el_suelo) {\n      this.estado = "salta";\n    }\n  }\n\n\n\n  // Estado: saltando\n\n  salta_iniciar() {\n    this.animacion = "bmo_salta";\n  }\n\n  salta_actualizar() {\n    // deja de saltar si toca el suelo y además está\n    // cayendo.\n    if (this.toca_el_suelo && this.velocidad_y < 0) {\n      this.estado = "parado";\n    }\n\n    // permite moverse hacia los costados en el aire\n    if (this.control.izquierda) {\n      this.x -= 4;\n      this.espejado = true;\n    }\n\n    if (this.control.derecha) {\n      this.x += 4;\n      this.espejado = false;\n    }\n  }\n\n\n\n}',
      },
      {
        nombre: "plataforma",
        codigo: "// @ts-ignore\nclass plataforma extends Actor {\n\n  iniciar() { }\n}\n",
      },
      {
        nombre: "nube_animada",
        codigo:
          "// @ts-ignore\nclass nube_animada extends Actor {\n\n  velocidad: number;\n\n  iniciar() {\n    this.z = 50;\n    this.velocidad = 0.5;\n  }\n\n  actualizar() {\n    this.x -= this.velocidad;\n\n    if (this.x < -400) {\n      this.x = 400;\n      this.y = this.pilas.azar(-200, 200);\n    }\n  }\n}\n",
      },
      {
        nombre: "bloque",
        codigo: "// @ts-ignore\nclass bloque extends Actor {\n\n  iniciar() { }\n}\n",
      },
    ],
    proyecto: "class Proyecto {\n    iniciar() {\n    }\n}",
  },
  escenas: [
    {
      nombre: "escena1",
      id: 1,
      ancho: 1000,
      alto: 1000,
      camara_x: 0,
      camara_y: -22.84791603592693,
      gravedad_x: 0,
      gravedad_y: 1,
      fondo: "decoracion:fondos/fondo-azul-plano",
      actores: [
        {
          x: -30.081743869209816,
          y: 2.7338782924613554,
          z: 0,
          imagen: "imagenes:bmo/bmo_salta",
          centro_x: 0.5,
          centro_y: 0.5,
          rotacion: 0,
          escala_x: 1,
          escala_y: 1,
          transparencia: 0,
          etiqueta: "actor",
          espejado: false,
          espejado_vertical: false,
          figura: "rectangulo",
          figura_dinamica: true,
          figura_ancho: 53,
          figura_alto: 72,
          figura_radio: 40,
          figura_sin_rotacion: true,
          figura_rebote: 0,
          figura_sensor: false,
          es_texto: false,
          texto_con_borde: false,
          id: 18068396230919330,
          activo: true,
          nombre: "protagonista",
          habilidades: [],
          sensores: [
            {
              id: "sensor-0.49972573287405564",
              x: 0,
              y: -35,
              ancho: 56,
              alto: 13,
              nombre: "pies",
            },
          ],
          lasers: [],
        },
        {
          x: 3.344609171809907,
          y: -127.96765526924935,
          z: 1,
          imagen: "imagenes:plataformas/plataforma",
          centro_x: 0.5,
          centro_y: 0.5,
          rotacion: 0,
          escala_x: 1,
          escala_y: 1,
          transparencia: 0,
          etiqueta: "plataforma",
          espejado: false,
          espejado_vertical: false,
          figura: "rectangulo",
          figura_dinamica: false,
          figura_ancho: 250,
          figura_alto: 40,
          figura_radio: 40,
          figura_sin_rotacion: false,
          figura_rebote: 0,
          figura_sensor: false,
          es_texto: false,
          texto_con_borde: false,
          id: 10541496014555268,
          activo: true,
          nombre: "plataforma",
          habilidades: [],
          sensores: [],
          lasers: [],
        },
        {
          x: 118.59737706078846,
          y: 143.4064983856845,
          z: 30,
          imagen: "decoracion:objetos/decoracion_nube_1",
          centro_x: 0.5,
          centro_y: 0.5,
          rotacion: 0,
          escala_x: 1,
          escala_y: 1,
          transparencia: 0,
          etiqueta: "actor",
          espejado: false,
          espejado_vertical: false,
          figura: "",
          figura_dinamica: true,
          figura_ancho: 100,
          figura_alto: 100,
          figura_radio: 40,
          figura_sin_rotacion: false,
          figura_rebote: 1,
          figura_sensor: false,
          es_texto: false,
          texto_con_borde: false,
          id: 13803128313994560,
          activo: true,
          nombre: "nube_animada",
          habilidades: [],
          sensores: [],
          lasers: [],
        },
        {
          x: 89.91825613079038,
          y: -59.58219800181661,
          z: 1,
          imagen: "imagenes:plataformas/bloque_ladrillo",
          centro_x: 0.5,
          centro_y: 0.5,
          rotacion: 14,
          escala_x: 1,
          escala_y: 1,
          transparencia: 0,
          etiqueta: "plataforma",
          espejado: false,
          espejado_vertical: false,
          figura: "rectangulo",
          figura_dinamica: true,
          figura_ancho: 61,
          figura_alto: 63,
          figura_radio: 40,
          figura_sin_rotacion: false,
          figura_rebote: 0.9,
          figura_sensor: false,
          es_texto: false,
          texto_con_borde: false,
          id: 16424814126188452,
          activo: true,
          nombre: "bloque",
          habilidades: [],
          sensores: [],
          lasers: [],
        },
      ],
    },
  ],
  fps: 60,
  modo_de_video: "suavizado",
  sonidos: fixture_sonidos_iniciales,
  bloques: {
    proyecto: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="actor_inicia" id="ZC`*TK^}PI+^~52^ak!H" x="35" y="44"></block></xml>',
    escenas: [
      {
        nombre: "escena1",
        bloques: {
          texto: fixture_workspace_bloques_de_escena_nueva,
          codigo_de_bloques:
            "if (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('^BS9[_V!D30$Klp?G]Nt', this.id);\n}\nactor._bloques_iniciar = function() {\n\n  };\n\nif (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('D[i2{g4SjDY+sAT7f=W@', this.id);\n}\nactor._bloques_actualizar = function() {\n\n  };\n",
        },
      },
    ],
    actores: [
      {
        nombre: "protagonista",
        bloques: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="actor_inicia" id="^BS9[_V!D30$Klp?G]Nt" x="-217" y="-205"></block><block type="actor_actualizar" id="D[i2{g4SjDY+sAT7f=W@" x="-212" y="-36"></block></xml>',
        codigo_de_bloques:
          "if (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('^BS9[_V!D30$Klp?G]Nt', this.id);\n}\nactor._bloques_iniciar = function() {\n\n  };\n\nif (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('D[i2{g4SjDY+sAT7f=W@', this.id);\n}\nactor._bloques_actualizar = function() {\n\n  };\n",
      },
      {
        nombre: "plataforma",
        bloques: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="actor_inicia" id="^BS9[_V!D30$Klp?G]Nt" x="-217" y="-205"></block><block type="actor_actualizar" id="D[i2{g4SjDY+sAT7f=W@" x="-212" y="-36"></block></xml>',
        codigo_de_bloques:
          "if (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('^BS9[_V!D30$Klp?G]Nt', this.id);\n}\nactor._bloques_iniciar = function() {\n\n  };\n\nif (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('D[i2{g4SjDY+sAT7f=W@', this.id);\n}\nactor._bloques_actualizar = function() {\n\n  };\n",
      },
      {
        nombre: "nube_animada",
        bloques: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="actor_inicia" id="^BS9[_V!D30$Klp?G]Nt" x="-217" y="-205"></block><block type="actor_actualizar" id="D[i2{g4SjDY+sAT7f=W@" x="-212" y="-36"></block></xml>',
        codigo_de_bloques:
          "if (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('^BS9[_V!D30$Klp?G]Nt', this.id);\n}\nactor._bloques_iniciar = function() {\n\n  };\n\nif (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('D[i2{g4SjDY+sAT7f=W@', this.id);\n}\nactor._bloques_actualizar = function() {\n\n  };\n",
      },
      {
        nombre: "bloque",
        bloques: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="actor_inicia" id="^BS9[_V!D30$Klp?G]Nt" x="-217" y="-205"></block><block type="actor_actualizar" id="D[i2{g4SjDY+sAT7f=W@" x="-212" y="-36"></block></xml>',
        codigo_de_bloques:
          "if (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('^BS9[_V!D30$Klp?G]Nt', this.id);\n}\nactor._bloques_iniciar = function() {\n\n  };\n\nif (this.id) {\n\tthis.pilas.notificar_ejecucion_del_bloque('D[i2{g4SjDY+sAT7f=W@', this.id);\n}\nactor._bloques_actualizar = function() {\n\n  };\n",
      },
    ],
  },
};
