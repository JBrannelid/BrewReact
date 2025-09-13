const Bookings = ({ showBookingModal, setShowBookingModal }) => {
  if (!showBookingModal) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      {/* Contact modal container */}
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 shadow-2xl p-8 max-w-md w-full mx-4">
        {/* Close Button */}
        <button
          onClick={() => setShowBookingModal(false)}
          className="absolute top-4 right-4 glass-btn-light p-2 md:p-3 rounded-full border-2 border-white/15 hover:!translate-x-0 hover:!translate-y-0"
          aria-label="Close contact modal"
        >
          {/* <RxCross2 className="w-6 h-6 text-primary-text-light" /> */}
        </button>
        <h1 className="text-4xl font-bold text-center mb-8">Book Your Table</h1>
        {/*
        
        Applikationen ska ha ett **stegbaserat flöde** där användaren kan:
        - Ange datum, tid och antal gäster.
        - Välja bland de bord som är tillgängliga vid valt tillfälle.
        - Lämna sina kontaktuppgifter och slutföra bokningen.

        Steg 1: SelectDateTime.jsx - Välj datum, tid och antal gäster
        Steg 2: SelectTable.jsx.jsx - Välja bland de bord som är tillgängliga vid valt tillfälle.
        Steg 3: CustomerDetails.jsx - Lämna sina kontaktuppgifter och slutföra bokningen
        Steg 4: BookingConfirmation.jsx  - Användaren få en **tydlig bekräftelse**
                    - API anrop, felhantering, bekräftelse, Boknignsnummer med fler?

        React router för navigering mellan olika stegen i bokningsprocessen? 
        */}
      </div>
    </div>
  );
};

export default Bookings;
