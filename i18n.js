/* ═══════════════════════════════════════════════════════
   МИРЕЛИЯ — i18n engine (RU / EN / ES)
   Общий файл для index.html и catalog.html
═══════════════════════════════════════════════════════ */

const I18N_KEY = 'mirelia_lang';

/* ── Словарь статичных строк сайта ── */
const I18N = {
  brand_name:{ru:'МИРЕЛИЯ',en:'MIRELIA',es:'MIRELIA'},
  brand_name_title:{ru:'Мирелия',en:'Mirelia',es:'Mirelia'},

  nav_home:{ru:'Главная',en:'Home',es:'Inicio'},
  nav_catalog:{ru:'Каталог',en:'Catalog',es:'Catálogo'},
  nav_characters:{ru:'Персонажи',en:'Characters',es:'Personajes'},
  nav_reviews:{ru:'Отзывы',en:'Reviews',es:'Opiniones'},
  nav_about:{ru:'О бренде',en:'About the Brand',es:'Sobre la Marca'},
  nav_delivery:{ru:'Доставка',en:'Delivery',es:'Envíos'},
  nav_contacts:{ru:'Контакты',en:'Contacts',es:'Contacto'},
  nav_menu_aria:{ru:'Меню',en:'Menu',es:'Menú'},

  /* ── INDEX: hero ── */
  site_title_index:{ru:'МИРЕЛИЯ — Мир, где исполняются мечты',en:'MIRELIA — A World Where Dreams Come True',es:'MIRELIA — Un Mundo Donde se Cumplen los Sueños'},
  hero_welcome_hint:{ru:'Добро пожаловать',en:'Welcome',es:'Bienvenido'},
  hero_welcome_title:{ru:'в Мирелию',en:'to Mirelia',es:'a Mirelia'},
  hero_cta:{ru:'Войти в мир',en:'Enter the World',es:'Entrar al Mundo'},
  hero_scroll_hint:{ru:'Прокрути вниз',en:'Scroll down',es:'Desplázate hacia abajo'},
  hero_logo_src:{ru:'logo_text.png',en:'logo_text_en.png',es:'logo_text_es.png'},
  alt_forest_animals:{ru:'Зверьки в лесу Мирелии',en:'Little animals in the Mirelia forest',es:'Animalitos en el bosque de Mirelia'},
  alt_emblem:{ru:'Мирелия',en:'Mirelia',es:'Mirelia'},
  alt_logo_text:{ru:'МИРЕЛИЯ — Мир, где исполняются мечты',en:'MIRELIA — A World Where Dreams Come True',es:'MIRELIA — Un Mundo Donde se Cumplen los Sueños'},

  /* ── INDEX: персонажи ── */
  chars_intro_hint:{ru:'Жители Мирелии',en:'Inhabitants of Mirelia',es:'Habitantes de Mirelia'},
  chars_intro_title:{ru:'Познакомьтесь',en:'Meet Them',es:'Conócelos'},

  char0_name:{ru:'Тофу',en:'Tofu',es:'Tofu'},
  char0_story:{ru:'Самый добрый страж Мирелии. Его объятия теплее любого очага, а сердце хранит самые смелые мечты всего леса.',en:'The kindest guardian of Mirelia. His hugs are warmer than any hearth, and his heart holds the boldest dreams of the whole forest.',es:'El guardián más bondadoso de Mirelia. Sus abrazos son más cálidos que cualquier hogar, y su corazón guarda los sueños más audaces de todo el bosque.'},
  char0_badge:{ru:'Страж леса',en:'Guardian of the Forest',es:'Guardián del Bosque'},
  alt_char0:{ru:'Мишка',en:'Teddy bear',es:'Osito'},

  char1_name:{ru:'Бонни',en:'Bonnie',es:'Bonnie'},
  char1_story:{ru:'Хранительница звёздных секретов. Она слышит голоса хрустальных камней и говорит на языке ночных светил.',en:'Keeper of starry secrets. She hears the voices of crystal stones and speaks the language of the night stars.',es:'Guardiana de los secretos estelares. Escucha las voces de las piedras de cristal y habla el idioma de los astros nocturnos.'},
  char1_badge:{ru:'Хранительница тайн',en:'Keeper of Secrets',es:'Guardiana de Secretos'},
  alt_char1:{ru:'Зайка',en:'Bunny',es:'Conejita'},

  char2_name:{ru:'Юки',en:'Yuki',es:'Yuki'},
  char2_story:{ru:'Смелый и стремительный. Его синие глаза видят сквозь любой туман — он первым бросается навстречу приключениям.',en:"Bold and swift. His blue eyes see through any fog — he's always the first to dive into adventure.",es:'Valiente y veloz. Sus ojos azules ven a través de cualquier niebla: siempre es el primero en lanzarse a la aventura.'},
  char2_badge:{ru:'Первый герой',en:'The First Hero',es:'El Primer Héroe'},
  alt_char2:{ru:'Тигрёнок',en:'Tiger cub',es:'Tigrecito'},

  char3_name:{ru:'Куки',en:'Cookie',es:'Cookie'},
  char3_story:{ru:'Весёлый путешественник и лучший друг. Знает дорогу во все семь миров Мирелии и никогда не теряет карту.',en:'A cheerful traveler and the best of friends. He knows the way to all seven worlds of Mirelia and never loses the map.',es:'Un viajero alegre y el mejor de los amigos. Conoce el camino a los siete mundos de Mirelia y nunca pierde el mapa.'},
  char3_badge:{ru:'Путешественник',en:'The Traveler',es:'El Viajero'},
  alt_char3:{ru:'Корги',en:'Corgi',es:'Corgi'},

  char4_name:{ru:'Арчи',en:'Archie',es:'Archie'},
  char4_story:{ru:'Мастер загадок и волшебных зелий. Его рыжий хвост светится в ночи, как маяк для заблудившихся путников.',en:'A master of riddles and magic potions. His red tail glows in the night like a beacon for lost travelers.',es:'Maestro de acertijos y pociones mágicas. Su cola roja brilla en la noche como un faro para los viajeros perdidos.'},
  char4_badge:{ru:'Мастер зелий',en:'Master of Potions',es:'Maestro de Pociones'},
  alt_char4:{ru:'Арчи',en:'Archie',es:'Archie'},

  /* ── INDEX: каталог-превью ── */
  magical_catalog_title:{ru:'Волшебный каталог',en:'The Magical Catalog',es:'El Catálogo Mágico'},
  s3_sub:{ru:'Выбери то, что нравится тебе',en:'Choose what you love',es:'Elige lo que más te guste'},

  card_towels_name:{ru:'Полотенца',en:'Towels',es:'Toallas'},
  card_towels_count:{ru:'18 товаров',en:'18 products',es:'18 productos'},
  card_projector_name:{ru:'Волшебный проектор',en:'Magic Projector',es:'Proyector Mágico'},
  card_projector_count:{ru:'8 товаров',en:'8 products',es:'8 productos'},
  card_bedding_name:{ru:'Постельное',en:'Bedding',es:'Ropa de Cama'},
  card_bedding_count:{ru:'14 товаров',en:'14 products',es:'14 productos'},
  card_gifts_name:{ru:'Подарки',en:'Gifts',es:'Regalos'},
  card_gifts_count:{ru:'24 товара',en:'24 products',es:'24 productos'},
  card_magic_name:{ru:'Магический мир',en:'Magical World',es:'Mundo Mágico'},
  card_magic_count:{ru:'8 товаров',en:'8 products',es:'8 productos'},
  card_characters_name:{ru:'Персонажи',en:'Characters',es:'Personajes'},
  card_characters_count:{ru:'21 товар',en:'21 products',es:'21 productos'},
  catalog_btn:{ru:'Перейти в каталог',en:'Go to Catalog',es:'Ir al Catálogo'},

  /* ── INDEX: о проекте ── */
  about_eyebrow:{ru:'О проекте',en:'About the Project',es:'Sobre el Proyecto'},
  about_lead:{ru:'Волшебство — в деталях. Каждый предмет, созданный нами, несёт в себе искру детской мечты.',en:'Magic is in the details. Every item we create carries a spark of childhood dreams.',es:'La magia está en los detalles. Cada objeto que creamos lleva una chispa de los sueños de la infancia.'},

  acard0_label:{ru:'От экрана к реальности',en:'From Screen to Reality',es:'De la Pantalla a la Realidad'},
  acard0_text:{ru:'«Мирелия» — масштабная многосезонная анимационная вселенная. Мы создаем глубокие, красивые истории, а затем воплощаем их персонажей и атмосферу в реальной жизни. Наши игрушки, текстиль и товары для дома — физическое продолжение сказки, выполненное с особым вниманием к качеству и уюту.',en:'Mirelia is a sweeping, multi-season animated universe. We craft deep, beautiful stories, then bring their characters and atmosphere into real life. Our toys, textiles, and home goods are a physical continuation of the fairy tale, made with special care for quality and comfort.',es:'Mirelia es un vasto universo animado de varias temporadas. Creamos historias profundas y hermosas, y luego damos vida a sus personajes y atmósfera en el mundo real. Nuestros juguetes, textiles y artículos para el hogar son una continuación física del cuento, elaborados con especial atención a la calidad y el confort.'},
  acard1_label:{ru:'Семья брендов',en:'A Family of Brands',es:'Una Familia de Marcas'},
  acard1_text:{ru:'Наша творческая лаборатория постоянно расширяется. Братским проектом «Мирелии» выступает мультфильм «Аилин» — ещё одна уникальная история со своей душой и линейкой продуктов, которая эксклюзивно представлена на нашей платформе.',en:'Our creative studio keeps growing. A sister project to Mirelia is the animated series "Ailin" — another unique story with its own soul and product line, featured exclusively on our platform.',es:'Nuestro laboratorio creativo no deja de crecer. Un proyecto hermano de Mirelia es la serie animada «Ailin», otra historia única con alma propia y su propia línea de productos, presentada en exclusiva en nuestra plataforma.'},
  acard2_label:{ru:'Творческое пространство',en:'A Creative Space',es:'Un Espacio Creativo'},
  acard2_text:{ru:'Мы верим, что хороших сказок должно быть много. Поэтому наш сайт — интерактивная площадка и комьюнити. Мы открыты для сотрудничества и даём возможность другим авторам, художникам и брендам публиковать свои проекты, разделяющие нашу философию качества и волшебства.',en:"We believe there can never be too many good fairy tales. That's why our site is an interactive hub and community. We're open to collaboration and welcome other authors, artists, and brands to showcase projects that share our philosophy of quality and magic.",es:'Creemos que nunca sobran los buenos cuentos. Por eso nuestro sitio es una plataforma interactiva y una comunidad. Estamos abiertos a colaborar y damos la oportunidad a otros autores, artistas y marcas de presentar proyectos que compartan nuestra filosofía de calidad y magia.'},

  /* ── INDEX: отзывы ── */
  voices_title:{ru:'Голоса из Мирелии',en:'Voices from Mirelia',es:'Voces de Mirelia'},
  s6_hint:{ru:'Нажми на светлячка — он расскажет историю',en:'Click a firefly — it will tell you a story',es:'Haz clic en una luciérnaga y te contará una historia'},

  review0_text:{ru:'«Дочь не хочет выходить из комнаты. Говорит, что там живут настоящие феникс и дракон.»',en:'"My daughter won\'t leave her room. She says a real phoenix and dragon live there."',es:'«Mi hija no quiere salir de su cuarto. Dice que allí viven un fénix y un dragón de verdad.»'},
  review0_auth:{ru:'— Анна М., 2 детей',en:'— Anna M., 2 children',es:'— Anna M., 2 hijos'},
  review1_text:{ru:'«Полотенца такие мягкие, что ребёнок сам тянется после ванной.»',en:'"The towels are so soft that my child reaches for them on their own after a bath."',es:'«Las toallas son tan suaves que el niño las busca solo después del baño.»'},
  review1_auth:{ru:'— Мария К.',en:'— Maria K.',es:'— María K.'},
  review2_text:{ru:'«Подарила на день рождения коробку Мирелии — именинник сказал, что это лучший подарок в жизни.»',en:'"I gave a Mirelia box for a birthday — the birthday boy said it was the best gift of his life."',es:'«Regalé una caja de Mirelia para un cumpleaños: el festejado dijo que era el mejor regalo de su vida.»'},
  review2_auth:{ru:'— Светлана Р.',en:'— Svetlana R.',es:'— Svetlana R.'},
  review3_text:{ru:'«Сын засыпает теперь за 10 минут вместо часа. Магия работает.»',en:'"My son now falls asleep in 10 minutes instead of an hour. The magic works."',es:'«Mi hijo ahora se duerme en 10 minutos en vez de una hora. La magia funciona.»'},
  review3_auth:{ru:'— Дмитрий П.',en:'— Dmitry P.',es:'— Dmitri P.'},
  review4_text:{ru:'«Я взрослый и тоже хочу этот проектор. Мир Тигрёнка — лучшее что я видела.»',en:'"I\'m an adult and I want this projector too. The Tiger Cub\'s world is the best thing I\'ve seen."',es:'«Soy adulta y también quiero este proyector. El mundo del tigrecito es lo mejor que he visto.»'},
  review4_auth:{ru:'— Ольга В.',en:'— Olga V.',es:'— Olga V.'},

  footer_tag:{ru:'Мир, где исполняются мечты',en:'A World Where Dreams Come True',es:'Un Mundo Donde se Cumplen los Sueños'},
  footer_copy:{ru:'© 2025 МИРЕЛИЯ. Все права защищены.',en:'© 2025 MIRELIA. All rights reserved.',es:'© 2025 MIRELIA. Todos los derechos reservados.'},

  /* ── CATALOG: hero / nav ── */
  site_title_catalog:{ru:'Каталог — МИРЕЛИЯ',en:'Catalog — MIRELIA',es:'Catálogo — MIRELIA'},
  cart_label:{ru:'Корзина',en:'Cart',es:'Carrito'},
  cat_hero_sub:{ru:'Предметы из мира Мирелии для маленьких волшебников',en:'Treasures from the world of Mirelia for little wizards',es:'Tesoros del mundo de Mirelia para pequeños magos'},
  label_products_count:{ru:'товаров',en:'products',es:'productos'},
  label_rating:{ru:'средняя оценка',en:'average rating',es:'valoración media'},
  hero_stat_delivery_value:{ru:'1–3 дня',en:'1–3 days',es:'1–3 días'},

  sort_pop:{ru:'По популярности',en:'By popularity',es:'Por popularidad'},
  sort_cheap:{ru:'Сначала дешевле',en:'Price: low to high',es:'Precio: menor a mayor'},
  sort_exp:{ru:'Сначала дороже',en:'Price: high to low',es:'Precio: mayor a menor'},
  sort_rate:{ru:'По рейтингу',en:'By rating',es:'Por valoración'},
  filter_all:{ru:'Все',en:'All',es:'Todos'},

  rev_subtitle:{ru:'Что говорят родители и дети',en:'What parents and children say',es:'Lo que dicen padres e hijos'},
  rev_score_count:{ru:'на основе 774 отзывов',en:'based on 774 reviews',es:'basado en 774 reseñas'},

  rcard0_text:{ru:'«Дочь не хочет выходить из комнаты. Говорит, там живут настоящие феникс и дракон. Проектор работает уже полгода — ни единой проблемы.»',en:'"My daughter won\'t leave her room. She says a real phoenix and dragon live there. The projector has been running for six months without a single issue."',es:'«Mi hija no quiere salir de su cuarto. Dice que allí viven un fénix y un dragón de verdad. El proyector lleva medio año funcionando sin un solo problema.»'},
  rcard0_name:{ru:'Анна М., Москва',en:'Anna M., Moscow',es:'Anna M., Moscú'},
  rcard0_product:{ru:'Волшебный проектор',en:'Magic Projector',es:'Proyector Mágico'},
  rcard1_text:{ru:'«Подарила на день рождения — именинник сказал, что это лучший подарок в жизни. Качество выше ожидаемого, упаковка как из сказки.»',en:'"I gave it as a birthday gift — the birthday boy said it was the best present of his life. Quality exceeded expectations, packaging straight out of a fairy tale."',es:'«Lo regalé en un cumpleaños: el festejado dijo que era el mejor regalo de su vida. La calidad superó las expectativas, el empaque parece sacado de un cuento.»'},
  rcard1_name:{ru:'Светлана Р., Санкт-Петербург',en:'Svetlana R., Saint Petersburg',es:'Svetlana R., San Petersburgo'},
  rcard1_product:{ru:'Волшебный сундук',en:'Magic Chest',es:'Cofre Mágico'},
  rcard2_text:{ru:'«Сын засыпает за 10 минут вместо часа. Полотенца такие мягкие, что он сам тянется после ванной. Это настоящая магия.»',en:'"My son falls asleep in 10 minutes instead of an hour. The towels are so soft he reaches for them on his own after a bath. This is real magic."',es:'«Mi hijo se duerme en 10 minutos en lugar de una hora. Las toallas son tan suaves que él mismo las busca después del baño. Esto es magia de verdad.»'},
  rcard2_name:{ru:'Дмитрий П., Казань',en:'Dmitry P., Kazan',es:'Dmitri P., Kazán'},
  rcard2_product:{ru:'Набор полотенец + Ночник',en:'Towel Set + Night Light',es:'Set de Toallas + Lámpara Nocturna'},

  cta_title:{ru:'Волшебство — в деталях',en:'Magic is in the details',es:'La magia está en los detalles'},
  cta_sub:{ru:'Каждый предмет создан с любовью к детским мечтам',en:"Every item is made with love for children's dreams",es:'Cada objeto está hecho con amor por los sueños de los niños'},
  cta_perk1:{ru:'Бесплатная доставка от 3 000 ₽',en:'Free delivery from ₽3,000',es:'Envío gratis desde 3.000 ₽'},
  cta_perk2:{ru:'Подарочная упаковка включена',en:'Gift wrapping included',es:'Envoltorio de regalo incluido'},
  cta_perk3:{ru:'Возврат в течение 30 дней',en:'30-day return policy',es:'Devolución en 30 días'},
  cta_btn:{ru:'Узнать о бренде',en:'Learn About the Brand',es:'Conocer la Marca'},

  /* ── CATALOG: динамика (JS) ── */
  badge_hit:{ru:'Хит',en:'Bestseller',es:'Más Vendido'},
  badge_new:{ru:'Новинка',en:'New',es:'Novedad'},
  photo_soon:{ru:'Фото скоро',en:'Photo coming soon',es:'Foto próximamente'},
  related_title:{ru:'Вам также понравится',en:'You may also like',es:'También te puede gustar'},
  modal_add_to_cart:{ru:'В корзину',en:'Add to Cart',es:'Añadir al Carrito'},
  modal_added_label:{ru:'✓ Добавлено',en:'✓ Added',es:'✓ Añadido'},
  products_not_found:{ru:'Товары не найдены',en:'No products found',es:'No se encontraron productos'},
  nothing_found:{ru:'Ничего не найдено',en:'Nothing found',es:'Nada encontrado'},

  cart_empty_html:{ru:'Ваша корзина пуста.<br>Наполните её волшебством Мирелии.',en:'Your cart is empty.<br>Fill it with the magic of Mirelia.',es:'Tu carrito está vacío.<br>Llénalo con la magia de Mirelia.'},
  cart_row_products:{ru:'Товары',en:'Items',es:'Artículos'},
  cart_row_delivery:{ru:'Доставка',en:'Delivery',es:'Envío'},
  cart_row_total:{ru:'Итого',en:'Total',es:'Total'},
  cart_free_gift:{ru:'Бесплатно 🎁',en:'Free 🎁',es:'Gratis 🎁'},
  free_plain:{ru:'Бесплатно',en:'Free',es:'Gratis'},
  checkout_btn:{ru:'Оформить заказ',en:'Checkout',es:'Finalizar Compra'},
  unit_label:{ru:'/ шт',en:'each',es:'c/u'},

  co_ornament:{ru:'Оформление',en:'Checkout',es:'Pedido'},
  co_title:{ru:'Ваш заказ',en:'Your Order',es:'Tu Pedido'},
  co_sub:{ru:'Доставим магию Мирелии прямо к вам',en:"We'll deliver Mirelia's magic straight to you",es:'Llevaremos la magia de Mirelia hasta ti'},
  field_name_label:{ru:'Ваше имя *',en:'Your Name *',es:'Tu Nombre *'},
  field_name_ph:{ru:'Елена',en:'Emily',es:'Elena'},
  field_phone_label:{ru:'Телефон *',en:'Phone *',es:'Teléfono *'},
  field_phone_ph:{ru:'+7 900 000 00 00',en:'+1 900 000 0000',es:'+34 600 00 00 00'},
  field_email_label:{ru:'Email',en:'Email',es:'Correo electrónico'},
  field_email_ph:{ru:'elena@mail.ru',en:'emily@mail.com',es:'elena@correo.com'},
  field_address_label:{ru:'Адрес доставки',en:'Delivery Address',es:'Dirección de Envío'},
  field_address_ph:{ru:'г. Москва, ул. Волшебная, д. 1, кв. 7',en:'123 Magic Ave, Apt 7, New York',es:'Calle Mágica 1, piso 7, Madrid'},
  pay_title:{ru:'Способ оплаты',en:'Payment Method',es:'Método de Pago'},
  pay_online_name:{ru:'Онлайн',en:'Online',es:'En línea'},
  pay_online_sub:{ru:'Robokassa — карты, СБП, ЮMoney',en:'Robokassa — cards, bank transfer, e-wallets',es:'Robokassa: tarjetas, transferencia, monederos electrónicos'},
  pay_cod_name:{ru:'При получении',en:'Cash on Delivery',es:'Contra Entrega'},
  pay_cod_sub:{ru:'Наличными или картой курьеру',en:'Cash or card to the courier',es:'Efectivo o tarjeta al mensajero'},
  submit_pay_prefix:{ru:'Оплатить',en:'Pay',es:'Pagar'},
  secure_note:{ru:'🔒 Защищённое соединение · SSL · Данные в безопасности',en:'🔒 Secure connection · SSL · Your data is safe',es:'🔒 Conexión segura · SSL · Tus datos están protegidos'},

  success_title:{ru:'Заказ принят!',en:'Order received!',es:'¡Pedido recibido!'},
  success_sub_html:{ru:'Мы получили ваш заказ и уже отправляем волшебство.<br>Вскоре с вами свяжется наш менеджер.',en:'We\'ve received your order and are already sending the magic your way.<br>Our manager will contact you shortly.',es:'Hemos recibido tu pedido y ya estamos enviando la magia.<br>Pronto nuestro equipo se pondrá en contacto contigo.'},
  success_back_btn:{ru:'Продолжить покупки',en:'Continue Shopping',es:'Seguir Comprando'},
};

