export type Package = { name: string; price: number; duration: string; guests: string; featured?: boolean; inclusions: string[] }
export const packages: Package[] = [
  { name: 'Summer Special', price: 999, duration: '1 hour', guests: '4–5 members', inclusions: ['Standard decoration', 'Private theatre + OTT', 'Photo hangings', 'Sash & crown', 'Entry video coverage'] },
  { name: 'Our Signature', price: 2500, duration: '2 hours', guests: '4–5 members', inclusions: ['Standard balloon decor', 'Private theatre + OTT', 'Photo hangings', 'Sash & crown', 'Entry video coverage', 'Standard flavour cake'] },
  { name: 'Customer Favourite', price: 3500, duration: '2 hours', guests: '8–10 members', featured: true, inclusions: ['4K UHD TV + OTT', 'Cloud neon setup', 'Standard decoration', 'Photo hangings', 'Entry video coverage', 'Sash & crown', 'Premium cake', 'Fog entry'] },
]
export const addons = ['Fog entry — ₹500', 'Pyro entry — ₹500', 'Bouquet — ₹500', 'Luxury snack tray — ₹500']
export const cakeFlavours = [{ title: 'Classic flavours', price: 500, flavours: ['Vanilla','Choco Truffle','Black Forest','White Forest','Strawberry','Butterscotch'] }, { title: 'Premium flavours', price: 750, flavours: ['Red Velvet','Blueberry','Raspberry','Pineapple','Mango','Coffee'] }, { title: 'Rich & special', price: 1000, flavours: ['Ferrero Rocher','Nutella','KitKat','Oreo','Caramel','Hazelnut'] }]
