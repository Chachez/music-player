import Card from "@material-tailwind/react/Card";
import Image from "@material-tailwind/react/Image";
import H5 from "@material-tailwind/react/Heading5";
import Icon from "@material-tailwind/react/Icon";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, shallowEqual } from "react-redux";

export default function ProfileCard() {
  const state = useSelector((state) => state, shallowEqual);
  return (
    <Card>
      {state.playerReducer.loading ? (
        <center>
          <ClipLoader loading={true} size={80} />
        </center>
      ) : state.playerReducer.artistDetails.error ? (
        "No records"
      ) : (
        <>
          <div className="flex flex-wrap justify-center">
            <div className="w-48 px-4 -mt-24">
              <Image
                src={state.playerReducer.artistDetails.picture_big}
                rounded
                raised
              />
            </div>
            <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
              <div className="p-4 text-center">
                <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                  {state.playerReducer.artistDetails.nb_fan}
                </span>
                <span className="text-sm text-gray-700">
                  {" "}
                  {state.playerReducer.artistDetails.nb_fan < 2
                    ? "Fan"
                    : "Fans"}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <H5 color="gray">{state.playerReducer.artistDetails.name}</H5>

            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
              <Icon name="album" size="xl" />
              {state.playerReducer.artistDetails.nb_album} Albums
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
