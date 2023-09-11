



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
    {id:56, imagen: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/My%20Nintendo%20Store/EN-US/Nintendo%20Switch%20Software/metroid-prime-remastered-114551/114551-metroid-prime-remastered-1200x675", nombre:'METROID PRIME', precio: 46000, stock: 8, plataforma: 'N SWITCH'},
    {id:61, imagen: "https://m.media-amazon.com/images/I/81lwcYUU9TL._SL1500_.jpg", nombre:'POKEMON SHIELD', precio: 28000, stock: 2, plataforma: 'N SWITCH'},
    {id:55, imagen: "https://http2.mlstatic.com/D_NQ_NP_784903-MLU70103682369_062023-O.webp", nombre:'CHRONO CROSS', precio: 35000, stock: 5, plataforma: 'N SWITCH'},
    {id:63, imagen: "https://media.vandal.net/m/86453/resident-evil-8-village-20211229461390_1.jpg", nombre:'RESIDENT EVIL 8', precio: 35000, stock: 8, plataforma: 'PS5/PS4'},
    {id:58, imagen: "https://m.media-amazon.com/images/I/810jZfOCHrL._AC_UF894,1000_QL80_.jpg", nombre:'THE LEGENDS OF ZELDA: TEARS OF THE KINGDOM', precio: 51000, stock: 15, plataforma: 'N SWITCH'},
    {id:32, imagen: "https://www.cdmarket.com.ar/Image/0/600_750-936957%20Grand%20Theft%20Auto%20V%20Premium%20Edition1.jpg", nombre:'GRAND THEFT AUTO V', precio: 23500, stock: 11, plataforma: 'PS5/PS4'},

]

JSON.parse(localStorage.getItem("productosDestacados")) || localStorage.setItem("productosDestacados", JSON.stringify(productosDestacados));


const preventasDestacadas = [
    {id:70, imagen: "https://dixgamer.com/wp-content/uploads/2023/07/EA-SPORTS-FC%E2%84%A2-24-Standard-Edition-PS5.jpg", nombre:'EA FC 24', precio: 65000, stock: 15, plataforma: 'PS5'},
    {id:71, imagen: "https://acdn.mitiendanube.com/stores/455/350/products/tapas-web-ps5-cyber-punk-2077-phantom-liberty1-47cacf7988f96c891a16885909130457-480-0.jpg", nombre:'CYBERPUNK PHANTOM LIBERTY', precio: 60000, stock: 15, plataforma: 'PS5'},
    {id:72, imagen: "https://spacenetgameshop.net/image/cache/data/001%20PS5%20Cover/alone-in-the-dark-deluxe-edition-ps5-cena-546x840.jpg", nombre:'ALONE IN THE DARK', precio: 59000, stock: 15, plataforma: 'PS5'},
    {id:73, imagen: "https://spacegamer.com.ar/img/Public/1058-producto-1-9413.jpg", nombre:'MORTAL KOMBAT 1', precio: 70000, stock: 15, plataforma: 'PS5'},
    {id:74, imagen: "https://elevengamesar.com/img/Public/1131-producto-diseno-sin-titulo-22-2842.jpg", nombre:'ALAN WAKE II', precio: 65000, stock: 15, plataforma: 'PS5'},
    {id:75, imagen: "https://m.media-amazon.com/images/I/71dd4-RlmLL._AC_UF1000,1000_QL80_.jpg", nombre:'RIDE 5', precio: 60000, stock: 15, plataforma: 'PS5'},
    {id:76, imagen: "https://gorilagames.com/img/Public/1019-producto-spiderman-2-ps5-1962.jpg", nombre:'SPIDERMAN 2', precio: 70000, stock: 15, plataforma: 'PS5'},
    {id:77, imagen: "https://gorilagames.com/img/Public/1019-producto-assassins-creed-mirage-1-9685.jpg", nombre:'AC MIRAGE', precio: 65000, stock: 15, plataforma: 'PS5'},
    {id:78, imagen: "https://m.media-amazon.com/images/I/81gB0fpm74L.jpg", nombre:'CITIES SKYLINE II', precio: 50000, stock: 15, plataforma: 'PS5'},
    {id:79, imagen: "https://m.media-amazon.com/images/I/81bCXwcWG7L._AC_UF1000,1000_QL80_.jpg", nombre:'PAYDAY 3', precio: 59000, stock: 15, plataforma: 'PS5'},
    {id:80, imagen: "https://s.pacn.ws/1/p/14q/tekken-8-733031.6.jpg?v=rqgs82&quality=72&width=1024&crop=798,1022", nombre:'TEKKEN 8', precio: 65000, stock: 15, plataforma: 'PS5'},

]

JSON.parse(localStorage.getItem("preventasDestacadas")) || localStorage.setItem("preventasDestacadas", JSON.stringify(preventasDestacadas));



const consolasAccesorios = [
    {id:65, imagen: "https://http2.mlstatic.com/D_NQ_NP_649238-MLA47385331667_092021-O.webp", nombre:'PLAYSTATION 4 PRO', precio: 460000, stock: 4, plataforma: 'PS4'},
    {id:66, imagen: "https://nextgames.com.ar/img/Public/1040-producto-ps5-2-609.jpg", nombre:'PLAYSTATION 5 STANDARD', precio: 620000, stock: 5, plataforma: 'PS5'},
    {id:67, imagen: "https://ss423.liverpool.com.mx/xl/1139313921.jpg", nombre:'XBOX SERIES S', precio: 500000, stock: 3, plataforma: 'XBOX'},
    {id:68, imagen: "https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png", nombre:'XBOX SERIES X', precio: 600000, stock: 5, plataforma: 'XBOX'},
    {id:69, imagen: "https://nextgames.com.ar/img/Public/1040-producto-switch-blanca-1-3422.jpg", nombre:'NINTENDO SWITCH OLED', precio: 400000, stock: 3, plataforma: 'N SWITCH'}

]


