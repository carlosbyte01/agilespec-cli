# DDD - Domain Driven Design: Trash Collection System
This is the DDD index file containing just the **Ubiquitous Language**. Use this as a quick reference for terminology and to resolve ambiguity.

## Ubiquitous Language:

### **Dumpster**: 
- **meaning**: A physical waste container placed in the city, equipped with built-in sensors to track how full it is.
- **boundedContext**: Monitoring Context

### **Route (Optimization)**: 
- **meaning**: A mathematically ordered sequence of dumpster locations optimized for time and distance.
- **boundedContext**: Collection Planning

### **Route (Dispatch)**: 
- **meaning**: A driver's active daily shift schedule, pairing them with a specific vehicle and a list of locations to clear.
- **boundedContext**: Dispatch & Fleet Context

### **Collection Vehicle**: 
- **meaning**: The physical truck dispatched to empty dumpsters and transport waste to processing locations.
- **boundedContext**: Dispatch & Fleet Context

### **Route Planner**: 
- **meaning**: The core calculation engine that computes the most efficient pickup paths.
- **boundedContext**: Collection Planning

### **Collection Point**: 
- **meaning**: The precise geographic location (GPS coordinates) where a physical dumpster is permanently anchored.
- **boundedContext**: Collection Planning

### **Telemetry**: 
- **meaning**: High-frequency raw data streams (such as fill levels and ping signals) sent wirelessly from dumpster sensors.
- **boundedContext**: Telemetry Processing Context

### **Edge Device**: 
- **meaning**: The physical electronic hardware and sensor package permanently installed inside each dumpster.
- **boundedContext**: Telemetry Processing Context

### **Edge Deployment**: 
- **meaning**: The process of pushing software updates, configuration scripts, or firmware over-the-air to physical dumpster sensors.
- **boundedContext**: Telemetry Processing Context

### **Service Container**: 
- **meaning**: An isolated, standardized package of software that runs a single feature of our application, ensuring it works exactly the same on any computer.
- **domain**: Infrastructure Architecture

### **Orchestration Unit**: 
- **meaning**: A configuration blueprint that instructs our platform how to launch, connect, and manage different software applications.
- **domain**: Infrastructure Architecture

### **Container Registry**: 
- **meaning**: A secure digital library where we save and organize ready-to-deploy packages of our software applications.
- **domain**: Infrastructure Architecture

### **Containerization**: 
- **meaning**: The technical practice of packaging our software into isolated, predictable boxes (containers) to ensure consistent performance.
- **domain**: Infrastructure Architecture

### **Orchestration**: 
- **meaning**: The automated management, coordination, scaling, and recovery of our running software applications.
- **domain**: Infrastructure Architecture

### **Service Architecture**: 
- **meaning**: An approach where our system is built from several small, independent applications communicating over a private network rather than one single large system.
- **domain**: Infrastructure Architecture

### **Deployment**: 
- **meaning**: The process of safely releasing and installing new software updates and features into our live environment.
- **domain**: Infrastructure Architecture