/* ── Категории товаров (слаги, независимые от языка) ── */
const CAT_I18N = {
  projector:{ru:'Проектор',en:'Projector',es:'Proyector'},
  bedding:{ru:'Постельное',en:'Bedding',es:'Ropa de Cama'},
  towels:{ru:'Полотенца',en:'Towels',es:'Toallas'},
  gifts:{ru:'Подарки',en:'Gifts',es:'Regalos'},
  toys:{ru:'Игрушки',en:'Toys',es:'Juguetes'},
};

/* ── Тексты товаров по языкам (используется только в catalog.html) ── */
const PRODUCT_I18N = {
  1:{ru:{name:'Волшебный проектор',short:'Создаёт звёздное небо Мирелии на потолке детской комнаты',long:'Погрузите ребёнка в магию Мирелии каждую ночь. Проектор отображает 8 режимов звёздного неба прямо на потолке. Встроенный таймер, тихий мотор вращения и мягкий ночной режим — идеальный спутник для засыпания.',feats:['8 режимов проекции','Таймер 15/30/60 мин','USB-питание','Бесшумный мотор']},
     en:{name:'Magic Projector',short:"Casts Mirelia's starry sky across the bedroom ceiling",long:"Immerse your child in Mirelia's magic every night. The projector displays 8 starry-sky modes right on the ceiling. Built-in timer, a whisper-quiet rotation motor, and a soft night mode make it the perfect bedtime companion.",feats:['8 projection modes','15/30/60-min timer','USB powered','Silent motor']},
     es:{name:'Proyector Mágico',short:'Proyecta el cielo estrellado de Mirelia en el techo de la habitación',long:'Sumerge a tu hijo en la magia de Mirelia cada noche. El proyector muestra 8 modos de cielo estrellado directamente en el techo. Temporizador incorporado, motor de rotación silencioso y un suave modo nocturno: el compañero perfecto para dormir.',feats:['8 modos de proyección','Temporizador 15/30/60 min','Alimentación USB','Motor silencioso']}},

  2:{ru:{name:'Постельное «Ночное небо»',short:'Комплект с наволочкой и пододеяльником в звёздном дизайне',long:'Засыпайте под звёздами Мирелии. Комплект из 100% гипоаллергенного хлопка с эксклюзивным принтом ночного неба. Подходит для кроватей 120×200 и 140×200 см.',feats:['Хлопок 100%','Гипоаллергенный','120×200 / 140×200','Стирка 40°']},
     en:{name:'"Night Sky" Bedding Set',short:'A pillowcase and duvet cover set with a starry-sky design',long:"Fall asleep under Mirelia's stars. A set made of 100% hypoallergenic cotton with an exclusive night-sky print. Fits 120×200 and 140×200 cm beds.",feats:['100% cotton','Hypoallergenic','120×200 / 140×200','Machine wash 40°C']},
     es:{name:'Ropa de Cama «Cielo Nocturno»',short:'Juego de funda de almohada y edredón con diseño estelar',long:'Duerme bajo las estrellas de Mirelia. Un juego de 100% algodón hipoalergénico con una estampa exclusiva de cielo nocturno. Disponible para camas de 120×200 y 140×200 cm.',feats:['100% algodón','Hipoalergénico','120×200 / 140×200','Lavado a 40°']}},

  3:{ru:{name:'Набор полотенец «Мирелия»',short:'Три полотенца из 100% хлопка с вышивкой персонажей',long:'Банные процедуры превратятся в ритуал из сказки. Три полотенца разного размера с вышивкой любимых персонажей: Бонни, Юки и Куки. Мягкие, быстросохнущие, долговечные.',feats:['3 размера в наборе','Хлопок махровый','Вышивка персонажей','OEKO-TEX']},
     en:{name:'"Mirelia" Towel Set',short:'Three 100% cotton towels embroidered with the characters',long:'Bath time becomes a ritual straight out of a fairy tale. Three towels in different sizes, embroidered with beloved characters: Bonnie, Yuki, and Cookie. Soft, quick-drying, long-lasting.',feats:['3 sizes included','Terry cotton','Character embroidery','OEKO-TEX certified']},
     es:{name:'Set de Toallas «Mirelia»',short:'Tres toallas de 100% algodón bordadas con los personajes',long:'La hora del baño se convierte en un ritual de cuento. Tres toallas de distintos tamaños bordadas con los queridos personajes: Bonnie, Yuki y Cookie. Suaves, de secado rápido y muy duraderas.',feats:['3 tamaños incluidos','Algodón rizo','Bordado de personajes','Certificado OEKO-TEX']}},

  4:{ru:{name:'Набор «Волшебный сундук»',short:'Подарочный набор в фирменной коробке: 5 товаров Мирелии',long:'Лучший подарок для маленького волшебника — сундук с магией Мирелии. Ночник, полотенце, мягкая игрушка, проекционная карта и письмо от Мирелии. Упаковано в коллекционный сундук.',feats:['5 предметов в наборе','Фирменный сундук','Письмо от Мирелии','Готов к вручению']},
     en:{name:'"Magic Chest" Gift Set',short:'A gift set in branded packaging: 5 Mirelia products',long:"The best gift for a little wizard — a chest full of Mirelia's magic. A night light, a towel, a plush toy, a projection card, and a letter from Mirelia. Packaged in a collectible chest.",feats:['5 items included','Branded chest','Letter from Mirelia','Ready to gift']},
     es:{name:'Set «Cofre Mágico»',short:'Set de regalo en caja de marca: 5 productos de Mirelia',long:'El mejor regalo para un pequeño mago: un cofre lleno de la magia de Mirelia. Una lámpara nocturna, una toalla, un peluche, una tarjeta de proyección y una carta de Mirelia. Envuelto en un cofre coleccionable.',feats:['5 artículos incluidos','Cofre de marca','Carta de Mirelia','Listo para regalar']}},

  5:{ru:{name:'Замок Мирелии',short:'Хрустальный замок — сборная модель из волшебного стекла',long:'Соберите замок Мирелии из безопасного акрилового стекла с LED-подсветкой. Время сборки 30–60 минут. Для детей от 5 лет.',feats:['Безопасный акрил','LED-подсветка','Для детей 5+','3D-конструктор']},
     en:{name:'Mirelia Castle',short:'A crystal castle — a build-it-yourself model of magical glass',long:"Build Mirelia's castle from safe acrylic glass with LED lighting. Assembly takes 30–60 minutes. For children ages 5 and up.",feats:['Safe acrylic','LED lighting','Ages 5+','3D construction set']},
     es:{name:'Castillo de Mirelia',short:'Un castillo de cristal: modelo de vidrio mágico para armar',long:'Arma el castillo de Mirelia con vidrio acrílico seguro e iluminación LED. El montaje toma entre 30 y 60 minutos. Para niños a partir de 5 años.',feats:['Acrílico seguro','Iluminación LED','A partir de 5 años','Set de construcción 3D']}},

  6:{ru:{name:'Жители Мирелии (набор)',short:'Три мягких персонажа из гипоаллергенного плюша',long:'Познакомьтесь с жителями: зайка Бонни, тигрёнок Юки и сова Куки. Каждая игрушка из премиального гипоаллергенного плюша с вышитыми деталями. Высота 25 см.',feats:['3 персонажа','Гипоаллергенный плюш','Высота 25 см','Для детей 0+']},
     en:{name:'Residents of Mirelia (Set)',short:'Three plush characters made of hypoallergenic fabric',long:'Meet the residents: Bonnie the bunny, Yuki the tiger cub, and Cookie the owl. Each toy is made of premium hypoallergenic plush with embroidered details. 25 cm tall.',feats:['3 characters','Hypoallergenic plush','25 cm tall','Ages 0+']},
     es:{name:'Habitantes de Mirelia (Set)',short:'Tres personajes de peluche hipoalergénico',long:'Conoce a los habitantes: Bonnie la coneja, Yuki el tigrecito y Cookie el búho. Cada peluche es de felpa hipoalergénica premium con detalles bordados. Mide 25 cm.',feats:['3 personajes','Felpa hipoalergénica','Mide 25 cm','Desde 0 años']}},

  7:{ru:{name:'Ночник «Луна Мирелии»',short:'Мягкое лунное свечение — 3 режима яркости',long:'Тёплый ночник в форме луны наполнит детскую спокойным светом. Три режима яркости, автоотключение, перезаряжаемый аккумулятор. Дизайн с золотыми звёздами Мирелии.',feats:['3 режима яркости','Автоотключение 1ч','USB-C зарядка','8ч работы']},
     en:{name:'"Mirelia Moon" Night Light',short:'Soft moonlight glow with 3 brightness modes',long:"A warm moon-shaped night light fills the bedroom with calming light. Three brightness modes, auto shut-off, rechargeable battery. Designed with Mirelia's golden stars.",feats:['3 brightness modes','1-hour auto shut-off','USB-C charging','8-hour battery life']},
     es:{name:'Lámpara Nocturna «Luna de Mirelia»',short:'Suave brillo lunar con 3 modos de intensidad',long:'Una cálida lámpara con forma de luna llena la habitación de una luz relajante. Tres modos de intensidad, apagado automático y batería recargable. Diseño con las estrellas doradas de Mirelia.',feats:['3 modos de intensidad','Apagado automático 1h','Carga USB-C','8h de autonomía']}},

  8:{ru:{name:'Плед «Звёздный лес»',short:'Тёплый плед с золотыми звёздами и силуэтами леса',long:'Укутайтесь в тёплый лес Мирелии. Плед из ультрамягкой микрофибры с эксклюзивным принтом звёздного неба над заколдованным лесом. 130×170 см, машинная стирка.',feats:['Микрофибра','130×170 см','Машинная стирка','Двусторонний']},
     en:{name:'"Starry Forest" Blanket',short:'A warm blanket with golden stars and forest silhouettes',long:"Wrap yourself in Mirelia's warm forest. A blanket of ultra-soft microfiber with an exclusive print of a starry sky over an enchanted forest. 130×170 cm, machine washable.",feats:['Microfiber','130×170 cm','Machine washable','Reversible']},
     es:{name:'Manta «Bosque Estrellado»',short:'Manta cálida con estrellas doradas y siluetas de bosque',long:'Envuélvete en el cálido bosque de Mirelia. Una manta de microfibra ultra suave con una estampa exclusiva de cielo estrellado sobre un bosque encantado. 130×170 cm, lavable a máquina.',feats:['Microfibra','130×170 cm','Lavable a máquina','Reversible']}},

  9:{ru:{name:'Халат детский «Тофу»',short:'Мягкий махровый халат с вышивкой Тофу, хлопок 100%',long:'После ванной — в объятия Тофу. Мягкий халат из 100% хлопка с вышивкой медвежонка Тофу на кармане. Пояс, капюшон. Размеры 86–128 см.',feats:['Хлопок 100%','4 размера','Капюшон и пояс','Карман с Тофу']},
     en:{name:'"Tofu" Kids\' Bathrobe',short:'A soft terry robe embroidered with Tofu, 100% cotton',long:"After the bath — straight into Tofu's arms. A soft 100% cotton robe with Tofu the bear cub embroidered on the pocket. Belt and hood included. Sizes 86–128 cm.",feats:['100% cotton','4 sizes','Hood and belt','Tofu pocket']},
     es:{name:'Bata Infantil «Tofu»',short:'Suave bata de rizo bordada con Tofu, 100% algodón',long:'Después del baño, directo a los brazos de Tofu. Una suave bata de 100% algodón con el osito Tofu bordado en el bolsillo. Incluye cinturón y capucha. Tallas 86–128 cm.',feats:['100% algodón','4 tallas','Capucha y cinturón','Bolsillo con Tofu']}},

  10:{ru:{name:'Мягкая игрушка «Юки»',short:'Плюшевый тигрёнок Юки, 30 см, гипоаллергенный',long:'Юки — самый добрый тигрёнок в Мирелии. Из премиального плюша с вышитыми глазами-звёздами и полосками цвета ночного неба. Идеальный компаньон для сна.',feats:['Высота 30 см','Гипоаллергенный','Вышитые детали','Для детей 0+']},
      en:{name:'"Yuki" Plush Toy',short:'Yuki the plush tiger cub, 30 cm, hypoallergenic',long:'Yuki is the kindest tiger cub in Mirelia. Made of premium plush with embroidered star-eyes and night-sky-colored stripes. The perfect bedtime companion.',feats:['30 cm tall','Hypoallergenic','Embroidered details','Ages 0+']},
      es:{name:'Peluche «Yuki»',short:'Tigrecito de peluche Yuki, 30 cm, hipoalergénico',long:'Yuki es el tigrecito más bondadoso de Mirelia. Hecho de felpa premium con ojos bordados en forma de estrella y rayas del color del cielo nocturno. El compañero perfecto para dormir.',feats:['Mide 30 cm','Hipoalergénico','Detalles bordados','Desde 0 años']}},

  11:{ru:{name:'Шкатулка «Тайная магия»',short:'Лаковая шкатулка с бархатным интерьером и золотым орнаментом',long:'Хранилище сокровенных тайн. Лаковая шкатулка тёмно-синего цвета с ручной росписью. Внутри — бархат ночного неба. Замок с ключиком. 18×12×8 см.',feats:['Ручная роспись','Бархатный интерьер','Замок с ключиком','18×12×8 см']},
      en:{name:'"Secret Magic" Keepsake Box',short:'A lacquered box with a velvet interior and golden ornamentation',long:'A vault for the most treasured secrets. A dark blue lacquered box, hand-painted. Inside, night-sky velvet. Lock and key included. 18×12×8 cm.',feats:['Hand-painted','Velvet interior','Lock and key','18×12×8 cm']},
      es:{name:'Cofre «Magia Secreta»',short:'Caja lacada con interior de terciopelo y ornamento dorado',long:'Un cofre para los secretos más preciados. Caja lacada azul oscuro, pintada a mano. Por dentro, terciopelo del color del cielo nocturno. Incluye cerradura con llave. 18×12×8 cm.',feats:['Pintado a mano','Interior de terciopelo','Cerradura con llave','18×12×8 cm']}},

  12:{ru:{name:'Подушка «Бонни»',short:'Декоративная подушка-зайка из гипоаллергенного плюша, 40×40 см',long:'Бонни — самая мягкая зайка в Мирелии. Подушка-игрушка с ушками, съёмный чехол для стирки. Гипоаллергенный наполнитель. 40×40 см.',feats:['Гипоаллергенный','Съёмный чехол','40×40 см','Для детей 0+']},
      en:{name:'"Bonnie" Pillow',short:'A decorative bunny pillow made of hypoallergenic plush, 40×40 cm',long:'Bonnie is the softest bunny in Mirelia. A plush pillow with ears and a removable, washable cover. Hypoallergenic filling. 40×40 cm.',feats:['Hypoallergenic','Removable cover','40×40 cm','Ages 0+']},
      es:{name:'Cojín «Bonnie»',short:'Cojín decorativo de coneja de felpa hipoalergénica, 40×40 cm',long:'Bonnie es la coneja más suave de Mirelia. Un cojín de peluche con orejas y funda desmontable y lavable. Relleno hipoalergénico. 40×40 cm.',feats:['Hipoalergénico','Funda desmontable','40×40 cm','Desde 0 años']}},
};

