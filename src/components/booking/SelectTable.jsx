import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTable } from "../../redux/reducers/bookingSlice";

// Select the best fitting table based on number of guests
const findOptimalTable = (tables, guests) => {
  const sortedTables = tables
    .filter((table) => table.capacity >= guests)
    .sort((a, b) => a.capacity - b.capacity);

  // Return the smallest table that fits the guests, or null if none found
  return sortedTables[0] || null;
};

const SelectTable = () => {
  const dispatch = useDispatch();
  const { numberOfGuests, availableTables, selectedTable, isLoading, error } =
    useSelector((state) => state.booking);

  // Auto-select optimal table when available tables change
  useEffect(() => {
    if (availableTables.length > 0 && !selectedTable) {
      const bestTable = findOptimalTable(availableTables, numberOfGuests);
      dispatch(setSelectedTable(bestTable));
    }
  }, [availableTables, numberOfGuests, selectedTable, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-text-light"></div>
        <p className="text-primary-text-light ml-4 text-lg">
          Finding available tables...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="bg-error-500/20 border border-error-500 text-primary-text-light p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Table found */}
      {availableTables.length > 0 && selectedTable ? (
        <div className="bg-green-500/30 border border-green-400 text-primary-text-light p-4 rounded-lg font-semibold text-center">
          <h3 className="font-semibold text-lg mb-2">
            We found a table for you!
          </h3>
          <p className="text-primary-text-light/80">
            Please proceed with your booking to confirm your table
          </p>
        </div>
      ) : (
        // No tables found
        <div className="text-center py-8">
          <div className="bg-warning-300/30 border border-warning-400/30 text-primary-text-light p-4 rounded-lg font-semibold text-center">
            <h3 className="font-semibold text-lg mb-2">No Tables Available</h3>
            <p className="text-primary-text-light/80">
              There are no tables available. Please try a different date or time
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectTable;
