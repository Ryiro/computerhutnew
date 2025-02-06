"use server"
import { prisma } from "../lib/prisma/page"

export async function createProduct(formData: FormData) {
  const name = formData.get('name') as string;
  const price = parseFloat(formData.get('price') as string);
  const manufacturer = formData.get('manufacturer') as string;
  const option = formData.get('option') as string;

  // Create product
  const product = await prisma.product.create({
    data: {
      name: name,
      slug: name.replace(/\s+/g, "-").toLowerCase(),
      price: price,
      manufacturer: manufacturer,
    },
  });

  // Create GPU, CPU, or other products based on the option
  if (option === "gpu") {
    await prisma.gpu.create({
      data: {
        productId: product.id,
        chipset: formData.get('chipset') as string,
        memory: parseInt(formData.get('memory') as string, 10),
        coreClock: formData.get('coreClock') ? parseInt(formData.get('coreClock') as string, 10) : null,
        boostClock: formData.get('boostClock') ? parseInt(formData.get('boostClock') as string, 10) : null,
        color: formData.get('color') as string,
        length: formData.get('length') ? parseInt(formData.get('length') as string, 10) : null,
        Rating: formData.get('rating') ? parseInt(formData.get('rating') as string, 10) : null,
        TDP: parseInt(formData.get('tdp') as string, 10),
        inStock: formData.get('inStock') === "true",
        count: parseInt(formData.get('count') as string, 10),
      },
    });
  } else if (option === "cpu") {
    await prisma.cpu.create({
      data: {
        productId: product.id,
        microarchitecture: formData.get('microarchitecture') as string,
        coreCount: parseInt(formData.get('coreCount') as string, 10),
        coreClock: formData.get('coreClock') ? parseInt(formData.get('coreClock') as string, 10) : null,
        boostClock: formData.get('boostClock') ? parseInt(formData.get('boostClock') as string, 10) : null,
        Rating: formData.get('rating') ? parseInt(formData.get('rating') as string, 10) : null,
        inStock: formData.get('inStock') === "true",
        count: parseInt(formData.get('count') as string, 10),
      },
    });
  } else if (option === "motherboard") {
    await prisma.motherboard.create({
      data: {
        productId: product.id,
        socket: formData.get('socket') as string,
        formFactor: formData.get('formFactor') as string,
        memory: formData.get('memory') ? parseInt(formData.get('memory') as string, 10) : null,
        memorySlots: parseInt(formData.get('memorySlots') as string, 10),
        coreClock: formData.get('coreClock') ? parseInt(formData.get('coreClock') as string, 10) : null,
        boostClock: formData.get('boostClock') ? parseInt(formData.get('boostClock') as string, 10) : null,
        color: formData.get('color') as string,
        Rating: formData.get('rating') ? parseInt(formData.get('rating') as string, 10) : null,
        inStock: formData.get('inStock') === "true",
        count: parseInt(formData.get('count') as string, 10),
      },
    });
  } else if (option === "memory") {
    await prisma.memory.create({
      data: {
        productId: product.id,
        speed: formData.get('speed') as string,
        modules: formData.get('modules') as string,
        firstworldlatency: parseInt(formData.get('firstworldlatency') as string, 10),
        CASLatency: parseInt(formData.get('CASLatency') as string, 10),
        Rating: formData.get('rating') ? parseInt(formData.get('rating') as string, 10) : null,
        inStock: formData.get('inStock') === "true",
        count: parseInt(formData.get('count') as string, 10),
      },
    });
  } else if (option === "cooler") {
    await prisma.cooler.create({
      data: {
        productId: product.id,
        TDP: parseInt(formData.get('TDP') as string, 10),
        RPM: parseInt(formData.get('RPM') as string, 10),
        noise: parseFloat(formData.get('noise') as string),
        color: formData.get('color') as string,
        size: parseInt(formData.get('size') as string, 10),
        Rating: formData.get('rating') ? parseInt(formData.get('rating') as string, 10) : null,
        inStock: formData.get('inStock') === "true",
        count: parseInt(formData.get('count') as string, 10),
      },
    });
  } else if (option === "storage") {
    await prisma.storage.create({
      data: {
        productId: product.id,
        capacity: formData.get('capacity') as string,
        type: formData.get('type') as string,
        cache: parseInt(formData.get('cache') as string, 10),
        formFactor: formData.get('formFactor') as string,
        interface: formData.get('interface') as string,
        Rating: formData.get('rating') ? parseInt(formData.get('rating') as string, 10) : null,
        inStock: formData.get('inStock') === "true",
        count: parseInt(formData.get('count') as string, 10),
      },
    });
  } else if (option === "powersupply") {
    await prisma.powersupply.create({
      data: {
        productId: product.id,
        Type: formData.get('Type') as string,
        efficiency: formData.get('efficiency') as string,
        wattage: parseInt(formData.get('wattage') as string, 10),
        Modular: formData.get('Modular') as string,
        color: formData.get('color') as string,
        Rating: formData.get('rating') ? parseInt(formData.get('rating') as string, 10) : null,
        inStock: formData.get('inStock') === "true",
        count: parseInt(formData.get('count') as string, 10),
      },
    });
  } else if (option === "case") {
    await prisma.case.create({
      data: {
        productId: product.id,
        Type: formData.get('Type') as string,
        color: formData.get('color') as string,
        powersupply: parseInt(formData.get('powersupply') as string, 10),
        sidePanel: formData.get('sidePanel') as string,
        externalVolume: parseFloat(formData.get('externalVolume') as string),
        internalBay: parseInt(formData.get('internalBay') as string, 10),
        Rating: formData.get('rating') ? parseInt(formData.get('rating') as string, 10) : null,
        inStock: formData.get('inStock') === "true",
        count: parseInt(formData.get('count') as string, 10),
      },
    });
  }
}
