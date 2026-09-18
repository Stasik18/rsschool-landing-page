import { images } from './images'

export const categories = [
  {
    id: 'coffee',
    label: 'Coffee',
    icon: `
    <svg  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cup" cx="35%" cy="25%" r="80%">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.55" stop-color="#f4f2ec"/>
      <stop offset="1" stop-color="#d8d5cd"/>
    </radialGradient>

    <radialGradient id="coffee" cx="50%" cy="35%" r="70%">
      <stop offset="0" stop-color="#69452c"/>
      <stop offset="0.65" stop-color="#382315"/>
      <stop offset="1" stop-color="#1f130d"/>
    </radialGradient>

    <linearGradient id="saucer" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#d4d1c9"/>
    </linearGradient>

    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5"/>
    </filter>

    <filter id="steamBlur">
      <feGaussianBlur stdDeviation="1.5"/>
    </filter>
  </defs>

  <!-- shadow -->
  <ellipse
    cx="101" cy="163"
    rx="67"
    ry="11"
    fill="#777"
    opacity=".25"
    filter="url(#shadow)"
  />

  <!-- saucer -->
  <ellipse
    cx="98"
    cy="151"
    rx="67"
    ry="22"
    fill="url(#saucer)"
    stroke="#c9c7c0"
    stroke-width="1"
  />

  <ellipse
    cx="98"
    cy="147"
    rx="55"
    ry="15"
    fill="#eeece6"
  />

  <!-- cup handle -->
  <path
    d="M143 91
       C173 80 181 96 177 113
       C174 130 159 139 143 133
       L143 124
       C157 128 167 119 169 108
       C171 98 163 94 146 101Z"
    fill="url(#cup)"
    stroke="#c9c7c0"
    stroke-width="1.5"
  />

  <!-- cup body -->
  <path
    d="M45 78
       C47 69 61 65 98 65
       C135 65 149 69 151 78
       L146 119
       C144 136 128 145 98 145
       C68 145 52 136 50 119Z"
    fill="url(#cup)"
    stroke="#d0cec7"
    stroke-width="1.2"
  />

  <!-- coffee surface -->
  <ellipse
    cx="98"
    cy="78"
    rx="53"
    ry="16"
    fill="#f5f3ee"
  />

  <ellipse
    cx="98"
    cy="79"
    rx="48"
    ry="12"
    fill="url(#coffee)"
  />

  <!-- coffee highlight -->
  <path
    d="M61 76 C76 70 105 69 132 76"
    fill="none"
    stroke="#9b7250"
    stroke-width="2"
    opacity=".35"
  />

  <!-- rim -->
  <ellipse
    cx="98"
    cy="78"
    rx="53"
    ry="16"
    fill="none"
    stroke="#e3e1da"
    stroke-width="3"
  />

  <!-- steam -->
  <g
    fill="none"
    stroke="#b8b5ae"
    stroke-width="2"
    stroke-linecap="round"
    opacity=".4"
    filter="url(#steamBlur)"
  >
    <path d="M82 57 C75 49 88 43 81 35 C76 29 84 24 82 17"/>
    <path d="M101 57 C94 49 107 42 100 34 C95 28 103 22 101 15"/>
  </g>
</svg>
    `,
  },
  {
    id: 'tea',
    label: 'Tea',
    icon: `
     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ceramic" cx="32%" cy="25%" r="78%">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset=".5" stop-color="#f3f3ef"/>
      <stop offset="1" stop-color="#d0d0ca"/>
    </radialGradient>

    <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#d5d5cf"/>
    </linearGradient>

    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5"/>
    </filter>
  </defs>

  <!-- shadow -->
  <ellipse
    cx="100"
    cy="166"
    rx="63"
    ry="9"
    fill="#777"
    opacity=".25"
    filter="url(#shadow)"
  />

  <!-- handle -->
  <path
    d="M140 65
       C170 45 185 66 181 94
       C178 119 164 133 142 130
       L139 118
       C155 121 166 108 168 91
       C171 72 163 63 149 72Z"
    fill="url(#ceramic)"
    stroke="#c9c9c3"
    stroke-width="2"
  />

  <!-- spout -->
  <path
    d="M51 86
       C40 82 31 71 20 54
       L13 43
       L20 38
       L29 51
       C39 64 47 68 58 69
       L64 76Z"
    fill="url(#ceramic)"
    stroke="#c8c8c2"
    stroke-width="1.5"
  />

  <!-- spout opening -->
  <path
    d="M13 43 L20 38 L27 49 L19 54Z"
    fill="#d8d8d2"
    stroke="#c3c3bd"
    stroke-width="1"
  />

  <!-- body -->
  <path
    d="M48 72
       C51 56 68 47 98 47
       C130 47 148 59 151 82
       L148 120
       C145 143 126 158 98 160
       C69 158 51 143 48 120Z"
    fill="url(#ceramic)"
    stroke="#c9c9c3"
    stroke-width="1.5"
  />

  <!-- upper neck -->
  <ellipse
    cx="99"
    cy="61"
    rx="43"
    ry="13"
    fill="#eeeeea"
    stroke="#cecec8"
    stroke-width="1"
  />

  <!-- lid -->
  <path
    d="M59 59
       C64 45 77 39 99 39
       C121 39 135 45 140 59
       C125 65 74 65 59 59Z"
    fill="url(#lid)"
    stroke="#c9c9c3"
    stroke-width="1.2"
  />

  <!-- lid knob -->
  <ellipse
    cx="99"
    cy="31"
    rx="9"
    ry="7"
    fill="url(#ceramic)"
    stroke="#c7c7c1"
    stroke-width="1"
  />

  <path
    d="M93 27 C94 22 104 22 105 27"
    fill="none"
    stroke="#fff"
    stroke-width="2"
    opacity=".7"
  />

  <!-- body highlight -->
  <ellipse
    cx="77"
    cy="91"
    rx="17"
    ry="31"
    fill="#fff"
    opacity=".18"
  />
</svg>
    `,
  },
  {
    id: 'dessert',
    label: 'Dessert',
    icon: `
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="30" height="30" rx="15" fill="#C1B6AD"/>
        <path d="M7 23.12H23V7.12H7V23.12Z" fill="#403F3D"/>
      </svg>
    `,
  },
]

