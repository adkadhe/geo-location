// src/services/locationService.ts

import { PrismaClient } from "@prisma/client";
import { ProviderFactory } from "./provider-factory";

const prisma = new PrismaClient();

export const getLocation = async (latitude: string, longitude: string) => {
  const location = await prisma.location.findFirst({
    where: { latitude, longitude },
  });

  if (location) {
    return location;
  }

  const provider = ProviderFactory.createProvider();
  const response = await provider.fetchLocation(latitude, longitude);
  const formattedAddress = provider.formatAddress(response);

  const newLocation = await prisma.location.create({
    data: {
      latitude,
      longitude,
      formattedAddress: formattedAddress.formattedAddress!,
      country: formattedAddress.country!,
      city: formattedAddress.city!,
      state: formattedAddress.state!,
      zipcode: formattedAddress.zipcode!,
      rawAddress: response,
    },
  });

  return newLocation;
};