/* ═══ ЯЗЫК: чтение / запись ═══ */
function getLang(){
  return localStorage.getItem(I18N_KEY) || 'ru';
}
function setLang(lang){
  if(!['ru','en','es'].includes(lang)) return;
  localStorage.setItem(I18N_KEY, lang);
  applyI18n();
  window.dispatchEvent(new CustomEvent('mirelialangchange',{detail:{lang}}));
}
function t(key){
  const row = I18N[key];
  if(!row) return key;
  return row[getLang()] || row.ru || key;
}
function catLabel(slug){
  const row = CAT_I18N[slug];
  if(!row) return slug;
  return row[getLang()] || row.ru || slug;
}
function badgeLabel(badge){
  return badge==='hit' ? t('badge_hit') : t('badge_new');
}
function pI18n(p){
  const row = PRODUCT_I18N[p.id];
  if(!row) return {name:'',short:'',long:'',feats:[]};
  return row[getLang()] || row.ru;
}
function pName(p){ return pI18n(p).name; }
function pShort(p){ return pI18n(p).short; }
function pLong(p){ return pI18n(p).long; }
function pFeats(p){ return pI18n(p).feats; }

/* ═══ Плюрализация (RU: 1/2-4/5-20, EN/ES: 1/other) ═══ */
function pluralRu(n, one, few, many){
  const mod10 = Math.abs(n) % 10, mod100 = Math.abs(n) % 100;
  if(mod100 >= 11 && mod100 <= 14) return many;
  if(mod10 === 1) return one;
  if(mod10 >= 2 && mod10 <= 4) return few;
  return many;
}
function countWord(n, forms){
  const lang = getLang();
  if(lang === 'ru') return pluralRu(n, forms.ru[0], forms.ru[1], forms.ru[2]);
  return n === 1 ? forms[lang][0] : forms[lang][1];
}
function shownProductsText(n){
  const lang = getLang();
  const word = countWord(n, {ru:['товар','товара','товаров'],en:['product','products'],es:['producto','productos']});
  if(lang === 'ru') return `Показано ${n} ${word}`;
  if(lang === 'es') return `Mostrando ${n} ${word}`;
  return `Showing ${n} ${word}`;
}
function reviewsParenText(n){
  const word = countWord(n, {ru:['отзыв','отзыва','отзывов'],en:['review','reviews'],es:['reseña','reseñas']});
  return `(${n} ${word})`;
}
function toastAddedGridText(name){
  const lang = getLang();
  if(lang === 'es') return `«${name}» añadido al carrito`;
  if(lang === 'en') return `"${name}" added to cart`;
  return `«${name}» добавлен в корзину`;
}
function toastAddedModalText(name, qty){
  const lang = getLang();
  if(lang === 'es') return `«${name}» × ${qty} en el carrito`;
  if(lang === 'en') return `"${name}" × ${qty} in cart`;
  return `«${name}» × ${qty} в корзине`;
}

/* ═══ Применение перевода к статичной разметке ═══ */
function applyI18n(){
  const lang = getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
    el.alt = t(el.getAttribute('data-i18n-alt'));
  });
  document.querySelectorAll('[data-i18n-src]').forEach(el=>{
    el.src = t(el.getAttribute('data-i18n-src'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ═══ Переключатель языка (десктоп + мобильное меню) ═══ */
function initLangSwitcher(){
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
  });
}

applyI18n();
initLangSwitcher();