export const menuItems = [
  {
    id: 1,
    category: 'coffee',
    title: 'Irish coffee',
    description:
      'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    price: 7.0,
    image: images.coffee1,
    alt: 'Irish coffee',
  },
  {
    id: 2,
    category: 'coffee',
    title: 'Kahlua coffee',
    description:
      'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    price: 7.0,
    image: images.coffee2,
    alt: 'Kahlua coffee',
  },
  {
    id: 3,
    category: 'coffee',
    title: 'Honey raf',
    description: 'Espresso with frothed milk, cream and aromatic honey',
    price: 5.5,
    image: images.coffee3,
    alt: 'Honey raf',
  },
  {
    id: 4,
    category: 'coffee',
    title: 'Ice cappuccino',
    description: 'Cappuccino with soft thick foam in summer version with ice',
    price: 5.0,
    image: images.coffee4,
    alt: 'Ice cappuccino',
  },
  {
    id: 5,
    category: 'coffee',
    title: 'Espresso',
    description: 'Classic black coffee',
    price: 4.5,
    image: images.coffee5,
    alt: 'Espresso',
  },
  {
    id: 6,
    category: 'coffee',
    title: 'Latte',
    description:
      'Espresso coffee with the addition of steamed milk and dense milk foam',
    price: 5.5,
    image: images.coffee6,
    alt: 'Latte',
  },
  {
    id: 7,
    category: 'coffee',
    title: 'Latte macchiato',
    description: 'Espresso with frothed milk and chocolate',
    price: 5.5,
    image: images.coffee7,
    alt: 'Latte macchiato',
  },
  {
    id: 8,
    category: 'coffee',
    title: 'Coffee with cognac',
    description: 'Fragrant black coffee with cognac and whipped cream',
    price: 6.5,
    image: images.coffee8,
    alt: 'Coffee with cognac',
  },

  {
    id: 9,
    category: 'tea',
    title: 'Moroccan',
    description:
      'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    price: 4.5,
    image: images.tea1,
    alt: 'Moroccan',
  },
  {
    id: 10,
    category: 'tea',
    title: 'Ginger',
    description: 'Original black tea with fresh ginger, lemon and honey',
    price: 5.0,
    image: images.tea2,
    alt: 'Ginger',
  },
  {
    id: 11,
    category: 'tea',
    title: 'Cranberry',
    description: 'Invigorating black tea with cranberry and honey',
    price: 5.0,
    image: images.tea3,
    alt: 'Cranberry',
  },
  {
    id: 12,
    category: 'tea',
    title: 'Sea buckthorn',
    description:
      'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    price: 5.5,
    image: images.tea4,
    alt: 'Sea buckthorn',
  },

  {
    id: 13,
    category: 'dessert',
    title: 'Marble cheesecake',
    description:
      'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: 3.5,
    image: images.dessert1,
    alt: 'Marble cheesecake',
  },
  {
    id: 14,
    category: 'dessert',
    title: 'Red velvet',
    description: 'Layer cake with cream cheese frosting',
    price: 4.0,
    image: images.dessert2,
    alt: 'Red velvet',
  },
  {
    id: 15,
    category: 'dessert',
    title: 'Cheesecakes',
    description:
      'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: 4.5,
    image: images.dessert3,
    alt: 'Cheesecakes',
  },
  {
    id: 16,
    category: 'dessert',
    title: 'Creme brulee',
    description:
      'Delicate creamy dessert in a caramel basket with wild berries',
    price: 4.0,
    image: images.dessert4,
    alt: 'Creme brulee',
  },
  {
    id: 17,
    category: 'dessert',
    title: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    price: 4.5,
    image: images.dessert5,
    alt: 'Pancakes',
  },
  {
    id: 18,
    category: 'dessert',
    title: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    price: 4.5,
    image: images.dessert6,
    alt: 'Honey cake',
  },
  {
    id: 19,
    category: 'dessert',
    title: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    price: 5.5,
    image: images.dessert7,
    alt: 'Chocolate cake',
  },
  {
    id: 20,
    category: 'dessert',
    title: 'Black forest',
    description:
      'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: 6.5,
    image: images.dessert8,
    alt: 'Black forest',
  },
]
