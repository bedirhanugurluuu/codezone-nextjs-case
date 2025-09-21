export interface Post {
  _id: string;
  user_id: string;
  type: string;
  attributes: {
    trends: boolean;
    category: string[];
    tags: string[];
    authors: string[];
    title: string;
    slug: string;
    content: string;
    seo: {
      metaTitle: string;
      canonicalURL: string;
      metaDescription: string;
    };
    desc: string;
    img: string;
  };
  lang: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const mockPosts: Post[] = [
  {
    "_id": "68b14b479a63b6901bbed82e",
    "user_id": "65a11bebe1495d4af5f535c4",
    "type": "posts",
    "attributes": {
      "trends": true,
      "category": ["Videolar"],
      "tags": ["Türk Rap", "Haftanın Videoları", "Ayın Videoları"],
      "authors": ["Rapkology"],
      "title": "Lark2020'den Yeni Parça: \"ölmemi istemezsin\" Yayında!",
      "slug": "lark2020den-yeni-parca-olmemi-istemezsin-yayinda",
      "content": "Türkçe rap sahnesinin genç ve üretken isimlerinden Lark2020, yeni şarkısı \"ölmemi istemezsin\" ile dinleyici karşısına çıktı. Rapkology etiketiyle yayınlanan parça, güçlü sözleri, dikkat çekici beat'i ve enerjik temposuyla kısa sürede ilgi görmeye başladı. Şarkı, isyan ve içsel çöküş temalarını bir arada işleyerek dinleyiciyi duygusal bir yolculuğa çıkarıyor. Lark2020'nin vokal performansı, hem kırılganlığı hem de öfkeyi aynı anda yansıtıyor. Özellikle \"ölmemi istemezsin, beni sevmiyordun belki ama\" dizeleri, parçanın ana duygusunu özetleyen vurucu satırlardan biri olarak öne çıkıyor. Klip DetaylarıŞarkının resmi video klibi de 4K çözünürlükte hazırlandı. Görselliğiyle parçanın karanlık atmosferini destekleyen klip, izleyiciye Lark2020'nin duygularını daha yoğun hissettirmeyi başarıyor. Minimal ama etkili sahneler, şarkının sert ritmiyle birleşerek güçlü bir bütünlük sunuyor.",
      "seo": {
        "metaTitle": "Lark2020 – ölmemi istemezsin: Güçlü Sözler ve Sert Flow",
        "canonicalURL": "lark2020den-yeni-parca-olmemi-istemezsin-yayinda",
        "metaDescription": "Lark2020'nin yeni şarkısı \"ölmemi istemezsin\", Rapkology etiketiyle yayınlandı. Güçlü sözler, dikkat çekici beat ve 4K klibiyle Türkçe rap sahnesine iddialı bir giriş yaptı."
      },
      "desc": "Lark2020'nin yeni şarkısı \"ölmemi istemezsin\", Rapkology etiketiyle yayınlandı. Güçlü sözler, dikkat çekici beat ve 4K klibiyle Türkçe rap sahnesine iddialı bir giriş yaptı.",
      "img": "https://res.cloudinary.com/dgbjlgpfh/image/upload/v1756449589/softawe/lark.jpg.webp"
    },
    "lang": "tr",
    "createdAt": "2025-08-29T06:40:07.629Z",
    "updatedAt": "2025-08-29T06:40:07.629Z",
    "__v": 0
  },
  {
    "_id": "688bee1a9a63b6901bbd9c72",
    "user_id": "65a11bebe1495d4af5f535c4",
    "type": "posts",
    "attributes": {
      "trends": true,
      "category": ["Videolar", "Müzik"],
      "tags": ["Haftanın Videoları", "Ayın Videoları"],
      "authors": ["Rapkology"],
      "title": "Favor'dan Sert Bir Veda: \"Ya Kal Ya Da Git\" Yayında!",
      "slug": "favordan-sert-bir-veda-ya-kal-ya-da-git-yayinda",
      "content": "Türkçe rap sahnesinin yükselen isimlerinden Favor, yeni teklisi \"Ya Kal Ya Da Git\" ile dinleyiciyi kalbinin en kırılgan yerinde yakalıyor. Ayrılığın ağırlığı, hayal kırıklığının soğukluğu ve içsel hesaplaşmalar, bu parçada hem sözlerde hem de klibin atmosferinde net şekilde hissediliyor. 4K kalitede hazırlanan klip, Rapkology etiketiyle yayınlandı ve parçanın melankolik tonuna çarpıcı bir görsel eşlik sunuyor. Favor'un güçlü vokali ve sade prodüksiyonun sertliği, \"Ya Kal Ya Da Git\"i sadece bir ayrılık şarkısı değil, aynı zamanda içsel bir çöküş hikayesi haline getiriyor. \"Ben kalıyorum arada\" gibi tekrar eden dizeler, yalnızlık ve belirsizlik hissini dinleyicinin içine işliyor. Şarkı, yalnızca duygusal değil, aynı zamanda teknik anlamda da dikkat çekiyor: Flow geçişleri, vurucu nakaratlar ve günümüz sound'una uyumlu altyapısıyla Favor, bu çalışmasıyla kariyerinde yeni bir eşiği temsil ediyor.",
      "seo": {
        "metaTitle": "Favor – Ya Kal Ya Da Git Şarkısı Yayında | Rapkology",
        "metaDescription": "Favor'un duygusal yeni şarkısı \"Ya Kal Ya Da Git\" yayınlandı. Sert altyapısı ve güçlü sözleriyle dikkat çeken parça, Rapkology kanalında yayında!",
        "canonicalURL": "favordan-sert-bir-veda-ya-kal-ya-da-git-yayinda"
      },
      "desc": "Favor'un duygusal yeni şarkısı \"Ya Kal Ya Da Git\" yayınlandı. Sert altyapısı ve güçlü sözleriyle dikkat çeken parça, Rapkology kanalında yayında!",
      "img": "https://res.cloudinary.com/dgbjlgpfh/image/upload/v1754040842/softawe/favor6.jpg.webp"
    },
    "lang": "tr",
    "createdAt": "2025-07-31T22:28:42.040Z",
    "updatedAt": "2025-08-19T12:05:53.963Z",
    "__v": 0
  },
  {
    "_id": "688660949a63b6901bbd6889",
    "user_id": "65a11bebe1495d4af5f535c4",
    "type": "posts",
    "attributes": {
      "trends": true,
      "category": ["Videolar", "Müzik"],
      "tags": ["Haftanın Videoları", "Ayın Videoları"],
      "authors": ["Rapkology"],
      "title": "BCY'den Yürek Yakan Parça: \"NERDEYDİN\" Yayında",
      "slug": "bcyden-yurek-yakan-parca-nerdeydin-yayinda",
      "content": "Rapkology kanalında yayınlanan \"NERDEYDİN\", BCY'nin en kişisel şarkılarından biri olarak dikkat çekiyor. Duygusal bir boşlukla, kırık bir kalbin yükünü omuzlayan parça, rap müziğin ham ve gerçek anlatım gücünü bir kez daha gözler önüne seriyor. BCY'nin vokali, sanki yalnızca bir şarkı değil, iç dünyasına açılan bir kapı gibi dinleyiciyi içine çekiyor. Sert ama içten sözlerle örülü \"NERDEYDİN\", terk edilişin ardından gelen hesaplaşmayı merkezine alıyor. \"Seni kendimden çok severken, nerdeydin?\" sorusunu defalarca dile getiren BCY, acının, özlemin ve hayal kırıklığının derinliğini liriklerinde yansıtıyor. Şarkının prodüksiyonu da bu duygusal yoğunluğu destekleyecek şekilde tasarlanmış. Minimal ama etkili altyapı, BCY'nin vokalinin ön plana çıkmasını sağlarken, melankolik atmosferi de koruyor. Rapkology'nin kaliteli yayın standartlarına uygun olarak hazırlanan klip, şarkının duygusal derinliğini görsel olarak da yansıtıyor.",
      "seo": {
        "canonicalURL": "bcyden-yurek-yakan-parca-nerdeydin-yayinda",
        "metaTitle": "BCY – NERDEYDİN: Duygusal Rap Şarkısı Yayında",
        "metaDescription": "BCY'nin yeni şarkısı \"NERDEYDİN\" Rapkology'de! Duygusal sözler ve güçlü vokaliyle dikkat çeken parça hemen dinle."
      },
      "desc": "BCY'nin yeni şarkısı \"NERDEYDİN\" Rapkology'de! Duygusal sözler ve güçlü vokaliyle dikkat çeken parça hemen dinle.",
      "img": "https://res.cloudinary.com/dgbjlgpfh/image/upload/v1750388582/softawe/bcy.jpg.webp"
    },
    "lang": "tr",
    "createdAt": "2025-06-20T03:03:23.499Z",
    "updatedAt": "2025-07-02T23:17:43.966Z",
    "__v": 0
  },
  {
    "_id": "684b92b0156b6bac90e5f5d7",
    "user_id": "65a11bebe1495d4af5f535c4",
    "type": "posts",
    "attributes": {
      "trends": true,
      "category": ["Videolar", "Müzik"],
      "tags": ["Haftanın Videoları", "Türk Rap"],
      "authors": ["Rapkology"],
      "title": "FELAT x BAC0 – HARLAR | POOL SESSIONS #2 Resmi Performans Videosu",
      "slug": "felat-x-bac0-harlar-pool-sessions-2-resmi-performans-videosu",
      "content": "Türkçe rap sahnesinin dikkat çeken isimlerinden FELAT ve BAC0, \"HARLAR\" adlı parçada güçlerini birleştirerek POOL SESSIONS serisinin ikinci bölümünde dinleyiciyle buluşuyor. Şarkı sözlerinde FELAT, lüks yaşantı öğeleriyle kendi özgüvenini öne çıkarırken, sokak kültürüne ait sert kodlarla egemenliğini ilan ediyor. \"Abilik yapmayana abim demem\" gibi satırlar, sadakat ve hiyerarşiye verilen önemi vurguluyor. BAC0'nun verse'lerinde ise daha karanlık ve melankolik bir dünya var. \"Baco bipolar ve gece tenhalar\" gibi dizeler psikolojik çatışmalara işaret ederken, \"Üniformadan da korkamam / Ölümden de korkamam\" gibi satırlar isyan duygusunu pekiştiriyor. Şarkı boyunca lüks, şiddet, yalnızlık ve sokak hayatı iç içe geçmiş durumda – bu da parçayı tematik olarak zengin ve çok katmanlı bir anlatı haline getiriyor. Karanlık tonların hakim olduğu video, POOL SESSIONS konseptine sadık kalarak özgün bir sahne deneyimi yaratıyor. Rapkology sunumuyla yayımlanan bu özel performans, serinin dikkat çeken bölümlerinden biri olmaya aday.",
      "seo": {
        "metaTitle": "felat-x-bac0dan-guclu-is-birligi-harlar-pool-sessions-2-yayinda",
        "metaDescription": "FELAT ve BAC0, POOL SESSIONS #2 kapsamında \"HARLAR\" adlı parçayla karşımızda. Duygusal vokaller ve atmosferik altyapısıyla dikkat çeken performansı hemen izle!",
        "canonicalURL": "felat-x-bac0-harlar-pool-sessions-2-resmi-performans-videosu"
      },
      "desc": "FELAT ve BAC0, POOL SESSIONS #2 kapsamında \"HARLAR\" adlı parçayla karşımızda. Duygusal vokaller ve atmosferik altyapısıyla dikkat çeken performansı hemen izle!",
      "img": "https://res.cloudinary.com/dgbjlgpfh/image/upload/v1749782951/softawe/pool.jpg.webp"
    },
    "lang": "tr",
    "createdAt": "2025-06-13T02:53:36.217Z",
    "updatedAt": "2025-06-27T14:05:15.155Z",
    "__v": 0
  },
  {
    "_id": "683b95d2156b6bac90e5843f",
    "user_id": "65a11bebe1495d4af5f535c4",
    "type": "posts",
    "attributes": {
      "trends": true,
      "category": ["Videolar", "Müzik"],
      "tags": ["Haftanın Videoları", "Ayın Videoları"],
      "authors": ["Rapkology"],
      "title": "Akın Gezginci'den Yeni Tekli: \"F30\" Resmi Müzik Videosuyla Yayında!",
      "slug": "akin-gezginciden-yeni-tekli-f30-resmi-muzik-videosuyla-yayinda",
      "content": "Türkçe rap sahnesinin dikkat çeken isimlerinden Akın Gezginci, 30 Mayıs 2025'te yayımladığı \"F30\" adlı yeni teklisiyle dinleyicileriyle buluştu. Şarkının resmi müzik videosu, Rapkology YouTube kanalında izleyicilerle buluştu. \"F30\", hız, adrenalin ve sokakların keskin gerçekliğini yansıtan dinamik bir parça olarak öne çıkıyor. Akın Gezginci'nin kendine has tarzı ve güçlü lirik anlatımı, şarkıya derinlik katıyor. Şarkının resmi müzik videosunu aşağıdaki bağlantıdan izleyebilirsiniz:",
      "seo": {
        "metaTitle": "Akın Gezginci - F30 (Resmi Müzik Videosu) | Yeni Tekli Yayında!",
        "metaDescription": "Akın Gezginci'nin yeni şarkısı \"F30\" resmi müzik videosuyla Rapkology'de! Hız ve sokakların gerçekliği bu parçada. Hemen dinle!",
        "canonicalURL": "akin-gezginciden-yeni-tekli-f30-resmi-muzik-videosuyla-yayinda"
      },
      "desc": "Akın Gezginci'nin yeni şarkısı \"F30\" resmi müzik videosuyla Rapkology'de! Hız ve sokakların gerçekliği bu parçada. Hemen dinle!",
      "img": "https://res.cloudinary.com/dgbjlgpfh/image/upload/v1748735365/softawe/akin.jpg.webp"
    },
    "lang": "tr",
    "createdAt": "2025-05-31T23:50:42.181Z",
    "updatedAt": "2025-06-18T00:21:45.432Z",
    "__v": 0
  }
];

// Trend olan postları filtrele
export const trendingPosts = mockPosts.filter(post => post.attributes.trends);

// Kategorilere göre postları grupla
export const postsByCategory = {
  "Videolar": mockPosts.filter(post => post.attributes.category.includes("Videolar")),
  "Müzik": mockPosts.filter(post => post.attributes.category.includes("Müzik")),
  "Türk Rap": mockPosts.filter(post => post.attributes.tags.includes("Türk Rap"))
};
