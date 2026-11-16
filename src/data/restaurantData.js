export const RESTAURANT_INFO = {
  name: "SALT",
  subtitle: "Restaurant • Terrace & Bar",
  googleMapsUrl: "https://maps.app.goo.gl/xgSYewt5Cb7jUTFT8",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=11%20Giorgi%20Saakadze%20Descent%2C%20Tbilisi&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagramUrl: "https://www.instagram.com/salt_restaurant_",
  facebookUrl: "https://www.facebook.com/saltrestauranttbilisi",
  phone: "+995 595 33 55 33",
  phoneRaw: "+995595335533",
  email: "Info@SaltRestaurant.ge",
  rating: "4.2",
  reviewCount: "280+",
  avgSpend: "₾50–₾60",
  hours: "12:00 – 01:00",
  lunchHours: "12:00 – 16:00",
  terraceHours: "12:00 – 01:00"
};

export const MENU_ITEMS = [
  {
    id: "adjarian-khachapuri",
    category: "georgian",
    price: 26,
    image: "assets/georgian-feast.jpg",
    featured: true,
    dietary: ["vegetarian", "signature"],
    tagKa: "შეფის რჩეული",
    tagEn: "Chef's Pick",
    nameKa: "აჭარული ხაჭაპური კარაქითა და კვერცხით",
    nameEn: "Artisanal Adjarian Khachapuri",
    descKa: "შეშის ღუმელის სტილში გამომცხვარი ნავის ფორმის ხრაშუნა ცომი, იმერული და სულგუნის ყველის ბლენდით, მთის კარაქითა და სოფლის კვერცხის გულით.",
    descEn: "Crisp boat-shaped dough filled with bubbling Imeretian and Sulguni cheeses, topped with farm egg yolk and whipped mountain butter.",
    pairingKa: "საუკეთესოა ქვევრის ქარვისფერ ღვინოსთან (რქაწითელი)",
    pairingEn: "Pairs with Qvevri Amber Rkatsiteli",
    weight: "420 გ / g"
  },
  {
    id: "shkmeruli-clay",
    category: "georgian",
    price: 32,
    image: "assets/georgian-feast.jpg",
    featured: true,
    dietary: ["signature", "shareable"],
    tagKa: "კლასიკა",
    tagEn: "Heritage Classic",
    nameKa: "შქმერული კეცზე ნაღებისა და ნივრის სოუსში",
    nameEn: "Pan-Roasted Shkmeruli on Clay Ketsi",
    descKa: "ოქროსფრად შემწვარი წიწილა კეცზე, მოთუშული ახალი ნივრის, ნაღებისა და მთის ქონდრის ხავერდოვან სოუსში.",
    descEn: "Golden pan-seared spring chicken served sizzling in a velvety roasted garlic, double cream, and mountain savory reduction.",
    pairingKa: "საუკეთესოა წინანდალთან ან ხванჭკარასთან",
    pairingEn: "Pairs with Tsinandali Dry White",
    weight: "480 გ / g"
  },
  {
    id: "pkhali-board",
    category: "georgian",
    price: 24,
    image: "assets/salad-appetizer.jpg",
    featured: false,
    dietary: ["vegetarian", "shareable"],
    tagKa: "გასაზიარებელი",
    tagEn: "To Share",
    nameKa: "ფხალის ასორტი და ცხელი მჭადები",
    nameEn: "Georgian Pkhali Trio & Warm Mchadi",
    descKa: "ისპანახის, ჭარხლისა და ბადრიჯნის ხელნაკეთი ფხალეული კახური ნიგვზის საკმაზით, ბროწეულის მარცვლებითა და ახლად გამომცხვარი მჭადით.",
    descEn: "Spinach, roasted beetroot, and seared eggplant rolls crafted with toasted Kakhetian walnuts, pomegranate jewels, and warm cornbread.",
    pairingKa: "საუკეთესოა კისისთან ან საფერავთან",
    pairingEn: "Pairs with Kisi or Saperavi",
    weight: "360 გ / g"
  },
  {
    id: "eggplant-walnut-tomato",
    category: "georgian",
    price: 22,
    image: "assets/georgian-feast.jpg",
    featured: false,
    dietary: ["vegetarian"],
    tagKa: "საფირმო",
    tagEn: "House Recipe",
    nameKa: "ბადრიჯანი ნიგვზით გამომცხვარი პომიდვრის სოუსში",
    nameEn: "Seared Eggplant with Walnut Paste in Smoked Tomato Jus",
    descKa: "ნაკვერჩხლის არომატით შემწვარი ბადრიჯანი სანელებლებიანი ნიგვზის გულსართით, მორთული ცხარე პომიდვრის სოუსითა და რეჰანის ზეთით.",
    descEn: "Char-seared eggplant medallions filled with spiced walnut paste, resting on slow-simmered tomato sauce and basil oil.",
    pairingKa: "საუკეთესოა მუკუზანთან",
    pairingEn: "Pairs with Mukuzani",
    weight: "310 გ / g"
  },
  {
    id: "imeretian-lobiani-duo",
    category: "georgian",
    price: 25,
    image: "assets/georgian-feast.jpg",
    featured: false,
    dietary: ["vegetarian", "shareable"],
    tagKa: "ტრადიციული",
    tagEn: "Bakery",
    nameKa: "იმერული ხაჭაპური და რაჭული ლობიანი",
    nameEn: "Imeretian Khachapuri & Spiced Bean Lobiani",
    descKa: "ახლად გამომცხვარი თხელცომიანი იმერული ხაჭაპური ან რაჭული სანელებლებით შეზავებული ლობიანი მწნილის ასორტთან ერთად.",
    descEn: "Thin-crust Imeretian cheese bread or traditional spiced kidney bean lobiani served with house-pickled Jonjoli and peppers.",
    pairingKa: "საუკეთესოა ტვიშთან",
    pairingEn: "Pairs with Tvishi Semi-Sweet",
    weight: "450 გ / g"
  },
  {
    id: "arugula-nadughi-salad",
    category: "salads",
    price: 24,
    image: "assets/salad-appetizer.jpg",
    featured: true,
    dietary: ["vegetarian", "signature"],
    tagKa: "საფირმო სტარტერი",
    tagEn: "Signature Starter",
    nameKa: "რუკოლას სალათი ნადუღითა და მოხალული ნიგვზით",
    nameEn: "Wild Arugula Salad with Whipped Nadughi & Walnuts",
    descKa: "ცოცხალი რუკოლა, პიტნით შეზავებული ნაზი ქართული ნადუღის კვენელები, ფერადი ჩერი პომიდორი, მოხალული ნიგოზი და ბალზამიკოს გლაზური.",
    descEn: "Peppery wild arugula, mint-infused Georgian Nadughi ricotta quenelles, heirloom cherry tomatoes, candied walnuts, and aged balsamic.",
    pairingKa: "საუკეთესოა პროსეკოსთან ან მწვანესთან",
    pairingEn: "Pairs with Prosecco or Kakhetian Mtsvane",
    weight: "280 გ / g"
  },
  {
    id: "cured-salmon-citrus",
    category: "salads",
    price: 34,
    image: "assets/salad-appetizer.jpg",
    featured: false,
    dietary: ["signature"],
    tagKa: "ზღვის პროდუქტი",
    tagEn: "Seafood",
    nameKa: "მსუბუქად დამარილებული ორაგული ზღვის მარილითა და ციტრუსით",
    nameEn: "Sea-Salt Cured Salmon Carpaccio with Citrus",
    descKa: "Salt-ის საფირმო რეცეპტით დამარილებული ნორვეგიული ორაგულის თხელი ნაჭრები, გრეიპფრუტის სეგმენტებით, კაპერსითა და კამის ემულსიით.",
    descEn: "House sea-salt cured Norwegian salmon fillets dressed with ruby grapefruit, crispy capers, micro herbs, and dill emulsion.",
    pairingKa: "საუკეთესოა შარდონესთან ან Dry Gin Tonic-თან",
    pairingEn: "Pairs with Chardonnay or Botanical Gin",
    weight: "240 გ / g"
  },
  {
    id: "artisanal-cheese-board",
    category: "salads",
    price: 42,
    image: "assets/salad-appetizer.jpg",
    featured: false,
    dietary: ["vegetarian", "shareable"],
    tagKa: "ტერასის რჩეული",
    tagEn: "Terrace Platter",
    nameKa: "ქართული და ევროპული ყველის დაფა თაფლითა და ჩირებით",
    nameEn: "Artisanal Georgian & European Cheese Board",
    descKa: "დაძველებული გუდა, შებოლილი სულგუნი, საფერავში დავარგებული ყველი, პარმეზანი და ბრი — წაბლის თაფლით, ნიგვზითა და სეზონური ხილით.",
    descEn: "Saperavi-aged cheese, smoked Sulguni, aged Gudis Kveli, Parmigiano, and Brie served with chestnut honey, figs, and toasted nuts.",
    pairingKa: "საუკეთესოა საფერავის რეზერვთან",
    pairingEn: "Pairs with Saperavi Reserve",
    weight: "420 გ / g"
  },
  {
    id: "tomato-cucumber-gurian",
    category: "salads",
    price: 19,
    image: "assets/salad-appetizer.jpg",
    featured: false,
    dietary: ["vegetarian"],
    tagKa: "ფრეშ",
    tagEn: "Garden Fresh",
    nameKa: "კიტრი-პომიდვრის სალათი გურული აჯიკით ან გოგრის პესტოთი",
    nameEn: "Heirloom Tomato & Cucumber Salad with Gurian Adjika",
    descKa: "სურნელოვანი ვარდისფერი პომიდორი და ხრაშუნა კიტრი ნიგვზიანი გურული აჯიკით ან მოხალული გოგრის თესლის პესტოთი.",
    descEn: "Sun-ripened pink tomatoes and crisp cucumbers tossed in fragrant Gurian walnut adjika or pumpkin seed herb pesto.",
    pairingKa: "საუკეთესოა ცოლიკოურთან",
    pairingEn: "Pairs with Tsolikouri",
    weight: "300 გ / g"
  },
  {
    id: "beef-medallions-saperavi",
    category: "mains",
    price: 46,
    image: "assets/georgian-feast.jpg",
    featured: true,
    dietary: ["signature"],
    tagKa: "შეფის სპეციალი",
    tagEn: "Chef's Signature",
    nameKa: "საქონლის სუკის მედალიონები საფერავისა და ტრიუფელის სოუსით",
    nameEn: "Beef Tenderloin Medallions in Saperavi & Truffle Jus",
    descKa: "გრill-ზე შემწვარი ნაზი საქონლის სუკი, კარტოფილისა და ტრიუფელის კრემოვანი პიურეთი და საფერავის ღვინის რედუქციით.",
    descEn: "Char-grilled prime beef tenderloin served over silky truffle potato mousseline with a rich Saperavi red wine reduction.",
    pairingKa: "საუკეთესოა მუკუზანთან ან Smoked Rosemary Old Fashioned-თან",
    pairingEn: "Pairs with Mukuzani or Smoked Old Fashioned",
    weight: "340 გ / g"
  },
  {
    id: "spinach-veloute",
    category: "mains",
    price: 18,
    image: "assets/salad-appetizer.jpg",
    featured: false,
    dietary: ["vegetarian"],
    tagKa: "წვნიანი",
    tagEn: "Velouté",
    nameKa: "ისპანახის ხავერდოვანი კრემ-სუპი სულგუნის ჩips-ით",
    nameEn: "Velvety Spinach Cream Soup with Crisp Sulguni",
    descKa: "ახალი ისპანახის, ნაღებისა და მუსკატის კაკლის ნაზი კრემ-სუპი, გამომცხვარი სულგუნის ხრაშუნა ფირფიტითა და გოგრის გულით.",
    descEn: "Silky blend of baby spinach, light cream, and nutmeg crowned with a lacy baked Sulguni crisp and toasted pumpkin seeds.",
    pairingKa: "საუკეთესოა დღის ლანჩზე",
    pairingEn: "Ideal for midday lunch",
    weight: "300 მლ / ml"
  },
  {
    id: "business-lunch-set",
    category: "lunch",
    price: 28,
    image: "assets/salad-appetizer.jpg",
    featured: false,
    dietary: ["lunch"],
    tagKa: "12:00 – 16:00",
    tagEn: "Weekday Lunch",
    nameKa: "ბიზნეს ლანჩი: ორაგულის კრუასანი ან კოტლეტი პიურეთი + წვნიანი",
    nameEn: "Executive Business Lunch: Salmon Croissant or Artisanal Cutlet Set",
    descKa: "სამუშაო დღეების სპეციალური შეთავაზება მე-7 სართულის ტერასაზე: დღის კრემ-სუპი, ძირითადი კერძი (ორაგულის/ქათმის კრუასანი ან კოტლეტი პიურეთი) და სასმელი.",
    descEn: "Weekday midday set on the 7th floor: soup of the day, choice of salmon croissant sandwich or farm-style cutlet with mash, plus coffee or lemonade.",
    pairingKa: "მოქმედებს ორშაბათიდან პარასკევის ჩათვლით 12:00–16:00",
    pairingEn: "Available Mon–Fri, 12:00–16:00",
    weight: "სრული სეტი / Full Set"
  },
  {
    id: "salt-golden-hour-coupe",
    category: "drinks",
    price: 24,
    image: "assets/signature-cocktail.jpg",
    featured: true,
    dietary: ["signature"],
    tagKa: "Liquid Art",
    tagEn: "Liquid Art",
    nameKa: "Salt Golden Hour (საფირმო კოქტეილი ზღვის მარილის რკალით)",
    nameEn: "Salt Golden Hour Coupe",
    descKa: "დაძველებული ქართული ბრენდი, მანდარინისა და ბერგამოტის კორდიალი, პროსეკო და შებოლილი ზღვის მარილის გვირგვინი.",
    descEn: "Aged Georgian brandy, mandarin and bergamot cordial, dry prosecco float, and a smoked sea-salt & dehydrated citrus rim.",
    pairingKa: "ტერასის მზის ჩასვლის სავიზიტო ბარათი",
    pairingEn: "Signature sunset terrace aperitif",
    weight: "180 მლ / ml"
  },
  {
    id: "mtatsminda-smoked-negroni",
    category: "drinks",
    price: 26,
    image: "assets/signature-cocktail.jpg",
    featured: true,
    dietary: ["signature"],
    tagKa: "ბარმენის რჩეული",
    tagEn: "Mixologist's Pick",
    nameKa: "Rosemary Smoked Old Fashioned / Negroni",
    nameEn: "Torched Rosemary Bourbon & Saperavi Reduction",
    descKa: "ბურბონი, საფერავის ბითერი, დამწვარი როზმარინის კვამლი და ფორთოხლის ცედრა კრისტალურ ყინულის სფეროზე.",
    descEn: "Small-batch bourbon, house Saperavi wine bitters, and torched rosemary smoke served over a hand-carved crystal ice sphere.",
    pairingKa: "საუკეთესოა საღამოს DJ სეტების დროს",
    pairingEn: "Crafted for nocturnal terrace sessions",
    weight: "150 მლ / ml"
  },
  {
    id: "citrus-mineral-elixir",
    category: "drinks",
    price: 14,
    image: "assets/signature-cocktail.jpg",
    featured: false,
    dietary: ["vegetarian"],
    tagKa: "უალკოჰოლო",
    tagEn: "Zero Proof",
    nameKa: "ციტრუსის ფრეშ-მიქსი, საფირმო ლიმონათი და მინერალური წყლები",
    nameEn: "Artisanal Citrus Lemonade & Georgian Mineral Waters",
    descKa: "ახლად გამოწურული გრეიპფრუტისა და ფორთოხლის მიქსი ტარხუნითა და ჯანჯაფილით, ბორჯომისა და ნაბეღლავის თანხლებით.",
    descEn: "Freshly pressed ruby grapefruit and orange infusion with tarragon and ginger, alongside Borjomi and Nabeglavi.",
    pairingKa: "გამაგრილებელი ნებისმიერ დროს",
    pairingEn: "Refreshing all-day elixir",
    weight: "350 მლ / ml"
  }
];

