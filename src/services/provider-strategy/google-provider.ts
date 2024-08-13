import axiosInstance from "../../utils/axios";
import env from "../../utils/env-config";
import { ProviderStrategy } from "./provider-strategy";
import { Location } from "@prisma/client";

export class GoogleProvider implements ProviderStrategy {
  async fetchLocation(latitude: string, longitude: string): Promise<any> {
    const response = await axiosInstance.get(
      `/geocode/json?latlng=${latitude},${longitude}&key=${env.googleApiKey}`,
    );
    return response.data;
  }

  formatAddress(response: any): Partial<Location> {
    const result = response.results[0];
    return {
      formattedAddress: result.formatted_address,
      country: result.address_components.find((c: any) =>
        c.types.includes("country"),
      ).long_name,
      city: result.address_components.find((c: any) =>
        c.types.includes("locality"),
      ).long_name,
      state: result.address_components.find((c: any) =>
        c.types.includes("administrative_area_level_1"),
      ).long_name,
      zipcode: result.address_components.find((c: any) =>
        c.types.includes("postal_code"),
      ).long_name,
    };
  }
}
