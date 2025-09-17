import { customerService } from "../../api/services/customerService";

export default function useCreateCustomer() {
  const createCustomer = async (data) => {
    const response = await customerService.create(data);
    return response;
  };

  return { createCustomer };
}
