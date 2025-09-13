const BookingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-6">
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

export default BookingPage;
