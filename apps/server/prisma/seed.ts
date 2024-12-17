import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // COUNTRIES
  const countryGermany = await prisma.country.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Germany',
    },
  });
  const countryIndia = await prisma.country.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'India',
    },
  });
  const countryBrazil = await prisma.country.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'Brazil',
    },
  });
  const countryEgipt = await prisma.country.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: 'Egipt',
    },
  });
  console.log({ countryGermany, countryIndia, countryBrazil, countryEgipt });

  // SUPPLIERS
  const supplierKlom = await prisma.supplier.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Klom',
    },
  });
  const supplierEcoCarbon = await prisma.supplier.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'EcoCarbon',
    },
  });
  const supplierPurePlanet = await prisma.supplier.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'Pure Planet',
    },
  });
  const supplierCarbonSolutions = await prisma.supplier.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: 'Carbon Solutions',
    },
  });
  console.log({
    supplierKlom,
    supplierEcoCarbon,
    supplierPurePlanet,
    supplierCarbonSolutions,
  });

  // PROJECTS
  const project1 = await prisma.project.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'EverGreen CarbonScape',
      country_id: 1,
      image:
        'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg',
      price_per_ton: 650,
      offered_volume_in_tons: 15,
      distribution_weight: 0.05,
      supplier_id: 1,
      earliest_delivery: new Date('2023-09-01'),
      description: `The "EverGreen CarbonScape" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.
Through reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation.`,
    },
  });
  const project2 = await prisma.project.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'VerdeCarbon',
      country_id: 2,
      image:
        'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Mineralisation/ben-karpinski-ctWw2S9VqOI-unsplash-min.jpg',
      price_per_ton: 200,
      offered_volume_in_tons: 900,
      distribution_weight: 0.1,
      supplier_id: 1,
      earliest_delivery: new Date('2022-04-01'),
      description: `A transformative carbon credit project dedicated to revitalizing ecosystems and fighting climate change.
By strategically planting native trees and adopting sustainable forest practices, we're creating a potent solution that not only absorbs carbon dioxide but also nurtures biodiversity and empowers local communities.
Through verified carbon credits, VerdeCarbon is a beacon of environmental stewardship and positive impact.`,
    },
  });
  const project3 = await prisma.project.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'SustainaForest Carbon',
      country_id: 3,
      image:
        'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg',
      price_per_ton: 50.85,
      offered_volume_in_tons: 1500,
      distribution_weight: 0.15,
      supplier_id: 2,
      earliest_delivery: new Date('2024-01-01'),
      description: `The "SustainaForest Carbon" project tackles climate change by restoring and protecting vital forest ecosystems.
Through reforestation, sustainable management, and community engagement, we're creating resilient carbon sinks that benefit the environment, biodiversity, and local communities.
Verified carbon credits will be generated as we capture CO2, fostering a sustainable future for all.`,
    },
  });
  const project4 = await prisma.project.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: 'EcoRespire',
      country_id: 2,
      image:
        'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Climate+fund/climate-fund.png',
      price_per_ton: 25,
      offered_volume_in_tons: 1100,
      distribution_weight: 0.25,
      supplier_id: 3,
      earliest_delivery: new Date('2023-05-15'),
      description: `A project dedicated to revitalizing our planet by rejuvenating and conserving critical forest ecosystems.
By planting native trees, practicing sustainable forest management, and engaging with local communities, EcoRespire aims to capture carbon dioxide, promote biodiversity, and empower communities.
Verified carbon credits will be generated, offering a sustainable solution to combat climate change while fostering environmental and societal well-being.`,
    },
  });
  const project5 = await prisma.project.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: 'EverGreen Carbon',
      country_id: 4,
      image:
        'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Renewable+energy/andreas-gucklhorn-Ilpf2eUPpUE-unsplash-min.jpg',
      price_per_ton: 10.5,
      offered_volume_in_tons: 16000,
      distribution_weight: 0.45,
      supplier_id: 4,
      earliest_delivery: new Date('2023-12-01'),
      description: `The "EverGreen Carbon" project is a transformative carbon credit initiative aimed at restoring and maintaining vital forest ecosystems.
Through reforestation, afforestation, and sustainable forest management, we will sequester significant carbon dioxide, enhance biodiversity, empower local communities, and combat deforestation. Verified carbon credits will be generated, reflecting the project's positive impact on the environment. Join us in creating a sustainable and greener future with EverGreen Carbon.`,
    },
  });
  console.log({ project1, project2, project3, project4, project5 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