export const TERRACE_EVENTS = [
  {
    id: "friday-skyline-dj",
    dayKa: "ყოველ პარასკევს • 21:00 – 01:00",
    dayEn: "Every Friday • 21:00 – 01:00",
    badgeKa: "TERRACE DJ SET",
    badgeEn: "TERRACE DJ SET",
    titleKa: "Nocturnal Skyline & Melodic House",
    titleEn: "Nocturnal Skyline & Melodic House",
    descKa: "პარასკევ საღამოს მე-7 სართულის ტერასა ივსება Melodic House & Nu-Disco რიტმებით, საავტორო კოქტეილებითა და ღამის თბილისის პანორამული ნათებით.",
    descEn: "Friday nights on the 7th floor come alive with Melodic House & Nu-Disco sets, Liquid Art mixology, and sweeping views of illuminated Tbilisi.",
    zone: "terrace",
    image: "assets/hero-terrace.jpg"
  },
  {
    id: "saturday-live-band",
    dayKa: "ყოველ შაბათს • 20:30 – 00:30",
    dayEn: "Every Saturday • 20:30 – 00:30",
    badgeKa: "LIVE MUSIC & VOCALS",
    badgeEn: "LIVE MUSIC & VOCALS",
    titleKa: "ცოცხალი ბენდი, Soul & Jazz Fusion",
    titleEn: "Live Acoustic Band, Soul & Jazz Fusion",
    descKa: "ცოცხალი შესრულება ვოკალისა და საქსოფონის თანხლებით, რომელიც 23:00 საათიდან DJ სეტში გადადის. რეკომენდებულია მაგიდის წინასწარი დაჯავშნა.",
    descEn: "Live vocal and saxophone performances under the stars, transitioning into a late-night lounge DJ set. Advance table reservation recommended.",
    zone: "terrace",
    image: "assets/signature-cocktail.jpg"
  },
  {
    id: "sunday-sunset-aperitivo",
    dayKa: "ყოველ კვირას • 18:00 – 23:00",
    dayEn: "Every Sunday • 18:00 – 23:00",
    badgeKa: "SUNSET APERITIVO",
    badgeEn: "SUNSET APERITIVO",
    titleKa: "მზის ჩასვლის სესიები და ღვინის დეგუსტაცია",
    titleEn: "Golden Hour Aperitivo & Wine Pairing",
    descKa: "მშვიდი კვირა საღამო მთაწმინდის დაისის ფონზე — ქართული ყველის დაფა, ქვევრის ღვინოები და აკუსტიკური ფონური მუსიკა.",
    descEn: "Unwind as the sun dips behind Mtatsminda — artisanal Georgian cheese platters, curated Qvevri wines, and warm acoustic lounge grooves.",
    zone: "terrace",
    image: "assets/georgian-feast.jpg"
  },
  {
    id: "weekday-business-terrace",
    dayKa: "ორშაბათი – პარასკევი • 12:00 – 16:00",
    dayEn: "Monday – Friday • 12:00 – 16:00",
    badgeKa: "EXECUTIVE LUNCH",
    badgeEn: "EXECUTIVE LUNCH",
    titleKa: "ბიზნეს-ლანჩი ღია ტერასაზე",
    titleEn: "Midday Business Lunch Above the City",
    descKa: "სწრაფი და დახვეწილი დღის მენიუ საქმიანი შეხვედრებისთვის სააკაძის დაღმართზე — პანორამული დღის შუქი, სწრაფი სერვისი და მშვიდი ატმოსფერო.",
    descEn: "Refined, prompt midday dining for business meetings at Saakadze Descent — natural daylight, panoramic views, and curated lunch sets.",
    zone: "indoor",
    image: "assets/salad-appetizer.jpg"
  }
];

