const LandingPage = () => {
    return (
      <div>
        <Dashboard />
        <ReserveTableSection />
        <OrderFoodSection />
      </div>
    );
  }
  
  const Dashboard = () => {
    return (
      <div>
        <h1>Dashboard</h1>
        {/* dashboard content goes here */}
      </div>
    );
  }
  
  const ReserveTableSection = () => {
    return (
      <div>
        <h1>Reserve a Table</h1>
        {/* form for reserving a table goes here */}
      </div>
    );
  }
  
  const OrderFoodSection = () => {
    return (
      <div>
        <h1>Order Food</h1>
        {/* form for ordering food goes here */}
      </div>
    );
  }