import React, { useState } from "react";
import FlexBetween from "../../FlexBetween";
import Header from "../../Header";
import {
  DownloadOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import OverviewChart from "../../OverviewChart";
import StatBox from "../../StatBox";
import axios from 'axios';
import { useEffect } from "react";
import env from "react-dotenv";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [members, setMembers] = useState([]);
  const [topDonor, setTopDonor] = useState(null);
  const [queries, setQueries] = useState(false);
  const [bottom, setBottom] = useState(null);
  const [average, setAverage] = useState(null);

  useEffect(() => {
    axios.get(env.API_URL + "/getMembers/members").then((res) => setMembers(res.data));

    axios.get(env.API_URL + "/fetch/getTop").then((res) => {
      setTopDonor(res.data[0])
      setQueries(true)
    })
      .catch((err) => {
        setQueries(false)
        console.log(err)
      })
    
    axios.get(env.API_URL + "/fetch/getBottom").then((res) => {
      setBottom(res.data[0])
      setQueries(true)
    }).catch((err) => {
      setQueries(false)
      console.log(err)
    })

    axios.get(env.API_URL + "/fetch/average").then((res) => {
      setAverage(res.data[0])
      setQueries(true)
    }).catch((err) => {
      setQueries(false)
      console.log(err)
    })
  }, []);

  const columns = [
    { field: "referenceID", headerName: "Reference ID", flex: 1 },
    { field: "username", headerName: "User Name", flex: 1 },
    { field: "membershipType", headerName: "Membership Type", flex: 1 },
    { field: "country", headerName: "Country", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 1 },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to the dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total Members"
          value={members && members.data ? Object.keys(members.data).length : 0}
        />
        <StatBox
          title="Total Donations"
          value={10}
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          {queries ? <div>
            Our Top Donor: {topDonor.userName} with Rs. {topDonor.totalAmount.$numberDecimal} <br />
            Our Least Donor: {bottom.userName} with Rs. {bottom.totalAmount.$numberDecimal} <br />
            Average Donation: Rs. {average.averageAmount.$numberDecimal.split(".")[0] + "." + average.averageAmount.$numberDecimal.split(".")[1][0] + average.averageAmount.$numberDecimal.split(".")[1][1]}
          </div>
            : <div>Loading...</div>}
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            rows={members.data && Array.isArray(members.data) ? members.data.map(row => ({ ...row, id: row._id })) : []}
            columns={columns}
            pageSize={5}
            getRowId={(row) => row._id} // Adjust this based on your data structure
          />

        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
