const products = [
  { name: 'Avocados', image: '../src/assets/image8.jpg' },
  { name: 'Avocado Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZvY2FkbyUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Mangoes', image: '../src/assets/image2.jpg' },
  { name: 'Dried Mangoes', image: '' },
  { name: 'Tea', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574' },
  { name: 'Coffee', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e' },
  { name: 'Mint', image: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWludHxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Nuts', image: 'https://plus.unsplash.com/premium_photo-1725384940666-8c04394eda4d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnV0c3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Flower Export', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946' },
];

export default function Products() {
  return (
    <div id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}