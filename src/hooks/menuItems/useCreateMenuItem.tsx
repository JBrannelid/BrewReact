import { useState } from "react";
import { menuService } from "../../api/services/menuService";

export default function useCreateMenuItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Call create func from component to create a menu item
  const create = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await menuService.create(data);
      return response;
    } catch (error) {
      setError(error.message);
      throw error; // Rethrow the error at component
    } finally {
      setIsLoading(false);
    }
  };

  return { create, isLoading, error };
}
