const imagenGenerica = "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80";

const productos = [
    // ==========================================
    // --- BOLÍGRAFOS, LÁPICES Y MÁS (24) ---
    // ==========================================
    { id: 1, nombre: "BOLÍGRAFO TOUCH DE ALUMINIO DE ACCIÓN GIRATORIA", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo de aluminio, clip de metal cromado.\nPunta y anillo central cromados.\nRecambio de tinta azul de 1,0 mm.\nDimensiones: Ø7.5 X 136 MM.", colores: ["#FF0000", "#000000", "#0000FF", "#808080"], marcaje: ["Impresión UV", "Láser"] },
    { id: 2, nombre: "BOLÍGRAFO METÁLICO DE ACCIÓN GIRATORIA + ESTUCHE DE CARTÓN", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Bolígrafo metálico de acción giratoria.\nIncluye estuche de cartón negro.\nDimensiones: Ø12.6 X 136 MM.", marcaje: ["Láser"] },
    { id: 3, nombre: "BOLÍGRAFO DE PLÁSTICO CON BOTÓN DE BAMBÚ", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Bolígrafo de plástico con clip de aluminio.\nAdorno: Botón de bambú.\nTinta azul.\nMedidas: 14,3 CM X 1,1 CM.", colores: ["#FF0000", "#008000", "#000000", "#FFFFFF", "#0000FF"], marcaje: ["Impresión UV"] },
    { id: 4, nombre: "BOLÍGRAFO DE PLÁSTICO Y BAMBÚ CON MECANISMO DE PULSACIÓN", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Barril de color sólido, clip esmerilado de color sólido.\nAdorno: botón de bambú.\nDimensiones: Ø10 X 135 MM.", colores: ["#0000FF", "#FFFFFF", "#FF0000"], marcaje: ["Impresión UV"] },
    { id: 5, nombre: "BOLÍGRAFO DE METAL DE CORCHO + ESTUCHE", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Bolígrafo giratorio de metal envuelto en corcho marrón.\nDetalles cromados.\nIncluye estuche.\nDimensiones: Ø10.5 X 142 MM.", marcaje: ["Láser"] },
    { id: 6, nombre: "BOLÍGRAFO DE RECICLADO ALUMINIO CON EMPUÑADURA DE CORCHO Y TOUCH + CAJA", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Bolígrafo de acción de empuje.\nLápiz táctil en la parte superior.\nAgarre de corcho.\nEmpaque en caja individual.", marcaje: ["Láser"] },
    { id: 7, nombre: "ESTUCHE PARA BOLÍGRAFOS", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Estuche cilíndrico en color negro y café.\nFajín de mismo color.\nMaterial: Cartón duro.\nMedidas: 5.5 CM X 17.9 CM.", colores: ["#000000", "#8B4513"], marcaje: ["Láser", "Impresión UV"] },
    { id: 8, nombre: "SET LÁPICES DE COLORES", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Tubo de cartón ecológico.\nContiene 12 colores diversos y sacapuntas en la tapa.\nMedidas: 10.6 CM X 3.5 CM.", eco: true, marcaje: ["Impresión UV"] },
    { id: 9, nombre: "BOLÍGRAFO TOUCH PLÁSTICO", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo plástico con mecanismo giratorio.\nPuntero touch para pantallas.\nTinta azul.\nDimensiones: Ø7.5 X 136 MM.", colores: ["#FF0000", "#000000"], marcaje: ["Impresión UV"] },
    { id: 10, nombre: "BOLÍGRAFO ECO-BIODEGRADABLE", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Clip y botón de plástico.\nCuerpo de cartón reciclado.\nSistema de escritura en tinta azul.\nMedidas: 14 CM X 1.1 CM.", eco: true, colores: ["#000000", "#0000FF", "#FF0000"], marcaje: ["Impresión UV"] },
    { id: 11, nombre: "BOLÍGRAFO DE MESA / ESCRITORIO", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Soporte giratorio de metal 360 grados.\nBase adhesiva para escritorio.\nCadena de seguridad de cuentas de metal.\nTinta negra.", colores: ["#C0C0C0", "#000000"], marcaje: ["Impresión UV"] },
    { id: 12, nombre: "LÁPIZ DE GRAFITO INFINITO", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Lápiz de grafito infinito que no requiere sacapuntas.\nCuerpo de bambú. De larga duración.\nIncluye borrador interno y tapa plástica.\nPunta en aleación de metal y grafito.", marcaje: ["Láser", "Impresión UV"] },
    { id: 13, nombre: "BOLÍGRAFO DE ALUMINIO Y BAMBÚ", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo de aluminio con detalles en bambú.\nSistema de escritura y giro azul.\nDimensiones: Ø12 X 140 MM.", colores: ["#000000", "#C0C0C0", "#0000FF"], marcaje: ["Láser", "Impresión UV"] },
    { id: 14, nombre: "BOLÍGRAFO DE ALUMINIO Y CORCHO", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo, botón y clip de aluminio.\nEmpuñadura de corcho en parte inferior.\nTinta de color azul.\nDimensiones: Ø9 X 142 MM.", colores: ["#000000", "#FFFFFF", "#0000FF"], marcaje: ["Láser", "Impresión UV"] },
    { id: 15, nombre: "BOLÍGRAFO CORCHO BIODEGRADABLE", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo de corcho.\nTinta azul.\nMedidas: 14 X 1,1 CM.", eco: true, colores: ["#000000", "#C0C0C0"], marcaje: ["Láser", "Impresión UV"] },
    { id: 16, nombre: "BOLÍGRAFO ECO BIODEGRADABLE MODELO 2", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo de cartón reciclado.\nBotón y clip de plástico reciclable.\nMaterial biodegradable.\nTinta azul.\nDimensiones: 14 X 1.1 CM.", eco: true, colores: ["#FF0000", "#0000FF", "#000000"], marcaje: ["Láser", "Impresión UV"] },
    { id: 17, nombre: "BOLÍGRAFO DE ALUMINIO CON BOTÓN DE BAMBÚ", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo de aluminio con acabado en goma de color.\nBotón pulsador superior en bambú.\nTinta azul.", colores: ["#C0C0C0", "#000000", "#0000FF", "#FF0000"], marcaje: ["Láser", "Impresión UV"] },
    { id: 18, nombre: "BOLÍGRAFO DE ALUMINIO CON EMPUÑADURA DE BAMBÚ Y TOUCH", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo de aluminio con puntero táctil negro.\nEmpuñadura de bambú.\nDimensiones: Ø9.5 X 144 MM.", colores: ["#000000", "#0000FF", "#FF0000", "#C0C0C0"], marcaje: ["Láser", "Impresión UV"] },
    { id: 19, nombre: "BOLÍGRAFO DE ALUMINIO CON EMPUÑADURA Y BOTÓN DE BAMBÚ", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo de aluminio con acabado en goma de color.\nEmpuñadura y botón de bambú.\nDimensiones: Ø10.3 X 142 MM.", colores: ["#000000", "#008000", "#FF0000", "#0000FF"], marcaje: ["Láser", "Impresión UV"] },
    { id: 20, nombre: "BOLÍGRAFO DE METAL TIPO TWIST", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo negro con partes cromadas.\nBolígrafo y roller de metal.\nIncluye estuche para guardar el bolígrafo.", marcaje: ["Láser", "Impresión UV"] },
    { id: 21, nombre: "BOLÍGRAFO DE METAL CON BAMBÚ", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Metal en parte superior y parte inferior bambú.\nCon envase en forma de un tubo en bambú.\nDimensiones: Ø25 X 164 MM.", marcaje: ["Láser"] },
    { id: 22, nombre: "BOLÍGRAFO DE ALUMINIO Y EMPUÑADURA DE BAMBÚ", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo y botón de aluminio.\nEmpuñadura de bambú.\nDimensiones: Ø9.5 X 143 MM.", colores: ["#000000", "#0000FF", "#FF0000", "#C0C0C0"], marcaje: ["Láser", "Impresión UV"] },
    { id: 23, nombre: "BOLÍGRAFO METÁLICO CON TAPA + CAJA", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Cuerpo y clip de metal cromado.\nCaja de papel duro.\nRecambio de tinta azul de 1,0 mm.\nMedidas en caja: 5.5 X 17.9 CM.", colores: ["#000000", "#0000FF"], marcaje: ["Láser"] },
    { id: 24, nombre: "BOLÍGRAFO GIRATORIO DE PLÁSTICO", categoria: "Bolígrafos", imagen: imagenGenerica, descripcion: "Tinta color: Azul.\nMedidas: 136X9 MM.", colores: ["#000000", "#FFFFFF", "#FFC0CB", "#87CEEB"], marcaje: ["Impresión UV"] },

    // ==========================================
    // --- CUADERNOS, LIBRETAS Y MÁS (14) ---
    // ==========================================
    { id: 25, nombre: "CUADERNO DE CORCHO CON CIERRE DE PU", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "A5 Cuaderno de corcho de tapa dura.\nCierre magnético de PU.\n80 hojas de papel interior blanco con líneas.\nCon cinta marcapáginas.", marcaje: ["Impresión DTF Textil", "Impresión UV"] },
    { id: 26, nombre: "CUADERNO COΝ ΤΑΡΑ DE CORCHO EMPALMADO RPET", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Cuaderno A5 de corcho con empalmes de RPET.\nTapa dura, 80 hojas de 70 g/m².\nCon banda elástica y marcador de página.\nSostenedor de bolígrafo.", colores: ["#808080"], marcaje: ["Impresión DTF Textil"] },
    { id: 27, nombre: "NOTA ADHESIVA DE TAPA DURA DE PAPEL ARTESANAL", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Juego de notas adhesivas de tapa dura artesanal.\nIncluye bolígrafo eco, 25 hojas adhesivas y 50 hojas rayadas.\nMedidas: 11.5 CM X 16.7 CM.", eco: true, colores: ["#FF0000", "#0000FF", "#000000"], marcaje: ["Impresión UV"] },
    { id: 28, nombre: "CUADERNO CON CUBIERTAS SUAVES SINTÉTICA AL TACTO EN PIEL", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Funda para bolígrafo incorporada en la tapa trasera.\n80 hojas en blanco.\nSoporte elástico y marcapáginas de tela a juego.", colores: ["#0000FF", "#FF0000", "#000000"], marcaje: ["Impresión UV"] },
    { id: 29, nombre: "CUADERNO A5 DE PU RECICLADO CON ΤΑΡΑ DURA", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Tapa dura de PU reciclado, 80 hojas de 70 g/m².\nCon banda elástica y lámina de oro de impresión.\nMedidas: 14.5 CM X 21 CM.", eco: true, colores: ["#000000"], marcaje: ["Impresión UV"] },
    { id: 30, nombre: "CUADERNO KRAFT + BOLIGRAFO", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Fabricado con material ecológico reciclado.\n70 hojas de papel rayado.\nEncuadernación en espiral negra y bolígrafo a juego.", eco: true, colores: ["#FF0000", "#0000FF", "#000000"], marcaje: ["Impresión DTF Textil", "Impresión UV"] },
    { id: 31, nombre: "BLOC CUADRADO DE NOTAS ADHESIVAS + BOLÍGRAFO", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Cartón gris con regla de PP.\nIncluye notas adhesivas tipo flecha de colores y taco cuadrado.\nCon bolígrafo.", marcaje: ["Impresión DTF Textil", "Impresión UV"] },
    { id: 32, nombre: "LIBRETA DE CORCHO CON CIERRE MAGNÉTICO TRIANGULAR", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Libreta de PU con tapa dura A5.\nEmpalmes de corcho natural.\nCierre magnético de corcho, 80 hojas.", colores: ["#000000"], marcaje: ["Impresión DTF Textil", "Impresión UV"] },
    { id: 33, nombre: "CUADERNO PASTA DURA ENVASE TETRA PACK A5", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Tapas duras de papel de leche y corcho.\nCubierta interior de papel kraft con regla impresa.\n80 hojas forradas. Banda elástica negra.", eco: true, marcaje: ["Impresión DTF Textil", "Impresión UV"] },
    { id: 34, nombre: "PLANEADOR SEMANAL ECOLÓGICO", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Planeador tapa dura con 100 hojas aprox.\nIncluye clips surtidos, bolígrafo y 6 stickers plásticos.\nMedidas: 24.6 CM X 19.8 CM.", eco: true, marcaje: ["Impresión UV"] },
    { id: 35, nombre: "BLOC DE NOTAS ADHESIVAS CUADRADO DE TAPA DURA", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Tapa dura de papel artesanal.\n5 colores, 25 hojas adhesivas, 200 hojas de 70 g/m² en blanco.\nMedidas: 8 CM X 8.3 CM.", marcaje: ["Impresión UV"] },
    { id: 36, nombre: "CUADERNO + BOLÍGRAFO EN CAJA (TELA RPET)", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Bolígrafo envuelto en tela RPET y cuaderno de tapa blanda de tela RPET.\nEn caja de regalo de papel negro.", marcaje: ["Impresión UV"] },
    { id: 37, nombre: "CUADERNO KRAFT LIBRETA BANDA ELÁSTICA", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "Libreta de cartón reciclado con banda elástica.\n80 hojas en papel rayado.\nMedidas: 21 X 14 X 1.1 CM.", eco: true, colores: ["#FF0000", "#008000"], marcaje: ["Impresión DTF Textil", "Impresión UV"] },
    { id: 38, nombre: "KRAFT + LIBRETA BOLÍGRAFO (PEQUEÑA)", categoria: "Cuadernos", imagen: imagenGenerica, descripcion: "De material reciclado, 60 hojas rayadas.\nEncuadernación en espiral negra superior y presilla para bolígrafo.\nMedidas: 14 X 9 CM.", eco: true, colores: ["#FF0000", "#0000FF", "#000000"], marcaje: ["Impresión UV"] },

    // ==========================================
    // --- TECNOLOGÍA Y MÁS (21) ---
    // ==========================================
    { id: 39, nombre: "SOPORTE DE TELÉFONO DE CARGA INALÁMBRICA DE BAMBÚ", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Soporte cargador inalámbrico 15W.\nBase giratoria de 360 grados antideslizante.\nMaterial: Metal y Bambú FSC.", colores: ["#800080"], marcaje: ["Láser"] },
    { id: 40, nombre: "AURICULARES INALÁMBRICOS TIPO AIRPODS", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Estuche de carga + cable USB-C.\nTres pares de cubiertas de puntas de oídos.\nColor: Blanco.", colores: ["#FFFFFF"], marcaje: ["Impresión UV"] },
    { id: 41, nombre: "AURICULARES INALÁMBRICOS I12 TWS", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Audífonos Bluetooth 5.0 tipo AirPods i12.\nControl táctil. Auto Power-on.\nColores mate.", colores: ["#FFFFFF", "#000000", "#FFC0CB", "#87CEEB", "#90EE90"], marcaje: ["Impresión UV"] },
    { id: 42, nombre: "POWERBANK CORCHO Y TRIGO", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Capacidad: 10000 mAh.\nInterfaz: USB a Micro USB, Tipo-C.\nMaterial: Fibra de trigo y corcho.", eco: true, marcaje: ["Impresión UV"] },
    { id: 43, nombre: "SPEAKER BLUETOOTH BAMBOO LIGHTS", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Altavoz Bluetooth 5.0.\nCuerpo de plástico con bambú. 1X3W con luz multicolor.\nTiempo de reproducción 3H. Lector SD.", marcaje: ["Láser", "Impresión UV"] },
    { id: 44, nombre: "SPEAKER BLUETOOTH LIGHTS ECO (FIBRA DE TRIGO)", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Bluetooth 5.0 plástico con material ecológico de fibra de trigo.\nLuz multicolor, lector SD.\nBatería 350mAh.", eco: true, marcaje: ["Impresión UV"] },
    { id: 45, nombre: "SPEAKER BLUETOOTH BAMBOO RAINBOW", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Altavoz Bluetooth 5.0 (3W) con bambú.\nLuz LED intermitente de 4 colores iluminando el logo grabado.", colores: ["#FFFFFF", "#008000", "#0000FF", "#FF0000"], marcaje: ["Láser", "Impresión UV"] },
    { id: 46, nombre: "SPEAKER BLUETOOTH ZIP CORK", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Speaker Bluetooth metálico con corcho de 3W.\nEmpaque caja individual.\nIncluye cable USB/Micro USB.", colores: ["#000000", "#808080"], eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 47, nombre: "SPEAKER BLUETOOTH LIGHTS ECO (CORCHO)", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Plástico reciclado, fibra de trigo y corcho.\nLuz multicolor, funciona como manos libres.", eco: true, marcaje: ["Impresión UV"] },
    { id: 48, nombre: "CABLE RETRÁCTIL MULTIPUERTO", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Cable de carga 3 en 1 retráctil.\nSoporte para teléfono.\nCompatible con Type-C, Micro USB, iOS.", colores: ["#000000", "#FFFFFF", "#FF0000"], marcaje: ["Impresión UV"] },
    { id: 49, nombre: "CABLE DE CARGA RÁPIDA RETRÁCTIL", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "El soporte retrae el cable y libera ambas manos.\nInterfaz 5A para Android, Apple y Type-C.", colores: ["#000000"], marcaje: ["Impresión UV"] },
    { id: 50, nombre: "CABLE MULTIPUERTO RETRÁCTIL TIPO LLAVERO", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Cargador USB 3 en 1 múltiple universal.\nLongitud: 1.2 M.", marcaje: ["Resina"] },
    { id: 51, nombre: "SOPORTE PARA LAPTOP", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Soporte de altura ajustable.\nDisipación de calor, fondo hueco, plegable.", marcaje: ["Impresión UV"] },
    { id: 52, nombre: "SACACORCHO DE VINO MANUAL TIPO T", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Material: ABS + Gancho en espiral de aleación.", marcaje: ["Tampografía"] },
    { id: 53, nombre: "RECHARGEABLE ELECTRIC WINE OPENER DESCORCHADOR", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Abridor inalámbrico recargable.\nMaterial: Aluminio color gris oscuro.", colores: ["#A9A9A9"], marcaje: ["Láser"] },
    { id: 54, nombre: "3 EN 1 CARGADOR INALÁMBRICO PLEGABLE BLANCO", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Carga rápida (QC) simultánea para teléfono (10W), reloj y auriculares.\nLuz LED 2W.", colores: ["#FFFFFF"], marcaje: ["Impresión UV"] },
    { id: 55, nombre: "SMART BAND M8 INTELIGENTE", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Smartwatch Sport. Color negro.\n10GB de RAM y conectividad Bluetooth.\nPantalla LCD MIP.", colores: ["#000000"], marcaje: ["Láser"] },
    { id: 56, nombre: "MINI PLANCHA DE CALOR ROSADA", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Fuente de poder: 110V 180W / 220V 250W.", colores: ["#FFC0CB"], marcaje: ["Impresión UV"] },
    { id: 57, nombre: "MINI PLANCHA DE CALOR VERDE AGUA", categoria: "Tecnología", imagen: imagenGenerica, descripcion: "Fuente de poder: 110V 180W / 220V 250W.", colores: ["#20B2AA"], marcaje: ["Impresión UV"] },

    // ==========================================
    // --- TOMATODOS Y TERMOS (12) ---
    // ==========================================
    { id: 58, nombre: "TOMATODO DE ALUMINIO CON TAPA DE BAMBÚ", categoria: "Termos", imagen: imagenGenerica, descripcion: "Exterior: Aluminio lacado blanco mate de pared simple.\nTapa superior de bambú con asa de silicona.\nCapacidad: 650 ml.", colores: ["#FFFFFF"], marcaje: ["Láser", "Impresión UV"] },
    { id: 59, nombre: "TOMATODO DE VIDRIO CON BANDA DE SILICÓN", categoria: "Termos", imagen: imagenGenerica, descripcion: "Tapa de bambú con cordón de algodón.\nManga de silicón para guardar temperatura.\nCapacidad: 700ml.", colores: ["#FF0000", "#0000FF", "#000000"], marcaje: ["Serigrafía"] },
    { id: 60, nombre: "TERMO ACERO INOXIDABLE BASE CORCHO", categoria: "Termos", imagen: imagenGenerica, descripcion: "Termo doble pared al vacío con tapa rosca.\nBase protectora en corcho natural.\nCapacidad: 500 ml.", colores: ["#000000", "#FFFFFF"], marcaje: ["Láser", "Impresión UV", "Serigrafía"] },
    { id: 61, nombre: "TOMATODO CON BOQUILLA Y SUJETADOR COLOR SEMI TRANSPARENTE", categoria: "Termos", imagen: imagenGenerica, descripcion: "Boquilla y sujetador resistente anti-fuga.\nCapacidad: 700 ml.", colores: ["#0000FF", "#FF0000", "#008000", "#808080", "#40E0D0"], marcaje: ["Impresión UV", "Serigrafía"] },
    { id: 62, nombre: "TERMO ACERO INOXIDABLE BASE BAMBÚ", categoria: "Termos", imagen: imagenGenerica, descripcion: "Línea ecológica de acero reciclado.\nCuerpo negro con tapa de bambú.\nCapacidad: 500ml.", colores: ["#000000"], marcaje: ["Láser", "Serigrafía"] },
    { id: 63, nombre: "TOMATODO DE DOS LITROS", categoria: "Termos", imagen: imagenGenerica, descripcion: "Botella de agua de 70 onzas con popote y tapa abatible a prueba de fugas.", colores: ["#FF69B4", "#40E0D0", "#000000"], marcaje: ["Impresión UV", "Serigrafía"] },
    { id: 64, nombre: "TOMATODO DE PLÁSTICO CON ASA DE SILICÓN", categoria: "Termos", imagen: imagenGenerica, descripcion: "Botella deportiva de 580 ML.\nTapa de acero inoxidable, asa de transporte de TPR transparente.", colores: ["#FF0000", "#0000FF", "#808080"], marcaje: ["Impresión UV"] },

    // ==========================================
    // --- VASOS, JARROS Y MUGS (16) ---
    // ==========================================
    { id: 65, nombre: "TAZA DE CERÁMICA DE 450 ML CON BASE DE CORCHO", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Taza de café de cerámica con tapa plástica deslizante.\nFondo de corcho aislante.", colores: ["#000000", "#FFFFFF"], marcaje: ["Impresión UV"] },
    { id: 66, nombre: "TAZA DE CERÁMICA Y ASA DE BAMBÚ", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Exterior cerámica blanca mate.\nAsa robusta de bambú natural.\nCapacidad: 480ml.", colores: ["#FFFFFF", "#000000"], marcaje: ["Impresión UV"] },
    { id: 67, nombre: "VASO DE ACERO INOX AL VACÍO DOBLE PARED CON BASE CORCHO", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Taza de acero inoxidable doble pared (360ml).\nTapa deslizante transparente y fondo de corcho.", marcaje: ["Láser", "Impresión UV"] },
    { id: 68, nombre: "JARRO CON ASA Y TAPA 2 EN 1 Y POPOTE", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Tumbler de doble pared de acero inoxidable.\nCapacidad: 900 ml.", colores: ["#000000", "#FFFFFF"], marcaje: ["Láser", "Impresión UV", "Serigrafía"] },
    { id: 69, nombre: "VASO DOBLE PARED DE ACERO INOX (350ML)", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Acabado con revestimiento en polvo mate.\nInterior acero inox 304. Tapa plástica transparente.", colores: ["#000000", "#FFFFFF"], marcaje: ["Láser", "Impresión UV"] },
    { id: 70, nombre: "TUMBLER 600 ML DE ACERO RECICLADO DOBLE PARED", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Cuerpo de acero inoxidable.\nTapa de plástico transparente y base de corcho.", colores: ["#000000", "#FFFFFF", "#0000FF", "#008000", "#FF0000"], marcaje: ["Impresión UV", "Láser"] },
    { id: 71, nombre: "JARRO VACÍO TÉRMICO", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Doble pared (530ml).\nInterior 304 y exterior 201.\nTapa de plástico con accesorio de bambú.", marcaje: ["Láser", "Impresión UV"] },
    { id: 72, nombre: "MUG DOBLE PARED PLÁSTICO", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Vaso doble pared con sorbete de plástico.\nCapacidad: 480 ml.", colores: ["#FF0000", "#0000FF", "#008000"], marcaje: ["Impresión UV", "Serigrafía"] },
    { id: 73, nombre: "VASO DE TRIGO ECO BIODEGRADABLE", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Fibra de trigo.\nCon mango desmontable y removedor.\nCapacidad: 400ml.", eco: true, colores: ["#F5DEB3", "#98FB98", "#ADD8E6"], marcaje: ["Impresión UV", "Serigrafía"] },
    { id: 74, nombre: "JARRO TÉRMICO CAMPESTRE ORIGINAL", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Taza térmica de doble pared de acero inoxidable reciclado.\nDiseño enlozado vintage con tapa y asa de bambú.\nCapacidad: 300 ml.", colores: ["#FFFFFF", "#000000", "#008000"], marcaje: ["Láser", "Impresión UV"] },
    { id: 75, nombre: "VASO TÉRMICO DE ACERO INOX DOBLE PARED (355ML)", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Con aislamiento térmico.\nMantiene la temperatura de la bebida.\nCapacidad: 355 ml.", colores: ["#000000", "#FFFFFF", "#FFC0CB", "#87CEEB"], marcaje: ["Láser", "Impresión UV"] },
    { id: 76, nombre: "VASOS DE TRIGO ECO BIODEGRADABLE (CON TAPÓN)", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Cuerpo de plástico reciclado y fibra de trigo.\nTapa con pestaña giratoria y banda de silicón.", eco: true, colores: ["#F5DEB3", "#FFB6C1", "#87CEFA"], marcaje: ["Serigrafía"] },
    { id: 77, nombre: "VASO DE VIDRIO CON BANDA DE SILICÓN", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Vaso con tapa de bambú y sorbete de vidrio.\nManga de silicón. Medidas: 18,5 x 6,2 cm.", colores: ["#000000", "#FFA500", "#008000"], marcaje: ["Serigrafía"] },
    { id: 78, nombre: "TUMBLER 40 ONZ CON BASE DE SILICÓN", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Sellado al vacío con popote.\nBase de silicón.", colores: ["#000000", "#FFFFFF"], marcaje: ["Láser", "Impresión UV"] },
    { id: 79, nombre: "TUMBLER 40 ONZ SIN BASE", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Doble pared sellada al vacío con popote.", colores: ["#FFFFFF", "#000000", "#FFB6C1", "#E6E6FA", "#98FB98"], marcaje: ["Láser", "Impresión UV"] },
    { id: 80, nombre: "VASO VIDRIO PARA BEBIDAS DUBAI", categoria: "Vasos y Mugs", imagen: imagenGenerica, descripcion: "Estilo lata/soda. Capacidad: 15 oz / 453 cc.", marcaje: ["Serigrafía", "Impresión UV"] },

    // ==========================================
    // --- MOCHILAS, BOLSOS Y MÁS (20) ---
    // ==========================================
    { id: 81, nombre: "BOLSA REFLECTIVA / TIPO SHOPPING BAG", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Bolsa en cambrel cosida con bordes reflectivos.\nManijas de 28 cm.", colores: ["#0000FF", "#FFA500", "#008000", "#FF0000"], marcaje: ["Impresión DTF Textil"] },
    { id: 82, nombre: "BOLSA EN CAMBREL GRANDE", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Sencilla en cambrel sellada.\nMedidas: 37.5 x 40 cm.", colores: ["#FFFFFF", "#000000", "#FF0000", "#0000FF"], marcaje: ["Impresión DTF Textil"] },
    { id: 83, nombre: "BOLSA EN CAMBREL PEQUEÑA", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Sellada, con fuelle en la base de 5.5 cm.", colores: ["#FFFFFF", "#000000", "#FF0000", "#0000FF"], marcaje: ["Impresión DTF Textil"] },
    { id: 84, nombre: "BOLSA EN CAMBREL BAXTER", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Con troquel de asa riñón.\nSin fuelle.", colores: ["#FFFFFF", "#000000", "#008000"], marcaje: ["Impresión DTF Textil"] },
    { id: 85, nombre: "BOLSO DE FIELTRO", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Asas cortas de cuero marrón sujetas con costuras.", colores: ["#808080"], marcaje: ["Impresión DTF Textil"] },
    { id: 86, nombre: "BOLSA COMESTIQUERA ROJA EN PU", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Cierre y detalle decorativo tipo broche.", colores: ["#FF0000"], marcaje: ["Impresión DTF Textil"] },
    { id: 87, nombre: "BOLSA NEGRA COMESTIQUERA EN PU", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Cierre y detalle decorativo tipo broche.", colores: ["#000000"], marcaje: ["Impresión DTF Textil"] },
    { id: 88, nombre: "BOLSA PARA VIAJE / GIMNASIO BEIGE", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Material: Algodón. 38x22,6 cm.", colores: ["#F5F5DC"], marcaje: ["Impresión DTF Textil"] },
    { id: 89, nombre: "BOLSAS EN TELA (ALGODÓN, YUTE, LINO)", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Bolsas ecológicas textiles.", eco: true, marcaje: ["Impresión DTF Textil", "Serigrafía"] },
    { id: 90, nombre: "PORTA LAPTOP, CON VARIEDAD DE BOLSILLOS", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Para laptops 15.6\". Salida audífonos y USB.", colores: ["#000000", "#808080"], marcaje: ["Impresión DTF Textil"] },
    { id: 91, nombre: "MOCHILA NEGRA PARA PORTÁTILES", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Correas de hombro ajustables, puerto USB externo.", colores: ["#000000"], marcaje: ["Impresión DTF Textil"] },
    { id: 92, nombre: "BOLSA TÉRMICA ALMUERZO (4L) GRIS", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Tela Oxford catiónica 300D, aluminio.\n1 bolsillo principal y 1 malla.", colores: ["#808080"], marcaje: ["Impresión DTF Textil"] },
    { id: 93, nombre: "BOLSA TÉRMICA ALMUERZO (4L) NEGRA", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Tela Oxford catiónica 300D, aluminio.", colores: ["#000000"], marcaje: ["Impresión DTF Textil"] },
    { id: 94, nombre: "BOLSA TÉRMICA ALMUERZO (8L) GRIS", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Correa de hombro desmontable, etiqueta de cuero repujado.", colores: ["#808080"], marcaje: ["Impresión DTF Textil"] },
    { id: 95, nombre: "BOLSA TÉRMICA ALMUERZO (8L) NEGRA", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Correa de hombro desmontable, etiqueta de cuero.", colores: ["#000000"], marcaje: ["Impresión DTF Textil"] },
    { id: 96, nombre: "SPORT BAG ROJA CON CORDÓN SENCILLO", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Poliéster + Cuero. 43x34cm.", colores: ["#FF0000"], marcaje: ["Impresión DTF Textil"] },
    { id: 97, nombre: "SPORT BAG NEGRA CON CORDÓN Y BOLSILLO", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Malla exterior, bolsillo exterior con cremallera.", colores: ["#000000"], marcaje: ["Impresión DTF Textil"] },
    { id: 98, nombre: "SPORT BAG AZUL MARINO CON CORDÓN NEGRO", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Poliéster 420D.", colores: ["#000080"], marcaje: ["Impresión DTF Textil"] },
    { id: 99, nombre: "SPORT BAG AZUL CON CORDÓN Y BOLSILLO", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Malla exterior y cremallera.", colores: ["#0000FF"], marcaje: ["Impresión DTF Textil"] },
    { id: 100, nombre: "SPORT BAG BLANCA SENCILLA / CON BOLSILLO", categoria: "Bolsos", imagen: imagenGenerica, descripcion: "Poliéster 210D o 420D. Cordones negros.", colores: ["#FFFFFF"], marcaje: ["Impresión DTF Textil", "Sublimación"] },

    // ==========================================
    // --- ECOLÓGICOS (14) ---
    // ==========================================
    { id: 101, nombre: "SET DE TABLA PARA QUESO CON UTENSILIOS", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Tabla de bambú con bandeja giratoria oculta.\n4 utensilios.", eco: true, marcaje: ["Láser"] },
    { id: 102, nombre: "CEPILLO PARA EL CABELLO HECHO DE BAMBÚ", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Base de cojín neumático, cerdas de bambú.", eco: true, marcaje: ["Láser", "Tampografía"] },
    { id: 103, nombre: "ESPEJO DE BAMBÚ", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Carcasa de bambú, doble cara, cierre magnético.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 104, nombre: "GAFAS DE BAMBÚ Y PC RECICLADO", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Montura de PC reciclado, patillas 100% bambú.", eco: true, colores: ["#808000", "#90EE90", "#FF0000", "#F5DEB3"], marcaje: ["Láser", "Impresión UV"] },
    { id: 105, nombre: "ORGANIZADOR DE BOLÍGRAFOS EN CUERINA Y BAMBÚ", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Cubo negro en cuerina, base de bamboo. Soporte de celular.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 106, nombre: "ORGANIZADOR DE BOLÍGRAFOS EN BAMBÚ ORIGINAL", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Marco de acero inoxidable, cuerpo cilíndrico de bambú.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 107, nombre: "TARJETERO DE BAMBÚ PARA ESCRITORIO", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Base de bambú con soporte de alambre de acero.", eco: true, marcaje: ["Impresión UV"] },
    { id: 108, nombre: "DESTAPADOR DE BOTELLA + FLEXÓMETRO", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Resistente bambú con flexómetro de 1 metro integrado.", eco: true, marcaje: ["Láser"] },
    { id: 109, nombre: "CALCULADORA DE BAMBÚ", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Muestra hasta 9 dígitos. Laberinto de bolas trasero.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 110, nombre: "SET VASOS WHISKEROS", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Soporte de bambú, 2 vasos, cubitos de hielo, pinzas.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 111, nombre: "SET BARAJA DE POKER CON DADOS", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Estuche de madera deslizable, cartas y 5 dados.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 112, nombre: "LIMA PARA UÑAS EN BAMBÚ", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Cuerpo de madera/bambú con lija.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 113, nombre: "RELOJ DE ESCRITORIO DE BAMBÚ", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Cubo minimalista digital (Hora, Fecha, Temperatura).", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 114, nombre: "ORGANIZADOR DE BAMBÚ CON PIZARRA", categoria: "Ecológicos", imagen: imagenGenerica, descripcion: "Pizarra para notas integrada y rotulador borrable.", eco: true, marcaje: ["Láser", "Impresión UV"] },

    // ==========================================
    // --- LLAVEROS Y MÁS (14) ---
    // ==========================================
    { id: 115, nombre: "ORGANIZADOR DE ESCRITORIO OFICINA ARKALLY", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Bambú con compartimentos para clips y celular.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 116, nombre: "LLAVERO RECTANGULAR DE BAMBÚ", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Detalles metálicos.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 117, nombre: "LLAVERO RECTANGULAR DE BAMBÚ + NOTAS ADHESIVAS", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Cubierta de bambú, argolla de metal, 80 hojas adhesivas kraft.", eco: true, marcaje: ["Láser", "Impresión UV"] },
    { id: 118, nombre: "LLAVERO DE RECICLADO ALUMINIO ABREBOTELLAS", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Diseño minimalista tipo llave / destapador.", eco: true, colores: ["#FF0000", "#0000FF", "#000000"], marcaje: ["Láser"] },
    { id: 119, nombre: "LLAVERO DE ALUMINIO CON SOPORTE TELÉFONO", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Cinturón tejido negro.", colores: ["#FF0000", "#000000", "#0000FF"], marcaje: ["Láser", "Impresión UV"] },
    { id: 120, nombre: "LLAVERO DE PU CARBONO BIOBASADO", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Metal cromado brillante y correa textura fibra de carbono.", eco: true, marcaje: ["Láser"] },
    { id: 121, nombre: "LLAVERO METAL RECTANGULAR", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Argolla y cuerpo de metal liso para resina.", marcaje: ["Resina"] },
    { id: 122, nombre: "LLAVERO NEGRO DE CUERO SINTÉTICO", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Correa de cuero negro, placa de aleación.", marcaje: ["Láser"] },
    { id: 123, nombre: "COLGADOR DE CARTERA METÁLICO", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Plegable, antideslizante.", marcaje: ["Resina"] },
    { id: 124, nombre: "LLAVERO REDONDO DOBLE CARA", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Metal cromado grueso.", marcaje: ["Resina"] },
    { id: 125, nombre: "LLAVERO METÁLICO RECTANGULAR DESTAPADOR", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Función oculta, caja negra incluida.", marcaje: ["Resina"] },
    { id: 126, nombre: "LLAVERO GIRATORIO DOBLE CARA", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "El centro gira 360 grados.", marcaje: ["Resina", "Tampografía"] },
    { id: 127, nombre: "LLAVERO DE METAL DESTAPADOR GRANDE", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Bartender destapador macizo.", marcaje: ["Resina"] },
    { id: 128, nombre: "LLAVERO PALITO DOBLE CARA NEGRO / PLATA", categoria: "Llaveros", imagen: imagenGenerica, descripcion: "Forma alargada.", marcaje: ["Resina"] },

    // ==========================================
    // --- VINOS, CRISTALERÍA Y MÁS (10) ---
    // ==========================================
    { id: 129, nombre: "VINO SABOR ARÁNDANO 750ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Tinto semidulce 12°GL. 12 Meses en barrica. Guayabamba." },
    { id: 130, nombre: "VINO SABOR MARACUYÁ 750ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Blanco semidulce 12°GL. Quinindé." },
    { id: 131, nombre: "VINO SABOR FRAMBRUESA 750ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Tinto semidulce 12°GL. Santa Rosa." },
    { id: 132, nombre: "VINO SABOR GROSELLA 750ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Blanco semidulce 12°GL. Manabí." },
    { id: 133, nombre: "VINO SABOR MORA 750ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Tinto semidulce 12°GL. Tulcán." },
    { id: 134, nombre: "VINO SABOR MORTIÑO 750ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Tinto semidulce 12°GL. Parque Nacional Cotopaxi." },
    { id: 135, nombre: "VINO SABOR FLOR DE JAMAICA 750ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Tinto semidulce 12°GL. Tulcán." },
    { id: 136, nombre: "VINOS MEDIANOS 375ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Formato 375ml. Sabores: Mortiño, Mora, Jamaica." },
    { id: 137, nombre: "VINOS PEQUEÑOS 187ML", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Formato Souvenir 187ml. Sabores frutales." },
    { id: 138, nombre: "COPA TRENTINO VINO", categoria: "Vinos", imagen: imagenGenerica, descripcion: "Capacidad: 12.5 onzas / 371 cm³.", marcaje: ["Impresión UV", "Láser"] },

    // ==========================================
    // --- GENERAL Y VARIOS (28) ---
    // ==========================================
    { id: 139, nombre: "PARAGUAS RPET MANGO DE BAMBÚ", categoria: "General", imagen: imagenGenerica, descripcion: "Apertura manual, fibra de vidrio.", eco: true, marcaje: ["Impresión DTF Textil", "Serigrafía"] },
    { id: 140, nombre: "PARAGUAS REVERSIBLE", categoria: "General", imagen: imagenGenerica, descripcion: "Cierre inverso. Mango en C.", colores: ["#000000", "#0000FF", "#FF0000"], marcaje: ["Impresión DTF Textil"] },
    { id: 141, nombre: "COOLER / HIELERA PORTÁTIL 13L", categoria: "General", imagen: imagenGenerica, descripcion: "Con Altavoz Bluetooth integrado.", marcaje: ["Impresión UV"] },
    { id: 142, nombre: "CUBRE PARABRISAS ABIERTO", categoria: "General", imagen: imagenGenerica, descripcion: "Reflectante plateado con herraje metálico.", marcaje: ["Serigrafía", "Impresión DTF Textil"] },
    { id: 143, nombre: "PORTA TARJETA PARA CELULAR CON SOPORTE", categoria: "General", imagen: imagenGenerica, descripcion: "Banda metálica efecto snap.", colores: ["#000000", "#FF0000", "#0000FF"], marcaje: ["Serigrafía"] },
    { id: 144, nombre: "PORTA TARJETA PARA CELULAR EN LYCRA", categoria: "General", imagen: imagenGenerica, descripcion: "Elástica. Guarda hasta 4 tarjetas.", colores: ["#000000", "#808080"], marcaje: ["Sublimación"] },
    { id: 145, nombre: "PORTA TARJETA PARA CELULAR DE SILICÓN", categoria: "General", imagen: imagenGenerica, descripcion: "Placa metálica interna para imanes.", colores: ["#000000", "#FF0000", "#0000FF"], marcaje: ["Serigrafía"] },
    { id: 146, nombre: "POPSOCKET PARA CELULAR", categoria: "General", imagen: imagenGenerica, descripcion: "Expandible.", colores: ["#FFFFFF", "#000000"], marcaje: ["Impresión UV", "Resina"] },
    { id: 147, nombre: "KIT LIMPIADOR DE PANTALLA Y TECLADO", categoria: "General", imagen: imagenGenerica, descripcion: "Spray y cepillo de vellón de fibra.", colores: ["#000000", "#808080"], marcaje: ["Impresión UV"] },
    { id: 148, nombre: "MONEDERO DE SILICÓN TIPO CARTERA", categoria: "General", imagen: imagenGenerica, descripcion: "Cierre a presión.", colores: ["#FF0000", "#0000FF", "#000000"], marcaje: ["Serigrafía"] },
    { id: 149, nombre: "MONEDERO DE SILICÓN REDONDO", categoria: "General", imagen: imagenGenerica, descripcion: "Cremallera a la mitad.", colores: ["#FFC0CB", "#87CEEB", "#98FB98"], marcaje: ["Serigrafía"] },
    { id: 150, nombre: "PELOTA ANTI ESTRÉS TRICOLOR", categoria: "General", imagen: imagenGenerica, descripcion: "Espuma PU.", colores: ["#FFFF00", "#0000FF", "#FF0000"], marcaje: ["Tampografía"] },
    { id: 151, nombre: "ALFOMBRILLA DE ESCRITORIO (DESKTOP PAD)", categoria: "General", imagen: imagenGenerica, descripcion: "80x40cm doble cara.", colores: ["#000000", "#8B4513"], marcaje: ["Láser", "Impresión DTF Textil"] },
    { id: 152, nombre: "APLAUDIDORES X2", categoria: "General", imagen: imagenGenerica, descripcion: "LDPE metalizado con válvula.", colores: ["#FFFFFF", "#FF0000", "#0000FF", "#FFFF00"], marcaje: ["Serigrafía"] },
    { id: 153, nombre: "FUNDA PROTECTORA PARA CELULAR SUMERGIBLE", categoria: "General", imagen: imagenGenerica, descripcion: "PVC transparente con sellado hermético.", colores: ["#0000FF", "#FF0000", "#000000", "#FFFFFF"], marcaje: ["Serigrafía", "Impresión UV"] },
    { id: 154, nombre: "PINES DE SOLAPA PERSONALIZADOS", categoria: "General", imagen: imagenGenerica, descripcion: "Metal, esmalte y acrílico.", marcaje: ["Resina", "Impresión UV"] },
    { id: 155, nombre: "LINTERNA DE ALUMINIO LUZ LED", categoria: "General", imagen: imagenGenerica, descripcion: "Argolla de metal, requiere pilas AA.", colores: ["#000000", "#C0C0C0"], marcaje: ["Láser"] },
    { id: 156, nombre: "MINI ESPEJO DOBLE CARA PLEGABLE", categoria: "General", imagen: imagenGenerica, descripcion: "Aumento regular, botón pulsador.", colores: ["#FFFFFF", "#000000", "#FFC0CB"], marcaje: ["Impresión UV", "Resina"] },
    { id: 157, nombre: "PORTA CREDENCIAL VERTICAL RÍGIDO", categoria: "General", imagen: imagenGenerica, descripcion: "Para yoyo o lanyard.", colores: ["#0000FF", "#000000", "#FFFFFF", "#FF0000"], marcaje: ["Tampografía"] },
    { id: 158, nombre: "PORTA CREDENCIAL DESLIZANTE RÍGIDO", categoria: "General", imagen: imagenGenerica, descripcion: "Reverso deslizable.", colores: ["#000000", "#FFFFFF", "#808080"], marcaje: ["Impresión UV"] },
    { id: 159, nombre: "YOYO PORTA CREDENCIAL PLÁSTICO", categoria: "General", imagen: imagenGenerica, descripcion: "Cordón de nylon, clip posterior.", colores: ["#FFFFFF", "#000000", "#0000FF", "#FF0000"], marcaje: ["Resina", "Tampografía"] },
    { id: 160, nombre: "IMANES PUBLICITARIOS TIPO LÁMINA", categoria: "General", imagen: imagenGenerica, descripcion: "Couché full color imantado.", marcaje: ["Impresión UV"] },
    { id: 161, nombre: "BALÓN DE FÚTBOL N° 5", categoria: "General", imagen: imagenGenerica, descripcion: "Paneles hexagonales.", colores: ["#FFFFFF"], marcaje: ["Sublimación"] },
    { id: 162, nombre: "ALFOMBRILLA DE RATÓN / MOUSE CUERO Y SILICONA", categoria: "General", imagen: imagenGenerica, descripcion: "Antideslizante.", colores: ["#000000"], marcaje: ["Láser"] },
    { id: 163, nombre: "ALFOMBRILLA DE RATÓN PARA MUÑECA DE LYCRA", categoria: "General", imagen: imagenGenerica, descripcion: "Reposamuñecas en gel.", colores: ["#000000"], marcaje: ["Sublimación"] },
    { id: 164, nombre: "CINTA CON BROCHE DE PLÁSTICO", categoria: "General", imagen: imagenGenerica, descripcion: "Bandola metálica perico.", marcaje: ["Sublimación"] },
    { id: 165, nombre: "LLAVERO ACRÍLICO PERSONALIZADO CORTE LÁSER", categoria: "General", imagen: imagenGenerica, descripcion: "Corte a la forma (Die-cut).", marcaje: ["Impresión UV", "Resina"] },
    { id: 166, nombre: "LLAVERO DE BAMBÚ + NOTAS ADHESIVAS", categoria: "General", imagen: imagenGenerica, descripcion: "Blog de notas con argolla.", eco: true, marcaje: ["Láser", "Impresión UV"] }
];

let carrito = [];

function mostrarProductos(listaAMostrar) {
    const contenedor = document.getElementById("lista-productos");
    contenedor.innerHTML = ""; 

    if (listaAMostrar.length === 0) {
        contenedor.innerHTML = "<p>No hay productos en esta categoría.</p>";
        return;
    }

    listaAMostrar.forEach(producto => {
        const div = document.createElement("div");
        div.className = "producto";
        
        let etiquetaEco = producto.eco ? `<img src="assets/marcaje/icono-eco.png" class="badge-eco" alt="Ecológico" onerror="this.style.display='none'">` : '';

        div.innerHTML = `
            <div class="contenedor-imagen-producto">
                ${etiquetaEco}
                <img src="assets/productos/${producto.id}.png" class="img-producto" alt="${producto.nombre}" onerror="this.src='https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80'">
            </div>
            <div class="info-producto">
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.categoria}</p>
                </div>
                <div class="controles-agregar">
                    <button class="btn-detalles" onclick="verDetalles(${producto.id})">Ver Detalles</button>
                    <input type="number" id="cantidad-${producto.id}" class="input-cantidad" value="1" min="1">
                    <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">Añadir</button>
                </div>
            </div>
        `;
        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(idProducto) {
    const cantidadInput = document.getElementById(`cantidad-${idProducto}`);
    const cantidad = parseInt(cantidadInput.value);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        mostrarNotificacion("Por favor, ingresa una cantidad válida.");
        return;
    }

    const productoExistente = carrito.find(p => p.id === idProducto);
    const productoElegido = productos.find(p => p.id === idProducto);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ ...productoElegido, cantidad: cantidad });
    }
    cantidadInput.value = 1;
    actualizarCarrito();
    mostrarNotificacion(`¡Se añadieron ${cantidad}x ${productoElegido.nombre}!`);
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const contadorCarrito = document.getElementById("contador-carrito");
    
    listaCarrito.innerHTML = ""; 
    let cantidadTotalProductos = 0;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<li>Tu lista de cotización está vacía</li>";
        contadorCarrito.innerText = "0";
        return;
    }

    carrito.forEach((producto, indice) => {
        cantidadTotalProductos += producto.cantidad;
        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${producto.cantidad}x</strong> ${producto.nombre}</span>
            <button onclick="eliminarDelCarrito(${indice})" style="background:#dc3545; color:white; border:none; border-radius:5px; cursor:pointer; padding:5px 10px; margin-left:10px;">X</button>
        `;
        listaCarrito.appendChild(li);
    });
    contadorCarrito.innerText = cantidadTotalProductos; 
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function verDetalles(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    
    // --- LÓGICA DEL CARRUSEL AUTOMÁTICO ---
    const contenedorSlider = document.getElementById("contenedor-slider-detalles");
    contenedorSlider.innerHTML = ""; // Limpia las fotos del producto anterior

    if (window.sliderInterval) {
        clearInterval(window.sliderInterval); // Frena la animación anterior
    }

    let validImages = []; // Aquí guardaremos las fotos que sí existen

    // Buscador automático en cascada (.png, .1.png, .2.png...)
    function cargarImagen(indice) {
        let img = new Image();
        let sufijo = indice === 0 ? "" : `.${indice}`;
        let urlImagen = `assets/productos/${producto.id}${sufijo}.png`;

        img.onload = function() {
            // ¡La foto existe! La metemos al slider
            let imgElement = document.createElement("img");
            imgElement.src = urlImagen;
            imgElement.className = "img-detalles-slide" + (validImages.length === 0 ? " active" : "");
            contenedorSlider.appendChild(imgElement);
            validImages.push(imgElement);

            // Límite de seguridad: máximo 10 sub-fotos por producto
            if (indice < 10) {
                cargarImagen(indice + 1);
            } else {
                iniciarCarrusel();
            }
        };

        img.onerror = function() {
            if (indice === 0) {
                // Si falla la principal, usamos la imagen de prueba genérica
                let imgElement = document.createElement("img");
                imgElement.src = 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80';
                imgElement.className = "img-detalles-slide active";
                contenedorSlider.appendChild(imgElement);
            } else {
                // Si la que falló fue una sub-foto, se acabaron las imágenes. Arrancamos.
                iniciarCarrusel();
            }
        };

        img.src = urlImagen; 
    }

    function iniciarCarrusel() {
        if (validImages.length > 1) { 
            let slideActual = 0;
            window.sliderInterval = setInterval(() => {
                validImages[slideActual].classList.remove("active");
                slideActual = (slideActual + 1) % validImages.length;
                validImages[slideActual].classList.add("active");
            }, 3000); // Cambia de foto cada 3 segundos
        }
    }

    cargarImagen(0); 
    // ----------------------------------------

    // Cargar información de texto
    document.getElementById("titulo-detalles").innerText = producto.nombre;
    document.getElementById("categoria-detalles").innerText = producto.categoria;
    document.getElementById("descripcion-detalles").innerText = producto.descripcion;
    
    // Cargar colores
    const contenedorColores = document.getElementById("contenedor-colores");
    let htmlColores = '';
    if (producto.colores && producto.colores.length > 0) {
        htmlColores = '<div class="colores-etiqueta"><strong>🎨 Colores disponibles:</strong> <span class="caja-colores">';
        producto.colores.forEach(codigoColor => {
            htmlColores += `<span class="circulo-color" style="background-color: ${codigoColor};" title="Color disponible"></span>`;
        });
        htmlColores += '</span></div>';
    }
    contenedorColores.innerHTML = htmlColores;

    // Cargar iconos de marcaje
    const contenedorMarcaje = document.getElementById("contenedor-marcaje");
    let htmlMarcaje = '';
    if (producto.marcaje && producto.marcaje.length > 0) {
        htmlMarcaje = '<div class="marcaje-etiqueta"><strong>🖨️ Tipo de Marcaje:</strong> <span class="caja-marcajes">';
        producto.marcaje.forEach(tipo => {
            let nombreFormateado = tipo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-').replace(/\(/g, '').replace(/\)/g, '');
            if(nombreFormateado.includes('laser')) nombreFormateado = 'laser';
            if(nombreFormateado.includes('resina')) nombreFormateado = 'resina';
            
            let nombreImagen = `assets/marcaje/icono-${nombreFormateado}.png`;
            
            htmlMarcaje += `
                <span class="badge-marcaje">
                    <img src="${nombreImagen}" class="icono-marcaje" alt="${tipo}" onerror="this.style.display='none'">
                    ${tipo}
                </span>`;
        });
        htmlMarcaje += '</span></div>';
    }
    contenedorMarcaje.innerHTML = htmlMarcaje;

    document.getElementById("ventana-detalles").className = "modal-visible";
}

// Apagar el carrusel cuando se cierra la ventana
function cerrarModal() {
    document.getElementById("ventana-detalles").className = "modal-oculto";
    if (window.sliderInterval) {
        clearInterval(window.sliderInterval);
    }
}

document.getElementById("btn-cerrar-detalles").addEventListener("click", cerrarModal);
document.getElementById("ventana-detalles").addEventListener("click", (evento) => {
    if (evento.target === document.getElementById("ventana-detalles")) { 
        cerrarModal();
    }
});

// Enviar a WhatsApp
document.getElementById("btn-whatsapp").addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("La lista está vacía. ¡Agrega productos primero!");
        return;
    }
    let mensaje = "¡Hola! Quisiera solicitar una cotización al por mayor de los siguientes productos:%0A%0A";
    carrito.forEach(p => {
        mensaje += `- ${p.cantidad} unidades de: ${p.nombre}%0A`;
    });
    const numeroMama = "593994725750"; // Reemplaza esto por tu número real
    const url = `https://wa.me/${numeroMama}?text=${mensaje}`;
    window.open(url, "_blank"); 
});

const ventanaCarrito = document.getElementById("ventana-carrito");
document.getElementById("btn-abrir-carrito").addEventListener("click", () => { ventanaCarrito.className = "modal-visible"; });
document.getElementById("btn-cerrar-carrito").addEventListener("click", () => { ventanaCarrito.className = "modal-oculto"; });
ventanaCarrito.addEventListener("click", (evento) => {
    if (evento.target === ventanaCarrito) { ventanaCarrito.className = "modal-oculto"; }
});

function mostrarNotificacion(mensaje) {
    const contenedor = document.getElementById("contenedor-toast");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = mensaje;
    contenedor.appendChild(toast);
    setTimeout(() => { toast.classList.add("mostrar"); }, 10);
    setTimeout(() => {
        toast.classList.remove("mostrar");
        setTimeout(() => { toast.remove(); }, 500);
    }, 3000);
}

const botonesFiltro = document.querySelectorAll("#filtros button");
botonesFiltro.forEach(boton => {
    boton.addEventListener("click", (evento) => {
        const categoriaElegida = evento.target.innerText;
        if (categoriaElegida === "Todos") {
            mostrarProductos(productos);
        } else {
            const productosFiltrados = productos.filter(p => p.categoria === categoriaElegida);
            mostrarProductos(productosFiltrados);
        }
    });
});

mostrarProductos(productos);