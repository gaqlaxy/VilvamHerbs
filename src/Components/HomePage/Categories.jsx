// components/CategoriesGrid.jsx
export default function CategoriesGrid() {
    const categories = [
      {
        id: 1,
        title: "Herbal Skincare",
        image: "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2",
        isMain: true
      },
      {
        id: 2,
        title: "Hair Care Essentials",
        image: "https://media.istockphoto.com/id/1345845425/photo/young-woman-hair-care-stock-photo.jpg?s=1024x1024&w=is&k=20&c=OGBBKBD-NAgzJrUTUYJkiHjootEkHWKnRXQVyyfR6Es=",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1"
      },
      {
        id: 3,
        title: "Ayurvedic Remedies",
        image: "https://images.unsplash.com/photo-1630623093190-166d69e55f41?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2"
      },
      {
        id: 4,
        title: "Organic Supplements",
        image: "https://plus.unsplash.com/premium_photo-1723299602300-ef7f6363299e?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1"
      },
      {
        id: 5,
        title: "Natural Fragrances",
        image: "https://images.unsplash.com/photo-1624876991954-50fb623eb820?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1"
    }
    ];
  
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#d7fffe]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Explore Our Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-[800px]">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`group relative ${category.colSpan} ${category.rowSpan} 
                  rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-gray-900/20" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`font-bold ${category.isMain ? 'text-3xl' : 'text-xl'} mb-2`}>
                    {category.title}
                  </h3>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }