import { useEffect, useState } from "react";
import { menuService } from "../../api/services/menuService";

export default function useGetMenuItems() {
  const [data, setData] = useState(null); // Get data on mount
  const [isLoading, setIsLoading] = useState(true); // Handle loading state
  const [error, setError] = useState<string | null>(null); // Handle error state

  useEffect(() => {
    menuService
      .get()
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}
