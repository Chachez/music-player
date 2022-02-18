import { useSelector, shallowEqual } from "react-redux";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";

const artists = [
  { id: "artist", label: "Artist" },
  { id: "pos", label: "Position" },
  { id: "track", label: "Track List" },
  { id: "icon", label: "Icon" },
];

const podcasts = [
  { id: "title", label: "Title" },
  { id: "fans", label: "Fans" },
  { id: "availability", label: "Availability" },
  { id: "icon", label: "Icon" },
];

const albums = [
  { id: "title", label: "Title" },
  { id: "r_artist", label: "Role Artist" },
  { id: "pos", label: "Position" },
  { id: "cover", label: "Cover" },
];

const playlists = [
  { id: "title", label: "Title" },
  { id: "nb_tracks", label: "Tracks" },
  { id: "creation_date", label: "Creation Date" },
  { id: "icon", label: "Icon" },
];

export default function TopChartsCardTable() {
  const state = useSelector((state) => state, shallowEqual);

  return (
    <Card>
      <CardHeader color="blue" contentPosition="left">
        {window.location.pathname === "/albums" ? (
          <h2 className="text-white text-2xl">Albums</h2>
        ) : window.location.pathname === "/artists" ? (
          <h2 className="text-white text-2xl">Artists</h2>
        ) : window.location.pathname === "/playlists" ? (
          <h2 className="text-white text-2xl">Playlists</h2>
        ) : window.location.pathname === "/podcasts" ? (
          <h2 className="text-white text-2xl">Podcasts</h2>
        ) : (
          ""
        )}
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {window.location.pathname === "/podcasts"
                  ? podcasts.map((col) => (
                      <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        {col.label}
                      </th>
                    ))
                  : window.location.pathname === "/playlists"
                  ? playlists.map((col) => (
                      <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        {col.label}
                      </th>
                    ))
                  : window.location.pathname === "/albums"
                  ? albums.map((col) => (
                      <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        {col.label}
                      </th>
                    ))
                  : window.location.pathname === "/artists"
                  ? artists.map((col) => (
                      <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                        {col.label}
                      </th>
                    ))
                  : undefined}
              </tr>
            </thead>
            {window.location.pathname === "/podcasts"
              ? state.playerReducer.topCharts.podcasts.data.map((data) => (
                  <tbody>
                    <tr key={data.id} style={{ cursor: "pointer" }}>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.title}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.fans}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.available ? "Available" : "Not Available"}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex">
                          <div className="w-10 h-10 rounded-full border-2 border-white">
                            <Image src={data.picture} rounded alt="..." />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                ))
              : window.location.pathname === "/artists"
              ? state.playerReducer.topCharts.artists.data.map((data) => (
                  <tbody>
                    <tr key={data.id} style={{ cursor: "pointer" }}>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.name}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.position}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.tracklist}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex">
                          <div className="w-10 h-10 rounded-full border-2 border-white">
                            <Image src={data.picture} rounded alt="..." />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                ))
              : window.location.pathname === "/albums"
              ? state.playerReducer.topCharts.albums.data.map((data) => (
                  <tbody>
                    <tr key={data.id} style={{ cursor: "pointer" }}>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.title}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.artist.name}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.position}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex">
                          <div className="w-10 h-10 rounded-full border-2 border-white">
                            <Image src={data.cover} rounded alt="..." />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                ))
              : window.location.pathname === "/playlists"
              ? state.playerReducer.topCharts.playlists.data.map((data) => (
                  <tbody>
                    <tr key={data.id} style={{ cursor: "pointer" }}>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.title}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.nb_tracks}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {data.creation_date}
                      </th>
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex">
                          <div className="w-10 h-10 rounded-full border-2 border-white">
                            <Image src={data.picture} rounded alt="..." />
                          </div>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                ))
              : ""}
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
