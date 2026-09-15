 Updated getTodos to filter by done (true, false, or none for all) directly in MongoDB.
 On the frontend, fetchTodos passes the selected filter using Axios, App.jsx re-fetches whenever the filter changes via useEffect,
 and three buttons (All, Active, Done) let the user toggle views. Filtering is done server-side so only the requested tasks are fetched from the database.
