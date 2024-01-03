import React, { useEffect, useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useGetCustomersQuery } from "../../state/api";
import Header from "../../Header";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { GridActionsCellItem } from "@mui/x-data-grid";

const Customers = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCustomersQuery();
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get("/auth/getCommittee").then((res) => {
            setMembers(res.data)
        });
    }, []);

    const handleDelete = async (id) => {
        console.log(id)
        await axios.get(`/auth/deleteCommittee/${id}`).then((res) => {
            console.log(res)
        })
    };

    const columns = [
        { field: "referenceID", headerName: "Reference ID", flex: 1 },
        { field: "username", headerName: "User Name", flex: 1 },
        { field: "membershipType", headerName: "Membership Type", flex: 1 },
        { field: "country", headerName: "Country", flex: 0.5 },
        { field: "email", headerName: "Email", flex: 1 },
        {
            field: 'delete',
            flex: 1,
            headerName: 'Remove from Committee',
            valueGetter: (params) => params.row.id,
            renderCell: (GridRenderCellParams) => (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleDelete(GridRenderCellParams.value)}
                >
                  Remove
                </Button>
            ),
          },
    ];

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Committee" subtitle="List of Committee Members" />
            <Box
                mt="40px"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
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
                        backgroundColor: theme.palette.primary.light,
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
                    rows={members && Array.isArray(members) ? members.map(row => ({ ...row.user, id: row._id })) : []}
                    getRowId={(row) => row._id}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Customers;