export const GROUP_PACKAGES = [
  {
    id: "birthday-terrace",
    nameKa: "დაბადების დღისა და წვეულების პაკეტი",
    nameEn: "Terrace Celebration & Birthday Package",
    guestsKa: "6 – 16 სტუმარი",
    guestsEn: "6 – 16 Guests",
    priceKa: "₾55-დან / სტუმარზე",
    priceEn: "From ₾55 / guest",
    featuresKa: [
      "პრიორიტეტული მაგიდა ღია პანორამულ ტერასაზე",
      "ქართულ-ევროპული სადღესასწაულო სუფრა (ხაჭაპური, შქმერული, ყველის დაფა, სალათები)",
      "მისასალმებელი Signature კოქტეილი ან ქართული ღვინო",
      "სადღესასწაულო დესერტის სერვირება ცოცხალი მუსიკის ფონზე"
    ],
    featuresEn: [
      "Priority panoramic edge table on the 7th-floor terrace",
      "Curated Georgian-European sharing feast",
      "Welcome Signature Cocktail or bottle of Georgian wine",
      "Celebratory dessert presentation during live music"
    ]
  },
  {
    id: "corporate-reception",
    nameKa: "კორპორატიული საღამო & Private Rooftop",
    nameEn: "Corporate Dinner & Private Lounge",
    guestsKa: "15 – 50 სტუმარი",
    guestsEn: "15 – 50 Guests",
    priceKa: "ინდივიდუალური შეთავაზება",
    priceEn: "Custom Tailored Menu",
    featuresKa: [
      "დარბაზის ან ტერასის სექტორის სრული დაჯავშნა",
      "ფურშეტის ან სრული ვახშმის მენიუ შეფ-მზარეულისგან",
      "პერსონალური ბარმენი და Liquid Art კოქტეილ-ბარი",
      "აუდიო სისტემა, DJ და ფოტოგრაფირების ზონა თბილისის ხედით"
    ],
    featuresEn: [
      "Exclusive zone buyout of terrace or indoor marble lounge",
      "Bespoke seated dinner or standing canapé & cocktail reception",
      "Dedicated mixologist station & premium open bar options",
      "Sound system, DJ coordination & panoramic city backdrop"
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-terrace-night",
    category: "terrace",
    src: "assets/hero-terrace.jpg",
    span: "wide",
    titleKa: "მე-7 სართულის პანორამული ტერასა ღამით",
    titleEn: "7th-Floor Panoramic Terrace at Night",
    subtitleKa: "ხედი მთაწმინდის ანძაზე, სამებასა და ძველ თბილისზე",
    subtitleEn: "Overlooking Mtatsminda TV Tower, Sameba & Old Tbilisi"
  },
  {
    id: "gal-georgian-feast",
    category: "culinary",
    src: "assets/georgian-feast.jpg",
    span: "normal",
    titleKa: "აჭარული ხაჭაპური და შქმერული კეცზე",
    titleEn: "Adjarian Khachapuri & Clay-Pan Shkmeruli",
    subtitleKa: "ქართული კულინარიული ტრადიცია ბაზალტის სერვირებით",
    subtitleEn: "Georgian culinary heritage served on dark basalt"
  },
  {
    id: "gal-liquid-art",
    category: "bar",
    src: "assets/signature-cocktail.jpg",
    span: "normal",
    titleKa: "Liquid Art — საავტორო მიქსოლოგია",
    titleEn: "Liquid Art — Signature Mixology",
    subtitleKa: "ზღვის მარილის რკალითა და დამწვარი როზმარინის არომატით",
    subtitleEn: "Sea-salt rimmed coupes & torched rosemary aromatics"
  },
  {
    id: "gal-arugula-nadughi",
    category: "culinary",
    src: "assets/salad-appetizer.jpg",
    span: "normal",
    titleKa: "რუკოლას სალათი ნადუღითა და კახური ნიგვზით",
    titleEn: "Wild Arugula with Whipped Nadughi & Walnuts",
    subtitleKa: "მსუბუქი სტარტერი ხელნაკეთ კერამიკაზე",
    subtitleEn: "Fresh seasonal starter on artisanal dark stoneware"
  },
  {
    id: "gal-bar-atmosphere",
    category: "bar",
    src: "assets/signature-cocktail.jpg",
    span: "wide",
    titleKa: "მარმარილოს ბარი და თბილი ქარვისფერი განათება",
    titleEn: "Black Veined Marble Bar & Amber Glow",
    subtitleKa: "საღამოს კოქტეილებისა და მეგობრული შეხვედრების ეპიცენტრი",
    subtitleEn: "The social heart of Salt for evening cocktails and conversation"
  },
  {
    id: "gal-sunset-dining",
    category: "terrace",
    src: "assets/hero-terrace.jpg",
    span: "normal",
    titleKa: "რომანტიკული ვახშამი სანთლის შუქზე",
    titleEn: "Candlelit Rooftop Dining",
    subtitleKa: "სააკაძის დაღმართი 11 • Kani Aesthetics-ის შენობის მე-7 სართული",
    subtitleEn: "11 Saakadze Descent • 7th Floor Rooftop"
  }
];

export const SEATING_ZONES = [
  {
    id: "terrace",
    nameKa: "ღია პანორამული ტერასა",
    nameEn: "Open Panoramic Terrace",
    descKa: "მე-7 სართულის ღია სივრცე მთაწმინდისა და ღამის თბილისის ხედით",
    descEn: "7th-floor open-air rooftop with sweeping Tbilisi skyline views",
    capacityKa: "2–12 სტუმარი",
    capacityEn: "2–12 guests",
    badgeKa: "ყველაზე მოთხოვნადი",
    badgeEn: "Most Popular"
  },
  {
    id: "bar",
    nameKa: "მარმარილოს კოქტეილ-ბარი",
    nameEn: "Marble Cocktail Bar",
    descKa: "Liquid Art ბართან ახლოს — იდეალურია კოქტეილებისა და წყვილებისთვის",
    descEn: "Front-row seating at the black marble mixology bar",
    capacityKa: "1–4 სტუმარი",
    capacityEn: "1–4 guests",
    badgeKa: "Liquid Art",
    badgeEn: "Liquid Art"
  },
  {
    id: "indoor",
    nameKa: "დარბაზი & Lounge ზონა",
    nameEn: "Indoor Dining Lounge",
    descKa: "მყუდრო, ელეგანტური ინტერიერი პანორამული ვიტრაჟებითა და სცენასთან სიახლოვით",
    descEn: "Refined climate-controlled dining room near the live music stage",
    capacityKa: "2–10 სტუმარი",
    capacityEn: "2–10 guests",
    badgeKa: "ცოცხალ მუსიკასთან",
    badgeEn: "Near Live Stage"
  },
  {
    id: "vip-group",
    nameKa: "ჯგუფური / სადღესასწაულო მაგიდა",
    nameEn: "Celebration & Group Table",
    descKa: "გაერთიანებული VIP სივრცე დაბადების დღეებისა და კორპორატიული საღამოებისთვის",
    descEn: "Dedicated long table arrangement for birthdays and group celebrations",
    capacityKa: "8–30 სტუმარი",
    capacityEn: "8–30 guests",
    badgeKa: "ჯგუფებისთვის",
    badgeEn: "For Groups"
  }
];

export const GOOGLE_REVIEWS = [
  {
    id: "rev-1",
    rating: 5,
    authorKa: "ნინო კ.",
    authorEn: "Nino K.",
    roleKa: "Local Guide • Google Maps",
    roleEn: "Local Guide • Google Maps",
    dateKa: "2 კვირის წინ",
    dateEn: "2 weeks ago",
    textKa: "„საოცარი ხედი ღამის თბილისზე მე-7 სართულიდან! აჭარული ხაჭაპური და რუკოლას სალათი ნადუღით იყო უგემრიელესი, ხოლო კოქტეილები — ნამდვილი ხელოვნება. იდეალური ადგილია როგორც პაემნისთვის, ისე მეგობრებთან ერთად.“",
    textEn: "“Breathtaking view of night Tbilisi from the 7th floor! The Adjarian Khachapuri and Arugula salad with Nadughi were outstanding, and the cocktails are true liquid art. Perfect for both a date night and friends.”"
  },
  {
    id: "rev-2",
    rating: 5,
    authorKa: "დავით მ.",
    authorEn: "Davit M.",
    roleKa: "Google Maps მიმოხილვა",
    roleEn: "Google Maps Review",
    dateKa: "1 თვის წინ",
    dateEn: "1 month ago",
    textKa: "„დაბადების დღე გადავიხადეთ ტერასაზე. პერსონალი ძალიან ყურადღებიანია, ცოცხალმა მუსიკამ და DJ სეტმა საღამო დაუვიწყარი გახადა. ფასებიც სრულიად მისაღებია ასეთი დონის გარემოსთვის.“",
    textEn: "“Celebrated a birthday on the terrace. The staff was remarkably attentive, and the live music followed by the DJ set made the evening unforgettable. Great value for such an elevated setting.”"
  },
  {
    id: "rev-3",
    rating: 4,
    authorKa: "ელენე თ.",
    authorEn: "Elene T.",
    roleKa: "ბიზნეს ლანჩის სტუმარი",
    roleEn: "Business Lunch Guest",
    dateKa: "3 კვირის წინ",
    dateEn: "3 weeks ago",
    textKa: "„შუადღისას ხშირად მოვდივართ ბიზნეს-ლანჩზე სააკაძის დაღმართზე. ორაგულის კრუასანი და ისპანახის კრემ-სუპი ყოველთვის ახალი და გემრიელია, ტერასაზე კი სიმშვიდე და სასიამოვნო ნიავია.“",
    textEn: "“We often visit for weekday business lunch at Saakadze Descent. The salmon croissant and spinach velouté are always fresh, and the rooftop terrace is calm and breezy during the day.”"
  }
];

