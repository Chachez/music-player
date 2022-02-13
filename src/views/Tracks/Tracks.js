import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { searchTerm } from "../../redux/actions/playerActions";
import PageHeader from "../../components/PageHeader";
import Controls from "../../components/Controls/Controls";
import useTable from "../../components/Controls/useTable";
import { timeConverter } from "../../utils/timeConvertor";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "artist", label: "Artist" },
  { id: "name", label: "Song Title" },
  { id: "duration", label: "Duration" },
  { id: "album", label: "Album" },
];

const Track = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    searchTerm: "",
  });
  const state = useSelector((state) => state.playerReducer, shallowEqual);
  const [records, setRecords] = useState(state.searchedData.data);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const searchData = () => {
    let data = values.searchTerm;
    dispatch(searchTerm(data));
  };

  return (
    <div>
      <PageHeader
        title="Tracks"
        subTitle="List of your searched tracks"
        icon={<QueueMusicIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Inputs
            label="Search"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={searchData}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) =>
              setValues({
                ...values,
                searchTerm: e.target.value,
              })
            }
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.artist.name}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{timeConverter(item.duration)}</TableCell>
                <TableCell>{item.album.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </div>
  );
};

export default Track;
