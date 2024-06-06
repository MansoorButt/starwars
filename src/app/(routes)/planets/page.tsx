// app/planets/page.tsx
import { Planet } from '../../../types/index';


async function fetchPlanets(): Promise<Planet[]> {
  const res = await fetch('https://swapi.dev/api/planets/?format=json');
  if (!res.ok) {
    throw new Error('Failed to fetch planets');
  }
  const data = await res.json();
  return data.results;
}

export default async function PlanetsPage() {
  const planets = await fetchPlanets();
  
  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Planets</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {planets.map((planet) => (
          <li key={planet.name} className="bg-gray-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-2xl text-center font-semibold mb-4 text-yellow-500">{planet.name}</h2>
            <p className="mb-2"><strong className="text-gray-700">Rotation Period:</strong> {planet.rotation_period}</p>
            <p className="mb-2"><strong className="text-gray-700">Orbital Period:</strong> {planet.orbital_period}</p>
            <p className="mb-2"><strong className="text-gray-700">Diameter:</strong> {planet.diameter}</p>
            <p className="mb-2"><strong className="text-gray-700">Climate:</strong> {planet.climate}</p>
            <p className="mb-2"><strong className="text-gray-700">Gravity:</strong> {planet.gravity}</p>
            <p className="mb-2"><strong className="text-gray-700">Terrain:</strong> {planet.terrain}</p>
            <p className="mb-2"><strong className="text-gray-700">Surface Water:</strong> {planet.surface_water}</p>
            <p className="mb-2"><strong className="text-gray-700">Population:</strong> {planet.population}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
