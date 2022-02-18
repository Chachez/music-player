import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

//custome imports
import { timeConverter } from "utils/timeConvertor";
import { artistDetails } from "../redux/actions/playerActions";

const columns = [
  { id: "artist", label: "Artist" },
  { id: "name", label: "Song Title" },
  { id: "duration", label: "Duration" },
  { id: "album", label: "Album" },
];
export default function SearchResults() {
  const history = useHistory();

  const state = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  return (
    <Card>
      <CardHeader color="blue" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">
            Current Playlist Search Parameter:{" "}
            <strong>{state.playerReducer.searchParams}</strong>
          </h2>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            {state.playerReducer.loading ? (
              <center>
                <ClipLoader loading={true} size={80} />
              </center>
            ) : (
              state.playerReducer.searchedData.data?.slice(0, 5).map((data) => (
                <tbody>
                  <tr
                    key={data.id}
                    onClick={() => {
                      dispatch(artistDetails(data.id));

                      history.push(
                        `/artist/${state.playerReducer.artistDetails.id}`
                      );
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {data.artist.name}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {data.title}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {timeConverter(data.duration)}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {data.album.title}
                    </th>
                  </tr>
                </tbody>
              ))
            )}
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
