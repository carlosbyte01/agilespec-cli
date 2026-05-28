# DDD - Domain Driven Design: Trash Collection System
This is the comprehensive DDD reference document mapping our **Domain Taxonomy**, **Bounded Contexts**, and **Ubiquitous Language**. Use this as the single source of truth for understanding system relationships, aligning terminology, and resolving semantic ambiguity.

## Domain Taxonomy 

### Core Domain: Optimized Routing
- **Description**: The proprietary algorithmic engine that calculates the most efficient path for waste management drivers based on real-time traffic, vehicle capacity, and delivery/pickup windows.
- **Strategic Value**: This is our "secret sauce." It directly reduces fuel costs, minimizes vehicle wear and tear, and increases pickup speed, giving us a major competitive advantage.

### Supporting Domain: Fleet Management
- **Description**: Tracks physical vehicles, driver schedules, driver certifications, and vehicle maintenance logs.
- **Strategic Value**: Necessary for day-to-day operations, but does not provide a direct competitive advantage. We build this in-house because of custom hardware integrations on our trucks.

### Tech Domain (Generic Subdomain): IoT Architecture
- **Description**: Standardizes the secure provisioning, connectivity, and message-routing protocols (e.g., MQTT, AMQP) of smart trash bin sensors (fill-level, weight, temperature) and fleet GPS devices.
- **Strategic Value**: Establishes a reliable, high-throughput pipeline for sensory data, abstracting hardware-specific details away from core business logic.

### Tech Domain (Generic Subdomain): Infrastructure Architecture
- **Description**: Manages the underlying cloud platform, including container orchestration (e.g., Kubernetes), database persistence, data lakes, networking, and CI/CD pipelines.
- **Strategic Value**: Ensures high availability, system-wide scalability, and data security, allowing development teams to focus purely on building feature-level business logic.

#### Ubiquitous Language: Technical Infrastructure
*   **Containerization**: All cloud services are implemented as microservices, each running within its own Docker container.
*   **Orchestration**: Docker Compose is utilized for local development environments and multi-container orchestration.
*   **Service Architecture**: The system consists of isolated, containerized applications (e.g., `routing-engine`, `telemetry-ingestor`, `fleet-manager-api`) communicating over internal networks.
*   **Deployment**: Optimized for container-native deployment environments (e.g., Kubernetes, ECS).
*   **Service Container**: An isolated, executable environment running a single microservice application instance.
*   **Orchestration Unit**: A configuration set (e.g., Docker Compose service) that defines the lifecycle and environment of a containerized application.
*   **Container Registry**: The storage repository for versioned container images used in deployment.

---

## Bounded Contexts

### Collection Planning
- **Goal**: This context is responsible for taking a collection of coordinates and generating the mathematically optimal path of travel. It cares about traffic weight, road speed limits, and vehicle size constraints.
- **Domain**: Optimized Routing
- **Ubiquitous Language**:
  *   **Route**: A pre-planned sequence of Dumpster locations optimized for a collection vehicle.
  *   **Route Planner**: The engine that calculates the most efficient path between Dumpsters.
  *   **Collection Point**: The geographic location of a Dumpster.
  *   **Dumpster**: A physical container for waste collection (treated primarily as a stop or waypoint in this context).
  *   **Collection Vehicle**: The truck's physical constraints (e.g., maximum payload capacity) considered by the optimization engine.

### Dispatch & Fleet Context
- **Goal**: This context manages active drivers, assigns them vehicles, monitors their shifts, and hands them their daily work schedules. It coordinates with physical GPS trackers on vehicles.
- **Domain**: Fleet Management
- **Ubiquitous Language**:
  *   **Collection Vehicle**: The physical truck responsible for picking up waste from Dumpsters.
  *   **Route**: The daily shift assignment and manifest handed to a driver (binding a vehicle, driver, and list of stops).
  *   **Dumpster**: A physical container for waste collection (treated as a target service location on a driver's manifest).

### Monitoring Context
- **Goal**: Provides dispatchers and customers with a real-time operational dashboard visualizing trash bin capacities, highlighting overflowing containers, and managing physical container health/maintenance alerts.
- **Domain**: IoT Architecture
- **Ubiquitous Language**:
  *   **Dumpster**: A physical container for waste collection, equipped with sensor data.
  *   **Telemetry**: Real-time data from Dumpster sensors regarding fill-level.

### Telemetry Processing Context
- **Goal**: Handles high-throughput, low-latency raw data ingestion, parsing, filtering, and sanitization of incoming telemetry signals (like GPS coordinates and sonar fill-level percentages) from IoT sensors.
- **Domain**: IoT Architecture
- **Ubiquitous Language**:
  *   **Telemetry**: Raw, high-frequency data streams emitted from Dumpster sensors regarding fill-levels, battery levels, and ping signals.
  *   **Edge Device**: IoT hardware remotely located (e.g., sensors physically mounted inside the Dumpsters).
  *   **Edge Deployment**: Deploying new software versions, configuration scripts, or firmware over-the-air (OTA) on Edge Devices.
