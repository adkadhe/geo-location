import axiosInstance from "../../utils/axios";
import { ProviderStrategy } from "./provider-strategy";
import { Location } from "@prisma/client";

export class OpenStreetMapProvider implements ProviderStrategy {
  async fetchLocation(latitude: string, longitude: string): Promise<any> {
    const response = await axiosInstance.get(
      `/reverse?lat=${latitude}&lon=${longitude}&format=json`,
    );
    return response.data;
  }

  formatAddress(response: any): Partial<Location> {
    return {
      formattedAddress: response.display_name,
      country: response.address.country,
      city: response.address.city,
      state: response.address.state,
      zipcode: response.address.postcode,
    };
  }
}
