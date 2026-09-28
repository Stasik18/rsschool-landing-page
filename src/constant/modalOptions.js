export const MODAL_OPTIONS = {
  coffee: {
    sizeLabel: 'Size',
    sizes: [
      { key: 'S', label: '200 ml', multiplier: 1 },
      { key: 'M', label: '300 ml', multiplier: 1.5 },
      { key: 'L', label: '400 ml', multiplier: 2 },
    ],
    additivesLabel: 'Additives',
    additives: [
      { key: 'sugar', label: 'Sugar', price: 0.5 },
      { key: 'cinnamon', label: 'Cinnamon', price: 0.7 },
      { key: 'syrup', label: 'Syrup', price: 1.0 },
    ],
  },
  tea: {
    sizeLabel: 'Size',
    sizes: [
      { key: 'S', label: '200 ml', multiplier: 1 },
      { key: 'M', label: '300 ml', multiplier: 1.5 },
      { key: 'L', label: '400 ml', multiplier: 2 },
    ],
    additivesLabel: 'Additives',
    additives: [
      { key: 'sugar', label: 'Sugar', price: 0.5 },
      { key: 'lemon', label: 'Lemon', price: 0.4 },
      { key: 'syrup', label: 'Syrup', price: 1.0 },
    ],
  },
  dessert: {
    sizeLabel: 'Weight',
    sizes: [
      { key: 'S', label: '50 g', multiplier: 1 },
      { key: 'M', label: '100 g', multiplier: 1.4 },
      { key: 'L', label: '200 g', multiplier: 1.8 },
    ],
    additivesLabel: 'Additives',
    additives: [
      { key: 'berries', label: 'Berries', price: 0.8 },
      { key: 'nuts', label: 'Nuts', price: 1.2 },
      { key: 'jam', label: 'Jam', price: 1.0 },
    ],
  },
}
