import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StatusCard from "components/StatusCard";
import ChartLine from "components/ChartLine";
import ChartBar from "components/ChartBar";
import PageVisitsCard from "components/PageVisitsCard";
import TrafficCard from "components/TrafficCard";
import { Input, Button, Icon } from "@material-tailwind/react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getCharts,
  searchTerm,
  searchParameters,
} from "../redux/actions/playerActions";
import { getResults } from "../utils/getResults";

export default function Dashboard() {
  const history = useHistory();

  const [values, setValues] = useState({
    searchTerm: "",
  });
  const state = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const searchData = () => {
    let data = values.searchTerm;
    dispatch(searchTerm(data));
    dispatch(searchParameters(data));
  };

  useEffect(() => {
    // dispatch(getCharts());
  }, []);

  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <StatusCard
              color="orange"
              icon="groups"
              amount="Top Albums"
              percentageColor="green"
              percentageIcon="arrow_upward"
              percentage="1"
              date={state.playerReducer.topCharts.albums?.data[0].title}
            />
            <StatusCard
              color="purple"
              icon="paid"
              amount="Top Artists"
              percentageColor="green"
              percentageIcon="arrow_upward"
              percentage="1"
              date={state.playerReducer.topCharts.artists?.data[0].name}
              onClick={() => history.push("/artists")}
            />
            <StatusCard
              color="blue"
              icon="poll"
              amount="Top Playlists"
              percentageColor="green"
              percentageIcon="arrow_upward"
              percentage="1"
              date={state.playerReducer.topCharts.playlists?.data[0].title}
            />
            <StatusCard
              color="blue"
              icon="poll"
              amount="Top Podcasts"
              percentageColor="green"
              percentageIcon="arrow_upward"
              percentage="1"
              date={state.playerReducer.topCharts.podcasts?.data[0].title}
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-7">
            <div className="mb-12 px-4 bg-bb">
              <Input
                type="text"
                color="lightBlue"
                placeholder="Search..."
                outline={true}
                value={values.searchTerm}
                onChange={(e) =>
                  setValues({
                    ...values,
                    searchTerm: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center bg-bb mb-8 ">
              <Button
                color="lightBlue"
                buttonType="link"
                size="lg"
                ripple="dark"
                onClick={() => searchData()}
              >
                Search <Icon name="search" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-10">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <PageVisitsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
