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

const renderTable = (category: string, products: any[]) => {
  switch (category) {
    case "cpu":
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Manufacturer</th>
              <th className="py-2">Microarchitecture</th>
              <th className="py-2">Core Count</th>
              <th className="py-2">Core Clock</th>
              <th className="py-2">Boost Clock</th>
              <th className="py-2">Rating</th>
              <th className="py-2">In Stock</th>
              <th className="py-2">Count</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.product.name}</td>
                <td className="border px-4 py-2">
                  {product.product.manufacturer}
                </td>
                <td className="border px-4 py-2">
                  {product.microarchitecture}
                </td>
                <td className="border px-4 py-2">{product.coreCount}</td>
                <td className="border px-4 py-2">{product.coreClock}</td>
                <td className="border px-4 py-2">{product.boostClock}</td>
                <td className="border px-4 py-2">{product.Rating}</td>
                <td className="border px-4 py-2">
                  {product.inStock ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{product.count}</td>
                <td className="border px-4 py-2">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "gpu":
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Manufacturer</th>
              <th className="py-2">Chipset</th>
              <th className="py-2">Memory</th>
              <th className="py-2">Core Clock</th>
              <th className="py-2">Boost Clock</th>
              <th className="py-2">Color</th>
              <th className="py-2">Length</th>
              <th className="py-2">Rating</th>
              <th className="py-2">TDP</th>
              <th className="py-2">In Stock</th>
              <th className="py-2">Count</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.product.name}</td>
                <td className="border px-4 py-2">
                  {product.product.manufacturer}
                </td>
                <td className="border px-4 py-2">{product.chipset}</td>
                <td className="border px-4 py-2">{product.memory}</td>
                <td className="border px-4 py-2">{product.coreClock}</td>
                <td className="border px-4 py-2">{product.boostClock}</td>
                <td className="border px-4 py-2">{product.color}</td>
                <td className="border px-4 py-2">{product.length}</td>
                <td className="border px-4 py-2">{product.Rating}</td>
                <td className="border px-4 py-2">{product.TDP}</td>
                <td className="border px-4 py-2">
                  {product.inStock ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{product.count}</td>
                <td className="border px-4 py-2">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "motherboard":
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Manufacturer</th>
              <th className="py-2">Socket</th>
              <th className="py-2">Form Factor</th>
              <th className="py-2">Memory</th>
              <th className="py-2">Memory Slots</th>
              <th className="py-2">Core Clock</th>
              <th className="py-2">Boost Clock</th>
              <th className="py-2">Color</th>
              <th className="py-2">Rating</th>
              <th className="py-2">In Stock</th>
              <th className="py-2">Count</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.product.name}</td>
                <td className="border px-4 py-2">
                  {product.product.manufacturer}
                </td>
                <td className="border px-4 py-2">{product.socket}</td>
                <td className="border px-4 py-2">{product.formFactor}</td>
                <td className="border px-4 py-2">{product.memory}</td>
                <td className="border px-4 py-2">{product.memorySlots}</td>
                <td className="border px-4 py-2">{product.coreClock}</td>
                <td className="border px-4 py-2">{product.boostClock}</td>
                <td className="border px-4 py-2">{product.color}</td>
                <td className="border px-4 py-2">{product.Rating}</td>
                <td className="border px-4 py-2">
                  {product.inStock ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{product.count}</td>
                <td className="border px-4 py-2">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "memory":
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Manufacturer</th>
              <th className="py-2">Speed</th>
              <th className="py-2">Modules</th>
              <th className="py-2">First World Latency</th>
              <th className="py-2">CAS Latency</th>
              <th className="py-2">Rating</th>
              <th className="py-2">In Stock</th>
              <th className="py-2">Count</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.product.name}</td>
                <td className="border px-4 py-2">
                  {product.product.manufacturer}
                </td>
                <td className="border px-4 py-2">{product.speed}</td>
                <td className="border px-4 py-2">{product.modules}</td>
                <td className="border px-4 py-2">
                  {product.firstworldlatency}
                </td>
                <td className="border px-4 py-2">{product.CASLatency}</td>
                <td className="border px-4 py-2">{product.Rating}</td>
                <td className="border px-4 py-2">
                  {product.inStock ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{product.count}</td>
                <td className="border px-4 py-2">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "cooler":
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Manufacturer</th>
              <th className="py-2">TDP</th>
              <th className="py-2">RPM</th>
              <th className="py-2">Noise</th>
              <th className="py-2">Color</th>
              <th className="py-2">Size</th>
              <th className="py-2">Rating</th>
              <th className="py-2">In Stock</th>
              <th className="py-2">Count</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.product.name}</td>
                <td className="border px-4 py-2">
                  {product.product.manufacturer}
                </td>
                <td className="border px-4 py-2">{product.TDP}</td>
                <td className="border px-4 py-2">{product.RPM}</td>
                <td className="border px-4 py-2">{product.noise}</td>
                <td className="border px-4 py-2">{product.color}</td>
                <td className="border px-4 py-2">{product.size}</td>
                <td className="border px-4 py-2">{product.Rating}</td>
                <td className="border px-4 py-2">
                  {product.inStock ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{product.count}</td>
                <td className="border px-4 py-2">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "storage":
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Manufacturer</th>
              <th className="py-2">Capacity</th>
              <th className="py-2">Type</th>
              <th className="py-2">Cache</th>
              <th className="py-2">Form Factor</th>
              <th className="py-2">Interface</th>
              <th className="py-2">Rating</th>
              <th className="py-2">In Stock</th>
              <th className="py-2">Count</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.product.name}</td>
                <td className="border px-4 py-2">
                  {product.product.manufacturer}
                </td>
                <td className="border px-4 py-2">{product.capacity}</td>
                <td className="border px-4 py-2">{product.type}</td>
                <td className="border px-4 py-2">{product.cache}</td>
                <td className="border px-4 py-2">{product.formFactor}</td>
                <td className="border px-4 py-2">{product.interface}</td>
                <td className="border px-4 py-2">{product.Rating}</td>
                <td className="border px-4 py-2">
                  {product.inStock ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{product.count}</td>
                <td className="border px-4 py-2">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "powersupply":
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Manufacturer</th>
              <th className="py-2">Type</th>
              <th className="py-2">Efficiency</th>
              <th className="py-2">Wattage</th>
              <th className="py-2">Modular</th>
              <th className="py-2">Color</th>
              <th className="py-2">Rating</th>
              <th className="py-2">In Stock</th>
              <th className="py-2">Count</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.product.name}</td>
                <td className="border px-4 py-2">
                  {product.product.manufacturer}
                </td>
                <td className="border px-4 py-2">{product.Type}</td>
                <td className="border px-4 py-2">{product.efficiency}</td>
                <td className="border px-4 py-2">{product.wattage}</td>
                <td className="border px-4 py-2">{product.Modular}</td>
                <td className="border px-4 py-2">{product.color}</td>
                <td className="border px-4 py-2">{product.Rating}</td>
                <td className="border px-4 py-2">
                  {product.inStock ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{product.count}</td>
                <td className="border px-4 py-2">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "case":
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Manufacturer</th>
              <th className="py-2">Type</th>
              <th className="py-2">Color</th>
              <th className="py-2">Power Supply</th>
              <th className="py-2">Side Panel</th>
              <th className="py-2">External Volume</th>
              <th className="py-2">Internal Bay</th>
              <th className="py-2">Rating</th>
              <th className="py-2">In Stock</th>
              <th className="py-2">Count</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.product.name}</td>
                <td className="border px-4 py-2">
                  {product.product.manufacturer}
                </td>
                <td className="border px-4 py-2">{product.Type}</td>
                <td className="border px-4 py-2">{product.color}</td>
                <td className="border px-4 py-2">{product.powersupply}</td>
                <td className="border px-4 py-2">{product.sidePanel}</td>
                <td className="border px-4 py-2">{product.externalVolume}</td>
                <td className="border px-4 py-2">{product.internalBay}</td>
                <td className="border px-4 py-2">{product.Rating}</td>
                <td className="border px-4 py-2">
                  {product.inStock ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{product.count}</td>
                <td className="border px-4 py-2">{product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
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
      <h1 className="text-4xl">All Products of {category}</h1>
      {renderTable(category, products)}
    </div>
  );
}
