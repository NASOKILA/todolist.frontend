export const todoListApiHost: string =
  process.env.NODE_ENV === "production"
    ? "https://todolistbackendtumba.azurewebsites.net/api"
    : "https://localhost:44371/api";

// add other microservice apis here
