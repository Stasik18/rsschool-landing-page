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
<svg width="800px" height="800px" viewBox="0 0 128 128" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#e5dec1;}.cls-2{fill:#f1edd8;}.cls-3{fill:#ea563a;}.cls-4{fill:#616834;}.cls-5{fill:#8d934e;}.cls-6{fill:#553f07;}</style></defs><title/><path class="cls-1" d="M22,56,69.92,25.41A53.3,53.3,0,0,1,102.71,56Z"/><rect class="cls-2" height="47.77" width="80.71" x="22" y="55.97"/><rect class="cls-3" height="15.62" width="80.71" x="22" y="75.77"/><path class="cls-4" d="M111.25,28.4,97.94,25h0a22,22,0,0,1-15.52,7.72l-1.13.06L77.38,44.22l11.27,4.34.78-.83a22,22,0,0,1,15.87-6.95h0Z"/><path class="cls-5" d="M111.93,28.08a.75.75,0,0,0-1-.36L92.07,36.53a11,11,0,0,0,2.19-6.11.72.72,0,0,0-.77-.72.74.74,0,0,0-.72.77,6.42,6.42,0,0,1-.46,2.43l-1,2.1a19.92,19.92,0,0,1-2.18,2.92L82.46,41h0l-5.39,2.52A.74.74,0,0,0,77.38,45a.71.71,0,0,0,.32-.07l5.24-2.45c.77,0,4.67.15,7.22,2.42a.74.74,0,1,0,1-1.11,11.57,11.57,0,0,0-5.59-2.54l9-4.18a12.72,12.72,0,0,1,3.34.1l2.15.51a15.07,15.07,0,0,1,3.52,1.55.78.78,0,0,0,.41.12.72.72,0,0,0,.62-.35.74.74,0,0,0-.22-1,17.62,17.62,0,0,0-6.72-2.35l14-6.52A.75.75,0,0,0,111.93,28.08Z"/><path class="cls-3" d="M73.76,26.93a5.72,5.72,0,0,1,9.68,0c2.31,3.64,4.63,8.19,4.94,12.1.53,6.77-6.76,7.06-9.08,7-.47,0-.92,0-1.39,0-2.32.08-9.61-.21-9.08-7C69.14,35.12,71.46,30.57,73.76,26.93Z"/><path class="cls-6" d="M73.56,41.44a.7.7,0,0,1-.37-.11l-1.5-.87a.74.74,0,0,1-.27-1,.76.76,0,0,1,1-.27l1.49.87a.75.75,0,0,1-.37,1.4Z"/><path class="cls-6" d="M75.92,39.28a.72.72,0,0,1-.47-.17.75.75,0,0,1-.1-1l1.46-1.75a.75.75,0,0,1,1.15,1L76.5,39A.77.77,0,0,1,75.92,39.28Z"/><path class="cls-6" d="M76.24,35.24a.72.72,0,0,1-.49-.19l-.94-.82a.74.74,0,0,1-.08-1,.74.74,0,0,1,1-.07l1,.82a.74.74,0,0,1,.07,1A.73.73,0,0,1,76.24,35.24Z"/><path class="cls-6" d="M78.61,32.29a.79.79,0,0,1-.44-.14.75.75,0,0,1-.17-1l.79-1.1a.74.74,0,1,1,1.21.86L79.21,32A.74.74,0,0,1,78.61,32.29Z"/><path class="cls-6" d="M83.41,42.14a.73.73,0,0,1-.55-.25l-1-1.14a.74.74,0,0,1,.06-1,.73.73,0,0,1,1,.06l1,1.14A.74.74,0,0,1,83.91,42,.73.73,0,0,1,83.41,42.14Z"/><path class="cls-6" d="M78.61,43.76a.88.88,0,0,1-.32-.07l-2-.91a.75.75,0,0,1-.36-1,.73.73,0,0,1,1-.36l2,.9a.75.75,0,0,1,.36,1A.73.73,0,0,1,78.61,43.76Z"/><path class="cls-6" d="M81.91,37.06a.75.75,0,0,1-.38-1.39l2-1.17a.74.74,0,0,1,1,.26.75.75,0,0,1-.26,1l-2,1.17A.73.73,0,0,1,81.91,37.06Z"/><path class="cls-6" d="M84.44,34.18a.73.73,0,0,1-.25,0l-2-.7a.74.74,0,0,1-.46-.95.75.75,0,0,1,1-.46l2,.7a.74.74,0,0,1,.46,1A.73.73,0,0,1,84.44,34.18Z"/><path class="cls-6" d="M76.65,29.14a.74.74,0,0,1-.28-1.43l1.95-.8a.75.75,0,1,1,.57,1.38l-2,.8A1,1,0,0,1,76.65,29.14Z"/><path class="cls-6" d="M85.78,40.56a.74.74,0,0,1-.69-.45l-.55-1.28a.75.75,0,1,1,1.37-.59l.55,1.28a.74.74,0,0,1-.39,1A.58.58,0,0,1,85.78,40.56Z"/></svg>
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
