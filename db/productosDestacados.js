



const productosDestacados = [
    {id:65, imagen: "https://http2.mlstatic.com/D_NQ_NP_649238-MLA47385331667_092021-O.webp", nombre:'PLAYSTATION 4 PRO', precio: 460000, stock: 4, plataforma: 'PS4'},
    {id:66, imagen: "https://nextgames.com.ar/img/Public/1040-producto-ps5-2-609.jpg", nombre:'PLAYSTATION 5 STANDARD', precio: 620000, stock: 5, plataforma: 'PS5'},
    {id:67, imagen: "https://ss423.liverpool.com.mx/xl/1139313921.jpg", nombre:'XBOX SERIES S', precio: 500000, stock: 3, plataforma: 'XBOX'},
    {id:68, imagen: "https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png", nombre:'XBOX SERIES X', precio: 600000, stock: 5, plataforma: 'XBOX'},
    {id:69, imagen: "https://nextgames.com.ar/img/Public/1040-producto-switch-blanca-1-3422.jpg", nombre:'NINTENDO SWITCH OLED', precio: 400000, stock: 3, plataforma: 'N SWITCH'},
    {id:10, imagen: "https://http2.mlstatic.com/D_NQ_NP_866648-MLA54972688927_042023-O.webp", nombre:'HOGWARTS LEGACY', precio: 45000, stock: 12, plataforma: 'PS5/PS4'},
    {id:11, imagen: "https://media.vandal.net/m/120274/resident-evil-4-remake-202321717493566_1.jpg", nombre:'RESIDENT EVIL 4: REMAKE', precio: 42000, stock: 7, plataforma: 'PS5/PS4'},
    {id:13, imagen: "https://gorilagames.com/img/Public/1019-producto-diablo-iv-ps5-2083.jpg", nombre:'DIABLO IV', precio: 45000, stock: 15, plataforma: 'PS5/PS4'},
    {id:24, imagen: "https://www.megatone.net/Images/Articulos/zoom2x/235/JOY5015SNY.jpg", nombre:'DUALSENSE MIDNIGHT BLACK', precio: 60000, stock: 8, plataforma: 'PS5'},
    {id:4, imagen: "https://media.vandal.net/m/90451/god-of-war-ragnarok-20221131016774_1.jpg", nombre:'GOD OF WAR: RAGNAROK', precio: 42000, stock: 10, plataforma: 'PS5/PS4'},
    {id:2, imagen: "https://spacegamer.com.ar/img/Public/1058-producto-1019-producto-elden-ring-ps5-4936-2308.jpg", nombre:'ELDEN RING', precio: 35000, stock: 7, plataforma: 'PS5/PS4'},
    {id:30, imagen: "https://www.games2egypt.com/Images/Products/63995?fileFormat=1&height=500", nombre:'DUALSENSE GALACTIC PURPLE', precio: 60000, stock: 8, plataforma: 'PS5'},
    {id:115, imagen: "https://www.sdpnoticias.com/resizer/K6HVZ9bgU2Z7GNj4ajE0gMMFrDQ=/arc-photo-sdpnoticias/arc2-prod/public/CO5ACKGVQ5FMHP222XXYJ7G7LI.jpg", nombre:"PLAYSTATION 5 SPIDERMAN 2 LIMITED EDITION", precio: 1000000, stock: 3, plataforma: "PS5"},
    {id:100, imagen: "https://http2.mlstatic.com/D_NQ_NP_819158-MLA45389704118_032021-O.webp", nombre:"'Notebook Alienware'", precio: 1500000, stock: 1, plataforma: "Windows"},
    {id:101, imagen: "https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/3eab131d-b1a0-6cab-1350-e538fd9b2419/iphone14promax-637e89105ddd4.jpg", nombre:"IPHONE 14 PRO MAX", precio: 900000, stock: 3, plataforma: "IOS"}

]

JSON.parse(localStorage.getItem("productosDestacados")) || localStorage.setItem("productosDestacados", JSON.stringify(productosDestacados));

