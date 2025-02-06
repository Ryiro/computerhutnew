import { prisma } from "@/app/lib/prisma/page";

const getProductsByCategory = async (category: string) => {
  switch (category) {
    case "cpu":
      return prisma.cpu.findMany({ include: { product: true } });
    case "gpu":
      return prisma.gpu.findMany({ include: { product: true } });
    case "motherboard":
      return prisma.motherboard.findMany({ include: { product: true } });
    case "memory":
      return prisma.memory.findMany({ include: { product: true } });
    case "cooler":
      return prisma.cooler.findMany({ include: { product: true } });
    case "storage":
      return prisma.storage.findMany({ include: { product: true } });
    case "powersupply":
      return prisma.powersupply.findMany({ include: { product: true } });
    case "case":
      return prisma.case.findMany({ include: { product: true } });
    default:
      return [];
  }
};

const isValidCategory = (category: string) => {
  const validCategories = [
    "cpu",
    "gpu",
    "motherboard",
    "memory",
    "cooler",
    "storage",
    "powersupply",
    "case",
  ];
  return validCategories.includes(category);
};

const renderCards = (category: string, products: any[]) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg p-4">
          <div className="h-40 bg-gray-200 mb-4">Image</div>
          <div className="font-bold text-lg mb-2">{product.product.name}</div>
          <div className="text-gray-700">${product.product.price}</div>
          <div className="text-gray-500">{product.product.manufacturer}</div>
          {category === "cpu" && (
            <>
              <div>Microarchitecture: {product.microarchitecture}</div>
              <div>Core Count: {product.coreCount}</div>
              <div>Core Clock: {product.coreClock}</div>
              <div>Boost Clock: {product.boostClock}</div>
              <div>Rating: {product.Rating}</div>
              <div>In Stock: {product.inStock ? "Yes" : "No"}</div>
              <div>Count: {product.count}</div>
            </>
          )}
          {category === "gpu" && (
            <>
              <div>Chipset: {product.chipset}</div>
              <div>Memory: {product.memory}</div>
              <div>Core Clock: {product.coreClock}</div>
              <div>Boost Clock: {product.boostClock}</div>
              <div>Color: {product.color}</div>
              <div>Length: {product.length}</div>
              <div>Rating: {product.Rating}</div>
              <div>TDP: {product.TDP}</div>
              <div>In Stock: {product.inStock ? "Yes" : "No"}</div>
              <div>Count: {product.count}</div>
            </>
          )}
          {category === "motherboard" && (
            <>
              <div>Socket: {product.socket}</div>
              <div>Form Factor: {product.formFactor}</div>
              <div>Memory: {product.memory}</div>
              <div>Memory Slots: {product.memorySlots}</div>
              <div>Core Clock: {product.coreClock}</div>
              <div>Boost Clock: {product.boostClock}</div>
              <div>Color: {product.color}</div>
              <div>Rating: {product.Rating}</div>
              <div>In Stock: {product.inStock ? "Yes" : "No"}</div>
              <div>Count: {product.count}</div>
            </>
          )}
          {category === "memory" && (
            <>
              <div>Speed: {product.speed}</div>
              <div>Modules: {product.modules}</div>
              <div>First World Latency: {product.firstworldlatency}</div>
              <div>CAS Latency: {product.CASLatency}</div>
              <div>Rating: {product.Rating}</div>
              <div>In Stock: {product.inStock ? "Yes" : "No"}</div>
              <div>Count: {product.count}</div>
            </>
          )}
          {category === "cooler" && (
            <>
              <div>TDP: {product.TDP}</div>
              <div>RPM: {product.RPM}</div>
              <div>Noise: {product.noise}</div>
              <div>Color: {product.color}</div>
              <div>Size: {product.size}</div>
              <div>Rating: {product.Rating}</div>
              <div>In Stock: {product.inStock ? "Yes" : "No"}</div>
              <div>Count: {product.count}</div>
            </>
          )}
          {category === "storage" && (
            <>
              <div>Capacity: {product.capacity}</div>
              <div>Type: {product.type}</div>
              <div>Cache: {product.cache}</div>
              <div>Form Factor: {product.formFactor}</div>
              <div>Interface: {product.interface}</div>
              <div>Rating: {product.Rating}</div>
              <div>In Stock: {product.inStock ? "Yes" : "No"}</div>
              <div>Count: {product.count}</div>
            </>
          )}
          {category === "powersupply" && (
            <>
              <div>Type: {product.Type}</div>
              <div>Efficiency: {product.efficiency}</div>
              <div>Wattage: {product.wattage}</div>
              <div>Modular: {product.Modular}</div>
              <div>Color: {product.color}</div>
              <div>Rating: {product.Rating}</div>
              <div>In Stock: {product.inStock ? "Yes" : "No"}</div>
              <div>Count: {product.count}</div>
            </>
          )}
          {category === "case" && (
            <>
              <div>Type: {product.Type}</div>
              <div>Color: {product.color}</div>
              <div>Power Supply: {product.powersupply}</div>
              <div>Side Panel: {product.sidePanel}</div>
              <div>External Volume: {product.externalVolume}</div>
              <div>Internal Bay: {product.internalBay}</div>
              <div>Rating: {product.Rating}</div>
              <div>In Stock: {product.inStock ? "Yes" : "No"}</div>
              <div>Count: {product.count}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default async function ProductsPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  if (!isValidCategory(category)) {
    return (
      <div>
        <h1 className="text-4xl">Invalid Category</h1>
      </div>
    );
  }

  const products = await getProductsByCategory(category);

  return (
    <div>
      <h1 className="text-4xl mb-8">All Products of {category}</h1>
      {renderCards(category, products)}
    </div>
  );
}
